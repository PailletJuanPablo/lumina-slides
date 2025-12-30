<template>
  <BaseSlide :data="data">
    <div
      :class="['flex flex-col justify-center items-center text-center relative', data.sizing === 'container' ? 'h-full' : 'min-h-screen']"
      :style="{ padding: 'var(--lumina-space-xl)' }">
      <div class="reveal-zoom max-w-5xl z-10">
        <!-- Tag -->
        <span v-if="data.tag" class="inline-block rounded-full font-medium uppercase" :style="{
          color: 'var(--lumina-color-primary)',
          border: '1px solid var(--lumina-color-border)',
          backgroundColor: 'rgba(var(--lumina-color-text-rgb), 0.05)',
          padding: 'var(--lumina-tag-padding)',
          fontSize: 'var(--lumina-tag-font-size)',
          letterSpacing: 'var(--lumina-tracking-widest)',
          marginBottom: 'var(--lumina-space-xl)'
        }">
          {{ data.tag }}
        </span>

        <!-- Title -->
        <h1 :style="titleStyle">
          {{ data.title }}
        </h1>

        <!-- Subtitle -->
        <p v-if="data.subtitle" class="max-w-3xl mx-auto" :style="{
          color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
          opacity: 0.8,
          fontWeight: 'normal',
          fontSize: 'clamp(var(--lumina-text-xl), 3vw, var(--lumina-text-3xl))',
          lineHeight: 'var(--lumina-leading-normal)'
        }">
          {{ data.subtitle }}
        </p>
      </div>
    </div>
  </BaseSlide>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideStatement } from '../../core/types';

const props = defineProps<{
  data: SlideStatement
}>();

const titleStyle = computed(() => ({
  fontSize: props.data.sizing === 'container'
    ? 'var(--lumina-text-5xl)'
    : 'clamp(var(--lumina-text-4xl), 10vw, var(--lumina-text-7xl))',
  fontFamily: 'var(--lumina-font-heading)',
  fontWeight: 'var(--lumina-font-weight-bold)',
  lineHeight: 'var(--lumina-leading-tight)',
  letterSpacing: 'var(--lumina-tracking-tight)',
  marginBottom: 'var(--lumina-space-xl)',
  backgroundImage: 'linear-gradient(135deg, var(--lumina-color-text-safe, var(--lumina-color-text)) 30%, #525252 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Fallback
}));
</script>
