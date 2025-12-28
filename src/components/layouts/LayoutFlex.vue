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
                        <VideoPlayer :class="g_oundedClass(element.rounded, element.fill)" :src="element.src"
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
import type { SlideFlex, FlexElement, FlexChildElement, SpacingToken, FlexSize, VAlign, HAlign, FlexElementContent } from '../../core/types';
import FlexImage from '../parts/FlexImage.vue';
import { bus } from '../../core/events';

const props = defineProps<{
    data: SlideFlex
}>();

const emit = defineEmits(['action']);

// Spacing token to rem mapping
const spacingMap: Record<SpacingToken, string> = {
    'none': '0',
    'xs': '0.5rem',
    'sm': '0.75rem',
    'md': '1rem',
    'lg': '1.5rem',
    'xl': '2rem',
    '2xl': '3rem',
};

// Size token to flex-basis mapping
const sizeMap: Record<FlexSize, string> = {
    'auto': 'auto',
    'quarter': '25%',
    'third': '33.333%',
    'half': '50%',
    'two-thirds': '66.666%',
    'three-quarters': '75%',
    'full': '100%',
};

// Vertical alignment mapping
const valignMap: Record<VAlign, string> = {
    'top': 'flex-start',
    'center': 'center',
    'bottom': 'flex-end',
};

// Horizontal alignment mapping
const halignMap: Record<HAlign, string> = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end',
};

const containerStyle = computed(() => ({
    padding: spacingMap[props.data.padding || 'none'],
}));

const directionClass = computed(() =>
    props.data.direction === 'vertical' ? 'flex-col' : 'flex-row'
);

const mainFlexStyle = computed(() => ({
    gap: spacingMap[props.data.gap || 'none'],
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
        gap: spacingMap[gap],
        padding: spacingMap[padding],
    };
};

const getTopLevelStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    padding: spacingMap['lg'],
});



// Helper for templates
const g_oundedClass = (r?: string, f?: boolean) => {
    return `w-full h-full ${getRoundedClass(r, f)}`;
};

const getRoundedClass = (rounded?: string, fill?: boolean) => {
    if (fill !== false && !rounded) return '';
    const map: Record<string, string> = {
        'none': 'rounded-none',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        'xl': 'rounded-xl',
        'full': 'rounded-full',
    };
    return map[rounded || 'lg'] || 'rounded-lg';
};

const handleAction = (payload: any) => {
    emit('action', payload);
    bus.emit('action', payload);
};

// Child element components
const FlexTitle = defineComponent({
    props: ['text', 'size', 'align'],
    setup(props) {
        const sizeClass: Record<string, string> = {
            'lg': 'text-3xl lg:text-4xl',
            'xl': 'text-4xl lg:text-5xl',
            '2xl': 'text-5xl lg:text-6xl',
            '3xl': 'text-6xl lg:text-7xl',
        };
        const finalSize = sizeClass[props.size || 'xl'] || 'text-4xl lg:text-5xl';

        const alignClass: Record<string, string> = {
            'left': 'text-left',
            'center': 'text-center',
            'right': 'text-right',
        };
        const finalAlign = alignClass[props.align || 'left'] || 'text-left';

        return () => h('h2', {
            class: `font-heading font-bold leading-tight ${finalSize} ${finalAlign} w-full`
        }, props.text);
    }
});

const FlexText = defineComponent({
    props: ['text', 'align', 'muted'],
    setup(props) {
        const alignClass: Record<string, string> = {
            'left': 'text-left',
            'center': 'text-center',
            'right': 'text-right',
        };
        const finalAlign = alignClass[props.align || 'left'] || 'text-left';

        return () => h('p', {
            class: `text-lg lg:text-xl leading-relaxed w-full ${finalAlign} ${props.muted ? 'opacity-60' : 'opacity-80'}`
        }, props.text);
    }
});

const FlexBullets = defineComponent({
    props: ['items'],
    setup(props) {
        return () => h('ul', { class: 'space-y-3 w-full' },
            (props.items || []).map((item: string) =>
                h('li', { class: 'flex items-start gap-3 text-lg opacity-80' }, [
                    h('span', { class: 'w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]' }),
                    h('span', {}, item)
                ])
            )
        );
    }
});

const FlexOrdered = defineComponent({
    props: ['items'],
    setup(props) {
        return () => h('ol', { class: 'space-y-3 w-full' },
            (props.items || []).map((item: string, i: number) =>
                h('li', { class: 'flex items-start gap-3 text-lg opacity-80' }, [
                    h('span', {
                        class: 'w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold flex-shrink-0'
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
        const variantClasses: Record<string, string> = {
            'primary': 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl',
            'secondary': 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
            'outline': 'bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/5',
            'ghost': 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
        };
        const finalVariant = variantClasses[props.variant || 'primary'] || variantClasses['primary'];

        const handleClick = () => {
            emit('action', {
                type: 'click',
                label: props.label,
                value: props.action || props.label,
                origin: 'flex-button'
            });
        };

        return () => h('button', {
            class: `px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer hover:scale-105 ${finalVariant} ${props.fullWidth ? 'w-full' : ''}`,
            onClick: handleClick
        }, props.label);
    }
});

const FlexTimeline = defineComponent({
    props: ['items', 'compact'],
    setup(props) {
        return () => h('div', { class: 'w-full space-y-4' },
            (props.items || []).map((item: any) =>
                h('div', { class: 'flex gap-4 items-start border-l-2 border-blue-500/30 pl-4' }, [
                    h('div', { class: 'flex-shrink-0 w-3 h-3 rounded-full bg-blue-500 -ml-[22px] mt-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]' }),
                    h('div', {}, [
                        h('span', { class: 'text-xs text-blue-400 font-bold uppercase tracking-wider' }, item.date),
                        h('h4', { class: 'font-bold text-lg' }, item.title || item.t),
                        h('p', { class: 'text-sm opacity-60' }, item.description || item.desc)
                    ])
                ])
            )
        );
    }
});

const FlexStepper = defineComponent({
    props: ['items', 'compact'],
    setup(props) {
        return () => h('div', { class: 'w-full space-y-4' },
            (props.items || []).map((item: any) =>
                h('div', { class: 'flex gap-4 items-start p-4 rounded-lg bg-white/5 border border-white/10' }, [
                    h('div', {
                        class: 'flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center font-bold text-blue-400'
                    }, item.step),
                    h('div', {}, [
                        h('h4', { class: 'font-bold' }, item.title || item.t),
                        h('p', { class: 'text-sm opacity-60' }, item.description || item.desc)
                    ])
                ])
            )
        );
    }
});

const FlexSpacer = defineComponent({
    props: ['size'],
    setup(props) {
        const spacingKey = (props.size || 'md') as SpacingToken;
        const sizeValue = spacingMap[spacingKey] || spacingMap['md'];
        return () => h('div', { style: { height: sizeValue, width: '100%' } });
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
