<template>
    <BaseSlide :data="data">
        <div
            :class="['w-full flex flex-col justify-center p-8 lg:p-16', data.sizing === 'container' ? 'min-h-full py-8' : 'min-h-screen']">
            <!-- Header -->
            <div v-if="data.title || data.subtitle" class="text-center mb-8 reveal-up">
                <h2 v-if="data.title" class="text-4xl lg:text-5xl font-heading font-bold mb-3"
                    :style="{ color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }">
                    {{ data.title }}</h2>
                <p v-if="data.subtitle" class="text-lg lg:text-xl"
                    :style="{ color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', opacity: 0.8 }">{{
                        data.subtitle }}</p>
            </div>

            <!-- Error State -->
            <div v-if="chartError" class="flex-1 flex items-center justify-center">
                <div class="text-center p-8 bg-red-500/10 border border-red-500/30 rounded-xl max-w-lg">
                    <svg class="w-12 h-12 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p class="text-red-300 font-medium mb-2">Chart.js Required</p>
                    <code class="text-sm bg-black/30 px-3 py-1 rounded text-red-200">npm install chart.js</code>
                </div>
            </div>

            <!-- Loading State -->
            <div v-else-if="chartLoading" class="flex-1 flex items-center justify-center">
                <div class="animate-pulse text-white/40">Loading chart...</div>
            </div>

            <!-- Chart Container -->
            <div v-else class="flex-1 flex items-center justify-center reveal-zoom max-w-5xl mx-auto w-full">
                <div class="w-full h-full min-h-[300px] lg:min-h-[400px] relative">
                    <canvas ref="chartCanvas"></canvas>
                </div>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideChart, ChartDataset } from '../../core/types';

// Chart.js is loaded dynamically - it's an optional dependency
let ChartJS: typeof import('chart.js').Chart | null = null;
const chartError = ref<string | null>(null);
const chartLoading = ref(true);

const props = defineProps<{
    data: SlideChart
}>();

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: any = null;

// Try to load Chart.js dynamically
const loadChartJS = async () => {
    try {
        const chartModule = await import('chart.js');
        ChartJS = chartModule.Chart;
        ChartJS.register(...chartModule.registerables);
        chartLoading.value = false;
        return true;
    } catch (e) {
        chartError.value = 'Chart.js is required for chart slides. Install it with: npm install chart.js';
        chartLoading.value = false;
        console.warn('[Lumina] chart.js not found. Install with: npm install chart.js');
        return false;
    }
};

// Color token resolver
const resolveColor = (colorToken: string | undefined, index: number): string => {
    if (!colorToken) {
        // Default color palette
        const defaultColors = [
            'rgba(59, 130, 246, 0.8)',   // Blue
            'rgba(16, 185, 129, 0.8)',   // Green
            'rgba(245, 158, 11, 0.8)',   // Amber
            'rgba(239, 68, 68, 0.8)',    // Red
            'rgba(139, 92, 246, 0.8)',   // Purple
            'rgba(236, 72, 153, 0.8)',   // Pink
        ];
        return defaultColors[index % defaultColors.length];
    }

    // Resolve Lumina color tokens with strict fallbacks
    switch (colorToken) {
        case 'c:p':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-primary').trim() || '#3b82f6';
        case 'c:s':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-secondary').trim() || '#10b981';
        case 'c:m':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-muted').trim() || '#9ca3af';
        default:
            // If valid definition, return it
            if (colorToken && (colorToken.startsWith('#') || colorToken.startsWith('rgb') || colorToken.startsWith('hsl'))) return colorToken;
            // If known color name (red, blue), return it
            if (colorToken && /^[a-z]+$/i.test(colorToken)) return colorToken;

            // Fallback for empty/undefined/invalid tokens
            return resolveColor(undefined, index);
    }
};

