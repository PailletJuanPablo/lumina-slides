<template>
  <BaseSlide :data="data">
    <div
      :class="['flex flex-col justify-center items-center text-center p-8 relative', data.sizing === 'container' ? 'h-full' : 'min-h-screen']">
      <div class="reveal-zoom max-w-5xl z-10">
        <!-- Tag -->
        <span v-if="data.tag"
          class="inline-block px-4 py-1 rounded-full border text-sm font-medium tracking-widest uppercase mb-10"
          style="color: var(--lumina-colors-primary, #3b82f6); border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.05);">
          {{ data.tag }}
        </span>

        <!-- Title -->
        <h1 class="font-bold leading-[1.1] tracking-tight mb-8 text-transparent bg-clip-text" :style="{
          fontSize: data.sizing === 'container' ? '3.5rem' : 'clamp(3rem, 10vw, 8rem)',
          fontFamily: 'var(--lumina-font-heading, Inter, sans-serif)',
          backgroundImage: 'linear-gradient(to bottom, var(--lumina-colors-text, #ffffff), var(--lumina-colors-muted, #6b7280))'
        }">
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
