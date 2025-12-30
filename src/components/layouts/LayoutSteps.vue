<template>
    <BaseSlide :data="data">
        <div :class="['w-full flex flex-col justify-center', data.sizing === 'container' ? 'min-h-full py-12 lg:py-16' : 'min-h-screen']"
            :style="{ padding: 'var(--lumina-space-xl) var(--lumina-space-3xl)' }">
            <!-- Header -->
            <div class="text-center reveal-up max-w-4xl mx-auto" :style="{ marginBottom: 'var(--lumina-space-2xl)' }">
                <h2 class="font-bold" :style="{
                    fontFamily: 'var(--lumina-font-heading)',
                    fontSize: 'var(--lumina-text-5xl)',
                    marginBottom: 'var(--lumina-space-md)',
                    color: 'var(--lumina-color-text-safe, var(--lumina-color-text))'
                }">
                    {{ data.title }}
                </h2>
                <p v-if="data.subtitle" :style="{
                    color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Enforce safe text
                    opacity: 0.9,
                    fontSize: 'var(--lumina-text-xl)'
                }">
                    {{ data.subtitle }}
                </p>
            </div>

            <!-- Steps Grid -->
            <div :style="{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--lumina-space-xl)',
                maxWidth: '72rem',
                margin: '0 auto',
                width: '100%'
            }">
                <div v-for="(step, i) in data.steps" :key="i"
                    class="glass-panel reveal-card group relative overflow-hidden" :style="{
                        borderRadius: 'var(--lumina-card-radius)',
                        padding: 'var(--lumina-card-padding)'
                    }">
                    <!-- Step Number -->
                    <div :style="{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--lumina-space-md)',
                        marginBottom: 'var(--lumina-space-md)'
                    }">
                        <div class="flex items-center justify-center font-bold" :style="{
                            width: 'var(--lumina-step-badge-size, 2.5rem)',
                            height: 'var(--lumina-step-badge-size, 2.5rem)',
                            fontSize: 'var(--lumina-step-font-size, 1rem)',
                            background: 'linear-gradient(135deg, var(--lumina-color-primary), var(--lumina-color-secondary))',
                            color: 'white',
                            borderRadius: 'var(--lumina-radius-xl)',
                            boxShadow: '0 4px 12px rgba(var(--lumina-color-primary-rgb), 0.4)'
                        }">
                            {{ step.step }}
                        </div>
                        <h3 class="font-bold" :style="{
                            fontSize: 'var(--lumina-text-xl)',
                            color: 'var(--lumina-surface-text, var(--lumina-color-text))'
                        }">
                            {{ step.title }}
                        </h3>
                    </div>

                    <!-- Description -->
                    <p v-if="step.description" :style="{
                        color: 'var(--lumina-surface-muted, var(--lumina-color-muted))',
                        lineHeight: 'var(--lumina-leading-relaxed)',
                        fontSize: 'var(--lumina-text-base)'
                    }">
                        {{ step.description }}
                    </p>

                    <!-- Icon (optional) -->
                    <div v-if="step.icon" class="absolute top-4 right-4" :style="{
                        color: 'var(--lumina-color-primary)',
                        opacity: 0.1,
                        fontSize: 'var(--lumina-text-4xl)'
                    }">
                        <i :class="['fa-solid', step.icon.startsWith('fa-') ? step.icon : `fa-${step.icon}`]"></i>
                    </div>
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
