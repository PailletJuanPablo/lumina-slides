<template>
  <div ref="container" class="w-full min-h-full relative text-white" :class="customClass">
    <!-- Dynamic Background Layer -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Ambient Orb can also be moved here or kept in Deck -->
      <slot name="background"></slot>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransition } from '../../composables/useTransition';
import type { BaseSlideData } from '../../core/types';

/**
 * BASE SLIDE COMPONENT
 * The standard wrapper for all slide layouts.
 * 
 * IMPROVEMENTS:
 * 1. Unified Animation Hook: Automatically triggers animations on mount.
 * 2. Slot Structure: Separate Z-layers for Background vs Content.
 * 3. Class Injection: Allows custom classes via props.
 */

const props = defineProps<{
  data: BaseSlideData;
  customClass?: string;
}>();

const container = ref<HTMLElement | null>(null);

// Initialize Animation Logic
useTransition(container);

</script>
