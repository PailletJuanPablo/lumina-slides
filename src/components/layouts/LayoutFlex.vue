<template>
    <BaseSlide :data="data">
        <div class="flex-layout w-full min-h-screen flex items-center justify-center" :style="containerStyle">
            <div :class="['flex w-full h-full max-w-7xl mx-auto', directionClass]" :style="mainFlexStyle">
                <template v-for="(element, i) in data.elements" :key="i">
                    <!-- Image Element -->
                    <FlexImage v-if="element.type === 'image'" :src="element.src" :alt="element.alt"
                        :fill="element.fill" :rounded="element.rounded" :container-class="getSizeClass(element.size)"
                        :container-style="getElementStyle(element)" />

                    <!-- Video Element -->
                    <div v-else-if="element.type === 'video'" :class="getSizeClass(element.size)"
                        :style="getElementStyle(element)">
                        <VideoPlayer :class="getRoundedClass(element.rounded, element.fill)" :src="element.src"
                            :poster="element.poster" :autoplay="element.autoplay ?? false" :loop="element.loop ?? false"
                            :muted="element.muted ?? false" :controls="element.controls ?? true"
                            :object-fit="element.fill !== false ? 'cover' : 'contain'" />
                    </div>

                    <!-- Content Container -->
                    <div v-else-if="element.type === 'content'" :class="['flex flex-col', getSizeClass(element.size)]"
                        :style="getContentStyle(element)">
                        <template v-for="(child, j) in element.elements" :key="j">
                            <component :is="getChildComponent(child.type)" v-bind="child" @action="handleAction" />
                        </template>
                    </div>

                    <!-- Top-level elements (title, text, bullets, etc.) -->
                    <div v-else :class="getSizeClass(element.size)" :style="getTopLevelStyle()">
                        <component :is="getChildComponent(element.type)" v-bind="element" @action="handleAction" />
                    </div>
                </template>
            </div>
        </div>
    </BaseSlide>
</template>

<script setup lang="ts">
import { computed, h, defineComponent } from 'vue';
import BaseSlide from '../base/BaseSlide.vue';
import VideoPlayer from '../base/VideoPlayer.vue';
import type { SlideFlex, FlexElement, SpacingToken, FlexSize, VAlign, HAlign, FlexElementContent } from '../../core/types';
import FlexImage from '../parts/FlexImage.vue';
import { bus } from '../../core/events';

const props = defineProps<{
    data: SlideFlex
}>();

const emit = defineEmits(['action']);

// Use CSS variable references for spacing
const spacingVarMap: Record<SpacingToken, string> = {
    'none': 'var(--lumina-space-none, 0)',
    'xs': 'var(--lumina-space-xs)',
    'sm': 'var(--lumina-space-sm)',
    'md': 'var(--lumina-space-md)',
    'lg': 'var(--lumina-space-lg)',
    'xl': 'var(--lumina-space-xl)',
    '2xl': 'var(--lumina-space-2xl)',
};

const sizeMap: Record<FlexSize, string> = {
    'auto': 'auto',
    'quarter': '25%',
    'third': '33.333%',
    'half': '50%',
    'two-thirds': '66.666%',
    'three-quarters': '75%',
    'full': '100%',
};

const valignMap: Record<VAlign, string> = {
    'top': 'flex-start',
    'center': 'center',
    'bottom': 'flex-end',
};

const halignMap: Record<HAlign, string> = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end',
};

const containerStyle = computed(() => ({
    padding: spacingVarMap[props.data.padding || 'none'],
}));

const directionClass = computed(() =>
    props.data.direction === 'vertical' ? 'flex-col' : 'flex-row'
);

const mainFlexStyle = computed(() => ({
    gap: spacingVarMap[props.data.gap || 'none'],
}));

const getSizeClass = (size?: FlexSize): string => {
    if (!size || size === 'auto') return 'flex-1';
    return '';
};

