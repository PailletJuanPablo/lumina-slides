<template>
  <BaseSlide :data="data">
    <div class="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
      <div class="reveal-zoom max-w-5xl z-10">
        <!-- Tag -->
        <span v-if="data.tag"
          class="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-widest uppercase mb-10 text-[var(--lumina-primary)]"
          style="color: var(--lumina-colors-primary, #3b82f6);">
          {{ data.tag }}
        </span>

        <!-- Title -->
        <h1
          class="font-heading font-bold leading-[0.9] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
          style="font-size: clamp(3rem, 10vw, 8rem);">
          {{ data.title }}
        </h1>

        <!-- Subtitle -->
        <p v-if="data.subtitle" class="text-xl md:text-3xl font-light max-w-3xl mx-auto leading-normal"
          style="color: var(--lumina-colors-muted, #9ca3af);">
          {{ data.subtitle }}
        </p>
      </div>
    </div>
  </BaseSlide>
</template>

<script setup lang="ts">
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideStatement } from '../../core/types';

defineProps<{
  data: SlideStatement
}>();
</script>
