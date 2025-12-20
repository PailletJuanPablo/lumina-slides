<template>
    <div class="min-h-screen pt-32 px-8 max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold mb-12 text-center">Interactive Examples</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="deck in decks" :key="deck.id"
                class="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-500/50 transition duration-500 cursor-pointer"
                @click="openDeck(deck.id)">
                <div
                    class="aspect-video bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition duration-700 flex items-center justify-center">
                    <span class="text-4xl">{{ deck.icon }}</span>
                </div>
                <div class="p-6 relative z-10 bg-black/80 backdrop-blur-sm -mt-2">
                    <h3 class="text-xl font-bold mb-2">{{ deck.title }}</h3>
                    <p class="text-sm text-white/60 mb-4 h-10">{{ deck.description }}</p>
                    <div
                        class="flex items-center text-blue-400 text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition">
                        View Demo <span class="ml-2">→</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const decks = [
    { id: 'deck', title: 'Feature Showcase', description: 'A comprehensive tour of all major features.', icon: '🚀' },
    { id: 'layout-statement', title: 'Statement Layout', description: 'Bold typography for impactful messages.', icon: '📢' },
    { id: 'layout-half', title: 'Split Layout', description: 'Classic text and image pairing.', icon: '🌗' },
    { id: 'layout-features', title: 'Feature Grid', description: 'Responsive grids for feature lists.', icon: '🍱' },
    { id: 'layout-timeline', title: 'Timeline', description: 'Vertical chronological sequence.', icon: '⏱️' },
    { id: 'layout-steps', title: 'Process Steps', description: 'Horizontal sequential flow.', icon: '👣' },
];

const openDeck = (id: string) => {
    window.location.href = `/?deck=${id}`;
};
</script>
