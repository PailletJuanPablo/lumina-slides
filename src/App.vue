<template>
    <div class="relative w-full min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 overflow-x-hidden">

        <!-- MODE: WEBSITE -->
        <div v-if="!isPresentationMode" class="w-full">
            <SiteNavBar :active-page="activePage" @navigate="navigate" />

            <SiteHome v-if="activePage === 'home'" @navigate="navigate" />
            <SiteExamples v-if="activePage === 'examples'" @select-deck="openDeck" />
            <SiteDocs v-if="activePage === 'docs'" />
            <SitePlayground v-if="activePage === 'playground'" />
            <SitePromptBuilder v-if="activePage === 'prompt-builder'" />
            <SiteApi v-if="activePage === 'api'" />

            <!-- Simple Footer -->
            <footer class="py-12 text-center text-white/20 border-t border-white/5 mt-auto">
                <p>&copy; 2025 Lumina Engine. Created by <a href="https://pailletjp.com" target="_blank"
                        class="hover:text-white transition-colors">Juan Pablo Paillet</a>.</p>
            </footer>
        </div>

        <!-- MODE: PRESENTATION ENGINE -->
        <div v-else class="w-full min-h-screen relative bg-black transition-all duration-500"
            :class="currentDeck === 'layout-embedded' ? 'flex items-center justify-center p-8 bg-gray-900' : 'h-screen'">

            <!-- Back to Site -->
            <a :href="baseUrl + '?page=examples'"
                class="fixed top-6 left-6 z-[100] px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs font-bold uppercase hover:bg-white hover:text-black transition backdrop-blur-md">
                ← Exit
            </a>

            <!-- Demo Navigation (Overlay) -->
            <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex justify-center pointer-events-none">
                <div
                    class="px-6 py-3 rounded-full flex gap-6 pointer-events-auto bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <span class="text-white/40 text-xs font-bold uppercase tracking-widest">{{ currentDeck }}</span>
                    <span v-if="currentDeck === 'layout-embedded'"
                        class="text-blue-400 text-xs font-bold uppercase ml-2 border-l border-white/10 pl-4">Widget
                        Mode</span>
                </div>
            </nav>

            <!-- CONTAINER WRAPPER -->
            <!-- If embedded, we use a restricted size container to demonstrate the "sizing: container" feature -->
            <div :class="currentDeck === 'layout-embedded'
                ? 'w-full max-w-lg h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black'
                : 'w-full h-full'">
                <div id="demo-container" class="w-full h-full"></div>
            </div>

            <!-- Helper text for embedded mode -->
            <p v-if="currentDeck === 'layout-embedded'" class="fixed bottom-12 text-white/30 text-sm">
                The slide above is constrained to a <code>max-w-lg h-[600px]</code> container.
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue';
import { Lumina } from './core/Lumina';

import SiteNavBar from './components/site/SiteNavBar.vue';
import SiteHome from './components/site/SiteHome.vue';
import SiteExamples from './components/site/SiteExamples.vue';
import SiteDocs from './components/site/SiteDocs.vue';
import SitePlayground from './components/site/SitePlayground.vue';
import SitePromptBuilder from './components/site/SitePromptBuilder.vue';
import SiteApi from './components/site/SiteApi.vue';

const activePage = ref('home');
const currentDeck = ref<string | null>(null);
const baseUrl = import.meta.env.BASE_URL;

const isPresentationMode = computed(() => !!currentDeck.value);

const navigate = (page: string) => {
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    url.searchParams.delete('deck'); // Ensure we exit deck mode
    window.history.pushState({}, '', url);
    activePage.value = page;
};

const openDeck = (deckId: string) => {
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('deck', deckId);
    url.searchParams.delete('page'); // Exit page mode
    window.history.pushState({}, '', url);

    currentDeck.value = deckId;
    nextTick(() => {
        initEngine(deckId);
    });
};

onMounted(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const deckName = urlParams.get('deck');
    const pageName = urlParams.get('page');

    if (deckName) {
        // Mode: Presentation
        currentDeck.value = deckName;
        await nextTick();
        initEngine(deckName);
    } else {
        // Mode: Website
        if (pageName) activePage.value = pageName;
    }
});

async function initEngine(deckName: string) {
    // Get Theme from URL
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme') || 'default';

    // Initialize Engine
    const engine = new Lumina('#demo-container', {
        loop: true,
        debug: true,
        navigation: true, // Master Switch
        ui: {
            visible: true,
            showSlideCount: true,
            showControls: true,
            showProgressBar: true
        },
        keys: {
            next: ['ArrowRight', ' ', 'Enter', 'k'],
            prev: ['ArrowLeft', 'Backspace', 'j']
        },
        animation: {
            enabled: true,
            type: 'cascade',
            durationIn: 1.2,
            durationOut: 0.5,
            stagger: 0.15,
            ease: 'expo.out'
        },
        theme: themeParam // dynamic theme
    });

    // Event Listeners
    engine.on('ready', (deck) => {
        console.log("Events: Deck Ready", deck.meta.title);
    });

    engine.on('slideChange', (payload) => {
        console.log("Events: Slide Changed", payload.index);
    });

    engine.on('action', (e) => {
        console.log("Events: Action", e);
        alert(`Action Triggered: ${e.label}`);
    });

    try {
        console.log(`📂 Loading deck: public/${deckName}.json ...`);
        const response = await fetch(`${baseUrl}${deckName}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const deckData = await response.json();
        engine.load(deckData);
        console.log("✅ Deck loaded successfully");
    } catch (error) {
        console.error("Failed to load deck:", error);
        alert(`Could not load 'public/${deckName}.json'. Check console for details.`);
    }
}
</script>
