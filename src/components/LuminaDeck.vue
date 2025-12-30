<template>
    <div class="h-full w-full relative flex flex-col text-white overflow-hidden"
        style="background-color: var(--lumina-colors-background, #030303); color: var(--lumina-colors-text, #ffffff);">

        <!-- DYNAMIC BACKGROUND -->
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div class="ambient-orb" :style="orbStyle"></div>
            <div class="absolute inset-0 opacity-[0.04]"
                style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>
        </div>

        <!-- INSPECTOR TOGGLE -->
        <div v-if="isDebug" class="absolute top-0 right-0 p-6 z-50 flex gap-4 pointer-events-auto">
            <button @click="ui.showJson = !ui.showJson"
                class="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white transition"
                title="JSON"><i class="fa-solid fa-code text-xs"></i></button>
        </div>

        <!-- JSON INSPECTOR -->
        <transition name="fade">
            <div v-if="ui.showJson" class="fixed inset-0 z-[100] flex justify-end" @click.self="ui.showJson = false">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                    @click="ui.showJson = false">
                </div>

                <!-- Panel -->
                <div
                    class="relative h-full w-full md:w-[450px] bg-[#0a0a0a]/95 border-l border-white/10 shadow-2xl overflow-auto text-left flex flex-col transform transition-transform duration-300">

                    <!-- Header -->
                    <div class="p-6 pb-2 border-b border-white/5 flex items-center justify-between shrink-0">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Slide Data</span>
                        <button @click="ui.showJson = false"
                            class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <pre
                            class="text-[10px] font-mono text-green-400 whitespace-pre-wrap">{{ JSON.stringify(slide, null, 2) }}</pre>
                    </div>
                </div>
            </div>
        </transition>

        <!-- VIEWPORT -->
        <main class="flex-1 w-full relative overflow-y-auto overflow-x-hidden z-10 scroll-smooth">
            <transition :css="false" @leave="onLeave" @enter="onEnter" mode="out-in">
                <component v-if="currentSlideComponent" :is="currentSlideComponent" :key="index" :data="slide"
                    @action="handleAction" class="min-h-full w-full">
                </component>
            </transition>
        </main>

        <!-- NAV BAR -->
        <div v-if="uiOptions?.visible"
            class="absolute bottom-0 left-0 w-full z-40 px-8 py-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex justify-between items-end pointer-events-none">
            <div v-if="uiOptions?.showSlideCount" class="pointer-events-auto text-left">
                <h2 class="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                    :style="{ color: 'var(--lumina-color-muted)' }">{{ deckTitle }}</h2>
                <div class="flex items-center gap-2 text-sm font-mono"
                    :style="{ color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', opacity: 0.8 }">
                    <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
                    <div v-if="uiOptions?.showProgressBar" class="h-px w-8"
                        :style="{ backgroundColor: 'var(--lumina-color-text-safe, var(--lumina-color-text))', opacity: 0.3 }">
                    </div>
                    <span>{{ total.toString().padStart(2, '0') }}</span>
                </div>
            </div>
            <!-- Spacer if count hidden -->
            <div v-else class="flex-1"></div>

            <div v-if="uiOptions?.showControls" class="pointer-events-auto flex gap-3">
                <!-- Notes Toggle (Sync Window) -->
                <button v-if="slide?.notes" @click="openSpeakerNotes"
                    class="w-12 h-12 rounded-full glass-panel hover:bg-white/10 flex items-center justify-center transition active:scale-95"
                    title="Open Speaker View">
                    <i class="fa-solid fa-person-chalkboard text-sm text-gray-400 hover:text-white"></i>
                </button>

                <button @click="prev"
                    :class="['w-12 h-12 rounded-full glass-panel hover:bg-white/10 flex items-center justify-center transition active:scale-95', (!hasPrev || !isNavEnabled) ? 'opacity-30 cursor-not-allowed' : '']"
                    :disabled="!hasPrev || !isNavEnabled"><i class="fa-solid fa-arrow-left"></i></button>
                <button @click="next"
                    :class="['w-12 h-12 rounded-full bg-white text-black hover:scale-105 flex items-center justify-center transition shadow-lg active:scale-95', (!hasNext || !isNavEnabled) ? 'opacity-30 cursor-not-allowed' : '']"
                    :disabled="!hasNext || !isNavEnabled"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useLumina } from '../composables/useLumina';
import { useKeyboard } from '../composables/useKeyboard';
import { bus } from '../core/events';
import gsap from 'gsap';

