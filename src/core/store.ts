import { reactive, readonly, InjectionKey } from 'vue';
import type { Deck, LuminaOptions } from './types';

/**
 * LUMINA STORE FACTORY
 * Refactored to support multiple instances via Dependency Injection.
 */

export interface LuminaState {
    deck: Deck | null;
    currentIndex: number;
    options: LuminaOptions;
    isReady: boolean;
}

export type LuminaStore = ReturnType<typeof createStore>;

export const StoreKey: InjectionKey<LuminaStore> = Symbol('LuminaStore');

const DEFAULT_OPTIONS: LuminaOptions = {
    loop: false,
    navigation: true,
    keyboard: true,
    touch: true,
    debug: false,
    theme: 'default',
    ui: {
        visible: true,
        showProgressBar: true,
        showSlideCount: true,
        showControls: true
    },
    keys: {
        next: ['ArrowRight', ' ', 'Enter'],
        prev: ['ArrowLeft', 'Backspace']
    },
    animation: {
        enabled: true,
        type: 'cascade',
        durationIn: 1.0,
        durationOut: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    }
};

/**
 * Creates a new isolated Lumina Store instance.
 * Uses the Factory pattern to support multiple engine instances on the same page.
 * 
 * @param initialOptions - Optional configuration overrides.
 * @returns A store object containing the reactive state and methods.
 */
export function createStore(initialOptions: LuminaOptions = {}) {
    const state = reactive<LuminaState>({
        deck: null,
        currentIndex: 0,
        options: { ...DEFAULT_OPTIONS, ...initialOptions },
        isReady: false
    });

    // --- Getters ---

    /**
     * Returns the complete data object for the currently active slide.
     */
    const currentSlide = () => {
        if (!state.deck || state.deck.slides.length === 0) return null;
        return state.deck.slides[state.currentIndex] || null;
    };

    /** Checks if there is a next slide available (respects loop). */
    const hasNext = () => {
        if (!state.deck) return false;
        return state.options.loop
            ? true
            : state.currentIndex < state.deck.slides.length - 1;
    };

    /** Checks if there is a previous slide available (respects loop). */
    const hasPrev = () => {
        if (!state.deck) return false;
        return state.options.loop
            ? true
            : state.currentIndex > 0;
    };

    /** Returns the current progress as a normalized value between 0 and 1. */
    const progress = () => {
        if (!state.deck || state.deck.slides.length <= 1) return 0;
        return state.currentIndex / (state.deck.slides.length - 1);
    };

    // --- Actions ---

    /**
     * Updates the engine options at runtime.
     * Merges provided options with existing ones.
     * 
     * @param options - Partial options object to merge.
     */
    function setOptions(options: LuminaOptions) {
        state.options = { ...state.options, ...options };

        // Theme Merging Logic
        if (options.theme) {
            if (typeof options.theme === 'string') {
                // Completely replace if string preset
                state.options.theme = options.theme;
            } else {
                // Allow fine-grained object overrides
                state.options.theme = options.theme;
            }
        }

        if (options.ui) state.options.ui = { ...state.options.ui, ...options.ui };
        if (options.keys) state.options.keys = { ...state.options.keys, ...options.keys };
        if (options.animation) state.options.animation = { ...state.options.animation, ...options.animation };
    }

    /**
     * Loads a new deck into the engine and resets state.
     * @param deck - The complete Deck object (meta + slides).
     */
    function loadDeck(deck: Deck) {
        if (!deck || !Array.isArray(deck.slides)) {
            console.error('[LuminaStore] Invalid deck format');
            return;
        }
        state.deck = deck;
        state.currentIndex = 0;
        state.isReady = true;
    }

    /** Advances to the next slide if possible. */
    function next() {
        if (!hasNext()) return;
        const count = state.deck?.slides.length || 0;
        if (state.options.loop) {
            state.currentIndex = (state.currentIndex + 1) % count;
        } else {
            state.currentIndex++;
        }
    }

    /** Returns to the previous slide if possible. */
    function prev() {
        if (!hasPrev()) return;
        const count = state.deck?.slides.length || 0;
        if (state.options.loop) {
            state.currentIndex = (state.currentIndex - 1 + count) % count;
        } else {
            state.currentIndex--;
        }
    }

    /**
     * Jumps immediately to a specific slide index.
     * @param index - Zero-based index of the target slide.
     */
    function goto(index: number) {
        if (!state.deck) return;
        if (index >= 0 && index < state.deck.slides.length) {
            state.currentIndex = index;
        }
    }

    return {
        state: readonly(state),
        currentSlide,
        hasNext,
        hasPrev,
        progress,
        setOptions,
        loadDeck,
        next,
        prev,
        goto
    };
}
