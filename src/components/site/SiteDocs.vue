<template>
    <div class="min-h-screen pt-32 px-6 md:px-12 max-w-8xl mx-auto flex flex-col md:flex-row gap-16">
        <!-- Sidebar Navigation -->
        <aside class="w-full md:w-64 flex-shrink-0 hidden md:block">
            <div class="sticky top-32 space-y-10">
                <div v-for="(group, i) in navigation" :key="i">
                    <!-- Group Title -->
                    <h3 class="text-xs font-bold uppercase tracking-widest text-white/30 mb-4 pl-3">
                        {{ group.title }}
                    </h3>

                    <!-- Links -->
                    <ul class="space-y-1 relative border-l border-white/5">
                        <li v-for="item in group.items" :key="item.id">
                            <button @click="activeSection = item.id; scrollToTop()" :class="[
                                'group w-full text-left px-4 py-2 text-sm transition-all duration-300 border-l-2 -ml-[1px]',
                                activeSection === item.id
                                    ? 'border-blue-500 text-white font-medium bg-blue-500/5'
                                    : 'border-transparent text-white/50 hover:text-white hover:border-white/20'
                            ]">
                                {{ item.label }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 w-full min-w-0 pb-32">
            <Transition name="fade" mode="out-in">
                <div :key="activeSection" class="doc-content max-w-4xl">

                    <!-- INTRODUCTION -->
                    <div v-if="activeSection === 'intro'">
                        <h1>Introduction</h1>
                        <p class="lead text-2xl text-white font-light">
                            Lumina is a high-performance, declarative presentation engine built for Vue 3.
                        </p>
                        <p>
                            Unlike traditional tools that trap your content in proprietary file formats, Lumina defines
                            presentations as <strong>pure JSON data</strong>. This approach enables programmatic
                            generation, easy version control, and dynamic storytelling experiences.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
                            <div
                                class="group p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/5">
                                <div
                                    class="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                                    <i class="fa-solid fa-bolt text-xl text-yellow-400"></i>
                                </div>
                                <h3
                                    class="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                                    Fast by default</h3>
                                <p class="text-sm text-white/50 leading-relaxed">Built on top of Vite and Vue 3 to
                                    ensure instant load times and buttery smooth 60fps animations.</p>
                            </div>

                            <div
                                class="group p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/5">
                                <div
                                    class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                                    <i class="fa-solid fa-code text-xl text-blue-400"></i>
                                </div>
                                <h3
                                    class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                    Declarative JSON</h3>
                                <p class="text-sm text-white/50 leading-relaxed">Manage your content as code. Git-diff
                                    your presentations. Generate decks from APIs.</p>
                            </div>
                        </div>
                    </div>

                    <!-- INSTALLATION -->
                    <div v-else-if="activeSection === 'install'">
                        <h1>Installation</h1>
                        <p>Lumina is available as an NPM package. It is designed to work seamlessly within existing Vue
                            3 applications.</p>

                        <div class="not-prose my-8">
                            <div class="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                <div class="flex items-center px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                                    <div class="flex gap-1.5">
                                        <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                        <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div class="ml-4 text-xs text-white/30 font-mono">Terminal</div>
                                </div>
                                <div class="p-6 overflow-x-auto">
                                    <code class="font-mono text-sm">
                                        <span class="text-purple-400">npm</span> install lumina-slides
                                    </code>
                                </div>
                            </div>
                        </div>

                        <h3>Requirements</h3>
                        <ul>
                            <li><strong>Vue 3.3+</strong> (Script Setup recommended)</li>
                            <li><strong>Vite 4+</strong> (Required for optimized asset handling)</li>
                            <li><strong>GSAP</strong> (Automatically installed as a dependency)</li>
                        </ul>
                    </div>

                    <!-- SETUP -->
                    <div v-else-if="activeSection === 'setup'">
                        <h1>Vue Setup</h1>
                        <p>Import the stylesheet and initialize the engine in your main entry file (usually
                            <code>main.ts</code>).
                        </p>

                        <pre class="language-js"><code><span class="text-purple-400">import</span> { createApp } <span class="text-purple-400">from</span> 'vue';
<span class="text-purple-400">import</span> { Lumina } <span class="text-purple-400">from</span> 'lumina-slides';
<span class="text-purple-400">import</span> 'lumina-slides/dist/style.css';
<span class="text-purple-400">import</span> App <span class="text-purple-400">from</span> './App.vue';

<span class="text-gray-500">// Initialize seamlessly</span>
<span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
    loop: <span class="text-yellow-400">true</span>,
    theme: 'ocean' 
});