// Generate smart palette derived from theme identity
const generateSegmentColors = (datasets: ChartDataset[], labelsCount: number): string[] => {
    const colors: string[] = [];

    // Get theme colors from CSS variables
    const style = getComputedStyle(document.body);
    const primary = style.getPropertyValue('--lumina-color-primary').trim() || '#3b82f6';
    const secondary = style.getPropertyValue('--lumina-color-secondary').trim() || '#8b5cf6';
    const accent = style.getPropertyValue('--lumina-color-accent').trim() || '#06b6d4';

    // Create an intelligent palette based on brand identity
    // We alternate between brand colors and variations
    const basePalette = [
        primary,
        secondary,
        accent,
        // Generate variations (simulated by opacity or mixing - hard to do perfectly in JS without lib, 
        // but we can assume these are distinct enough for 3 categories)
    ];

    // If we need more colors, we loop or use fallbacks that match the vibe
    const extendedPalette = [
        ...basePalette,
        '#f59e0b', // construction/warning (often useful in business/engine contexts)
        '#10b981', // success
        '#ef4444'  // danger
    ];

    // For Pie/Doughnut charts, if we only have one dataset and one color, 
    // it results in a mono-colored chart which is often not desired.
    // We force using the extended palette to differentiate segments.
    for (let i = 0; i < labelsCount; i++) {
        // If it's a multi-dataset chart (e.g. bar), we might want to respect the dataset color.
        // But for single-dataset Pie charts, we ignore the single color to show variety.
        if (datasets.length === 1 && datasets[0].color && labelsCount > 1) {
            colors.push(extendedPalette[i % extendedPalette.length]);
        }
        else if (datasets[0]?.color) {
            colors.push(resolveColor(datasets[0].color, i));
        } else {
            colors.push(extendedPalette[i % extendedPalette.length]);
        }
    }
    return colors;
};

const chartConfig = computed(() => {
    const { chartType, data } = props.data;
    const isPieType = chartType === 'pie' || chartType === 'doughnut';

    return {
        type: chartType,
        data: {
            labels: data.labels,
            datasets: data.datasets.map((dataset, index) => ({
                label: dataset.label,
                data: dataset.values,
                backgroundColor: isPieType
                    ? generateSegmentColors(data.datasets, data.labels.length)
                    : resolveColor(dataset.color, index),
                borderColor: isPieType
                    ? 'rgba(0, 0, 0, 0.2)'
                    : resolveColor(dataset.color, index),
                borderWidth: isPieType ? 2 : 2,
                tension: chartType === 'line' ? 0.4 : 0,
                fill: chartType === 'line' ? false : undefined,
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom' as const,
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--lumina-color-text').trim() || '#ffffff',
                        padding: 20,
                        font: {
                            family: 'Inter, system-ui, sans-serif',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: 'rgba(255, 255, 255, 0.8)',
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: {
                        family: 'Inter, system-ui, sans-serif',
                        weight: 'bold' as const
                    },
                    bodyFont: {
                        family: 'Inter, system-ui, sans-serif'
                    }
                }
            },
            scales: isPieType ? {} : {
                x: {
                    grid: {
                        color: 'rgba(128, 128, 128, 0.1)'
                    },
                    ticks: {
                        color: getComputedStyle(document.body).getPropertyValue('--lumina-color-muted').trim() || '#9ca3af',
                        font: {
                            family: 'Inter, system-ui, sans-serif'
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(128, 128, 128, 0.1)'
                    },
                    ticks: {
                        color: getComputedStyle(document.body).getPropertyValue('--lumina-color-muted').trim() || '#9ca3af',
                        font: {
                            family: 'Inter, system-ui, sans-serif'
                        }
                    }
                }
            }
        }
    };
});

const createChart = () => {
    if (!chartCanvas.value || !ChartJS) return;

    // Destroy existing chart
    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = chartCanvas.value.getContext('2d');
    if (!ctx) return;

    chartInstance = new ChartJS(ctx, chartConfig.value as any);
};

onMounted(async () => {
    // Load Chart.js dynamically
    const loaded = await loadChartJS();
    if (loaded) {
        // Small delay to ensure canvas is ready
        setTimeout(createChart, 50);
    }
});

onUnmounted(() => {
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
});

// Watch for data changes
watch(() => props.data, () => {
    createChart();
}, { deep: true });
</script>