const getElementStyle = (element: FlexElement & { size?: FlexSize }) => {
    const size = element.size || 'auto';
    if (size === 'auto') return { flex: '1 1 auto' };
    return {
        flex: `0 0 ${sizeMap[size]}`,
        maxWidth: props.data.direction !== 'vertical' ? sizeMap[size] : undefined,
        maxHeight: props.data.direction === 'vertical' ? sizeMap[size] : undefined,
    };
};

const getContentStyle = (element: FlexElementContent & { size?: FlexSize }) => {
    const valign = element.valign || 'center';
    const halign = element.halign || 'left';
    const gap = element.gap || 'md';
    const padding = element.padding || 'lg';
    const size = element.size || 'auto';

    return {
        flex: size === 'auto' ? '1 1 auto' : `0 0 ${sizeMap[size]}`,
        justifyContent: valignMap[valign],
        alignItems: halignMap[halign],
        gap: spacingVarMap[gap],
        padding: spacingVarMap[padding],
    };
};

const getTopLevelStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    padding: spacingVarMap['lg'],
});

const getRoundedClass = (rounded?: string, fill?: boolean) => {
    if (fill !== false && !rounded) return 'w-full h-full';
    const map: Record<string, string> = {
        'none': 'w-full h-full rounded-none',
        'sm': 'w-full h-full rounded-sm',
        'md': 'w-full h-full rounded-md',
        'lg': 'w-full h-full rounded-lg',
        'xl': 'w-full h-full rounded-xl',
        'full': 'w-full h-full rounded-full',
    };
    return map[rounded || 'lg'] || 'w-full h-full rounded-lg';
};

const handleAction = (payload: any) => {
    emit('action', payload);
    bus.emit('action', payload);
};

// ============================================================================
// CHILD ELEMENT COMPONENTS - All using CSS variables
// ============================================================================

const FlexTitle = defineComponent({
    props: ['text', 'size', 'align'],
    setup(props) {
        const sizeMap: Record<string, string> = {
            'lg': 'var(--lumina-text-3xl)',
            'xl': 'var(--lumina-text-4xl)',
            '2xl': 'var(--lumina-text-5xl)',
            '3xl': 'var(--lumina-text-6xl)',
        };
        const fontSize = sizeMap[props.size || 'xl'] || 'var(--lumina-text-4xl)';
        const textAlign = props.align || 'left';

        return () => h('h2', {
            style: {
                fontFamily: 'var(--lumina-font-heading)',
                fontWeight: 'var(--lumina-font-weight-bold)',
                lineHeight: 'var(--lumina-leading-tight)',
                fontSize,
                textAlign,
                width: '100%',
                color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Enforce safe color
            }
        }, props.text);
    }
});

const FlexText = defineComponent({
    props: ['text', 'align', 'muted'],
    setup(props) {
        return () => h('p', {
            style: {
                fontSize: 'var(--lumina-text-lg)',
                lineHeight: 'var(--lumina-leading-relaxed)',
                // Ensure we use safe variables if possible, or result of theme.ts fix
                color: props.muted ? 'var(--lumina-color-muted)' : 'var(--lumina-color-text-secondary)',
                opacity: props.muted ? 0.9 : 1, // Increased opacity for readability
                textAlign: props.align || 'left',
                width: '100%',
            }
        }, props.text);
    }
});

const FlexBullets = defineComponent({
    props: ['items'],
    setup(props) {
        return () => h('ul', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--lumina-space-sm)',
                width: '100%'
            }
        },
            (props.items || []).map((item: string) =>
                h('li', {
                    style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--lumina-space-sm)',
                        fontSize: 'var(--lumina-text-lg)',
                        color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Fix unsafe color
                        opacity: 0.9,
                    }
                }, [
                    h('span', {
                        style: {
                            width: 'var(--lumina-space-sm)',
                            height: 'var(--lumina-space-sm)',
                            borderRadius: 'var(--lumina-radius-full)',
                            backgroundColor: 'var(--lumina-color-primary)',
                            marginTop: 'var(--lumina-space-sm)',
                            flexShrink: 0,
                            boxShadow: '0 0 var(--lumina-space-sm) rgba(var(--lumina-color-primary-rgb), 0.5)',
                        }
                    }),
                    h('span', {}, item)
                ])
            )
        );
    }
});

