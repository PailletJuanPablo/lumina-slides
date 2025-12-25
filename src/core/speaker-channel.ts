import type { SpeakerSyncPayload } from './types';

/**
 * SPEAKER CHANNEL
 * 
 * Implements cross-window communication for speaker notes synchronization
 * using the BroadcastChannel API. Supports bidirectional messaging between
 * the main presentation window and the speaker notes popup.
 * 
 * Design Patterns:
 * - Singleton per channel name (multiple instances on same page supported)
 * - Observer pattern for message handling
 * - Heartbeat mechanism for connection status
 * 
 * @example
 * const channel = SpeakerChannel.getInstance('lumina-deck-1');
 * const unsubscribe = channel.subscribe((msg) => console.log(msg));
 * channel.send({ action: 'next' });
 */

/**
 * Handler function type for processing speaker sync messages.
 */
export type MessageHandler = (payload: SpeakerSyncPayload) => void;

export class SpeakerChannel {
    private static instances = new Map<string, SpeakerChannel>();

    private channel: BroadcastChannel | null = null;
    private handlers = new Set<MessageHandler>();
    private lastTimestamp = 0;
    private heartbeatInterval: ReturnType<typeof setInterval> | null = null;
    private isConnected = false;
    private connectionHandlers = new Set<(connected: boolean) => void>();

    /**
     * Private constructor - use getInstance() instead.
     */
    private constructor(private readonly channelName: string) {
        this.initChannel();
    }

    /**
     * Gets or creates a SpeakerChannel instance for the given name.
     * Uses singleton pattern to ensure one channel per name, unless forceNew is true.
     * 
     * @param channelName - The unique ID for the channel
     * @param forceNew - If true, creates a new instance even if one exists (needed for in-context communication)
     */
    public static getInstance(channelName: string, forceNew = false): SpeakerChannel {
        if (forceNew) {
            return new SpeakerChannel(channelName);
        }

        if (!SpeakerChannel.instances.has(channelName)) {
            SpeakerChannel.instances.set(channelName, new SpeakerChannel(channelName));
        }
        return SpeakerChannel.instances.get(channelName)!;
    }

    /**
     * Checks if BroadcastChannel is supported in the current environment.
     */
    public static isSupported(): boolean {
        return typeof BroadcastChannel !== 'undefined';
    }

    /**
     * Initializes the BroadcastChannel and sets up message handling.
     */
    private initChannel(): void {
        if (!SpeakerChannel.isSupported()) {
            console.warn('[SpeakerChannel] BroadcastChannel not supported in this environment');
            return;
        }

        try {
            this.channel = new BroadcastChannel(this.channelName);

            this.channel.onmessage = (event: MessageEvent<SpeakerSyncPayload>) => {
                const payload = event.data;

                // Ignore echoed messages (same timestamp)
                if (payload.timestamp && payload.timestamp === this.lastTimestamp) {
                    return;
                }

                // Handle connection status messages
                if (payload.action === 'ping') {
                    this.send({ action: 'pong' });
                    // Also notify subscribers so they can respond with state
                    this.handlers.forEach(handler => {
                        try {
                            handler(payload);
                        } catch (err) {
                            console.error('[SpeakerChannel] Handler error:', err);
                        }
                    });
                    return;
                }

                if (payload.action === 'pong') {
                    this.setConnected(true);
                    return;
                }

                if (payload.action === 'close') {
                    this.setConnected(false);
                    return;
                }

                // Notify all subscribers
                this.handlers.forEach(handler => {
                    try {
                        handler(payload);
                    } catch (err) {
                        console.error('[SpeakerChannel] Handler error:', err);
                    }
                });
            };

            this.channel.onmessageerror = (event) => {
                console.error('[SpeakerChannel] Message error:', event);
            };

            // Start heartbeat to detect connection status
            this.startHeartbeat();

        } catch (err) {
            console.error('[SpeakerChannel] Failed to initialize:', err);
        }
    }

    /**
     * Sends a message to all connected windows on this channel.
     */
    public send(payload: SpeakerSyncPayload): void {
        if (!this.channel) return;

        const message: SpeakerSyncPayload = {
            ...payload,
            timestamp: Date.now(),
            channelId: this.channelName
        };

        this.lastTimestamp = message.timestamp!;
        this.channel.postMessage(message);
    }

    /**
     * Subscribes to incoming messages.
     * @returns Unsubscribe function
     */
    public subscribe(handler: MessageHandler): () => void {
        this.handlers.add(handler);
        return () => this.handlers.delete(handler);
    }

    /**
     * Subscribes to connection status changes.
     * @returns Unsubscribe function
     */
    public onConnectionChange(handler: (connected: boolean) => void): () => void {
        this.connectionHandlers.add(handler);
        // Immediately notify of current status
        handler(this.isConnected);
        return () => this.connectionHandlers.delete(handler);
    }

    /**
     * Gets current connection status.
     */
    public get connected(): boolean {
        return this.isConnected;
    }

    /**
     * Sends a ping to check if another window is listening.
     */
    public ping(): void {
        this.send({ action: 'ping' });
    }

    /**
     * Notifies other windows that this window is closing.
     */
    public notifyClose(): void {
        this.send({ action: 'close' });
    }

    /**
     * Starts the heartbeat interval to check connection status.
     */
    private startHeartbeat(): void {
        // Initial ping
        this.ping();

        // Periodic heartbeat every 5 seconds
        this.heartbeatInterval = setInterval(() => {
            if (this.handlers.size > 0 || this.connectionHandlers.size > 0) {
                this.ping();
            }
        }, 5000);
    }

    /**
     * Updates and broadcasts connection status.
     */
    private setConnected(connected: boolean): void {
        if (this.isConnected !== connected) {
            this.isConnected = connected;
            this.connectionHandlers.forEach(handler => handler(connected));
        }
    }

    /**
     * Cleans up resources and removes the instance from the cache.
     */
    public destroy(): void {
        // Notify other windows
        this.notifyClose();

        // Clear heartbeat
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }

        // Close channel
        if (this.channel) {
            this.channel.close();
            this.channel = null;
        }

        // Clear handlers
        this.handlers.clear();
        this.connectionHandlers.clear();

        // Remove from instances
        SpeakerChannel.instances.delete(this.channelName);
    }

    /**
     * Destroys all active channel instances.
     */
    public static destroyAll(): void {
        SpeakerChannel.instances.forEach(instance => instance.destroy());
        SpeakerChannel.instances.clear();
    }
}
