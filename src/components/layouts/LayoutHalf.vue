<template>
  <BaseSlide :data="data" customClass="bg-[var(--lumina-bg)]">
    <div
      :class="['w-full flex flex-col lg:block relative', data.sizing === 'container' ? 'min-h-full' : 'min-h-screen']">
      <!-- Image Section -->
      <div
        :class="['relative h-[40vh] lg:h-full lg:w-1/2 overflow-hidden z-0', data.sizing === 'container' ? 'lg:absolute lg:top-0' : 'lg:fixed lg:top-0', data.imageSide === 'right' ? 'lg:right-0 order-1' : 'lg:left-0 order-1']">
        <div class="absolute inset-0 bg-black/20 z-10"></div>

        <!-- Video Handling -->
        <div v-if="data.video" class="w-full h-full relative">
          <VideoPlayer class="w-full h-full" :src="data.video.src" :poster="data.video.poster"
            :autoplay="data.video.autoplay ?? true" :loop="data.video.loop ?? true" :muted="data.video.muted ?? true"
            :controls="data.video.controls" object-fit="cover" />
        </div>

        <!-- Image Handling -->
        <img v-else-if="data.image" :src="data.image"
          :class="['w-full h-full object-cover reveal-img scale-110 origin-center transition-opacity duration-700', isLoaded ? 'opacity-100' : 'opacity-0']"
          alt="Slide Image" @load="isLoaded = true"
          @error="(e: any) => { isLoaded = true; e.target.src = 'https://placehold.co/1920x1080/1a1a1a/666?text=Image+Not+Found'; }">
      </div>

      <!-- Content Section -->
      <div
        :class="['relative z-10 w-full lg:w-1/2 min-h-[60vh] flex flex-col justify-center p-8 lg:p-24 order-2 bg-[#050505]', data.imageSide === 'right' ? 'lg:mr-[50%]' : 'lg:ml-[50%]', data.sizing === 'container' ? 'lg:min-h-full' : 'lg:min-h-screen']">
        <div class="reveal-content max-w-xl">
          <!-- Tag -->
          <span class="text-xs font-bold uppercase tracking-[0.2em] mb-6 block"
            style="color: var(--lumina-colors-primary, #3b82f6);">{{ data.tag }}</span>

          <!-- Title -->
          <h1 class="text-4xl lg:text-6xl font-heading font-bold leading-tight mb-8 text-white">{{ data.title }}</h1>

          <!-- Paragraphs -->
          <div class="space-y-6 text-lg leading-relaxed font-light mb-10"
            style="color: var(--lumina-colors-muted, #9ca3af);">
            <p v-for="(p, i) in data.paragraphs" :key="i">{{ p }}</p>
          </div>

          <!-- CTA -->
          <div v-if="data.cta" class="pt-6 border-t border-white/10">
            <button @click="$emit('action', { type: 'cta', label: data.cta })"
              class="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition flex items-center gap-3">
              {{ data.cta }} <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </BaseSlide>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import VideoPlayer from '../base/VideoPlayer.vue';
import type { SlideHalf } from '../../core/types';

defineProps<{
  data: SlideHalf
}>();

const isLoaded = ref(false);

defineEmits<{
  (e: 'action', payload: any): void
}>();
</script>
