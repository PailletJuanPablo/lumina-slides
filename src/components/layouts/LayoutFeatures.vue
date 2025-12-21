<template>
    <BaseSlide :data="data">
        <div
            :class="['w-full flex flex-col justify-center p-8 lg:p-24', data.sizing === 'container' ? 'min-h-full' : 'min-h-screen']">
            <!-- Header -->
            <div class="mb-16 reveal-up text-center lg:text-left max-w-4xl">
                <h2 :class="['font-heading font-bold mb-4', data.sizing === 'container' ? 'text-3xl' : 'text-5xl']">{{
                    data.title }}</h2>
                <p :class="[data.sizing === 'container' ? 'text-sm' : 'text-xl']"
                    style="color: var(--lumina-colors-muted, #9ca3af);">{{ data.description }}</p>
            </div>

            <!-- Grid -->
            <div
                :class="['grid w-full', data.sizing === 'container' ? 'grid-cols-1 gap-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6']">
                <div v-for="(feature, i) in data.features" :key="i"
                    :class="['glass-panel rounded-3xl hover:bg-white/5 transition duration-500 reveal-card group border-t border-white/5 hover:border-blue-500/50', data.sizing === 'container' ? 'p-6' : 'p-8']">
                    <div :class="['rounded-xl bg-white/5 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition duration-300', data.sizing === 'container' ? 'w-10 h-10 mb-4' : 'w-12 h-12 mb-6']"
                        style="color: var(--lumina-colors-primary, #3b82f6);">
                        <i
                            :class="['fa-solid', feature.icon.startsWith('fa-') ? feature.icon : `fa-${feature.icon}`]"></i>
                    </div>
                    <h3 :class="['font-bold mb-3 text-white', data.sizing === 'container' ? 'text-lg' : 'text-2xl']">{{
                        feature.title }}</h3>
                    <p class="leading-relaxed" :class="[data.sizing === 'container' ? 'text-sm' : '']"
                        style="color: var(--lumina-colors-muted, #9ca3af);">{{ feature.desc }}
                    </p>
                </div>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideFeatures } from '../../core/types';

defineProps<{
    data: SlideFeatures
}>();
</script>
