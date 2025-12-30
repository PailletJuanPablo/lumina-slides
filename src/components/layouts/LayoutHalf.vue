<template>
  <BaseSlide :data="data">
    <div
      :class="['w-full flex flex-col lg:block relative', data.sizing === 'container' ? 'min-h-full' : 'min-h-screen']">
      <!-- Image Section -->
      <div
        :class="['relative h-[40vh] lg:h-full lg:w-1/2 overflow-hidden z-0', data.sizing === 'container' ? 'lg:absolute lg:top-0' : 'lg:fixed lg:top-0', data.imageSide === 'right' ? 'lg:right-0 order-1' : 'lg:left-0 order-1']">
        <div class="absolute inset-0 z-10" :style="{ backgroundColor: 'var(--lumina-color-overlay, rgba(0,0,0,0.2))' }">
        </div>

        <!-- Video Handling -->
        <div v-if="data.video" class="w-full h-full relative">
          <VideoPlayer class="w-full h-full" :src="data.video.src" :poster="data.video.poster"
            :autoplay="data.video.autoplay ?? true" :loop="data.video.loop ?? true" :muted="data.video.muted ?? true"
            :controls="data.video.controls" object-fit="cover" />
        </div>

        <!-- Image Handling -->
        <img v-else-if="data.image" :src="data.image"
          :class="['w-full h-full object-cover reveal-img scale-110 origin-center', isLoaded ? 'opacity-100' : 'opacity-0']"
          :style="{ transition: 'opacity var(--lumina-transition-duration) var(--lumina-transition-easing)' }"
          alt="Slide Image" @load="isLoaded = true"
          @error="(e: any) => { isLoaded = true; e.target.src = 'https://placehold.co/1920x1080/1a1a1a/666?text=Image+Not+Found'; }">
      </div>

      <!-- Content Section - Uses background color for proper theme integration -->
      <div
        :class="['relative z-10 w-full lg:w-1/2 min-h-[60vh] flex flex-col justify-center order-2', data.imageSide === 'right' ? 'lg:mr-[50%]' : 'lg:ml-[50%]', data.sizing === 'container' ? 'lg:min-h-full' : 'lg:min-h-screen']"
        :style="contentPanelStyle">
        <div class="reveal-content" :style="{ maxWidth: '36rem' }">
          <!-- Tag -->
          <span v-if="data.tag" class="font-bold uppercase block" :style="{
            color: 'var(--lumina-color-primary)',
            letterSpacing: 'var(--lumina-tracking-widest)',
            fontSize: 'var(--lumina-text-xs)',
            marginBottom: 'var(--lumina-space-lg)'
          }">
            {{ data.tag }}
          </span>

          <!-- Title -->
          <h1 class="font-bold" :style="{
            fontFamily: 'var(--lumina-font-heading)',
            color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
            fontSize: 'clamp(var(--lumina-text-4xl), 5vw, var(--lumina-text-6xl))',
            lineHeight: 'var(--lumina-leading-tight)',
            marginBottom: 'var(--lumina-space-xl)',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }">
            {{ data.title }}
          </h1>

          <!-- Paragraphs -->
          <div :style="{
            color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
            opacity: 0.9,
            fontSize: 'var(--lumina-text-lg)',
            lineHeight: 'var(--lumina-leading-relaxed)',
            marginBottom: 'var(--lumina-space-xl)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--lumina-space-lg)'
          }">
            <p v-for="(p, i) in data.paragraphs" :key="i">{{ p }}</p>
          </div>

          <!-- CTA -->
          <div v-if="data.cta" :style="{
            paddingTop: 'var(--lumina-space-lg)',
            borderTop: '1px solid var(--lumina-color-border)'
          }">
            <button @click="$emit('action', { type: 'cta', label: data.cta })" class="font-bold flex items-center"
              :style="{
                backgroundColor: 'var(--lumina-color-primary)',
                color: 'var(--lumina-color-background)',
                borderRadius: 'var(--lumina-button-radius)',
                padding: 'var(--lumina-button-padding)',
                fontWeight: 'var(--lumina-button-font-weight)',
                gap: 'var(--lumina-space-sm)',
                transition: 'all var(--lumina-transition-duration) var(--lumina-transition-easing)'
              }">
              {{ data.cta }} <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import VideoPlayer from '../base/VideoPlayer.vue';
import type { SlideHalf } from '../../core/types';

defineProps<{
  data: SlideHalf
}>();

const isLoaded = ref(false);

// Content panel style - uses background color for proper theme integration
// This ensures text is always readable against the background
const contentPanelStyle = computed(() => ({
  backgroundColor: 'var(--lumina-color-background)',
  padding: 'var(--lumina-space-xl) var(--lumina-space-3xl)'
}));

defineEmits<{
  (e: 'action', payload: any): void
}>();
</script>
