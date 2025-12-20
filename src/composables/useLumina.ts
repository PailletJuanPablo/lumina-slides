import { computed, inject } from 'vue';
import { StoreKey } from '../core/store';

/**
 * LUMINA COMPOSABLE
 * 
 * The primary way for Vue components (Slides, Layouts) to interact with the Engine.
 * Provides typesafe access to state, getters, and actions.
 * 
 * @throws Error if used outside of a <LuminaDeck> context (Dependency Injection).
 * @returns {Object} { slide, index, total, next, prev, goto, options }
 */
export function useLumina() {
    const store = inject(StoreKey);

    if (!store) {
        throw new Error("Lumina: Component must be used within a Lumina instance.");
    }

    return {
        // State
        slide: computed(() => store.currentSlide()),
        index: computed(() => store.state.currentIndex),
        total: computed(() => store.state.deck?.slides.length || 0),

        // Actions
        next: store.next,
        prev: store.prev,
        goto: store.goto,
        options: store.state.options
    };
}
