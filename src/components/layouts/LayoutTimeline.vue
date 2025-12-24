<template>
    <BaseSlide :data="data">
        <div
            :class="['w-full flex flex-col justify-center p-8 lg:p-24', data.sizing === 'container' ? 'min-h-full py-12 lg:py-16' : 'min-h-screen']">
            <!-- Header -->
            <div class="text-center mb-16 reveal-up">
                <h2 class="text-5xl font-heading font-bold mb-4">{{ data.title }}</h2>
                <p v-if="data.subtitle" class="text-xl opacity-60">{{ data.subtitle }}</p>
            </div>

            <!-- Timeline Container -->
            <div class="relative max-w-6xl mx-auto w-full">
                <!-- Vertical Line -->
                <div
                    class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 reveal-zoom origin-top">
                </div>

                <!-- Items -->
                <div class="space-y-12">
                    <div v-for="(item, i) in data.timeline" :key="i"
                        :class="['relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center reveal-card', i % 2 === 0 ? '' : 'md:flex-row-reverse']">
                        <!-- Date/Label Side -->
                        <div
                            :class="['w-full md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center', i % 2 === 0 ? 'md:pr-12 md:text-right md:items-end' : 'md:pl-12 md:text-left md:items-start']">
                            <span class="text-sm font-bold tracking-widest uppercase text-blue-400 mb-1">{{ item.date
                            }}</span>
                            <h3 class="text-2xl font-bold">{{ item.title || item.t }}</h3>
                        </div>

                        <!-- Center Node -->
                        <div
                            class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] border-4 border-[#030303] z-10">
                        </div>

                        <!-- Description Side -->
                        <div
                            :class="['w-full md:w-1/2 pl-12 md:pl-0', i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right']">
                            <p class="text-lg opacity-60 leading-relaxed">{{ item.description || item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideTimeline } from '../../core/types';

defineProps<{
    data: SlideTimeline
}>();
</script>
