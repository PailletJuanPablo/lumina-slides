<template>
    <div class="relative w-full h-full group bg-black overflow-hidden" @mousemove="handleMouseMove"
        @mouseleave="showControls = false">

        <!-- Video Element -->
        <video ref="videoRef" :class="['w-full h-full', objectFitClass]" :src="src" :poster="poster"
            :autoplay="autoplay" :loop="loop" :muted="muted" playsinline @click="togglePlay"
            @timeupdate="handleTimeUpdate" @loadedmetadata="handleMetadata" @ended="handleEnded">
        </video>

        <!-- Custom Controls Overlay -->
        <transition name="fade">
            <div v-if="controls && showControls"
                class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300">

                <!-- Progress Bar -->
                <div class="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer relative group/progress"
                    @click="seek">
                    <div class="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
                        :style="{ width: `${progress}%`, backgroundColor: 'var(--lumina-colors-primary, #3b82f6)' }">
                    </div>
                    <!-- Hover Effect -->
                    <div class="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity"
                        :style="{ left: `${progress}%` }"></div>
                </div>

                <!-- Controls Row -->
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center gap-4">
                        <!-- Play/Pause -->
                        <button @click="togglePlay" class="hover:text-[var(--lumina-colors-primary)] transition">
                            <i :class="['fa-solid text-xl', isPlaying ? 'fa-pause' : 'fa-play']"></i>
                        </button>

                        <!-- Volume -->
                        <div class="flex items-center gap-2 group/vol">
                            <button @click="toggleMute"
                                class="hover:text-[var(--lumina-colors-primary)] transition w-6">
                                <i :class="['fa-solid', isMuted ? 'fa-volume-xmark' : 'fa-volume-high']"></i>
                            </button>
                            <!-- Volume Slider (Hidden until hover) -->
                            <input type="range" min="0" max="1" step="0.1" v-model.number="volume"
                                class="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full" />
                        </div>

                        <!-- Time -->
                        <span class="text-xs font-mono opacity-70">{{ formatTime(currentTime) }} / {{
                            formatTime(duration) }}</span>
                    </div>

                    <!-- Right Side -->
                    <div class="flex items-center gap-4">
                        <!-- Fullscreen -->
                        <button @click="toggleFullscreen" class="hover:text-[var(--lumina-colors-primary)] transition">
                            <i class="fa-solid fa-expand"></i>
                        </button>
                    </div>
                </div>
            </div>
        </transition>

        <!-- Big Play Button Overlay (when paused) -->
        <div v-if="controls && !isPlaying && !hasPlayedOnce"
            class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:scale-110 transition duration-300"
                @click="togglePlay">
                <i class="fa-solid fa-play text-2xl ml-1"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    src: { type: String, required: true },
    poster: { type: String, default: '' },
    autoplay: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
    controls: { type: Boolean, default: true },
    objectFit: { type: String, default: 'cover' } // cover | contain
});

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
const isMuted = ref(props.muted);
const volume = ref(1);
const progress = ref(0);
const currentTime = ref(0);
const duration = ref(0);
const showControls = ref(false);
const hasPlayedOnce = ref(false);

let controlsTimeout: number | undefined;

const objectFitClass = computed(() => {
    return props.objectFit === 'contain' ? 'object-contain' : 'object-cover';
});

// Format seconds to MM:SS
const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
};

const togglePlay = () => {
    if (!videoRef.value) return;
    if (videoRef.value.paused) {
        videoRef.value.play();
        isPlaying.value = true;
        hasPlayedOnce.value = true;
    } else {
        videoRef.value.pause();
        isPlaying.value = false;
    }
};

const toggleMute = () => {
    if (!videoRef.value) return;
    videoRef.value.muted = !videoRef.value.muted;
    isMuted.value = videoRef.value.muted;
    if (isMuted.value) volume.value = 0;
    else volume.value = 1;
};

const handleTimeUpdate = () => {
    if (!videoRef.value) return;
    currentTime.value = videoRef.value.currentTime;
    progress.value = (currentTime.value / duration.value) * 100 || 0;
};

const handleMetadata = () => {
    if (!videoRef.value) return;
    duration.value = videoRef.value.duration;
    if (props.autoplay) {
        togglePlay();
    }
};

const handleEnded = () => {
    isPlaying.value = false;
    if (props.loop && videoRef.value) {
        videoRef.value.currentTime = 0;
        togglePlay();
    }
};

const seek = (e: MouseEvent) => {
    if (!videoRef.value) return;
    const bar = e.currentTarget as HTMLElement;
    const percent = e.offsetX / bar.clientWidth;
    videoRef.value.currentTime = percent * duration.value;
    progress.value = percent * 100;
};

const toggleFullscreen = () => {
    if (!videoRef.value) return;
    const el = videoRef.value.parentElement;
    if (!document.fullscreenElement && el) {
        el.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

const handleMouseMove = () => {
    showControls.value = true;
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
        if (isPlaying.value) showControls.value = false;
    }, 3000);
};

// Watch volume slider
watch(volume, (val) => {
    if (!videoRef.value) return;
    videoRef.value.volume = val;
    isMuted.value = val === 0;
    videoRef.value.muted = val === 0;
});

onMounted(() => {
    // Sync initial muted state
    if (videoRef.value) {
        videoRef.value.muted = props.muted;
        isMuted.value = props.muted;
    }
});
</script>

<style scoped>
/* Custom Range Input Styling for Volume */
input[type=range] {
    -webkit-appearance: none;
    background: transparent;
}

input[type=range]:focus {
    outline: none;
}
</style>
