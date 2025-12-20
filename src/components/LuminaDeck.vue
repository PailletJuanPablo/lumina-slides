<template>
    <div class="h-screen w-screen relative flex flex-col bg-[#030303] text-white overflow-hidden">

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
        <transition name="slide-fade">
            <div v-if="ui.showJson"
                class="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 z-[100] p-6 shadow-2xl overflow-auto text-left">
                <pre
                    class="text-[10px] font-mono text-green-400 whitespace-pre-wrap">{{ JSON.stringify(slide, null, 2) }}</pre>
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
            class="fixed bottom-0 left-0 w-full z-40 px-8 py-6 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-between items-end pointer-events-none">
            <div v-if="uiOptions?.showSlideCount" class="pointer-events-auto text-left">
                <h2 class="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-1">{{ deckTitle }}</h2>
                <div class="flex items-center gap-2 text-white/50 text-sm font-mono">
                    <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
                    <div v-if="uiOptions?.showProgressBar" class="h-px w-8 bg-white/20"></div>
                    <span>{{ total.toString().padStart(2, '0') }}</span>
                </div>
            </div>
            <!-- Spacer if count hidden -->
            <div v-else class="flex-1"></div>

            <div v-if="uiOptions?.showControls" class="pointer-events-auto flex gap-3">
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
import { ref, computed } from 'vue';
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

const ui = ref({ showJson: false });
const isDebug = computed(() => options.debug);

const currentSlideComponent = computed(() => {
    if (!slide.value || !slide.value.type) return null;
    return `layout-${slide.value.type}`;
});

const orbStyle = computed(() => ({
    backgroundColor: slide.value?.meta?.orbColor || '#3b82f6',
    width: '60vw',
    height: '60vw',
    top: slide.value?.meta?.orbPos?.top || '-20%',
    left: slide.value?.meta?.orbPos?.left || '-10%'
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
