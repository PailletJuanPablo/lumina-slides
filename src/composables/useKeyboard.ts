import { onMounted, onUnmounted, inject } from 'vue';
import { StoreKey } from '../core/store';

/**
 * GLOBAL KEYBOARD HANDLER
 * 
 * Binds global keyboard events (Arrow Keys, Enter, etc.) to store actions.
 * Throttles input to prevent accidental double-skips.
 * Respects 'navigation' and 'keyboard' global flags.
 */
export function useKeyboard() {
    const store = inject(StoreKey);

    if (!store) return;

    let lastTime = 0;
    const THROTTLE_MS = 300;

    const handleKeydown = (e: KeyboardEvent) => {
        const { options } = store.state;
        if (!options.keyboard || !options.navigation) return;

        const now = Date.now();
        if (now - lastTime < THROTTLE_MS) return;

        const nextKeys = options.keys?.next || [];
        const prevKeys = options.keys?.prev || [];

        if (nextKeys.includes(e.key)) {
            store.next();
            lastTime = now;
        } else if (prevKeys.includes(e.key)) {
            store.prev();
            lastTime = now;
        }
    };

    onMounted(() => {
        window.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKeydown);
    });
}
