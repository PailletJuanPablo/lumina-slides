<template>
  <div ref="container" class="w-full min-h-full relative text-white" :class="customClass">
    <!-- Dynamic Background Layer -->
    <!-- Dynamic Background Layer -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      <!-- Background Image -->
      <div v-if="bgType === 'image'" class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        :style="{ backgroundImage: `url(${bgSrc})`, opacity: bgOpacity }">
      </div>

      <!-- Background Video -->
      <video v-else-if="bgType === 'video'"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        :style="{ opacity: bgOpacity }" :src="bgSrc" :poster="bgPoster" :autoplay="bgAutoplay" :loop="bgLoop"
        :muted="bgMuted" playsinline>
      </video>
      <div v-if="bgType === 'video'"
        class="absolute inset-0 bg-[var(--lumina-colors-background,black)]/30 pointer-events-none transition-opacity duration-1000">
      </div>

      <!-- Slot for extra background elements (orb, noise, etc) -->
      <slot name="background"></slot>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTransition } from '../../composables/useTransition';
import type { BaseSlideData, VideoProperties } from '../../core/types';

/**
 * BASE SLIDE COMPONENT
 * The standard wrapper for all slide layouts.
 * Now supports Image and Video backgrounds directly via `data.background`.
 */

const props = defineProps<{
  data: BaseSlideData;
  customClass?: string;
}>();

const container = ref<HTMLElement | null>(null);

// Initialize Animation Logic
useTransition(container);

// --- Background Logic ---

const bgType = computed(() => {
  if (!props.data.background) return null;
  if (typeof props.data.background === 'string') return 'image';
  if ((props.data.background as VideoProperties).type === 'video') return 'video';
  return null;
});

const bgSrc = computed(() => {
  if (!props.data.background) return '';
  if (typeof props.data.background === 'string') return props.data.background;
  return (props.data.background as VideoProperties).src;
});

const bgPoster = computed(() => {
  if (bgType.value !== 'video') return undefined;
  return (props.data.background as VideoProperties).poster;
});

const bgAutoplay = computed(() => {
  if (bgType.value !== 'video') return undefined;
  const vid = props.data.background as VideoProperties;
  return vid.autoplay ?? true; // Default true for backgrounds
});

const bgLoop = computed(() => {
  if (bgType.value !== 'video') return undefined;
  const vid = props.data.background as VideoProperties;
  return vid.loop ?? true; // Default true for backgrounds
});

const bgMuted = computed(() => {
  if (bgType.value !== 'video') return undefined;
  const vid = props.data.background as VideoProperties;
  return vid.muted ?? true; // Default true for backgrounds
});

const bgOpacity = computed(() => {
  return props.data.backgroundOpacity ?? 1;
});

</script>
