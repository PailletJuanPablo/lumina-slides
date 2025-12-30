<template>
    <BaseSlide :data="data">
        <div :class="['w-full flex flex-col justify-center', data.sizing === 'container' ? 'min-h-full' : 'min-h-screen']"
            :style="{ padding: 'var(--lumina-space-xl) var(--lumina-space-3xl)' }">
            <!-- Header -->
            <div class="reveal-up text-center lg:text-left max-w-6xl"
                :style="{ marginBottom: 'var(--lumina-space-2xl)' }">
                <h2 class="font-bold" :style="{
                    fontFamily: 'var(--lumina-font-heading)',
                    fontSize: data.sizing === 'container' ? 'var(--lumina-text-3xl)' : 'var(--lumina-text-5xl)',
                    marginBottom: 'var(--lumina-space-md)',
                    color: 'var(--lumina-color-text-safe, var(--lumina-color-text))',
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }">
                    {{ data.title }}
                </h2>
                <p v-if="data.description" :style="{
                    color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Enforce safe text
                    opacity: 0.9,
                    fontSize: data.sizing === 'container' ? 'var(--lumina-text-sm)' : 'var(--lumina-text-xl)'
                }">
                    {{ data.description }}
                </p>
            </div>

            <!-- Grid -->
            <div :style="{
                display: 'grid',
                gridTemplateColumns: data.sizing === 'container' ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: data.sizing === 'container' ? 'var(--lumina-space-md)' : 'var(--lumina-space-lg)'
            }">
                <div v-for="(feature, i) in data.features" :key="i" class="glass-panel reveal-card group" :style="{
                    borderRadius: 'var(--lumina-card-radius)',
                    padding: data.sizing === 'container' ? 'var(--lumina-space-lg)' : 'var(--lumina-card-padding)',
                    borderTop: '1px solid var(--lumina-color-border-subtle)',
                    transition: 'all var(--lumina-transition-duration) var(--lumina-transition-easing)'
                }">
                    <!-- Icon -->
                    <div class="flex items-center justify-center group-hover:scale-110" :style="{
                        color: 'white',
                        background: 'linear-gradient(135deg, var(--lumina-color-primary) 0%, var(--lumina-color-secondary) 100%)',
                        width: data.sizing === 'container' ? 'var(--lumina-space-xl)' : 'var(--lumina-space-2xl)',
                        height: data.sizing === 'container' ? 'var(--lumina-space-xl)' : 'var(--lumina-space-2xl)',
                        borderRadius: 'var(--lumina-radius-xl)',
                        marginBottom: data.sizing === 'container' ? 'var(--lumina-space-md)' : 'var(--lumina-space-lg)',
                        fontSize: 'var(--lumina-text-xl)',
                        boxShadow: '0 4px 12px rgba(var(--lumina-color-primary-rgb), 0.3)',
                        transition: 'all var(--lumina-transition-duration) var(--lumina-transition-easing)'
                    }">
                        <i
                            :class="['fa-solid', (feature.icon || 'star').startsWith('fa-') ? feature.icon : `fa-${feature.icon || 'star'}`]"></i>
                    </div>
                    <!-- Title -->
                    <h3 class="font-bold" :style="{
                        color: 'var(--lumina-surface-text, var(--lumina-color-text))',
                        fontSize: data.sizing === 'container' ? 'var(--lumina-text-lg)' : 'var(--lumina-text-2xl)',
                        marginBottom: 'var(--lumina-space-sm)'
                    }">
                        {{ feature.title }}
                    </h3>
                    <!-- Description -->
                    <p :style="{
                        color: 'var(--lumina-surface-muted, var(--lumina-color-muted))',
                        fontSize: data.sizing === 'container' ? 'var(--lumina-text-sm)' : 'var(--lumina-text-base)',
                        lineHeight: 'var(--lumina-leading-relaxed)'
                    }">
                        {{ feature.desc }}
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
