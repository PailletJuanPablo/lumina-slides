<script setup lang="ts">
/**
 * LUMINA SPEAKER NOTES
 * 
 * Standalone component for the speaker notes popup window.
 * Provides bidirectional sync with the main presentation.
 * 
 * Features:
 * - Current slide notes with markdown rendering
 * - Next slide preview
 * - Navigation controls (synced with main window)
 * - Presentation timer with start/pause/reset
 * - Connection status indicator
 */
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { SpeakerChannel } from '../core/speaker-channel';
import type { SpeakerSyncPayload } from '../core/types';

// --- Props ---
const props = defineProps<{
    channelId?: string;
}>();

// --- State ---
const currentIndex = ref(0);
const totalSlides = ref(0);
const currentNotes = ref('');
const nextSlidePreview = ref<{ title?: string; type?: string } | null>(null);
const isConnected = ref(false);
const channel = ref<SpeakerChannel | null>(null);

// Timer state
const timerSeconds = ref(0);
const timerRunning = ref(false);
const timerInterval = ref<ReturnType<typeof setInterval> | null>(null);

// --- Computed ---
const slideIndicator = computed(() => {
    if (totalSlides.value === 0) return 'No slides loaded';
    return `Slide ${currentIndex.value + 1} / ${totalSlides.value}`;
});

const formattedTime = computed(() => {
    const hours = Math.floor(timerSeconds.value / 3600);
    const minutes = Math.floor((timerSeconds.value % 3600) / 60);
    const seconds = timerSeconds.value % 60;

    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const hasNext = computed(() => currentIndex.value < totalSlides.value - 1);
const hasPrev = computed(() => currentIndex.value > 0);

// --- Markdown Rendering ---
function renderMarkdown(text: string): string {
    if (!text) return '';

    return text
        // Bold: **text** or __text__
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/__(.*?)__/g, '<strong>$1</strong>')
        // Italic: *text* or _text_
        .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
        .replace(/(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, '<em>$1</em>')
        // Line breaks
        .replace(/\n/g, '<br>')
        // Unordered lists: - item or * item
        .replace(/^[-*]\s+(.*)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
        // Clean up multiple consecutive ul tags
        .replace(/<\/ul>\s*<ul>/g, '');
}

// --- Channel Communication ---
function initChannel() {
    // Get channel ID from props or URL params or use default
    const urlParams = new URLSearchParams(window.location.search);
    const channelId = props.channelId || urlParams.get('channel') || 'lumina-speaker-default';

    // Force new instance to ensure we have a distinct BoradcastChannel object
    // capable of receiving messages from the main window (even in same context)
    channel.value = SpeakerChannel.getInstance(channelId, true);

    // Subscribe to connection changes
    channel.value.onConnectionChange((connected) => {
        isConnected.value = connected;
    });

    // Subscribe to state updates from main window
    channel.value.subscribe(handleMessage);

    // Send ping to establish connection with retries
    // This ensures we get the initial state even if the main window takes a moment to set up
    let retryCount = 0;
    const maxRetries = 10;
    const retryInterval = setInterval(() => {
        if (totalSlides.value > 0 || retryCount >= maxRetries) {
            clearInterval(retryInterval);
            return;
        }
        channel.value?.ping();
        retryCount++;
    }, 300);

    // Initial ping
    channel.value.ping();
}

function handleMessage(payload: SpeakerSyncPayload) {
    switch (payload.action) {
        case 'state':
            if (payload.index !== undefined) currentIndex.value = payload.index;
            if (payload.totalSlides !== undefined) totalSlides.value = payload.totalSlides;
            if (payload.currentNotes !== undefined) currentNotes.value = payload.currentNotes;
            if (payload.nextSlidePreview) nextSlidePreview.value = payload.nextSlidePreview;
            break;
        case 'goto':
            if (payload.index !== undefined) currentIndex.value = payload.index;
            break;
    }
}

// --- Navigation (send to main window) ---
function goNext() {
    if (!hasNext.value) return;
    channel.value?.send({ action: 'next' });
}

function goPrev() {
    if (!hasPrev.value) return;
    channel.value?.send({ action: 'prev' });
}

function goTo(index: number) {
    channel.value?.send({ action: 'goto', index });
}

// --- Timer Controls ---
function startTimer() {
    if (timerRunning.value) return;
    timerRunning.value = true;
    timerInterval.value = setInterval(() => {
        timerSeconds.value++;
    }, 1000);
}

function pauseTimer() {
    timerRunning.value = false;
    if (timerInterval.value) {
        clearInterval(timerInterval.value);
        timerInterval.value = null;
    }
}

function toggleTimer() {
    if (timerRunning.value) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function resetTimer() {
    pauseTimer();
    timerSeconds.value = 0;
}

// --- Keyboard Shortcuts ---
function handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            e.preventDefault();
            goNext();
            break;
        case 'ArrowLeft':
        case 'Backspace':
            e.preventDefault();
            goPrev();
            break;
        case 't':
        case 'T':
            e.preventDefault();
            toggleTimer();
            break;
        case 'r':
        case 'R':
            if (e.ctrlKey || e.metaKey) return; // Allow browser refresh
            e.preventDefault();
            resetTimer();
            break;
    }
}

// --- Lifecycle ---
onMounted(() => {
    initChannel();
    window.addEventListener('keydown', handleKeydown);

    // Notify close on window unload
    window.addEventListener('beforeunload', () => {
        channel.value?.notifyClose();
    });
});

onUnmounted(() => {
    pauseTimer();
    window.removeEventListener('keydown', handleKeydown);
    channel.value?.destroy();
});
</script>

<template>
    <div class="speaker-notes">
        <!-- Header -->
        <header class="sn-header">
            <div class="sn-title">
                <svg class="sn-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
                <span>Lumina Speaker Notes</span>
            </div>
            <div class="sn-status">
                <span class="sn-indicator" :class="{ connected: isConnected }"></span>
                <span class="sn-slide-count">{{ slideIndicator }}</span>
            </div>
        </header>

        <!-- Main Content -->
        <main class="sn-content">
            <!-- Current Notes -->
            <section class="sn-notes-section">
                <h2 class="sn-section-title">Notes</h2>
                <div v-if="currentNotes" class="sn-notes-content" v-html="renderMarkdown(currentNotes)"></div>
                <div v-else class="sn-notes-empty">
                    <p>No notes for this slide</p>
                </div>
            </section>

            <!-- Next Slide Preview (Removed) -->
        </main>

        <!-- Footer Controls -->
        <footer class="sn-footer">
            <div class="sn-nav-controls">
                <button class="sn-btn sn-btn-nav" :disabled="!hasPrev" @click="goPrev"
                    title="Previous (← or Backspace)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span>Prev</span>
                </button>

                <div class="sn-timer" @click="toggleTimer" title="Click to start/pause (T)">
                    <span class="sn-timer-icon" :class="{ running: timerRunning }">
                        {{ timerRunning ? '⏸' : '▶' }}
                    </span>
                    <span class="sn-timer-value">{{ formattedTime }}</span>
                    <button class="sn-timer-reset" @click.stop="resetTimer" title="Reset timer (R)">↻</button>
                </div>

                <button class="sn-btn sn-btn-nav sn-btn-primary" :disabled="!hasNext" @click="goNext"
                    title="Next (→, Space, or Enter)">
                    <span>Next</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* --- Variables --- */
:root {
    --sn-bg: #0f0f1a;
    --sn-surface: #1a1a2e;
    --sn-surface-alt: #252540;
    --sn-text: #e4e4e7;
    --sn-text-muted: #71717a;
    --sn-accent: #6366f1;
    --sn-accent-soft: rgba(99, 102, 241, 0.15);
    --sn-success: #22c55e;
    --sn-border: rgba(255, 255, 255, 0.08);
    --sn-radius: 12px;
}

.speaker-notes {
    min-height: 100vh;
    background: var(--sn-bg);
    color: var(--sn-text);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    display: flex;
    flex-direction: column;
}

/* --- Header --- */
.sn-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    background: var(--sn-surface);
    border-bottom: 1px solid var(--sn-border);
}

.sn-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
}