// Composable Integration
const { slide, index, total, next, prev, options } = useLumina();
// We need access, but useLumina helper wraps things. 
// Actually I need specific access to store for helpers, let's fix useLumina to return them or use store directly if injecting?
// `useLumina` wraps store nicely. Let's assume it returns what we need. 
// I updated useLumina to return options. I need to update it to return hasNext/hasPrev computed wrappers or just re-access store.
// Let's rely on the store methods wrapped in useLumina.

// Fix: useLumina didn't return hasNext/hasPrev properly in previous step, let me check. 
// I didn't export them in useLumina. I'll add computed props for buttons.
import { inject } from 'vue';
import { StoreKey } from '../core/store';
const store = inject(StoreKey)!;

const hasNext = computed(() => store.hasNext());
const hasPrev = computed(() => store.hasPrev());
const deckTitle = computed(() => store.state.deck?.meta?.title);
const uiOptions = computed(() => store.state.options.ui);
const isNavEnabled = computed(() => store.state.options.navigation);

useKeyboard();

// Random orb position state
const currentOrbPosition = ref({ top: '-20%', left: '-10%' });

// Function to generate random orb position
const generateRandomOrbPosition = () => {
    // Generate true random positions within a safe range to keep the 80vw orb visible
    // Range: -20% to 60% provides good coverage without losing the orb
    const randomRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    return {
        top: `${randomRange(-25, 65)}%`,
        left: `${randomRange(-25, 65)}%`
    };
};

// Watch for slide index changes to update orb position
watch(index, (newIndex, oldIndex) => {
    // First slide (index 0) keeps default position
    if (newIndex === 0) {
        currentOrbPosition.value = { top: '-20%', left: '-10%' };
    } else if (oldIndex !== undefined) {
        // Only randomize when actually navigating between slides (not on initial load)
        currentOrbPosition.value = generateRandomOrbPosition();
    }
}, { immediate: true });

const ui = ref({ showJson: false }); // Removed showNotes
const engine = inject('LuminaEngine') as any;

const openSpeakerNotes = () => {
    if (engine && typeof engine.openSpeakerNotes === 'function') {
        engine.openSpeakerNotes();
    } else {
        console.warn('Lumina Engine not found or openSpeakerNotes not available');
        alert('Speaker notes require the full Lumina Engine environment.');
    }
};

const isDebug = computed(() => options.debug);

const currentSlideComponent = computed(() => {
    if (!slide.value || !slide.value.type) return null;
    return `layout-${slide.value.type}`;
});

const orbStyle = computed(() => ({
    backgroundColor: slide.value?.meta?.orbColor || 'var(--lumina-color-primary, #3b82f6)',
    width: 'var(--lumina-orb-size, 60vw)',
    height: 'var(--lumina-orb-size, 60vw)',
    top: slide.value?.meta?.orbPos?.top || currentOrbPosition.value.top,
    left: slide.value?.meta?.orbPos?.left || currentOrbPosition.value.left,
    transition: 'top 0.8s cubic-bezier(0.4, 0, 0.2, 1), left 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
}));

const handleAction = (payload: any) => {
    bus.emit('action', payload);
};



// --- Viewport Transitions ---
const onEnter = (el: Element, done: () => void) => {
    // We let useTransition handle the content entry animations.
    // We just ensure the container is visible.
    // However, if we want a "Slide In" effect for the whole page, we could do it here.
    // For now, simple opacity check to prevent FOUC.
    // Cast el to HTMLElement to access style
    const element = el as HTMLElement;
    element.style.opacity = '1';
    done();
};

const onLeave = (el: Element, done: () => void) => {
    const { options } = store.state;
    // If animations disabled, exit immediately
    if (options.animation?.enabled === false) {
        done();
        return;
    }

    const duration = options.animation?.durationOut || 0.5;
    const type = options.animation?.type || 'cascade';

    // We need to use valid GSAP import or use it from global/window if not imported?
    // It is not imported in this file currently!
    // I need to add import gsap from 'gsap' too if it's missing.
    // But I can't easily add import at top with this replace.
    // Wait, let's check imports in file content step 216.
    // Imports are: vue, useLumina, useKeyboard, events.
    // GSAP IS NOT IMPORTED.

    // I will use a separate tool call to add the import.
    // For now let's write the logic assuming gsap is available (will fix import next)

    const tl = gsap.timeline({ onComplete: done });

    if (type === 'fade') {
        tl.to(el, { opacity: 0, duration: duration });
    } else if (type === 'zoom') {
        tl.to(el, { opacity: 0, scale: 1.1, duration: duration });
    } else {
        // Cascade/Slide default exit
        tl.to(el, {
            opacity: 0,
            y: -20, // Slight move up
            duration: duration,
            ease: 'power2.in'
        });
    }
};
</script>
