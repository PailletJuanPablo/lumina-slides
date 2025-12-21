<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
        <!-- Logo -->
        <a :href="baseUrl" class="text-xl font-bold tracking-tighter text-white flex items-center gap-2"
            @click.prevent="$emit('navigate', 'home')">
            <span class="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>
            Lumina
        </a>

        <!-- Links -->
        <div class="hidden md:flex items-center gap-8">
            <a :href="baseUrl + '?page=examples'" @click.prevent="$emit('navigate', 'examples')"
                :class="['text-sm font-medium transition', activePage === 'examples' ? 'text-white' : 'text-white/60 hover:text-white']">Examples</a>
            <a :href="baseUrl + '?page=docs'" @click.prevent="$emit('navigate', 'docs')"
                :class="['text-sm font-medium transition', activePage === 'docs' ? 'text-white' : 'text-white/60 hover:text-white']">Docs</a>
            <a :href="baseUrl + '?page=api'" @click.prevent="$emit('navigate', 'api')"
                :class="['text-sm font-medium transition', activePage === 'api' ? 'text-white' : 'text-white/60 hover:text-white']">API</a>
        </div>

        <!-- CTA -->
        <a href="https://github.com/PailletJuanPablo/lumina-slides" target="_blank"
            class="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition">
            GitHub
        </a>
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    activePage: string
}>();

const baseUrl = import.meta.env.BASE_URL;

defineEmits(['navigate']);
</script>
