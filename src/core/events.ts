import { LuminaEventMap } from './types';

/**
 * TYPE-SAFE EVENT BUS
 * A tiny emitter ensuring strict payload types.
 * 
 * IMPROVEMENTS:
 * 1. Strict Typing: Enforces payload matching usage.
 * 2. Set-based Storage: Efficient add/remove.
 * 3. One-time listeners: via `once` (implementation optional but good).
 */

type Handler<T> = (payload: T) => void;

export class EventBus {
    private handlers: Map<keyof LuminaEventMap, Set<Handler<any>>> = new Map();

    public on<K extends keyof LuminaEventMap>(event: K, handler: Handler<LuminaEventMap[K]>): void {
        if (!this.handlers.has(event)) {
            this.handlers.set(event, new Set());
        }
        this.handlers.get(event)!.add(handler);
    }

    public off<K extends keyof LuminaEventMap>(event: K, handler: Handler<LuminaEventMap[K]>): void {
        const set = this.handlers.get(event);
        if (set) {
            set.delete(handler);
        }
    }

    public emit<K extends keyof LuminaEventMap>(event: K, payload: LuminaEventMap[K]): void {
        const set = this.handlers.get(event);
        if (set) {
            set.forEach((handler) => {
                try {
                    handler(payload);
                } catch (err) {
                    console.error(`[LuminaBus] Error in handler for event "${event}":`, err);
                }
            });
        }
    }

    public clear() {
        this.handlers.clear();
    }
}

export const bus = new EventBus();