const FlexOrdered = defineComponent({
    props: ['items'],
    setup(props) {
        return () => h('ol', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--lumina-space-sm)',
                width: '100%'
            }
        },
            (props.items || []).map((item: string, i: number) =>
                h('li', {
                    style: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--lumina-space-sm)',
                        fontSize: 'var(--lumina-text-lg)',
                        color: 'var(--lumina-color-text-safe, var(--lumina-color-text))', // Fix unsafe color
                        opacity: 0.9,
                    }
                }, [
                    h('span', {
                        style: {
                            width: 'var(--lumina-space-xl)',
                            height: 'var(--lumina-space-xl)',
                            borderRadius: 'var(--lumina-radius-lg)',
                            backgroundColor: 'rgba(var(--lumina-color-text-rgb), 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'var(--lumina-text-sm)',
                            fontWeight: 'var(--lumina-font-weight-bold)',
                            flexShrink: 0,
                        }
                    }, i + 1),
                    h('span', {}, item)
                ])
            )
        );
    }
});

const FlexButton = defineComponent({
    props: ['label', 'action', 'variant', 'fullWidth'],
    emits: ['action'],
    setup(props, { emit }) {
        const getVariantStyle = (variant: string) => {
            const styles: Record<string, Record<string, string>> = {
                'primary': {
                    background: 'linear-gradient(to right, var(--lumina-color-primary), var(--lumina-color-secondary))',
                    color: 'var(--lumina-color-text)',
                    boxShadow: '0 var(--lumina-space-xs) var(--lumina-space-lg) var(--lumina-shadow-color)',
                },
                'secondary': {
                    backgroundColor: 'rgba(var(--lumina-color-text-rgb), 0.1)',
                    color: 'var(--lumina-color-text)',
                    border: '1px solid var(--lumina-color-border)',
                },
                'outline': {
                    backgroundColor: 'transparent',
                    color: 'var(--lumina-color-text)',
                    border: '2px solid var(--lumina-color-border)',
                },
                'ghost': {
                    backgroundColor: 'transparent',
                    color: 'var(--lumina-color-muted)',
                },
            };
            return styles[variant] || styles['primary'];
        };

        const handleClick = () => {
            emit('action', {
                type: 'click',
                label: props.label,
                value: props.action || props.label,
                origin: 'flex-button'
            });
        };

        return () => h('button', {
            style: {
                padding: 'var(--lumina-button-padding)',
                borderRadius: 'var(--lumina-button-radius)',
                fontWeight: 'var(--lumina-button-font-weight)',
                fontSize: 'var(--lumina-text-lg)',
                transition: 'all var(--lumina-transition-duration) var(--lumina-transition-easing)',
                cursor: 'pointer',
                width: props.fullWidth ? '100%' : 'auto',
                ...getVariantStyle(props.variant || 'primary'),
            },
            onClick: handleClick
        }, props.label);
    }
});

