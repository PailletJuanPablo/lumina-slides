<template>
    <div class="h-full w-full flex items-center justify-center bg-black relative overflow-hidden group">
        <!-- Video Player -->
        <VideoPlayer class="absolute inset-0 w-full h-full" :src="data.video.src" :poster="data.video.poster"
            :autoplay="data.video.autoplay" :loop="data.video.loop" :muted="data.video.muted"
            :controls="data.video.controls" object-fit="cover" />

        <!-- Optional Overlay Title -->
        <div v-if="data.title"
            class="absolute bottom-12 left-12 z-10 px-6 py-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 class="text-white font-bold text-xl">{{ data.title }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { SlideVideo } from '../../core/types';
import VideoPlayer from '../base/VideoPlayer.vue';

const props = defineProps({
    data: {
        type: Object as PropType<SlideVideo>,
        required: true
    }
});

// Video logic moved to VideoPlayer component

</script>
