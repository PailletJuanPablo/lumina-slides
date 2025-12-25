<template>
    <BaseSlide :data="data">
        <div
            :class="['w-full flex flex-col justify-center p-8 lg:p-16', data.sizing === 'container' ? 'min-h-full py-8' : 'min-h-screen']">
            <!-- Header -->
            <div v-if="data.title || data.subtitle" class="text-center mb-8 reveal-up">
                <h2 v-if="data.title" class="text-4xl lg:text-5xl font-heading font-bold mb-3">{{ data.title }}</h2>
                <p v-if="data.subtitle" class="text-lg lg:text-xl opacity-60">{{ data.subtitle }}</p>
            </div>

            <!-- Chart Container -->
            <div class="flex-1 flex items-center justify-center reveal-zoom max-w-5xl mx-auto w-full">
                <div class="w-full h-full min-h-[300px] lg:min-h-[400px] relative">
                    <canvas ref="chartCanvas"></canvas>
                </div>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { Chart, registerables } from 'chart.js';
import BaseSlide from '../base/BaseSlide.vue';
import type { SlideChart, ChartDataset } from '../../core/types';

// Register Chart.js components
Chart.register(...registerables);

const props = defineProps<{
    data: SlideChart
}>();

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

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

    // Resolve Lumina color tokens
    switch (colorToken) {
        case 'c:p':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-primary').trim() || '#3b82f6';
        case 'c:s':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-secondary').trim() || '#10b981';
        case 'c:m':
            return getComputedStyle(document.documentElement).getPropertyValue('--lumina-colors-muted').trim() || '#9ca3af';
        default:
            return colorToken;
    }
};

// Generate colors for pie/doughnut charts (one color per segment)
const generateSegmentColors = (datasets: ChartDataset[], labelsCount: number): string[] => {
    const colors: string[] = [];
    for (let i = 0; i < labelsCount; i++) {
        colors.push(resolveColor(datasets[0]?.color, i));
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
                        color: 'rgba(255, 255, 255, 0.7)',
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
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)',
                        font: {
                            family: 'Inter, system-ui, sans-serif'
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.6)',
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
    if (!chartCanvas.value) return;

    // Destroy existing chart
    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = chartCanvas.value.getContext('2d');
    if (!ctx) return;

    chartInstance = new Chart(ctx, chartConfig.value as any);
};

onMounted(() => {
    // Small delay to ensure canvas is ready
    setTimeout(createChart, 50);
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
