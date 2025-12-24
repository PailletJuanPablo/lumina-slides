<template>
    <div class="min-h-screen pt-24 px-4 lg:px-8 max-w-full">
        <div class="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">

            <!-- JSON Editor Panel -->
            <div class="w-full lg:w-1/3 flex flex-col">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-bold text-white">JSON Editor</h2>
                    <div class="flex gap-2">
                        <button @click="loadTemplate('flex')"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition">
                            Flex Template
                        </button>
                        <button @click="loadTemplate('statement')"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition">
                            Statement
                        </button>
                        <button @click="formatJson"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-white/10 text-white/60 rounded-lg hover:bg-white/20 transition">
                            Format
                        </button>
                    </div>
                </div>

                <div class="flex-1 relative rounded-xl overflow-hidden border border-white/10 bg-black/50">
                    <textarea ref="editorRef" v-model="jsonInput" @input="onInput" spellcheck="false"
                        class="w-full h-full p-6 bg-transparent text-white font-mono text-sm leading-relaxed resize-none focus:outline-none"
                        placeholder='{"type": "flex", "elements": [...]}'></textarea>

                    <!-- Error Indicator -->
                    <div v-if="parseError"
                        class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-500/20 border-t border-red-500/30 text-red-400 text-xs font-mono">
                        {{ parseError }}
                    </div>
                </div>
            </div>

            <!-- Preview Panel -->
            <div class="w-full lg:w-2/3 flex flex-col">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-xl font-bold text-white">Live Preview</h2>
                    <div class="flex items-center gap-4">
                        <span v-if="slideIndex !== null" class="text-sm text-white/40">
                            Slide {{ slideIndex + 1 }} / {{ totalSlides }}
                        </span>
                        <div class="flex gap-1">
                            <button @click="prevSlide"
                                class="w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center">
                                ←
                            </button>
                            <button @click="nextSlide"
                                class="w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex-1 rounded-xl overflow-hidden border border-white/10 bg-black relative">
                    <div id="playground-container" class="w-full h-full"></div>

                    <!-- Empty State -->
                    <div v-if="!hasValidJson" class="absolute inset-0 flex items-center justify-center text-white/30">
                        <div class="text-center">
                            <p class="text-4xl mb-4">🎨</p>
                            <p class="text-lg font-medium">Enter valid JSON to see preview</p>
                            <p class="text-sm mt-2">Try clicking a template button above</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { Lumina } from '../../core/Lumina';

const jsonInput = ref('');
const parseError = ref<string | null>(null);
const hasValidJson = ref(false);
const editorRef = ref<HTMLTextAreaElement | null>(null);
const slideIndex = ref<number | null>(null);
const totalSlides = ref(0);

let engine: Lumina | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const TEMPLATES = {
    flex: `{
  "meta": { "title": "Playground" },
  "slides": [
    {
      "type": "flex",
      "direction": "horizontal",
      "elements": [
        {
          "type": "image",
          "src": "/brains.png",
          "size": "half",
          "fill": true
        },
        {
          "type": "content",
          "size": "half",
          "valign": "center",
          "padding": "xl",
          "gap": "lg",
          "elements": [
            { "type": "title", "text": "Hello World", "size": "2xl" },
            { "type": "text", "text": "Edit this JSON to see changes in real-time.", "muted": true },
            { "type": "bullets", "items": ["Flow-based layout", "No coordinates", "LLM friendly"] },
            { "type": "button", "label": "Get Started", "variant": "primary" }
          ]
        }
      ]
    }
  ]
}`,
    statement: `{
  "meta": { "title": "Playground" },
  "slides": [
    {
      "type": "statement",
      "tag": "Welcome",
      "title": "Hello World",
      "subtitle": "Edit this JSON to see changes instantly."
    }
  ]
}`
};

const loadTemplate = (name: keyof typeof TEMPLATES) => {
    jsonInput.value = TEMPLATES[name];
    updatePreview();
};

const formatJson = () => {
    try {
        const parsed = JSON.parse(jsonInput.value);
        jsonInput.value = JSON.stringify(parsed, null, 2);
    } catch {
        // Ignore if invalid
    }
};

const onInput = () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updatePreview, 300);
};

const updatePreview = async () => {
    parseError.value = null;

    if (!jsonInput.value.trim()) {
        hasValidJson.value = false;
        return;
    }

    try {
        let parsed = JSON.parse(jsonInput.value);

        // Auto-wrap single slide in deck structure
        if (parsed.type && !parsed.slides) {
            parsed = {
                meta: { title: 'Playground' },
                slides: [{ ...parsed, sizing: 'container' }]
            };
        }

        // Apply container sizing to all slides
        if (parsed.slides) {
            parsed.slides.forEach((s: any) => s.sizing = 'container');
        }

        hasValidJson.value = true;

        // Initialize or update engine
        if (!engine) {
            await nextTick();
            engine = new Lumina('#playground-container', {
                loop: true,
                navigation: true,
                ui: {
                    visible: true,
                    showSlideCount: true,
                    showControls: true,
                    showProgressBar: true
                },
                keys: {
                    next: ['ArrowRight', ' ', 'Enter'],
                    prev: ['ArrowLeft', 'Backspace']
                },
                animation: { enabled: true, durationIn: 0.5 }
            });

            engine.on('slideChange', (payload) => {
                slideIndex.value = payload.index;
            });
        }

        engine.load(parsed);
        totalSlides.value = parsed.slides?.length || 0;
        slideIndex.value = 0;

    } catch (e: any) {
        parseError.value = e.message || 'Invalid JSON';
        hasValidJson.value = false;
    }
};

const prevSlide = () => {
    if (engine) engine.prev();
};

const nextSlide = () => {
    if (engine) engine.next();
};

onMounted(() => {
    // Start with flex template
    loadTemplate('flex');
});

onUnmounted(() => {
    if (engine) {
        engine.destroy();
        engine = null;
    }
    if (debounceTimer) clearTimeout(debounceTimer);
});
</script>

<style scoped>
textarea::placeholder {
    color: rgba(255, 255, 255, 0.2);
}
</style>
