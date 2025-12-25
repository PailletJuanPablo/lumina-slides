<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
        <!-- Logo -->
        <a :href="baseUrl" class="text-xl font-bold tracking-tighter text-white flex items-center gap-2"
            @click.prevent="$emit('navigate', 'home')">
            <span class="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>
            Lumina
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
            <a :href="baseUrl + '?page=examples'" @click.prevent="$emit('navigate', 'examples')"
                :class="['text-sm font-medium transition', activePage === 'examples' ? 'text-white' : 'text-white/60 hover:text-white']">Examples</a>
            <a :href="baseUrl + '?page=docs'" @click.prevent="$emit('navigate', 'docs')"
                :class="['text-sm font-medium transition', activePage === 'docs' ? 'text-white' : 'text-white/60 hover:text-white']">Docs</a>
            <a :href="baseUrl + '?page=playground'" @click.prevent="$emit('navigate', 'playground')"
                :class="['text-sm font-medium transition', activePage === 'playground' ? 'text-white' : 'text-white/60 hover:text-white']">Playground</a>
            <a :href="baseUrl + '?page=prompt-builder'" @click.prevent="$emit('navigate', 'prompt-builder')"
                :class="['text-sm font-medium transition', activePage === 'prompt-builder' ? 'text-white' : 'text-white/60 hover:text-white']">Prompt
                Builder</a>
            <a :href="baseUrl + '?page=api'" @click.prevent="$emit('navigate', 'api')"
                :class="['text-sm font-medium transition', activePage === 'api' ? 'text-white' : 'text-white/60 hover:text-white']">API</a>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-4">
            <!-- GitHub (always visible) -->
            <a href="https://github.com/PailletJuanPablo/lumina-slides" target="_blank"
                class="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition">
                GitHub
            </a>

            <!-- Mobile Hamburger -->
            <button @click="mobileMenuOpen = !mobileMenuOpen"
                class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition">
                <i :class="['fa-solid text-white', mobileMenuOpen ? 'fa-xmark' : 'fa-bars']"></i>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <Transition name="slide">
        <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 md:hidden">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="mobileMenuOpen = false"></div>

            <!-- Menu Panel -->
            <div class="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4">
                <a :href="baseUrl + '?page=examples'" @click.prevent="navigate('examples')"
                    :class="['text-lg font-medium py-2 border-b border-white/5 transition', activePage === 'examples' ? 'text-white' : 'text-white/60']">
                    Examples
                </a>
                <a :href="baseUrl + '?page=docs'" @click.prevent="navigate('docs')"
                    :class="['text-lg font-medium py-2 border-b border-white/5 transition', activePage === 'docs' ? 'text-white' : 'text-white/60']">
                    Docs
                </a>
                <a :href="baseUrl + '?page=playground'" @click.prevent="navigate('playground')"
                    :class="['text-lg font-medium py-2 border-b border-white/5 transition', activePage === 'playground' ? 'text-white' : 'text-white/60']">
                    Playground
                </a>
                <a :href="baseUrl + '?page=prompt-builder'" @click.prevent="navigate('prompt-builder')"
                    :class="['text-lg font-medium py-2 border-b border-white/5 transition', activePage === 'prompt-builder' ? 'text-white' : 'text-white/60']">
                    Prompt Builder
                </a>
                <a :href="baseUrl + '?page=api'" @click.prevent="navigate('api')"
                    :class="['text-lg font-medium py-2 transition', activePage === 'api' ? 'text-white' : 'text-white/60']">
                    API
                </a>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    activePage: string
}>();

const emit = defineEmits(['navigate']);
const baseUrl = import.meta.env.BASE_URL;
const mobileMenuOpen = ref(false);

function navigate(page: string) {
    mobileMenuOpen.value = false;
    emit('navigate', page);
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}
</style>
