import { createApp, h, App as VueApp } from 'vue';
import LuminaDeck from '../components/LuminaDeck.vue';
import LayoutStatement from '../components/layouts/LayoutStatement.vue';
import LayoutHalf from '../components/layouts/LayoutHalf.vue';
import LayoutFeatures from '../components/layouts/LayoutFeatures.vue';
import LayoutTimeline from '../components/layouts/LayoutTimeline.vue';
import LayoutSteps from '../components/layouts/LayoutSteps.vue';
import { createStore, StoreKey, LuminaStore } from './store';
import { bus } from './events';
import { ThemeManager } from './theme';
import type { Deck, LuminaOptions, LuminaEventMap } from './types';
import '../style/main.css';

/**
 * LUMINA ENGINE
 * 
 * The main entry point for the Lumina presentation library.
 * Initializes the Vue application, sets up the store, and manages the component lifecycle.
 * 
 * @example
 * const engine = new Lumina('#app', { loop: true });
 * engine.load(deckData);
 */
export class Lumina {
    private app: VueApp;
    private store: LuminaStore;

    /**
     * Creates a new Lumina instance.
     * 
     * @param selector - CSS selector for the container element (e.g. '#app').
     * @param options - Configuration options (theme, loop, keys, etc.).
     */
    constructor(public selector: string, options: LuminaOptions = {}) {
        // Create isolated store for this instance
        this.store = createStore(options);

        // Apply initial theme
        if (options.theme) {
            ThemeManager.inject(options.theme);
        }

        // Initialize Vue App
        this.app = createApp(LuminaDeck);

        // Dependency Injection
        this.app.provide(StoreKey, this.store);

        // Register Core Components
        this.app.component('layout-statement', LayoutStatement);
        this.app.component('layout-half', LayoutHalf);
        this.app.component('layout-features', LayoutFeatures);
        this.app.component('layout-timeline', LayoutTimeline);
        this.app.component('layout-steps', LayoutSteps);

        this.app.mount(this.selector);
    }

    /**
     * Loads a Deck object into the engine.
     * Use this to start the presentation or switch decks dynamically.
     * 
     * @param deckData - The Deck object containing meta and slides.
     */
    public load(deckData: Deck) {
        this.store.loadDeck(deckData);
        bus.emit('ready', deckData);
    }

    /**
     * Subscribes to an engine event.
     * Wrapper around the internal EventBus.
     * 
     * @param event - Event name ('ready', 'slideChange', 'action', 'error').
     * @param handler - Callback function.
     */
    public on<K extends keyof LuminaEventMap>(event: K, handler: (e: LuminaEventMap[K]) => void) {
        bus.on(event, handler);
    }

    /**
     * Unsubscribes from an engine event.
     * 
     * @param event - Event name.
     * @param handler - The callback function to remove.
     */
    public off<K extends keyof LuminaEventMap>(event: K, handler: (e: LuminaEventMap[K]) => void) {
        bus.off(event, handler);
    }

    public destroy() {
        if (this.app) {
            this.app.unmount();
            // @ts-ignore - Explicitly clearing reference
            this.app = null as any;
        }
        bus.clear();
    }
}
