import { createApp, h, App as VueApp, watch } from 'vue';
import LuminaDeck from '../components/LuminaDeck.vue';
import LuminaSpeakerNotes from '../components/LuminaSpeakerNotes.vue';
import LayoutStatement from '../components/layouts/LayoutStatement.vue';
import LayoutHalf from '../components/layouts/LayoutHalf.vue';
import LayoutFeatures from '../components/layouts/LayoutFeatures.vue';
import LayoutTimeline from '../components/layouts/LayoutTimeline.vue';
import LayoutSteps from '../components/layouts/LayoutSteps.vue';
import LayoutFlex from '../components/layouts/LayoutFlex.vue';
import LayoutAuto from '../components/layouts/LayoutAuto.vue';
import LayoutCustom from '../components/layouts/LayoutCustom.vue';
import { createStore, StoreKey, LuminaStore } from './store';
import { bus } from './events';
import { ThemeManager } from './theme';
import { SpeakerChannel } from './speaker-channel';
import type { Deck, LuminaOptions, LuminaEventMap, SpeakerSyncPayload, BaseSlideData } from './types';
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

    // Speaker Notes state
    private speakerWindow: Window | null = null;
    private speakerChannel: SpeakerChannel | null = null;
    private speakerChannelId: string;
    private speakerUnsubscribe: (() => void) | null = null;

    /**
     * Creates a new Lumina instance.
     * 
     * @param selector - CSS selector for the container element (e.g. '#app').
     * @param options - Configuration options (theme, loop, keys, etc.).
     */
    constructor(public selector: string, options: LuminaOptions = {}) {
        // Generate unique channel ID for this instance
        this.speakerChannelId = `lumina-speaker-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

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

        // Watch for state changes and emit public events
        watch(() => this.store.state.currentIndex, (newIndex, oldIndex) => {
            const currentSlide = this.store.state.deck?.slides[newIndex];
            // Only emit if we have a valid slide
            if (currentSlide) {
                bus.emit('slideChange', {
                    index: newIndex,
                    previousIndex: oldIndex ?? 0,
                    slide: currentSlide
                });
            }
            this.syncSpeakerNotes();
        });

        // Register Core Components
        this.app.component('layout-statement', LayoutStatement);
        this.app.component('layout-half', LayoutHalf);
        this.app.component('layout-features', LayoutFeatures);
        this.app.component('layout-timeline', LayoutTimeline);
        this.app.component('layout-steps', LayoutSteps);
        this.app.component('layout-flex', LayoutFlex);
        this.app.component('layout-auto', LayoutAuto);
        this.app.component('layout-custom', LayoutCustom);

        // Internal Event Listeners
        bus.on('action', (payload) => {
            this.store.recordAction(payload);
        });

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

        // Sync speaker notes if open
        this.syncSpeakerNotes();
    }

    /**
     * Feature: Diff Updates
     * Updates the existing deck with partial changes.
     */
    public patch(diff: any) {
        this.store.patchDeck(diff);

        // Sync speaker notes if open
        this.syncSpeakerNotes();
    }

    /**
     * Feature: Feedback Loop
     * Exports the current session state for LLM consumption.
     * Includes: Narrative Log, Context Window, and Interest "Heatmap".
     */
    public exportState() {
        const { currentIndex, deck, actionHistory } = this.store.state;
        const slide = deck?.slides[currentIndex];

        // 1. Context Window & Narrative Log
        const context = actionHistory.map(a => `User ${a.type}ed on ${a.label || a.value}`).join(' -> ');

        // 2. Interest "Heatmap" (Aggregated Actions)
        const interest = actionHistory.length > 5 ? "High Engagement" : "Low Engagement";

        return Object.freeze({
            status: "active",
            currentSlide: {
                index: currentIndex,
                id: slide?.id || currentIndex,
                type: slide?.type,
                title: (slide && 'title' in slide ? slide.title : null) || "(No Title)"
            },
            narrative: `User is currently on slide ${currentIndex + 1}. Session Flow: ${context || "Just started"}.`,
            engagementLevel: interest,
            history: [...actionHistory] // Clone
        });
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
        // Close speaker notes
        this.closeSpeakerNotes();

        if (this.app) {
            this.app.unmount();
            // @ts-ignore - Explicitly clearing reference
            this.app = null as any;
        }
        bus.clear();
    }

    /**
     * Navigation API
     */
    public get currentSlideIndex() {
        return this.store.state.currentIndex;
    }

    public goTo(index: number) {
        this.store.goto(index);
        this.syncSpeakerNotes();
    }

    public next() {
        this.store.next();
        this.syncSpeakerNotes();
    }

    public prev() {
        this.store.prev();
        this.syncSpeakerNotes();
    }

    // =========================================================================
    // SPEAKER NOTES API
    // =========================================================================

    /**
     * Opens the speaker notes in a new window.
     * Establishes bidirectional sync via BroadcastChannel.
     * 
     * @returns The popup window reference, or null if blocked by browser
     * 
     * @example
     * const notesWindow = engine.openSpeakerNotes();
     * if (!notesWindow) {
     *   alert('Popup blocked! Please allow popups for speaker notes.');
     * }
     */
    public openSpeakerNotes(): Window | null {
        // Check if already open
        if (this.speakerWindow && !this.speakerWindow.closed) {
            this.speakerWindow.focus();
            return this.speakerWindow;
        }

        // Check browser support
        if (!SpeakerChannel.isSupported()) {
            console.error('[Lumina] BroadcastChannel not supported. Speaker notes require a modern browser.');
            return null;
        }

        // Calculate popup dimensions (optimized for second screen)
        const width = 600;
        const height = 800;
        const left = window.screenX + window.outerWidth; // Position to the right of main window
        const top = window.screenY;

        // Open blank popup window
        this.speakerWindow = window.open(
            'about:blank',
            `lumina-speaker-notes-${this.speakerChannelId}`,
            `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
        );

        if (!this.speakerWindow) {
            console.warn('[Lumina] Popup blocked. Please allow popups for speaker notes.');
            return null;
        }

        const win = this.speakerWindow;

        // Write initial HTML structure
        win.document.open();
        win.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Speaker Notes - Lumina</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            </head>
            <body>
                <div id="speaker-notes-root"></div>
            </body>
            </html>
        `);
        win.document.close();

        // Copy styles from main window to ensure consistent look
        // This copies both <style> tags and <link rel="stylesheet">
        // We wait for the new document to be ready
        setTimeout(() => {
            if (win.closed) return;

            // Copy stylesheets (including Vite injected styles)
            Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).forEach(node => {
                win.document.head.appendChild(node.cloneNode(true));
            });

            // Mount Component
            // We mount it directly into the new window's DOM
            const container = win.document.getElementById('speaker-notes-root');
            if (container) {
                const notesApp = createApp(LuminaSpeakerNotes, {
                    channelId: this.speakerChannelId
                });
                notesApp.mount(container);

                // Handle window close to unmount app
                win.addEventListener('unload', () => {
                    notesApp.unmount();
                });
            }
        }, 0);

        // Initialize channel
        this.initSpeakerChannel();

        return this.speakerWindow;
    }

    /**
     * Closes the speaker notes window if open.
     */
    public closeSpeakerNotes(): void {
        if (this.speakerUnsubscribe) {
            this.speakerUnsubscribe();
            this.speakerUnsubscribe = null;
        }

        if (this.speakerChannel) {
            this.speakerChannel.notifyClose();
            this.speakerChannel.destroy();
            this.speakerChannel = null;
        }

        if (this.speakerWindow && !this.speakerWindow.closed) {
            this.speakerWindow.close();
        }
        this.speakerWindow = null;
    }

    /**
     * Checks if the speaker notes window is currently open.
     */
    public get isSpeakerNotesOpen(): boolean {
        return this.speakerWindow !== null && !this.speakerWindow.closed;
    }

    /**
     * Initializes the SpeakerChannel for bidirectional communication.
     */
    private initSpeakerChannel(): void {
        this.speakerChannel = SpeakerChannel.getInstance(this.speakerChannelId);

        // Handle incoming commands from speaker notes window
        this.speakerUnsubscribe = this.speakerChannel.subscribe((msg: SpeakerSyncPayload) => {
            switch (msg.action) {
                case 'next':
                    this.store.next();
                    this.syncSpeakerNotes();
                    break;
                case 'prev':
                    this.store.prev();
                    this.syncSpeakerNotes();
                    break;
                case 'goto':
                    if (msg.index !== undefined) {
                        this.store.goto(msg.index);
                        this.syncSpeakerNotes();
                    }
                    break;
                case 'ping':
                    // Auto-respond and sync state
                    this.syncSpeakerNotes();
                    break;
            }
        });

        // Send initial state
        this.syncSpeakerNotes();

        // Monitor for window close
        const checkWindow = setInterval(() => {
            if (this.speakerWindow?.closed) {
                clearInterval(checkWindow);
                this.closeSpeakerNotes();
            }
        }, 1000);
    }

    /**
     * Syncs the current state to the speaker notes window.
     */
    private syncSpeakerNotes(): void {
        if (!this.speakerChannel) return;

        const { currentIndex, deck } = this.store.state;
        if (!deck) return;

        const currentSlide = deck.slides[currentIndex];
        const nextSlide = deck.slides[currentIndex + 1];

        // Helper to extract title from slide
        const getSlideTitle = (slide: BaseSlideData | undefined): string | undefined => {
            if (!slide) return undefined;
            if ('title' in slide && typeof slide.title === 'string') return slide.title;
            return undefined;
        };

        this.speakerChannel.send({
            action: 'state',
            index: currentIndex,
            totalSlides: deck.slides.length,
            currentNotes: currentSlide?.notes,
            nextSlidePreview: nextSlide ? {
                title: getSlideTitle(nextSlide),
                type: nextSlide.type
            } : undefined
        });
    }
}

