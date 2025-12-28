<template>
    <!-- VIEWING MODE (When ?id=xxx is present) -->
    <div v-if="loadingDeck || viewingDeck" class="w-full h-screen bg-black overflow-hidden relative z-[9999]">
        <div id="deck-viewer" class="w-full h-full"></div>

        <!-- Loading State -->
        <div v-if="loadingDeck" class="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div class="text-center">
                <i class="fa-solid fa-circle-notch fa-spin text-4xl text-blue-500 mb-4"></i>
                <p class="text-white/50 animate-pulse">Loading presentation...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-if="deckError" class="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div class="text-center max-w-md px-6">
                <i class="fa-solid fa-triangle-exclamation text-4xl text-red-500 mb-4"></i>
                <h3 class="text-xl font-bold text-white mb-2">Presentation Not Found</h3>
                <p class="text-white/50 mb-6">{{ deckError }}</p>
                <a href="./" class="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
                    Go Home
                </a>
            </div>
        </div>
    </div>

    <!-- NORMAL HOME PAGE -->
    <div v-else
        class="min-h-screen pt-24 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <!-- Background Gradients -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none">
        </div>

        <!-- Hero Content -->
        <h1 class="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight relative z-10">
            The Interface Layer<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">for the Agentic
                Era.</span>
        </h1>

        <p class="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed relative z-10">
            Turn text into high-performance UI. A deterministic, declarative engine specifically designed for LLM
            output.
        </p>

        <div class="flex flex-col md:flex-row gap-6 mb-24 relative z-10">
            <button @click="$emit('navigate', 'docs')"
                class="px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition duration-300 shadow-xl shadow-white/10">
                Read the Protocol
            </button>
            <button @click="scrollToDemo"
                class="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-lg font-bold backdrop-blur-md transition duration-300">
                Try the Demo
            </button>
        </div>

        <!-- STREAMING DEMO SECTION -->
        <div id="home-demo" class="w-full max-w-[1400px] mx-auto relative z-10 mb-32 text-left px-8">
            <div
                class="bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] relative group ring-1 ring-white/5">

                <!-- Mac-style Window Header -->
                <div class="h-12 bg-[#0A0A0A] border-b border-white/5 flex items-center px-4 justify-between shrink-0">
                    <div class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div class="text-xs font-mono text-white/20 uppercase tracking-widest hidden md:block">Agent Preview
                        Environment</div>

                    <!-- Sim Button in Header -->
                    <button @click="runDemo"
                        class="px-4 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-[10px] uppercase tracking-wide shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
                        <i class="fa-solid fa-play"></i> Simulate Stream
                    </button>
                </div>

                <!-- Main Body: Split View -->
                <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative">

                    <!-- Preview (Left, 3/4) -->
                    <div class="w-full md:w-3/4 h-full relative bg-black border-r border-white/10 order-2 md:order-1">
                        <div id="home-demo-container" class="w-full h-full"></div>

                        <!-- Empty State -->
                        <div v-if="!demoStarted"
                            class="absolute inset-0 flex items-center justify-center text-white/10 pointer-events-none">
                            <div class="text-center">
                                <i class="fa-solid fa-layer-group text-6xl mb-6 opacity-50"></i>
                                <p class="text-lg font-light">Waiting for Agent...</p>
                            </div>
                        </div>
                    </div>

                    <!-- Editor (Right, 1/4) -->
                    <div class="w-full md:w-1/4 h-48 md:h-full flex flex-col bg-[#080808] order-1 md:order-2">
                        <div
                            class="px-4 py-3 text-[10px] font-bold text-blue-400/50 flex justify-between items-center border-b border-white/5 bg-blue-500/5 shrink-0">
                            <span>INCOMING JSON STREAM</span>
                            <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" v-if="demoStarted"></div>
                        </div>
                        <textarea v-model="demoInput"
                            class="flex-1 bg-transparent p-4 font-mono text-xs text-green-400 resize-none focus:outline-none leading-relaxed"
                            placeholder='// Waiting for LLM output...' spellcheck="false"></textarea>
                    </div>

                </div>
            </div>
        </div>

        <!-- Feature Grid (Updated Copy) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-left pb-24 relative z-10">
            <div
                class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition duration-500 group">
                <div
                    class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition">
                    <i class="fa-solid fa-bolt text-xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-3 text-white">Zero Hallucinations</h3>
                <p class="text-white/50 leading-relaxed">Stop hoping the LLM generates valid HTML/CSS. Give it a strict
                    schema and get pixel-perfect results every time.</p>
            </div>
            <div
                class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition duration-500 group">
                <div
                    class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition">
                    <i class="fa-solid fa-brain text-xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">Semantic Layouts</h3>
                <p class="text-white/50 leading-relaxed">Agents don't need to be designers. They just choose "Timeline"
                    or "Features", and the engine handles the aesthetics.</p>
            </div>
            <div
                class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition duration-500 group">
                <div
                    class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition">
                    <i class="fa-solid fa-tower-broadcast text-xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">Realtime Streaming</h3>
                <p class="text-white/50 leading-relaxed">Our partial JSON parser renders UI frames <i>while</i> the LLM
                    is still typing. No loading spinners.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick, onMounted } from 'vue';
import { Lumina } from '../../core/Lumina';
import { parsePartialJson } from '../../utils/streaming';
import { getDeck, initFirebase } from '../../utils/firebase';

defineEmits(['navigate']);