createApp(App).mount('#app');</code></pre>
                    </div>

                    <!-- DECK STRUCTURE -->
                    <div v-else-if="activeSection === 'deck'">
                        <h1>Deck Structure</h1>
                        <p>A "Deck" is a simple JSON object containing metadata and an array of slides.</p>

                        <pre><code>{
  <span class="text-blue-400">"meta"</span>: {
    <span class="text-blue-400">"title"</span>: <span class="text-green-400">"My Awesome Presentation"</span>,
    <span class="text-blue-400">"author"</span>: <span class="text-green-400">"Dev Team"</span>
  },
  <span class="text-blue-400">"slides"</span>: [
     <span class="text-gray-500">// Slide objects go here...</span>
  ]
}</code></pre>
                    </div>

                    <!-- SLIDE LAYOUTS -->
                    <div v-else-if="activeSection === 'slides'">
                        <h1>Slide Layouts</h1>
                        <p>Lumina comes with several built-in responsive layouts to handle common presentation scenarios
                            handled elegantly.</p>

                        <div class="grid grid-cols-1 gap-12 mt-12 not-prose">
                            <!-- Statement -->
                            <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">
                                        1</div>
                                    <div>
                                        <h2 class="text-2xl font-bold text-white mb-1">Statement</h2>
                                        <p class="text-sm text-white/50">High impact text for big ideas. Ideal for
                                            section headers or punchlines.</p>
                                    </div>
                                </div>
                                <div class="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border-none">
                                    <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"statement"</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Hello World"</span>,
  <span class="text-blue-400">"subtitle"</span>: <span class="text-green-400">"This is a statement slide."</span>
}</code></pre>
                                </div>
                            </div>

                            <!-- Half -->
                            <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
                                        2</div>
                                    <div>
                                        <h2 class="text-2xl font-bold text-white mb-1">Half / Split</h2>
                                        <p class="text-sm text-white/50">Image on one side, content on the other.
                                            Supports <code>left</code> or <code>right</code> alignment.</p>
                                    </div>
                                </div>
                                <div class="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border-none">
                                    <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"half"</span>,
  <span class="text-blue-400">"imageSide"</span>: <span class="text-green-400">"right"</span>,
  <span class="text-blue-400">"image"</span>: <span class="text-green-400">"/assets/demo.jpg"</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Split Layout"</span>,
  <span class="text-blue-400">"paragraphs"</span>: [<span class="text-green-400">"Content goes here."</span>]
}</code></pre>
                                </div>
                            </div>

                            <!-- Features -->
                            <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold text-lg">
                                        3</div>
                                    <div>
                                        <h2 class="text-2xl font-bold text-white mb-1">Features</h2>
                                        <p class="text-sm text-white/50">A balanced grid of feature cards with icons.
                                        </p>
                                    </div>
                                </div>
                                <div class="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border-none">
                                    <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"features"</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Core Features"</span>,
  <span class="text-blue-400">"features"</span>: [
    { <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Fast"</span>, <span class="text-blue-400">"icon"</span>: <span class="text-green-400">"fa-bolt"</span>, <span class="text-blue-400">"desc"</span>: <span class="text-green-400">"60fps"</span> }
  ]
}</code></pre>
                                </div>
                            </div>

                            <!-- Timeline -->
                            <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-lg">
                                        4</div>
                                    <div>
                                        <h2 class="text-2xl font-bold text-white mb-1">Timeline</h2>
                                        <p class="text-sm text-white/50">Displays chronological events in a horizontal
                                            scrolling view.</p>
                                    </div>
                                </div>
                                <div class="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border-none">
                                    <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"timeline"</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"History"</span>,
  <span class="text-blue-400">"timeline"</span>: [
    { <span class="text-blue-400">"date"</span>: <span class="text-green-400">"2024"</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Launch"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"V1 Released"</span> }
  ]
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CONFIGURATION -->
                    <div v-else-if="activeSection === 'config'">
                        <h1>Configuration</h1>
                        <p>Pass these options to the <code>new Lumina()</code> constructor to customize behavior.</p>

                        <div class="mt-12 space-y-12">
                            <div>
                                <h2 class="text-white text-2xl font-bold mb-4">Animation Options</h2>
                                <pre><code>animation: {
    <span class="text-blue-400">enabled</span>: <span class="text-yellow-400">true</span>,
    <span class="text-blue-400">type</span>: <span class="text-green-400">'cascade'</span>, <span class="text-gray-500">// fade, slide, zoom, cascade</span>
    <span class="text-blue-400">durationIn</span>: <span class="text-yellow-400">0.8</span>,
    <span class="text-blue-400">stagger</span>: <span class="text-yellow-400">0.1</span>
}</code></pre>
                            </div>

                            <div>
                                <h2 class="text-white text-2xl font-bold mb-4">UI Options</h2>
                                <pre><code>ui: {
    <span class="text-blue-400">visible</span>: <span class="text-yellow-400">true</span>,
    <span class="text-blue-400">showProgressBar</span>: <span class="text-yellow-400">true</span>,
    <span class="text-blue-400">showControls</span>: <span class="text-yellow-400">false</span> <span class="text-gray-500">// Hide arrows</span>
}</code></pre>
                            </div>
                        </div>
                    </div>

                    <!-- EVENTS -->
                    <div v-else-if="activeSection === 'events'">
                        <h1>Events & API</h1>
                        <p>Lumina emits events you can listen to for building custom interactivity or analytics.</p>

                        <pre><code>const engine = new Lumina(...);

<span class="text-gray-500">// Listen for slide changes</span>
engine.<span class="text-yellow-400">on</span>('slideChange', (payload) => {
    console.log(`Now on slide ${payload.index}`);
});

<span class="text-gray-500">// Listen for button clicks inside slides</span>
engine.<span class="text-yellow-400">on</span>('action', (payload) => {
    if (payload.type === 'cta') {
        window.open(payload.value, '_blank');
    }
});</code></pre>
                    </div>

                    <!-- THEMING -->
                    <div v-else-if="activeSection === 'theming'">
                        <h1>Theming</h1>
                        <p>Customize the look and feel using CSS variables or the configuration object.</p>

                        <pre class="language-css"><code><span class="text-gray-500">/* In your CSS */</span>
<span class="text-yellow-400">:root</span> {
    --lumina-primary: <span class="text-blue-400">#3b82f6</span>;
    --lumina-bg: <span class="text-blue-400">#050505</span>;
    --lumina-font-heading: 'Inter', sans-serif;
}</code></pre>
                    </div>

                </div>
            </Transition>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeSection = ref('intro');


const navigation = [
    {
        title: 'Getting Started',
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'install', label: 'Installation' },
            { id: 'setup', label: 'Vue Setup' }
        ]
    },
    {
        title: 'Core Concepts',
        items: [
            { id: 'deck', label: 'Deck Structure' },
            { id: 'slides', label: 'Slide Layouts' },
            { id: 'config', label: 'Configuration' },
            { id: 'events', label: 'Events & API' },
            { id: 'theming', label: 'Theming' }
        ]
    }
];

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.doc-content h1 {
    @apply text-4xl md:text-5xl font-black tracking-tight text-white mb-8 leading-tight font-heading;
}

.doc-content h2 {
    @apply text-2xl md:text-3xl font-bold text-white mt-16 mb-6 tracking-tight font-heading;
}

.doc-content p {
    @apply text-lg text-white/70 leading-relaxed mb-6 font-sans;
}

.doc-content p.lead {
    @apply text-2xl text-white font-light mb-10 leading-relaxed;
}

.doc-content ul {
    @apply list-disc list-outside ml-6 mb-8 text-white/70;
}

.doc-content li {
    @apply mb-2 pl-2 marker:text-blue-500 text-lg;
}

.doc-content code {
    @apply font-mono text-sm bg-blue-500/10 text-blue-300 px-1.5 py-0.5 rounded border border-blue-500/20;
}

.doc-content pre {
    @apply bg-[#0A0A0A] border border-white/10 rounded-xl p-5 overflow-x-auto mb-10 shadow-2xl;
}

.doc-content pre code {
    @apply bg-transparent p-0 text-white/90 border-none text-sm leading-relaxed;
}

/* Specific overrides for the "not-prose" areas if needed, though scoped css shouldn't leak usually.
   But since we use .doc-content class, we are safe. */
</style>
