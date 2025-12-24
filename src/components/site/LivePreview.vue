<template>
    <div class="flex flex-col lg:flex-row gap-6 h-[600px] lg:h-[400px] not-prose">
        <!-- Editor -->
        <div class="w-full lg:w-1/3 flex flex-col bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden">
            <div class="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
                <span class="text-xs font-bold text-white/50 uppercase tracking-wider">JSON Editor</span>
                <span v-if="error" class="text-xs text-red-400">{{ error }}</span>
            </div>
            <textarea v-model="code"
                class="flex-1 bg-transparent p-4 font-mono text-xs text-blue-300 resize-none focus:outline-none leading-relaxed"
                spellcheck="false"></textarea>
        </div>

        <!-- Preview -->
        <div class="w-full lg:w-2/3 bg-black border border-white/10 rounded-xl overflow-hidden relative group">
            <div :id="containerId" class="w-full h-full"></div>

            <!-- Reset Button (Visible on hover) -->
            <button @click="reset"
                class="absolute top-4 right-4 px-3 py-1.5 bg-black/50 hover:bg-black/80 text-white/50 hover:text-white text-xs rounded-lg backdrop-blur-sm border border-white/10 transition opacity-0 group-hover:opacity-100">
                <i class="fa-solid fa-rotate-left mr-1"></i> Reset
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { Lumina } from '../../core/Lumina';
import { parsePartialJson } from '../../utils/streaming';

const props = defineProps<{
    initialCode: string;
}>();

const code = ref(props.initialCode);
const error = ref<string | null>(null);
const containerId = `preview-${Math.random().toString(36).substr(2, 9)}`;
let engine: Lumina | null = null;

function initEngine() {
    if (engine) engine.destroy();

    // Clear container
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '';

    // Initialize
    engine = new Lumina(`#${containerId}`, {
        ui: { visible: true, showControls: true, showProgressBar: false },
        keyboard: false,
        animation: { enabled: true, durationIn: 0.5 }
    });

    updateSlide();
}

function updateSlide() {
    if (!engine) return;

    try {
        const parsed = parsePartialJson(code.value);
        if (parsed && typeof parsed === 'object') {
            // Force container sizing for docs
            if (Array.isArray(parsed.slides)) {
                parsed.slides.forEach((s: any) => s.sizing = 'container');
                engine.load(parsed);
            } else {
                // If it's a single slide object, wrap it
                engine.load({
                    meta: { title: "Preview" },
                    slides: [{ ...parsed, sizing: 'container' }]
                });
            }
            error.value = null;
        }
    } catch (e) {
        // Silent fail on partial parse, but maybe show error if strictly invalid JSON?
        // parsePartialJson is very forgiving.
    }
}

function reset() {
    code.value = props.initialCode;
}

watch(code, () => {
    updateSlide();
});

onMounted(() => {
    // Delay init to ensure DOM is ready
    setTimeout(() => {
        initEngine();
    }, 100);
});

onUnmounted(() => {
    if (engine) engine.destroy();
});
</script>
