<template>
    <BaseSlide :data="data">
        <div
            :class="['w-full flex flex-col justify-center overflow-hidden', data.sizing === 'container' ? 'min-h-full p-4' : 'min-h-screen p-8 lg:p-12']">
            <!-- Header -->
            <div :class="['text-center reveal-up', data.sizing === 'container' ? 'mb-6' : 'mb-20']">
                <h2 :class="['font-heading font-bold mb-2', data.sizing === 'container' ? 'text-2xl' : 'text-5xl']">{{
                    data.title }}</h2>
                <p v-if="data.subtitle"
                    :class="['opacity-60 max-w-2xl mx-auto', data.sizing === 'container' ? 'text-sm' : 'text-xl']">{{
                    data.subtitle }}</p>
            </div>

            <!-- Steps Container -->
            <div :class="[
                'grid gap-4 w-full mx-auto relative',
                data.sizing === 'container'
                    ? 'grid-cols-3 max-w-xl'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl'
            ]">
                <!-- Connecting Line (Desktop, not in container) -->
                <div v-if="data.sizing !== 'container'"
                    class="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent reveal-zoom origin-left">
                </div>

                <div v-for="(step, i) in data.steps" :key="i" :class="[
                    'relative glass-panel rounded-xl border border-white/5 reveal-card group hover:bg-white/5 transition duration-500',
                    data.sizing === 'container' ? 'p-3 text-center' : 'p-8 rounded-2xl'
                ]">
                    <!-- Step Number Bubble -->
                    <div :class="[
                        'rounded-xl bg-[#111] border border-white/10 flex items-center justify-center font-bold relative z-10 group-hover:scale-105 transition duration-300 shadow-xl mx-auto',
                        data.sizing === 'container' ? 'w-12 h-12 text-lg mb-3' : 'w-20 h-20 text-2xl mb-6 lg:mx-0'
                    ]">
                        <span class="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">{{
                            step.step }}</span>
                    </div>

                    <h3 :class="['font-bold', data.sizing === 'container' ? 'text-sm mb-1' : 'text-xl mb-3']">{{
                        step.title }}</h3>
                    <p :class="['leading-relaxed opacity-60', data.sizing === 'container' ? 'text-[10px]' : 'text-sm']">
                        {{ step.description }}</p>
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
