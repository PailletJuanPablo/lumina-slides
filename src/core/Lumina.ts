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
import LayoutChart from '../components/layouts/LayoutChart.vue';
import LayoutVideo from '../components/layouts/LayoutVideo.vue';
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
        this.app.provide('LuminaEngine', this);

        // Watch for state changes and emit public events
        watch(() => this.store.state.currentIndex, (newIndex, oldIndex) => {
            const currentSlide = this.store.state.deck?.slides[newIndex];
            if (currentSlide) {
                bus.emit('slideChange', {
                    index: newIndex,
                    previousIndex: oldIndex ?? 0,
                    slide: currentSlide
                });
            }
        });

        // Watch for metadata changes (Theme, Orb, etc.)
        watch(() => this.store.state.deck?.meta, (newMeta) => {
            if (newMeta) {
                // 1. Dynamic Theme Application
                if (newMeta.theme || newMeta.themeConfig) {
                    ThemeManager.inject(newMeta.theme || 'default', newMeta.themeConfig);
                }

                // 2. Global CSS Variable updates if needed
                if (newMeta.orbColor) {
                    document.documentElement.style.setProperty('--lumina-colors-primary', newMeta.orbColor);
                }
            }
        }, { deep: true });

        // Register Core Components
        this.app.component('layout-statement', LayoutStatement);
        this.app.component('layout-half', LayoutHalf);
        this.app.component('layout-features', LayoutFeatures);
        this.app.component('layout-timeline', LayoutTimeline);
        this.app.component('layout-steps', LayoutSteps);
        this.app.component('layout-flex', LayoutFlex);
        this.app.component('layout-auto', LayoutAuto);
        this.app.component('layout-custom', LayoutCustom);
        this.app.component('layout-chart', LayoutChart);
        this.app.component('layout-video', LayoutVideo);

        // Internal Event Listeners
        bus.on('action', (payload) => {
            this.store.recordAction(payload);
        });

        this.app.mount(this.selector);

        this.syncSpeakerNotes();
    }

    /**
     * Loads a Deck object into the engine.
     */
    public load(deckData: Deck) {
        this.store.loadDeck(deckData);
        bus.emit('ready', deckData);
        this.syncSpeakerNotes();
    }

    /**
     * Updates the existing deck with partial changes.
     */
    public patch(diff: any) {
        this.store.patchDeck(diff);
        this.syncSpeakerNotes();
    }

    /**
     * Exports the current session state for LLM consumption.
     */
    public exportState() {
        const { currentIndex, deck, actionHistory } = this.store.state;
        const slide = deck?.slides[currentIndex];
        const context = actionHistory.map(a => `User ${a.type}ed on ${a.label || a.value}`).join(' -> ');
        const interest = actionHistory.length > 5 ? "High Engagement" : "Low Engagement";

        return Object.freeze({
            status: "active",
            currentSlide: {
                index: currentIndex,
                id: slide?.id || currentIndex,
                type: slide?.type,
                title: (slide && 'title' in slide ? (slide as any).title : null) || "(No Title)"
            },
            narrative: `User is currently on slide ${currentIndex + 1}. Session Flow: ${context || "Just started"}.`,
            engagementLevel: interest,
            history: [...actionHistory]
        });
    }

    public on<K extends keyof LuminaEventMap>(event: K, handler: (e: LuminaEventMap[K]) => void) {
        bus.on(event, handler);
    }

    public off<K extends keyof LuminaEventMap>(event: K, handler: (e: LuminaEventMap[K]) => void) {
        bus.off(event, handler);
    }

    public destroy() {
        this.closeSpeakerNotes();
        if (this.app) {
            this.app.unmount();
        }
        bus.clear();
    }

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

    public openSpeakerNotes(): Window | null {
        if (this.speakerWindow && !this.speakerWindow.closed) {
            this.speakerWindow.focus();
            return this.speakerWindow;
        }

        if (!SpeakerChannel.isSupported()) {
            console.error('[Lumina] BroadcastChannel not supported.');
            return null;
        }

        const width = 600;
        const height = 800;
        const left = window.screenX + window.outerWidth;
        const top = window.screenY;

        this.speakerWindow = window.open(
            'about:blank',
            `lumina-speaker-notes-${this.speakerChannelId}`,
            `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
        );

        if (!this.speakerWindow) {
            console.warn('[Lumina] Popup blocked.');
            return null;
        }

        const win = this.speakerWindow;
        win.document.open();
        win.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Speaker Notes - Lumina</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            </head>
            <body>
                <div id="speaker-notes-root"></div>
            </body>
            </html>
        `);
        win.document.close();

        setTimeout(() => {
            if (win.closed) return;
            Array.from(document.querySelectorAll('style, link[rel="stylesheet"]')).forEach(node => {
                win.document.head.appendChild(node.cloneNode(true));
            });

            const container = win.document.getElementById('speaker-notes-root');
            if (container) {
                const notesApp = createApp(LuminaSpeakerNotes, { channelId: this.speakerChannelId });
                notesApp.mount(container);
                win.addEventListener('unload', () => notesApp.unmount());
            }
        }, 0);

        this.initSpeakerChannel();
        return this.speakerWindow;
    }

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

    public get isSpeakerNotesOpen(): boolean {
        return this.speakerWindow !== null && !this.speakerWindow.closed;
    }

    private initSpeakerChannel(): void {
        this.speakerChannel = SpeakerChannel.getInstance(this.speakerChannelId);
        this.speakerUnsubscribe = this.speakerChannel.subscribe((msg: SpeakerSyncPayload) => {
            switch (msg.action) {
                case 'next': this.next(); break;
                case 'prev': this.prev(); break;
                case 'goto': if (msg.index !== undefined) this.goTo(msg.index); break;
                case 'ping': this.syncSpeakerNotes(); break;
            }
        });
        this.syncSpeakerNotes();
        const checkWindow = setInterval(() => {
            if (this.speakerWindow?.closed) {
                clearInterval(checkWindow);
                this.closeSpeakerNotes();
            }
        }, 1000);
    }

    private syncSpeakerNotes(): void {
        if (!this.speakerChannel) return;
        const { currentIndex, deck } = this.store.state;
        if (!deck) return;

        const currentSlide = deck.slides[currentIndex];
        const nextSlide = deck.slides[currentIndex + 1];

        const getSlideTitle = (slide: BaseSlideData | undefined): string | undefined => {
            if (!slide) return undefined;
            if ('title' in slide && typeof (slide as any).title === 'string') return (slide as any).title;
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
