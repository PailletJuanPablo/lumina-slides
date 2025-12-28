<template>
    <div :class="containerClass" :style="containerStyle">
        <img :src="src" :alt="alt || ''" :class="[
            'w-full h-full transition-opacity duration-700',
            fill !== false ? 'object-cover' : 'object-contain',
            roundedClass,
            isLoaded ? 'opacity-100' : 'opacity-0'
        ]" @load="onLoad" @error="onError" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
    src: string;
    alt?: string;
    fill?: boolean;
    rounded?: string;
    containerClass?: string;
    containerStyle?: any;
}>();

const isLoaded = ref(false);

const onLoad = () => {
    isLoaded.value = true;
};

const onError = (e: any) => {
    isLoaded.value = true;
    e.target.src = 'https://placehold.co/800x600/1a1a1a/666?text=Image+Not+Found';
};

const roundedClass = computed(() => {
    if (props.fill !== false && !props.rounded) return '';
    const map: Record<string, string> = {
        'none': 'rounded-none',
        'sm': 'rounded-sm',
        'md': 'rounded-md',
        'lg': 'rounded-lg',
        'xl': 'rounded-xl',
        'full': 'rounded-full',
    };
    return map[props.rounded || 'lg'] || 'rounded-lg';
});
</script>
