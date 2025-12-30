<template>
    <BaseSlide :data="data">
        <div :class="['w-full flex flex-col justify-center', data.sizing === 'container' ? 'min-h-full py-12 lg:py-16' : 'min-h-screen']"
            :style="{ padding: 'var(--lumina-space-xl) var(--lumina-space-3xl)' }">
            <!-- Header -->
            <div class="text-center mb-16 reveal-up">
                <h2 class="font-bold mb-4" :style="{
                    fontFamily: 'var(--lumina-font-heading)',
                    fontSize: 'var(--lumina-text-5xl)',
                    lineHeight: 'var(--lumina-leading-tight)',
                    color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }">
                    {{ data.title }}
                </h2>
                <p v-if="data.subtitle" :style="{
                    color: 'var(--lumina-color-muted-safe, var(--lumina-color-muted))',
                    fontSize: 'var(--lumina-text-xl)',
                    opacity: 0.8
                }">
                    {{ data.subtitle }}
                </p>
            </div>

            <!-- Timeline Container -->
            <div class="relative max-w-6xl mx-auto w-full">
                <!-- Vertical Line -->
                <div class="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 reveal-zoom origin-top" :style="{
                    width: 'var(--lumina-timeline-line-width, 2px)',
                    backgroundColor: 'var(--lumina-timeline-line-color, var(--lumina-color-border))'
                }">
                </div>

                <!-- Items -->
                <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--lumina-space-2xl)' }">
                    <div v-for="(item, i) in data.timeline" :key="i"
                        :class="['relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center reveal-card', i % 2 === 0 ? '' : 'md:flex-row-reverse']">
                        <!-- Date/Label Side -->
                        <div
                            :class="['w-full md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center', i % 2 === 0 ? 'md:pr-12 md:text-right md:items-end' : 'md:pl-12 md:text-left md:items-start']">
                            <span class="font-bold uppercase mb-1" :style="{
                                color: 'var(--lumina-color-primary)',
                                letterSpacing: 'var(--lumina-tracking-widest)',
                                fontSize: 'var(--lumina-text-sm)'
                            }">
                                {{ item.date }}
                            </span>
                            <h3 class="font-bold" :style="{
                                fontSize: 'var(--lumina-text-2xl)',
                                color: 'var(--lumina-color-text-safe, var(--lumina-color-text))'
                            }">
                                {{ item.title || item.t }}
                            </h3>
                        </div>

                        <!-- Center Node -->
                        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 rounded-full z-10 animate-pulse-glow"
                            :style="{
                                width: 'var(--lumina-timeline-node-size, 0.875rem)',
                                height: 'var(--lumina-timeline-node-size, 0.875rem)',
                                background: 'linear-gradient(135deg, var(--lumina-color-primary), var(--lumina-color-secondary))',
                                border: '3px solid var(--lumina-color-background)'
                            }">
                        </div>

                        <!-- Description Side -->
                        <div
                            :class="['w-full md:w-1/2 pl-12 md:pl-0', i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right']">
                            <p class="leading-relaxed" :style="{
                                color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
                                opacity: 0.9,
                                fontSize: 'var(--lumina-text-lg)',
                                lineHeight: 'var(--lumina-leading-relaxed)'
                            }">
                                {{ item.description || item.desc }}
                            </p>
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