.sn-logo {
    width: 16px;
    height: 16px;
    color: var(--sn-accent);
}

.sn-status {
    display: flex;
    align-items: center;
    gap: 8px;
}

.sn-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sn-text-muted);
    transition: background 0.3s ease;
}

.sn-indicator.connected {
    background: var(--sn-success);
    box-shadow: 0 0 8px var(--sn-success);
}

.sn-slide-count {
    font-size: 11px;
    color: var(--sn-text-muted);
    font-variant-numeric: tabular-nums;
}

/* --- Content --- */
.sn-content {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
}

.sn-section-title {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--sn-text-muted);
    margin-bottom: 6px;
}

/* --- Notes Section --- */
.sn-notes-section {
    flex: 1;
}

.sn-notes-content {
    background: var(--sn-surface);
    border-radius: var(--sn-radius);
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    min-height: 100px;
}

.sn-notes-content :deep(strong) {
    color: var(--sn-accent);
    font-weight: 600;
}

.sn-notes-content :deep(em) {
    font-style: italic;
    color: var(--sn-text);
}

.sn-notes-content :deep(ul) {
    margin: 8px 0;
    padding-left: 20px;
}

.sn-notes-content :deep(li) {
    margin: 4px 0;
}

.sn-notes-empty {
    background: var(--sn-surface);
    border-radius: var(--sn-radius);
    padding: 24px 16px;
    text-align: center;
    color: var(--sn-text-muted);
    font-size: 13px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* --- Preview Section (Removed) --- */

/* --- Footer Controls --- */
.sn-footer {
    padding: 8px 12px;
    background: var(--sn-surface);
    border-top: 1px solid var(--sn-border);
}

.sn-nav-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
}

.sn-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background: var(--sn-surface-alt);
    color: var(--sn-text);
}

.sn-btn svg {
    width: 14px;
    height: 14px;
}

.sn-btn:hover:not(:disabled) {
    background: var(--sn-accent-soft);
    color: var(--sn-accent);
}

.sn-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.sn-btn-primary {
    background: var(--sn-accent);
    color: white;
}

.sn-btn-primary:hover:not(:disabled) {
    background: #5558e3;
    color: white;
}

/* --- Timer --- */
.sn-timer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: var(--sn-surface-alt);
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
    user-select: none;
}

.sn-timer:hover {
    background: var(--sn-accent-soft);
}

.sn-timer-icon {
    font-size: 10px;
    width: 14px;
    text-align: center;
}

.sn-timer-icon.running {
    color: var(--sn-success);
}

.sn-timer-value {
    font-size: 14px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    min-width: 50px;
}

.sn-timer-reset {
    background: none;
    border: none;
    color: var(--sn-text-muted);
    font-size: 14px;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    transition: color 0.2s ease;
}

.sn-timer-reset:hover {
    color: var(--sn-text);
}

/* --- Responsive --- */
@media (max-width: 600px) {
    .sn-header {
        padding: 8px 10px;
    }

    .sn-content {
        padding: 10px;
    }

    .sn-notes-content {
        font-size: 13px;
        padding: 10px;
    }

    .sn-btn span {
        display: none;
    }

    .sn-timer-value {
        font-size: 14px;
    }
}
</style>
