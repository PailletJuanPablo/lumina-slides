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
                            Flex
                        </button>
                        <button @click="loadTemplate('statement')"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition">
                            Statement
                        </button>
                        <button @click="loadTemplate('custom')"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition">
                            Custom
                        </button>
                        <button @click="formatJson"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-white/10 text-white/60 rounded-lg hover:bg-white/20 transition">
                            Format
                        </button>
                        <button @click="exportHtml"
                            class="px-3 py-1.5 text-xs font-bold uppercase bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition flex items-center gap-1.5"
                            title="Export as standalone HTML">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Export
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
                                class="w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center"
                                title="Previous slide (←)">
                                ←
                            </button>
                            <button @click="nextSlide"
                                class="w-8 h-8 rounded-lg bg-white/10 text-white/60 hover:bg-white/20 transition flex items-center justify-center"
                                title="Next slide (→)">
                                →
                            </button>
                            <button @click="openSpeakerNotes"
                                class="ml-2 px-3 py-1.5 text-xs font-bold uppercase rounded-lg transition flex items-center gap-1.5"
                                :class="speakerNotesOpen ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'"
                                title="Open Speaker Notes (S)">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                                {{ speakerNotesOpen ? 'Notes Open' : 'Notes' }}
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
const speakerNotesOpen = ref(false);

let engine: Lumina | null = null;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const TEMPLATES = {
    flex: `{
  "meta": { "title": "Playground" },
  "slides": [
    {
      "type": "flex",
      "direction": "horizontal",
      "notes": "**Demo slide** - Show how the flex layout works. Point out the image on the left. Explain content stacking. Mention the button actions.",
      "elements": [
        {
          "type": "image",
          "src": "./brains.png",
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
    },
    {
      "type": "statement",
      "tag": "Next Steps",
      "title": "Try the Speaker Notes!",
      "subtitle": "Click the Notes button above to open the presenter view.",
      "notes": "This is the second slide. Encourage them to try the bidirectional sync. Show the timer functionality. Press T to toggle timer."
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
      "subtitle": "Edit this JSON to see changes instantly.",
      "notes": "Remember to greet the audience! Introduce yourself. Set expectations for the presentation."
    }
  ]
}`,
    custom: `{
  "meta": { "title": "Custom Slide" },
  "slides": [
    {
      "type": "custom",
      "html": "<div class='custom-container'><h1 class='custom-title'>Custom HTML Slide</h1><p class='custom-text'>This slide uses raw HTML content!</p><div class='custom-grid'><div class='custom-card'>Card 1</div><div class='custom-card'>Card 2</div><div class='custom-card'>Card 3</div></div></div>",
      "css": ".custom-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 2rem; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); } .custom-title { font-size: 4rem; font-weight: bold; background: linear-gradient(90deg, #00d4ff, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem; } .custom-text { font-size: 1.5rem; color: rgba(255,255,255,0.7); margin-bottom: 3rem; } .custom-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; } .custom-card { padding: 2rem; background: rgba(255,255,255,0.05); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); color: white; font-weight: 600; }",
      "notes": "This is a custom HTML slide with inline CSS. You have full control over the layout!"
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

const exportHtml = () => {
    if (!jsonInput.value.trim()) return;

    try {
        let parsed = JSON.parse(jsonInput.value);

        // Auto-wrap logic (same as preview)
        if (parsed.type && !parsed.slides) {
            parsed = {
                meta: { title: 'Exported Deck' },
                slides: [{ ...parsed, sizing: 'container' }]
            };
        }

        // Apply container sizing
        if (parsed.slides) {
            parsed.slides.forEach((s: any) => s.sizing = 'container');
        }

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${parsed.meta?.title || 'Lumina Presentation'}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lumina-slides@8.2.5/dist/style.css">
    <style>
        body { margin: 0; padding: 0; overflow: hidden; background: #000; font-family: sans-serif; }
        #app { width: 100vw; height: 100vh; }
    </style>
</head>
<body>
    <div id="app"></div>
    
    <!-- Lumina Engine (Universal Build) -->
    <script src="https://cdn.jsdelivr.net/npm/lumina-slides@8.2.5/dist/lumina-slides.umd.cjs"><\/script>
    
    <script>
        // Initialize when ready
        document.addEventListener('DOMContentLoaded', () => {
            const { Lumina } = LuminaSlides;
            
            // The JSON from your playground
            const deckData = ${JSON.stringify(parsed, null, 4)};

            // Start the engine
            const engine = new Lumina('#app', {
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
            
            engine.load(deckData);
        });
    <\/script>
</body>
</html>`;

        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'lumina-deck.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

    } catch (e: any) {
        alert('Invalid JSON: ' + e.message);
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

const openSpeakerNotes = () => {
    if (!engine) return;
    const win = engine.openSpeakerNotes();
    if (win) {
        speakerNotesOpen.value = true;
        // Monitor for close
        const checkClosed = setInterval(() => {
            if (win.closed) {
                speakerNotesOpen.value = false;
                clearInterval(checkClosed);
            }
        }, 500);
    } else {
        alert('Popup blocked! Please allow popups for speaker notes.');
    }
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
