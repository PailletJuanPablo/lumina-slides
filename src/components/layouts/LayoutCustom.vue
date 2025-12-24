<template>
    <BaseSlide :data="data">
        <div :class="[
            'custom-slide-wrapper relative w-full overflow-hidden',
            data.sizing === 'container' ? 'h-full' : 'min-h-screen'
        ]">
            <!-- HTML Content -->
            <div class="custom-html-content w-full h-full" v-html="sanitizedHtml"></div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideCustom } from '../../core/types';

const props = defineProps<{
    data: SlideCustom
}>();

// Generate unique ID for this instance
const styleId = `custom-slide-${Math.random().toString(36).slice(2, 10)}`;

/**
 * Inject CSS into <head> as a style element
 */
function injectStyles() {
    // Remove existing style if any
    removeStyles();

    if (!props.data.css) return;

    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = props.data.css;
    document.head.appendChild(styleEl);
}

function removeStyles() {
    const existing = document.getElementById(styleId);
    if (existing) {
        existing.remove();
    }
}

// Inject on mount, update on data change
onMounted(() => {
    injectStyles();
});

// Watch for css changes
watch(() => props.data.css, () => {
    injectStyles();
});

onUnmounted(() => {
    removeStyles();
});

/**
 * Basic HTML sanitization - removes script tags and event handlers
 */
const sanitizedHtml = computed(() => {
    if (!props.data.html) return '';

    return props.data.html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/javascript:/gi, '');
});
</script>

<style scoped>
.custom-slide-wrapper {
    /* Wrapper styles */
}

.custom-html-content {
    /* Allow custom content to fill the space */
    display: block;
}

.custom-html-content :deep(*) {
    box-sizing: border-box;
}
</style>