// Demo State
const demoInput = ref('');
const demoStarted = ref(false);
let demoEngine: Lumina | null = null;
let viewerEngine: Lumina | null = null;

// Viewer State
const loadingDeck = ref(false);
const viewingDeck = ref(false);
const deckError = ref<string | null>(null);

// Initialize Firebase (Public details are safe here, but usually use env vars)
// NOTE: You should ideally use environment variables for keys.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const TARGET_JSON = `{
  "meta": { "title": "Home Demo" },
  "slides": [
    {
      "type": "half",
      "sizing": "container",
      "meta": {
        "orbColor": "#8b5cf6"
      },
      "imageSide": "left",
      "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      "tag": "Left Aligned",
      "title": "Image on Left",
      "paragraphs": [
        "The classic split screen. Image on the left, content on the right.",
        "Perfect for introducing a product or feature where the visual context leads the narrative."
      ],
      "cta": "Explore Left"
    },
    {
      "type": "statement",
      "sizing": "container",
      "meta": {
        "orbColor": "#ec4899"
      },
      "tag": "Minimal",
      "title": "Impactful Headlines",
      "subtitle": "The standard statement slide allows for massive typography to drive a point home."
    },
    {
      "type": "features",
      "sizing": "container",
      "title": "Grid System",
      "description": "The features layout automatically arranges cards into a responsive grid.",
      "features": [
        { "title": "Card One", "desc": "Standard card with an icon.", "icon": "fa-bolt" },
        { "title": "Card Two", "desc": "Cards scale on hover.", "icon": "fa-star" },
        { "title": "Card Three", "desc": "Fully responsive on mobile.", "icon": "fa-mobile" }
      ]
    },
    {
      "type": "timeline",
      "sizing": "container",
      "title": "Project History",
      "subtitle": "A visual journey through our milestones.",
      "timeline": [
        { "date": "Q1 2023", "title": "Inception", "description": "The initial concept was drafted." },
        { "date": "Q3 2023", "title": "Prototype", "description": "First functional MVP released." },
        { "date": "Q1 2024", "title": "Beta Launch", "description": "Public beta opened to users." }
      ]
    }
  ]
}`;

function scrollToDemo() {
    const el = document.getElementById('home-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

async function runDemo() {
    demoInput.value = '';
    demoStarted.value = true;

    // Initialize Engine if needed
    if (!demoEngine) {
        // Ensure container is cleared
        const container = document.getElementById('home-demo-container');
        if (container) container.innerHTML = '';

        await nextTick();
        demoEngine = new Lumina('#home-demo-container', {
            ui: { visible: true, showControls: true },
            keyboard: false,
            animation: { enabled: true, durationIn: 0.5 }
        });
    }

    let i = 0;
    const interval = setInterval(() => {
        demoInput.value += TARGET_JSON[i];
        i++;
        if (i >= TARGET_JSON.length) clearInterval(interval);
    }, 15);
}

// Watch input and parse
watch(demoInput, (val) => {
    if (!demoEngine) return;
    const parsed = parsePartialJson(val);
    if (parsed) {
        if (parsed.slides && Array.isArray(parsed.slides)) {
            parsed.slides.forEach((s: any) => s.sizing = 'container');
            demoEngine.load(parsed);

            // Auto-advance logic: check if we have a new slide that is ready
            // We want to be on the last slide that has sufficient content (e.g., at least a title)
            const availableSlides = parsed.slides.filter((s: any) => s.title || s.type);
            // We subtract 1 because index is 0-based
            // const targetIndex = availableSlides.length - 1;

            if (availableSlides.length > 0) {
                const targetIndex = availableSlides.length - 1;
                // Only advance if it's forward
                if (targetIndex > demoEngine.currentSlideIndex) {
                    demoEngine.goTo(targetIndex);
                }
            }

        } else {
            demoEngine.load({
                meta: { title: "Demo" },
                slides: [{ ...parsed, sizing: 'container' }]
            });
        }
    }
});

/**
 * Initialize Viewer Mode if ID is present
 */
const initViewer = async (id: string) => {
    loadingDeck.value = true;
    try {
        // Initialize Firebase
        initFirebase(firebaseConfig);

        const deck = await getDeck(id);
        if (deck) {
            viewingDeck.value = true;
            await nextTick();

            // Allow time for DOM to render #deck-viewer
            setTimeout(() => {
                viewerEngine = new Lumina('#deck-viewer', {
                    loop: true,
                    navigation: true,
                    keyboard: true,
                    ui: {
                        visible: true,
                        showControls: true,
                        showProgressBar: true,
                        showSlideCount: true
                    },
                    // Ensure the viewer takes focus for keyboard events
                });
                viewerEngine.load(deck);
                // Emit event to notify parent App.vue to hide navbar if possible, or we just handle it via CSS/z-index
                document.body.classList.add('viewing-deck');
            }, 100);

        } else {
            deckError.value = "The presentation could not be found. It may have been deleted.";
        }
    } catch (e: any) {
        console.error(e);
        deckError.value = "Failed to load presentation. Please try again later.";
    } finally {
        loadingDeck.value = false;
    }
};

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
        initViewer(id);
    }
});

onUnmounted(() => {
    if (demoEngine) demoEngine.destroy();
    if (viewerEngine) viewerEngine.destroy();
    document.body.classList.remove('viewing-deck');
});
</script>

<style>
/* Global override for viewer mode to hide navbar if needed */
body.viewing-deck nav {
    display: none !important;
}
</style>
