<template>
    <BaseSlide :data="data">
        <div class="min-h-screen w-full flex flex-col justify-center p-8 lg:p-12">
            <!-- Header -->
            <div class="mb-20 text-center reveal-up">
                <h2 class="text-5xl font-heading font-bold mb-4">{{ data.title }}</h2>
                <p v-if="data.subtitle" class="text-xl opacity-60 max-w-2xl mx-auto">{{ data.subtitle }}</p>
            </div>

            <!-- Steps Container -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto relative">
                <!-- Connecting Line (Desktop) -->
                <div
                    class="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent reveal-zoom origin-left">
                </div>

                <div v-for="(step, i) in data.steps" :key="i"
                    class="relative glass-panel p-8 rounded-2xl border border-white/5 reveal-card group hover:bg-white/5 transition duration-500">
                    <!-- Step Number Bubble -->
                    <div
                        class="w-20 h-20 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-2xl font-bold mb-6 relative z-10 group-hover:scale-110 transition duration-300 shadow-2xl mx-auto lg:mx-0">
                        <span class="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">{{
                            step.step }}</span>
                    </div>

                    <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                    <p class="text-sm leading-relaxed opacity-60">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideSteps } from '../../core/types';

defineProps<{
    data: SlideSteps
}>();
</script>
