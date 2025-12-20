<template>
    <div class="min-h-screen pt-24 px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <!-- Background Gradients -->
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none">
        </div>

        <!-- Hero Content -->
        <h1 class="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight">
            The Presentation<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Engine for
                Vue.</span>
        </h1>

        <p class="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
            Create stunning, high-performance slide decks using declarative JSON and Vue 3.
            Powered by GSAP for cinematic transitions.
        </p>

        <div class="flex flex-col md:flex-row gap-6">
            <button @click="$emit('navigate', 'examples')"
                class="px-8 py-4 rounded-full bg-white text-black text-lg font-bold hover:scale-105 transition duration-300">
                View Examples
            </button>
            <button @click="$emit('navigate', 'docs')"
                class="px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white text-lg font-bold backdrop-blur-md transition duration-300">
                Get Started
            </button>
        </div>

        <!-- Feature Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl w-full text-left">
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
                <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">High Performance</h3>
                <p class="text-white/60">Built on Vite and Vue 3 for instant load times and 60fps animations.</p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
                <div
                    class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                        </path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Component Based</h3>
                <p class="text-white/60">Extend the engine with your own Vue components as slides.</p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
                <div
                    class="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Declarative JSON</h3>
                <p class="text-white/60">Define your entire presentation structure in a simple JSON file.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(['navigate']);
</script>