const FlexTimeline = defineComponent({
    props: ['items', 'compact'],
    setup(props) {
        return () => h('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--lumina-space-md)',
                width: '100%'
            }
        },
            (props.items || []).map((item: any) =>
                h('div', {
                    style: {
                        display: 'flex',
                        gap: 'var(--lumina-space-md)',
                        alignItems: 'flex-start',
                        borderLeft: 'var(--lumina-timeline-line-width) solid rgba(var(--lumina-color-primary-rgb), 0.3)',
                        paddingLeft: 'var(--lumina-space-md)',
                    }
                }, [
                    h('div', {
                        style: {
                            flexShrink: 0,
                            width: 'calc(var(--lumina-timeline-node-size) * 0.75)',
                            height: 'calc(var(--lumina-timeline-node-size) * 0.75)',
                            borderRadius: 'var(--lumina-radius-full)',
                            backgroundColor: 'var(--lumina-color-primary)',
                            marginLeft: 'calc(-1 * var(--lumina-space-md) - var(--lumina-timeline-line-width) / 2 - var(--lumina-timeline-node-size) * 0.375)',
                            marginTop: 'var(--lumina-space-xs)',
                            boxShadow: '0 0 var(--lumina-space-sm) rgba(var(--lumina-color-primary-rgb), 0.5)',
                        }
                    }),
                    h('div', {}, [
                        h('span', {
                            style: {
                                fontSize: 'var(--lumina-text-xs)',
                                color: 'var(--lumina-color-primary)',
                                fontWeight: 'var(--lumina-font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: 'var(--lumina-tracking-wider)',
                            }
                        }, item.date),
                        h('h4', {
                            style: {
                                fontWeight: 'var(--lumina-font-weight-bold)',
                                fontSize: 'var(--lumina-text-lg)',
                            }
                        }, item.title || item.t),
                        h('p', {
                            style: {
                                fontSize: 'var(--lumina-text-sm)',
                                color: 'var(--lumina-color-muted)',
                                opacity: 0.6,
                            }
                        }, item.description || item.desc)
                    ])
                ])
            )
        );
    }
});

const FlexStepper = defineComponent({
    props: ['items', 'compact'],
    setup(props) {
        return () => h('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--lumina-space-md)',
                width: '100%'
            }
        },
            (props.items || []).map((item: any) =>
                h('div', {
                    style: {
                        display: 'flex',
                        gap: 'var(--lumina-space-md)',
                        alignItems: 'flex-start',
                        padding: 'var(--lumina-space-md)',
                        borderRadius: 'var(--lumina-radius-lg)',
                        backgroundColor: 'rgba(var(--lumina-color-text-rgb), 0.05)',
                        border: '1px solid var(--lumina-color-border)',
                    }
                }, [
                    h('div', {
                        style: {
                            flexShrink: 0,
                            width: 'var(--lumina-step-badge-size)',
                            height: 'var(--lumina-step-badge-size)',
                            borderRadius: 'var(--lumina-radius-lg)',
                            background: 'linear-gradient(135deg, rgba(var(--lumina-color-primary-rgb), 0.2), rgba(var(--lumina-color-secondary-rgb), 0.2))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'var(--lumina-font-weight-bold)',
                            color: 'var(--lumina-color-primary)',
                        }
                    }, item.step),
                    h('div', {}, [
                        h('h4', {
                            style: { fontWeight: 'var(--lumina-font-weight-bold)' }
                        }, item.title || item.t),
                        h('p', {
                            style: {
                                fontSize: 'var(--lumina-text-sm)',
                                color: 'var(--lumina-color-muted)',
                                opacity: 0.6,
                            }
                        }, item.description || item.desc)
                    ])
                ])
            )
        );
    }
});

const FlexSpacer = defineComponent({
    props: ['size'],
    setup(props) {
        const sizeVar = spacingVarMap[(props.size || 'md') as SpacingToken] || spacingVarMap['md'];
        return () => h('div', { style: { height: sizeVar, width: '100%' } });
    }
});

const getChildComponent = (type: string) => {
    const components: Record<string, any> = {
        'title': FlexTitle,
        'text': FlexText,
        'bullets': FlexBullets,
        'ordered': FlexOrdered,
        'button': FlexButton,
        'timeline': FlexTimeline,
        'stepper': FlexStepper,
        'spacer': FlexSpacer,
    };
    return components[type] || 'div';
};
</script>

<style scoped>
.flex-layout {
    min-height: 100vh;
}
</style>
