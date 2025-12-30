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
                <div :key="activeSection" class="doc-content max-w-6xl">

                    <!-- MEDIA & VIDEO -->
                    <div v-if="activeSection === 'media'">
                        <h1>Media & Video</h1>
                        <p class="lead">Lumina supports rich media experiences, including full-screen video backgrounds
                            and inline video elements.</p>

                        <h2>Video Backgrounds</h2>
                        <p>You can add a cinematic feel to any slide by using a video background. This works on
                            <strong>all layouts</strong>.
                        </p>

                        <div class="my-8">
                            <LivePreview :initial-code="EXAMPLES.video" />
                        </div>

                        <h2>Video Elements</h2>
                        <p>In 'Flex' and 'Half' layouts, you can use video instead of images.</p>

                        <h3>In Half Layout</h3>
                        <div class="my-6">
                            <LivePreview :initial-code="EXAMPLES.video_half" />
                        </div>

                        <h3>In Flex Layout</h3>
                        <div class="my-6">
                            <LivePreview :initial-code="EXAMPLES.video_flex" />
                        </div>
                    </div>

                    <!-- INTRODUCTION -->
                    <div v-else-if="activeSection === 'intro'">
                        <h1>Introduction</h1>
                        <p class="lead text-2xl text-white font-light">
                            Lumina is a high-performance, Universal Presentation Engine.
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
                                <p class="text-sm text-white/50 leading-relaxed">Bundles Vue 3 and GSAP internally to
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
                        <p>Lumina is available as a Universal NPM package. It works in any JavaScript environment
                            (Vanilla, React, Vue, Svelte, etc.) without external dependencies.</p>

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
                            <li><strong>Node.js 18+</strong> (For development)</li>
                            <li><strong>That's it!</strong> (Vue and GSAP are bundled)</li>
                        </ul>
                    </div>

                    <!-- SETUP -->
                    <div v-else-if="activeSection === 'setup'">
                        <h1>Quick Start</h1>
                        <p>Import the stylesheet and initialize the engine in your main entry file.
                        </p>

                        <pre class="language-js"><code><span class="text-purple-400">import</span> { Lumina } <span class="text-purple-400">from</span> 'lumina-slides';
<span class="text-purple-400">import</span> 'lumina-slides/dist/style.css';

<span class="text-gray-500">// Initialize seamlessly in any app</span>
<span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
    loop: <span class="text-yellow-400">true</span>,
    theme: 'ocean' 
});

<span class="text-gray-500">// Load your deck</span>
engine.load(myDeckData);</code></pre>
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

                            <!-- Grid -->
                            <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
                                <div class="flex items-center gap-4 mb-6">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg">
                                        5</div>
                                    <div>
                                        <h2 class="text-2xl font-bold text-white mb-1">Grid</h2>
                                        <p class="text-sm text-white/50">Flexible grid-based layout. Position elements
                                            with row/col. LLM-friendly.</p>
                                    </div>
                                </div>
                                <div class="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border-none">
                                    <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"grid"</span>,
  <span class="text-blue-400">"gridSize"</span>: <span class="text-yellow-400">4</span>,
  <span class="text-blue-400">"elements"</span>: [
    { <span class="text-blue-400">"type"</span>: <span class="text-green-400">"title"</span>, <span class="text-blue-400">"text"</span>: <span class="text-green-400">"Hello"</span>, <span class="text-blue-400">"row"</span>: <span class="text-yellow-400">1</span>, <span class="text-blue-400">"col"</span>: <span class="text-yellow-400">1</span>, <span class="text-blue-400">"colSpan"</span>: <span class="text-yellow-400">4</span> }
  ]
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- SIZING / EMBEDDING -->
                    <div v-else-if="activeSection === 'sizing'">
                        <h1>Embedding & Sizing</h1>
                        <p>By default, Lumina slides take up the full viewport height (<code>100vh</code>) to create an
                            immersive experience.</p>
                        <p>However, if you want to embed a slide inside a smaller container (e.g., a dashboard widget or
                            a blog post card), you can change the sizing mode.</p>

                        <h3>Container Mode</h3>
                        <p>Set the <code>sizing</code> property to <code>'container'</code> in your slide data. This
                            tells the engine to respect the parent container's height instead of forcing full screen.
                        </p>

                        <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"timeline"</span>,
  <span class="text-blue-400">"sizing"</span>: <span class="text-green-400">"container"</span>, <span class="text-gray-500">// Default is "viewport"</span>
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Project History"</span>,
  <span class="text-blue-400">"timeline"</span>: [...]
}</code></pre>

                        <div class="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <h4 class="text-yellow-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro Tip
                            </h4>
                            <p class="text-sm text-yellow-200/80 m-0">When using 'container' mode, ensure the parent
                                element has a defined height (e.g., <code>h-96</code> or fixed pixels), otherwise the
                                slide content might collapse or expand unexpectedly.</p>
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
                        <p class="lead">Customize colors, fonts, and visual style with built-in presets or create your
                            own theme.</p>

                        <!-- Theme Presets Section -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Built-in Presets</h2>
                            <p class="text-white/60 mb-8">Lumina comes with 8 beautiful theme presets. Pass the preset
                                name as a string to instantly apply a complete look.</p>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                                <!-- Default Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-blue-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #030303;">
                                        <span class="text-2xl font-bold" style="color: #3b82f6;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">default</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #3b82f6;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #030303;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Clean blue on dark. Professional and modern.
                                        </p>
                                    </div>
                                </div>

                                <!-- Ocean Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-cyan-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #0f172a;">
                                        <span class="text-2xl font-bold" style="color: #06b6d4;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">ocean</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #06b6d4;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #0f172a;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Cyan accents on slate. Calm and focused.</p>
                                    </div>
                                </div>

                                <!-- Midnight Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-indigo-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #000000;">
                                        <span class="text-2xl font-bold" style="color: #6366f1;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">midnight</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #6366f1;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #000000;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Indigo on pure black. Bold and dramatic.</p>
                                    </div>
                                </div>

                                <!-- Forest Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-emerald-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #022c22;">
                                        <span class="text-2xl font-bold" style="color: #10b981;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">forest</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #10b981;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #022c22;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Emerald green tones. Natural and fresh.</p>
                                    </div>
                                </div>

                                <!-- Cyber Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-pink-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #18181b;">
                                        <span class="text-2xl font-bold"
                                            style="color: #f472b6; font-family: 'Orbitron', sans-serif;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">cyber</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #f472b6;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #18181b;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Neon pink futuristic. Sci-fi vibes.</p>
                                    </div>
                                </div>

                                <!-- Latte Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-amber-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #fffbeb;">
                                        <span class="text-2xl font-bold"
                                            style="color: #d97706; font-family: 'Playfair Display', serif;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">latte</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #d97706;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #fffbeb;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Light mode with warm amber. Elegant.</p>
                                    </div>
                                </div>

                                <!-- Sunset Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-orange-500/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center"
                                        style="background: linear-gradient(135deg, #1c1917 0%, #292524 100%);">
                                        <span class="text-2xl font-bold"
                                            style="background: linear-gradient(to right, #f97316, #f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">sunset</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #f97316;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #f43f5e;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Orange to rose gradient. Warm and vibrant.</p>
                                    </div>
                                </div>

                                <!-- Monochrome Theme -->
                                <div
                                    class="rounded-xl overflow-hidden border border-white/10 group hover:border-white/50 transition-all duration-300">
                                    <div class="h-32 p-6 flex items-center justify-center" style="background: #000000;">
                                        <span class="text-2xl font-bold" style="color: #ffffff;">Lumina</span>
                                    </div>
                                    <div class="p-4 bg-black/50">
                                        <div class="flex items-center justify-between mb-2">
                                            <h3 class="font-bold text-white">monochrome</h3>
                                            <div class="flex gap-1">
                                                <span class="w-4 h-4 rounded-full" style="background: #ffffff;"></span>
                                                <span class="w-4 h-4 rounded-full" style="background: #000000;"></span>
                                            </div>
                                        </div>
                                        <p class="text-xs text-white/50">Pure black and white. Timeless elegance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Using Presets -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Using a Preset</h2>
                            <p class="text-white/60 mb-4">Pass the preset name as a string to the <code>theme</code>
                                option:</p>

                            <pre><code><span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
  theme: <span class="text-green-400">'ocean'</span>  <span class="text-gray-500">// 'midnight', 'forest', 'cyber', 'latte', 'sunset', 'monochrome'</span>
});

engine.load(myDeck);</code></pre>
                        </div>

                        <!-- CSS Variables -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Complete Theme Configuration</h2>
                            <p class="text-white/60 mb-8">Lumina v9 introduces 80+ CSS custom properties for full visual
                                customization.
                                Configure via <code>themeConfig</code> in your deck JSON or engine options.</p>

                            <!-- COLORS SECTION -->
                            <div class="mb-12">
                                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span
                                        class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">🎨</span>
                                    Colors (25+ tokens)
                                </h3>
                                <div class="overflow-x-auto border border-white/10 rounded-lg">
                                    <table class="w-full text-left text-sm text-gray-400">
                                        <thead class="bg-white/5 text-white font-bold">
                                            <tr>
                                                <th class="p-3 border-b border-white/10">Property</th>
                                                <th class="p-3 border-b border-white/10">CSS Variable</th>
                                                <th class="p-3 border-b border-white/10">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-white/5">
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-blue-400 bg-blue-500/5 font-bold">Core
                                                    Colors</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">primary</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-primary</td>
                                                <td class="p-3">Main brand/accent color</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">secondary</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-secondary</td>
                                                <td class="p-3">Complementary brand color</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">accent</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-accent</td>
                                                <td class="p-3">Tertiary/accent highlights</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">background</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-background</td>
                                                <td class="p-3">Main slide background</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">surface</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-surface</td>
                                                <td class="p-3">Cards, panels, elevated surfaces</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">text</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-text</td>
                                                <td class="p-3">Primary text color</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">textSecondary</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-text-secondary
                                                </td>
                                                <td class="p-3">Secondary body text</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">muted</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-muted</td>
                                                <td class="p-3">Subdued text, captions</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-yellow-400 bg-yellow-500/5 font-bold">
                                                    Semantic Colors</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">success</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-success</td>
                                                <td class="p-3">Positive actions (#22c55e)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">warning</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-warning</td>
                                                <td class="p-3">Caution states (#eab308)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">danger</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-danger</td>
                                                <td class="p-3">Errors, destructive (#ef4444)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">info</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-info</td>
                                                <td class="p-3">Informational highlights</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-purple-400 bg-purple-500/5 font-bold">UI
                                                    Colors</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">border</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-border</td>
                                                <td class="p-3">Default border color</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">borderSubtle</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-color-border-subtle
                                                </td>
                                                <td class="p-3">Subtle/light borders</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">shadow</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-shadow-color</td>
                                                <td class="p-3">Shadow color for elevation</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-pink-400 bg-pink-500/5 font-bold">Gradient
                                                    Colors</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">gradientFrom</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-gradient-from</td>
                                                <td class="p-3">Gradient start color</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">gradientVia</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-gradient-via</td>
                                                <td class="p-3">Gradient middle (optional)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">gradientTo</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-gradient-to</td>
                                                <td class="p-3">Gradient end color</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- EFFECTS SECTION -->
                            <div class="mb-12">
                                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span
                                        class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">✨</span>
                                    Effects
                                </h3>
                                <div class="overflow-x-auto border border-white/10 rounded-lg">
                                    <table class="w-full text-left text-sm text-gray-400">
                                        <thead class="bg-white/5 text-white font-bold">
                                            <tr>
                                                <th class="p-3 border-b border-white/10">Property</th>
                                                <th class="p-3 border-b border-white/10">Type</th>
                                                <th class="p-3 border-b border-white/10">Values</th>
                                                <th class="p-3 border-b border-white/10">Default</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-white/5">
                                            <tr>
                                                <td colspan="4"
                                                    class="p-2 text-xs text-pink-400 bg-pink-500/5 font-bold">Gradients
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">useGradients</td>
                                                <td class="p-3 text-purple-400">boolean</td>
                                                <td class="p-3">true / false</td>
                                                <td class="p-3">true</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">gradientDirection</td>
                                                <td class="p-3 text-purple-400">enum</td>
                                                <td class="p-3 font-mono text-xs">'to-t' | 'to-b' | 'to-l' | 'to-r' |
                                                    'to-tl' | 'to-tr' | 'to-bl' | 'to-br'</td>
                                                <td class="p-3">'to-br'</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"
                                                    class="p-2 text-xs text-blue-400 bg-blue-500/5 font-bold">Shadows
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">useShadows</td>
                                                <td class="p-3 text-purple-400">boolean</td>
                                                <td class="p-3">true / false</td>
                                                <td class="p-3">true</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">shadowIntensity</td>
                                                <td class="p-3 text-purple-400">enum</td>
                                                <td class="p-3 font-mono text-xs">'none' | 'sm' | 'md' | 'lg' | 'xl' |
                                                    '2xl'</td>
                                                <td class="p-3">'md'</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">shadowColor</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">Any CSS color (rgba works best)</td>
                                                <td class="p-3">rgba(0,0,0,0.25)</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"
                                                    class="p-2 text-xs text-cyan-400 bg-cyan-500/5 font-bold">
                                                    Glassmorphism</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">useGlass</td>
                                                <td class="p-3 text-purple-400">boolean</td>
                                                <td class="p-3">true / false (frosted glass panels)</td>
                                                <td class="p-3">true</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">glassOpacity</td>
                                                <td class="p-3 text-purple-400">number</td>
                                                <td class="p-3">0 to 1 (panel background opacity)</td>
                                                <td class="p-3">0.03</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">glassBlur</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">CSS blur value (e.g., '20px')</td>
                                                <td class="p-3">'20px'</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">glassBorderOpacity</td>
                                                <td class="p-3 text-purple-400">number</td>
                                                <td class="p-3">0 to 1 (subtle border opacity)</td>
                                                <td class="p-3">0.05</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"
                                                    class="p-2 text-xs text-orange-400 bg-orange-500/5 font-bold">
                                                    Ambient Orb</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">useOrb</td>
                                                <td class="p-3 text-purple-400">boolean</td>
                                                <td class="p-3">true / false (background glow)</td>
                                                <td class="p-3">true</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">orbOpacity</td>
                                                <td class="p-3 text-purple-400">number</td>
                                                <td class="p-3">0 to 1</td>
                                                <td class="p-3">0.4</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">orbBlur</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">CSS blur value</td>
                                                <td class="p-3">'120px'</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">orbSize</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">CSS size (vw, vh, px, %)</td>
                                                <td class="p-3">'60vw'</td>
                                            </tr>
                                            <tr>
                                                <td colspan="4"
                                                    class="p-2 text-xs text-green-400 bg-green-500/5 font-bold">
                                                    Animations</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">animationsEnabled</td>
                                                <td class="p-3 text-purple-400">boolean</td>
                                                <td class="p-3">Master toggle for all animations</td>
                                                <td class="p-3">true</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">transitionDuration</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">CSS duration (e.g., '0.3s')</td>
                                                <td class="p-3">'0.3s'</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">transitionEasing</td>
                                                <td class="p-3 text-purple-400">string</td>
                                                <td class="p-3">CSS easing function</td>
                                                <td class="p-3">cubic-bezier(0.16,1,0.3,1)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">hoverScale</td>
                                                <td class="p-3 text-purple-400">number</td>
                                                <td class="p-3">Scale on hover (1.0 = no scale)</td>
                                                <td class="p-3">1.05</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- COMPONENTS SECTION -->
                            <div class="mb-12">
                                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span
                                        class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">🧩</span>
                                    Component Tokens
                                </h3>
                                <div class="overflow-x-auto border border-white/10 rounded-lg">
                                    <table class="w-full text-left text-sm text-gray-400">
                                        <thead class="bg-white/5 text-white font-bold">
                                            <tr>
                                                <th class="p-3 border-b border-white/10">Property</th>
                                                <th class="p-3 border-b border-white/10">CSS Variable</th>
                                                <th class="p-3 border-b border-white/10">Default</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-white/5">
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-blue-400 bg-blue-500/5 font-bold">Buttons
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">buttonRadius</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-button-radius</td>
                                                <td class="p-3">9999px (pill)</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">buttonPadding</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-button-padding</td>
                                                <td class="p-3">0.75rem 1.5rem</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">buttonFontWeight</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-button-font-weight</td>
                                                <td class="p-3">700</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">buttonTextTransform</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-button-text-transform
                                                </td>
                                                <td class="p-3">none</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-purple-400 bg-purple-500/5 font-bold">Cards
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">cardRadius</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-card-radius</td>
                                                <td class="p-3">1.5rem</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">cardPadding</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-card-padding</td>
                                                <td class="p-3">2rem</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">cardBorderWidth</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-card-border-width</td>
                                                <td class="p-3">1px</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-cyan-400 bg-cyan-500/5 font-bold">Timeline
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">timelineNodeSize</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-timeline-node-size</td>
                                                <td class="p-3">1rem</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">timelineLineWidth</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-timeline-line-width
                                                </td>
                                                <td class="p-3">2px</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">timelineNodeColor</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-timeline-node-color
                                                </td>
                                                <td class="p-3">(uses primary)</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    class="p-2 text-xs text-pink-400 bg-pink-500/5 font-bold">
                                                    Tags/Badges</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">tagPadding</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-tag-padding</td>
                                                <td class="p-3">0.25rem 1rem</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">tagRadius</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-tag-radius</td>
                                                <td class="p-3">9999px</td>
                                            </tr>
                                            <tr>
                                                <td class="p-3 font-mono text-green-400">tagFontSize</td>
                                                <td class="p-3 font-mono text-white/50">--lumina-tag-font-size</td>
                                                <td class="p-3">0.75rem</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- TYPOGRAPHY SECTION -->
                            <div class="mb-12">
                                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span
                                        class="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">🔤</span>
                                    Typography
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Font Families</h4>
                                        <div class="space-y-2 text-sm">
                                            <div><code class="text-green-400">heading</code>: <span
                                                    class="text-white/60">Headings (default: Inter)</span></div>
                                            <div><code class="text-green-400">body</code>: <span
                                                    class="text-white/60">Body text (default: Inter)</span></div>
                                            <div><code class="text-green-400">mono</code>: <span
                                                    class="text-white/60">Code (default: monospace)</span></div>
                                        </div>
                                    </div>
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Font Sizes (--lumina-text-*)</h4>
                                        <div class="space-y-1 text-sm text-white/60">
                                            <div>xs: 0.75rem | sm: 0.875rem | base: 1rem</div>
                                            <div>lg: 1.125rem | xl: 1.25rem | 2xl: 1.5rem</div>
                                            <div>3xl: 1.875rem | 4xl: 2.25rem | 5xl: 3rem</div>
                                            <div>6xl: 3.75rem | 7xl: 4.5rem</div>
                                        </div>
                                    </div>
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Font Weights (--lumina-font-weight-*)</h4>
                                        <div class="space-y-1 text-sm text-white/60">
                                            <div>light: 300 | normal: 400 | medium: 500</div>
                                            <div>semibold: 600 | bold: 700 | extrabold: 800</div>
                                        </div>
                                    </div>
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Line Heights (--lumina-leading-*)</h4>
                                        <div class="space-y-1 text-sm text-white/60">
                                            <div>tight: 1.1 | snug: 1.25 | normal: 1.5</div>
                                            <div>relaxed: 1.625 | loose: 2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SPACING SECTION -->
                            <div class="mb-12">
                                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span
                                        class="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">📏</span>
                                    Spacing & Border Radius
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Spacing (--lumina-space-*)</h4>
                                        <div class="space-y-1 text-sm text-white/60">
                                            <div>none: 0 | xs: 0.25rem | sm: 0.5rem</div>
                                            <div>md: 1rem | lg: 1.5rem | xl: 2rem</div>
                                            <div>2xl: 3rem | 3xl: 4rem | 4xl: 6rem</div>
                                        </div>
                                    </div>
                                    <div class="border border-white/10 rounded-lg p-4">
                                        <h4 class="text-white font-bold mb-3">Border Radius (--lumina-radius-*)</h4>
                                        <div class="space-y-1 text-sm text-white/60">
                                            <div>none: 0 | sm: 0.25rem | md: 0.5rem</div>
                                            <div>lg: 0.75rem | xl: 1rem | 2xl: 1.5rem</div>
                                            <div>3xl: 2rem | full: 9999px</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- JSON Example -->
                            <div class="mt-8">
                                <h3 class="text-xl font-bold text-white mb-4">Full themeConfig Example</h3>
                                <pre><code><span class="text-gray-500">// In your deck JSON</span>
{
  <span class="text-blue-400">"meta"</span>: {
    <span class="text-blue-400">"theme"</span>: <span class="text-green-400">"default"</span>,
    <span class="text-blue-400">"themeConfig"</span>: {
      <span class="text-blue-400">"colors"</span>: {
        <span class="text-blue-400">"primary"</span>: <span class="text-green-400">"#8b5cf6"</span>,
        <span class="text-blue-400">"secondary"</span>: <span class="text-green-400">"#ec4899"</span>,
        <span class="text-blue-400">"gradientFrom"</span>: <span class="text-green-400">"#8b5cf6"</span>,
        <span class="text-blue-400">"gradientTo"</span>: <span class="text-green-400">"#ec4899"</span>
      },
      <span class="text-blue-400">"effects"</span>: {
        <span class="text-blue-400">"useGradients"</span>: <span class="text-yellow-400">true</span>,
        <span class="text-blue-400">"useGlass"</span>: <span class="text-yellow-400">true</span>,
        <span class="text-blue-400">"glassOpacity"</span>: <span class="text-yellow-400">0.05</span>,
        <span class="text-blue-400">"useOrb"</span>: <span class="text-yellow-400">true</span>,
        <span class="text-blue-400">"orbOpacity"</span>: <span class="text-yellow-400">0.4</span>
      },
      <span class="text-blue-400">"components"</span>: {
        <span class="text-blue-400">"cardRadius"</span>: <span class="text-green-400">"1.5rem"</span>,
        <span class="text-blue-400">"buttonRadius"</span>: <span class="text-green-400">"9999px"</span>
      }
    }
  }
}</code></pre>
                            </div>
                        </div>

                        <!-- Custom Theme Object -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Custom Theme Configuration</h2>
                            <p class="text-white/60 mb-4">Pass a configuration object for full control over colors and
                                fonts:</p>

                            <pre><code><span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
  theme: {
    colors: {
      primary: <span class="text-green-400">'#ec4899'</span>,      <span class="text-gray-500">// Pink accent</span>
      background: <span class="text-green-400">'#1a1a2e'</span>,  <span class="text-gray-500">// Dark purple bg</span>
      text: <span class="text-green-400">'#eaeaea'</span>,        <span class="text-gray-500">// Light text</span>
      muted: <span class="text-green-400">'#888888'</span>        <span class="text-gray-500">// Subdued text</span>
    },
    fonts: {
      heading: <span class="text-green-400">'Outfit, sans-serif'</span>,
      body: <span class="text-green-400">'Inter, sans-serif'</span>,
      mono: <span class="text-green-400">'Fira Code, monospace'</span>
    }
  }
});</code></pre>
                        </div>

                        <!-- Partial Override -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Partial Overrides</h2>
                            <p class="text-white/60 mb-4">You don't need to specify every property. Lumina merges your
                                values with the default theme:</p>

                            <pre><code><span class="text-gray-500">// Only change the primary color</span>
<span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
  theme: {
    colors: {
      primary: <span class="text-green-400">'#f59e0b'</span>  <span class="text-gray-500">// Amber accent</span>
    }
  }
});

<span class="text-gray-500">// Everything else uses defaults!</span></code></pre>
                        </div>

                        <!-- Font Loading -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Custom Fonts</h2>
                            <p class="text-white/60 mb-4">For custom fonts, load them via Google Fonts or your own
                                stylesheet first:</p>

                            <pre
                                class="language-html"><code><span class="text-gray-500">&lt;!-- In your HTML head --&gt;</span>
<span class="text-blue-400">&lt;link</span> rel=<span class="text-green-400">"preconnect"</span> href=<span class="text-green-400">"https://fonts.googleapis.com"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;link</span> href=<span class="text-green-400">"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Rajdhani&display=swap"</span> rel=<span class="text-green-400">"stylesheet"</span><span class="text-blue-400">&gt;</span></code></pre>

                            <p class="text-white/60 mt-4 mb-4">Then reference them in your theme config:</p>

                            <pre><code><span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app', {
  theme: {
    fonts: {
      heading: <span class="text-green-400">'Outfit, sans-serif'</span>,
      body: <span class="text-green-400">'Rajdhani, sans-serif'</span>
    }
  }
});</code></pre>
                        </div>

                        <!-- Tips -->
                        <div class="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <h4 class="text-yellow-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro
                                Tips</h4>
                            <ul class="text-sm text-yellow-200/80 space-y-2 m-0 list-none">
                                <li>🎨 <strong>Brand colors:</strong> Set <code>primary</code> to your brand color for
                                    instant recognition</li>
                                <li>🌙 <strong>Dark vs Light:</strong> Use <code>latte</code> preset for light mode
                                    presentations</li>
                                <li>📱 <strong>Accessibility:</strong> Ensure sufficient contrast between
                                    <code>text</code> and <code>background</code>
                                </li>
                                <li>🔤 <strong>Performance:</strong> Only load font weights you actually use (400, 700)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- SPEAKER NOTES -->
                    <div v-else-if="activeSection === 'speaker-notes'">
                        <h1>Speaker Notes</h1>
                        <p class="lead">Open a separate presenter view with notes, timer, and bidirectional navigation
                            controls.</p>

                        <h2>Adding Notes to Slides</h2>
                        <p>Add the <code>notes</code> property to any slide. Notes are only visible in the presenter
                            view, not on the main display.</p>

                        <pre><code>{
  <span class="text-blue-400">"type"</span>: <span class="text-green-400">"statement"</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Welcome"</span>,
  <span class="text-blue-400">"subtitle"</span>: <span class="text-green-400">"An introduction to our platform"</span>,
  <span class="text-blue-400">"notes"</span>: <span class="text-green-400">"Greet the audience. Mention key stakeholders. Time: 2 minutes."</span>
}</code></pre>

                        <h2>Opening the Presenter View</h2>
                        <p>Call <code>openSpeakerNotes()</code> on your Lumina instance to open the presenter window.
                        </p>

                        <pre><code><span class="text-blue-400">const</span> engine = <span class="text-blue-400">new</span> Lumina('#app');
engine.load(deckData);

<span class="text-gray-500">// Open presenter view</span>
engine.<span class="text-yellow-400">openSpeakerNotes</span>();

<span class="text-gray-500">// Check if open</span>
<span class="text-blue-400">if</span> (engine.isSpeakerNotesOpen) {
    console.log('Presenter view active');
}

<span class="text-gray-500">// Close programmatically</span>
engine.<span class="text-yellow-400">closeSpeakerNotes</span>();</code></pre>

                        <h3>Presenter View Features</h3>
                        <ul>
                            <li><strong>Current Notes</strong> — Formatted notes for the current slide</li>
                            <li><strong>Next Slide Preview</strong> — Title and type of the upcoming slide</li>
                            <li><strong>Timer</strong> — Start/pause/reset presentation timer</li>
                            <li><strong>Navigation</strong> — Synced controls (changes reflect in main window)</li>
                            <li><strong>Connection Status</strong> — Visual indicator of sync state</li>
                        </ul>

                        <h3>Keyboard Shortcuts (Presenter View)</h3>
                        <div class="overflow-x-auto border border-white/10 rounded-lg my-6">
                            <table class="w-full text-left text-sm text-gray-400">
                                <thead class="bg-white/5 text-white font-bold">
                                    <tr>
                                        <th class="p-3 border-b border-white/10">Key</th>
                                        <th class="p-3 border-b border-white/10">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    <tr>
                                        <td class="p-3 font-mono">→ / Space / Enter</td>
                                        <td class="p-3">Next slide</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 font-mono">← / Backspace</td>
                                        <td class="p-3">Previous slide</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 font-mono">T</td>
                                        <td class="p-3">Toggle timer</td>
                                    </tr>
                                    <tr>
                                        <td class="p-3 font-mono">R</td>
                                        <td class="p-3">Reset timer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <h4 class="text-blue-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro Tip
                            </h4>
                            <p class="text-sm text-blue-200/80 m-0">Position the presenter window on your secondary
                                monitor while the presentation runs on the main display. Navigation from either window
                                stays synchronized.</p>
                        </div>
                    </div>


                    <!-- AGENTS: INTRO -->
                    <div v-else-if="activeSection === 'agents-intro'">
                        <h1>The Agent Protocol</h1>
                        <p class="lead">Lumina is the first presentation engine designed for <strong>Agentic
                                AI</strong>.</p>
                        <p>Large Language Models (LLMs) are great at "What" (Content) but struggle with "How"
                            (Pixel-perfect CSS).
                            Lumina solves this by acting as a <strong>Semantic Interface Layer</strong>.</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
                            <div
                                class="bg-gray-900 border border-purple-500/20 rounded-xl p-8 relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-20">
                                    <i class="fa-solid fa-robot text-6xl text-purple-500"></i>
                                </div>
                                <h3 class="text-purple-400 font-bold mb-4">The Agent's Job</h3>
                                <ul class="space-y-3 text-sm text-gray-400">
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-green-500"></i> Generate
                                        Text Content</li>
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-green-500"></i> Determine
                                        Structure</li>
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-green-500"></i> Choose
                                        Semantic Layouts</li>
                                </ul>
                            </div>
                            <div class="bg-gray-900 border border-blue-500/20 rounded-xl p-8 relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-20">
                                    <i class="fa-solid fa-layer-group text-6xl text-blue-500"></i>
                                </div>
                                <h3 class="text-blue-400 font-bold mb-4">Lumina's Job</h3>
                                <ul class="space-y-3 text-sm text-gray-400">
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-blue-500"></i> 60fps
                                        Animations</li>
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-blue-500"></i> Responsive
                                        Typography</li>
                                    <li class="flex gap-2"><i class="fa-solid fa-check text-blue-500"></i> Interactive
                                        State</li>
                                </ul>
                            </div>
                        </div>

                        <h2>The Protocol</h2>
                        <p>Agents communicate with Lumina via a JSON format that is strict enough for deterministic
                            rendering but loose enough for LLMs.</p>
                    </div>

                    <!-- AGENTS: TOKENS -->
                    <div v-else-if="activeSection === 'agents-tokens'">
                        <h1>Token Optimization</h1>
                        <p class="lead">Reduce output size with short property aliases. Less characters = faster
                            rendering and lower costs.</p>

                        <div class="not-prose grid gap-6 mt-8">
                            <div class="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                                <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Standard JSON
                                    <span class="text-white/30 font-normal normal-case ml-2">~95 characters</span>
                                </h3>
                                <pre class="!mb-0 !p-0 !bg-transparent !border-none"><code>{
  "type": "statement",
  "title": "Quarterly Review",
  "subtitle": "Growth is exceeding expectations."
}</code></pre>
                            </div>

                            <div class="bg-[#0A0A0A] border border-green-500/20 rounded-xl p-6 relative">
                                <span
                                    class="absolute top-4 right-4 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                                    ~25% Shorter
                                </span>
                                <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Optimized
                                    JSON <span class="text-white/30 font-normal normal-case ml-2">~70 characters</span>
                                </h3>
                                <pre class="!mb-0 !p-0 !bg-transparent !border-none"><code>{
  "type": "statement",
  "t": "Quarterly Review",
  "s": "Growth is exceeding expectations."
}</code></pre>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Supported Aliases</h2>
                            <p class="text-white/60 mb-4">Both full property names and aliases work interchangeably. Mix
                                and match as needed.</p>

                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Full Key</th>
                                            <th class="p-3 border-b border-white/10">Alias</th>
                                            <th class="p-3 border-b border-white/10">Used In</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono">title</td>
                                            <td class="p-3 font-mono text-green-400">t</td>
                                            <td class="p-3 text-white/50">All layouts</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">subtitle</td>
                                            <td class="p-3 font-mono text-green-400">s</td>
                                            <td class="p-3 text-white/50">Statement, Timeline, Steps</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">description</td>
                                            <td class="p-3 font-mono text-green-400">d</td>
                                            <td class="p-3 text-white/50">Features, Timeline items, Steps items</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">features</td>
                                            <td class="p-3 font-mono text-green-400">fs</td>
                                            <td class="p-3 text-white/50">Features layout</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">timeline</td>
                                            <td class="p-3 font-mono text-green-400">tl</td>
                                            <td class="p-3 text-white/50">Timeline layout</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">steps</td>
                                            <td class="p-3 font-mono text-green-400">st</td>
                                            <td class="p-3 text-white/50">Steps layout</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">paragraphs</td>
                                            <td class="p-3 font-mono text-green-400">p</td>
                                            <td class="p-3 text-white/50">Half layout</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">image</td>
                                            <td class="p-3 font-mono text-green-400">img</td>
                                            <td class="p-3 text-white/50">Half layout</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono">imageSide</td>
                                            <td class="p-3 font-mono text-green-400">side</td>
                                            <td class="p-3 text-white/50">Half layout</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <h4 class="text-blue-400 font-bold mb-2"><i class="fa-solid fa-info-circle mr-2"></i>How It
                                Works</h4>
                            <p class="text-sm text-blue-200/80 m-0">Lumina's normalizer automatically expands aliases to
                                full property names before rendering. You can use standard JSON for readability or
                                aliases for efficiency—both produce identical results.</p>
                        </div>
                    </div>

                    <!-- AGENTS: STREAMING -->
                    <div v-else-if="activeSection === 'agents-streaming'">
                        <h1>Streaming & Realtime</h1>
                        <p>Lumina enables a <strong>"Type & See"</strong> experience. Using our partial parser, you can
                            feed raw LLM streams directly into the engine.</p>

                        <div class="not-prose my-12">
                            <div
                                class="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[800px] relative group">

                                <!-- CTA Overlay (Top Right) -->
                                <div class="absolute top-4 right-4 z-20">
                                    <button @click="runDemo"
                                        class="px-5 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 flex items-center gap-2">
                                        <i class="fa-solid fa-play"></i> Simulate AI Stream
                                    </button>
                                </div>

                                <!-- Editor (Top, Fixed Height) -->
                                <div
                                    class="w-full h-48 flex flex-col bg-gray-900 border-b border-white/10 relative z-10">
                                    <div
                                        class="bg-white/5 px-4 py-2 text-xs font-bold text-white/50 flex justify-between items-center">
                                        <span>LLM JSON OUTPUT</span>
                                        <span class="text-xs text-white/20 mr-32" v-if="demoStarted">Receiving
                                            Tokens...</span>
                                    </div>
                                    <textarea v-model="demoInput"
                                        class="flex-1 bg-transparent p-6 font-mono text-sm text-green-400 resize-none focus:outline-none"
                                        placeholder='Waiting for tokens...'></textarea>
                                </div>

                                <!-- Preview (Bottom, Flex) -->
                                <div class="w-full flex-1 relative bg-black min-h-[300px]">
                                    <div id="streaming-demo-container" class="w-full h-full"></div>
                                    <div v-if="!demoStarted"
                                        class="absolute inset-0 flex items-center justify-center text-white/20">
                                        <div class="text-center">
                                            <i class="fa-solid fa-tv text-4xl mb-4"></i>
                                            <p class="text-sm">Preview UI Render</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- AGENTS: LAYOUT GALLERY -->
                    <div v-else-if="activeSection === 'agents-layouts'">
                        <h1>Layout Gallery</h1>
                        <p>Lumina provides 5 core layouts optimized for different types of information. Click <strong><i
                                    class="fa-solid fa-play text-blue-400"></i> Visualize</strong> to load them into the
                            <a @click.prevent="activeSection = 'agents-streaming'; scroll('streaming-demo-container')"
                                href="#" class="text-blue-400 hover:underline">Streaming Demo</a>.
                        </p>

                        <div class="space-y-12 mt-12">

                            <!-- Statement -->
                            <div class="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-bold text-white flex items-center gap-3">
                                        <span
                                            class="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs uppercase font-bold">Statement</span>
                                    </h3>
                                    <button @click="loadIntoDemo(EXAMPLES.statement)"
                                        class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white/50 hover:text-white transition flex items-center gap-2 border border-white/5">
                                        <i class="fa-solid fa-play text-blue-400"></i> Visualize
                                    </button>
                                </div>
                                <p class="text-sm text-gray-400 mb-4">Best for: Titles, Quotes, Big Ideas.</p>
                                <pre class="!mb-0 !bg-black/50"><code>{{ EXAMPLES.statement }}</code></pre>
                            </div>

                            <!-- Features -->
                            <div class="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-bold text-white flex items-center gap-3">
                                        <span
                                            class="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-xs uppercase font-bold">Features</span>
                                    </h3>
                                    <button @click="loadIntoDemo(EXAMPLES.features)"
                                        class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white/50 hover:text-white transition flex items-center gap-2 border border-white/5">
                                        <i class="fa-solid fa-play text-yellow-400"></i> Visualize
                                    </button>
                                </div>
                                <p class="text-sm text-gray-400 mb-4">Best for: Lists, Grids, Stats, Benefits.</p>
                                <pre class="!mb-0 !bg-black/50"><code>{{ EXAMPLES.features }}</code></pre>
                            </div>

                            <!-- Timeline -->
                            <div class="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-bold text-white flex items-center gap-3">
                                        <span
                                            class="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs uppercase font-bold">Timeline</span>
                                    </h3>
                                    <button @click="loadIntoDemo(EXAMPLES.timeline)"
                                        class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-white/50 hover:text-white transition flex items-center gap-2 border border-white/5">
                                        <i class="fa-solid fa-play text-green-400"></i> Visualize
                                    </button>
                                </div>
                                <p class="text-sm text-gray-400 mb-4">Best for: Roadmaps, History, Changelogs.</p>
                                <pre class="!mb-0 !bg-black/50"><code>{{ EXAMPLES.timeline }}</code></pre>
                            </div>

                        </div>
                    </div>

                    <div v-else-if="activeSection === 'agents-auto'">
                        <h1>Auto-Layouts</h1>
                        <p>Sometimes the Agent doesn't know which layout is best. Just use <code>type: 'auto'</code>.
                        </p>
                        <p>Lumina analyzes the content structure to pick the best view automatically.</p>

                        <div class="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl my-8">
                            <h3 class="text-blue-400 font-bold mb-2">Detection Priority</h3>
                            <ul class="list-disc list-inside text-sm text-blue-200/80 space-y-1">
                                <li>If <code>timeline</code> array exists -> <strong>Timeline Layout</strong></li>
                                <li>If <code>steps</code> array exists -> <strong>Steps Layout</strong></li>
                                <li>If <code>features</code> array exists -> <strong>Features Layout</strong></li>
                                <li>If <code>image</code> exists -> <strong>Half Layout</strong></li>
                                <li>Otherwise -> <strong>Statement Layout</strong></li>
                            </ul>
                        </div>

                        <h3>Example: Multi-Slide Auto Detection</h3>
                        <p class="text-sm text-gray-400 mb-4">Each slide uses <code>type: "auto"</code> but renders
                            differently based on its content structure.</p>

                        <pre><code>{
  <span class="text-blue-400">"slides"</span>: [
    <span class="text-gray-500">// Renders as Statement (no special arrays detected)</span>
    {
      <span class="text-blue-400">"type"</span>: <span class="text-green-400">"auto"</span>,
      <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Welcome to Our Platform"</span>,
      <span class="text-blue-400">"subtitle"</span>: <span class="text-green-400">"The future of presentations"</span>
    },
    <span class="text-gray-500">// Renders as Features (features array detected)</span>
    {
      <span class="text-blue-400">"type"</span>: <span class="text-green-400">"auto"</span>,
      <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Why Choose Us"</span>,
      <span class="text-blue-400">"features"</span>: [
        { <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Fast"</span>, <span class="text-blue-400">"desc"</span>: <span class="text-green-400">"60fps animations"</span>, <span class="text-blue-400">"icon"</span>: <span class="text-green-400">"fa-bolt"</span> },
        { <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Simple"</span>, <span class="text-blue-400">"desc"</span>: <span class="text-green-400">"JSON-first"</span>, <span class="text-blue-400">"icon"</span>: <span class="text-green-400">"fa-code"</span> },
        { <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Smart"</span>, <span class="text-blue-400">"desc"</span>: <span class="text-green-400">"AI-ready"</span>, <span class="text-blue-400">"icon"</span>: <span class="text-green-400">"fa-brain"</span> }
      ]
    },
    <span class="text-gray-500">// Renders as Timeline (timeline array detected)</span>
    {
      <span class="text-blue-400">"type"</span>: <span class="text-green-400">"auto"</span>,
      <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Our Journey"</span>,
      <span class="text-blue-400">"timeline"</span>: [
        { <span class="text-blue-400">"date"</span>: <span class="text-green-400">"2023"</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Concept"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"The idea was born"</span> },
        { <span class="text-blue-400">"date"</span>: <span class="text-green-400">"2024"</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Launch"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"V1.0 released"</span> }
      ]
    },
    <span class="text-gray-500">// Renders as Steps (steps array detected)</span>
    {
      <span class="text-blue-400">"type"</span>: <span class="text-green-400">"auto"</span>,
      <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Getting Started"</span>,
      <span class="text-blue-400">"steps"</span>: [
        { <span class="text-blue-400">"step"</span>: <span class="text-yellow-400">1</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Install"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"npm install lumina-slides"</span> },
        { <span class="text-blue-400">"step"</span>: <span class="text-yellow-400">2</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Import"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"Import Lumina class"</span> },
        { <span class="text-blue-400">"step"</span>: <span class="text-yellow-400">3</span>, <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Create"</span>, <span class="text-blue-400">"description"</span>: <span class="text-green-400">"Define your slides"</span> }
      ]
    },
    <span class="text-gray-500">// Renders as Half (image property detected)</span>
    {
      <span class="text-blue-400">"type"</span>: <span class="text-green-400">"auto"</span>,
      <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Visual Storytelling"</span>,
      <span class="text-blue-400">"image"</span>: <span class="text-green-400">"https://images.unsplash.com/..."</span>,
      <span class="text-blue-400">"paragraphs"</span>: [<span class="text-green-400">"Combine text and visuals seamlessly."</span>]
    }
  ]
}</code></pre>

                        <div class="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <h4 class="text-yellow-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro Tip
                            </h4>
                            <p class="text-sm text-yellow-200/80 m-0">Using <code>type: "auto"</code> simplifies prompt
                                engineering for AI agents. The LLM only needs to provide the data structure, and Lumina
                                will handle the visual representation automatically.</p>
                        </div>
                    </div>

                    <!-- AGENTS: STATE -->
                    <div v-else-if="activeSection === 'agents-state'">
                        <h1>State & Feedback Loop</h1>
                        <p>To create a conversation, the Agent needs to know what the user did. Use
                            <code>engine.exportState()</code>.
                        </p>
                        <pre><code>{
  <span class="text-blue-400">"narrative"</span>: <span class="text-green-400">"User viewed 'Pricing' for 30s then clicked 'Sign Up'."</span>,
  <span class="text-blue-400">"engagementLevel"</span>: <span class="text-green-400">"High"</span>
}</code></pre>
                    </div>

                    <!-- REF: STATEMENT -->
                    <div v-else-if="activeSection === 'ref-statement'">
                        <h1>Statement Slide</h1>
                        <p class="lead">Used for high-impact titles, opening covers, or emphatic quotes. It is designed
                            to be punchy and minimal.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"statement"</td>
                                            <td class="p-3">Required. Identifies the layout.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Main headline. Keep it short (3-6 words).</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">subtitle</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Optional supporting text.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">tag</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Small eyebrow tag above the title.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.statement" />
                        </div>
                    </div>

                    <!-- REF: HALF -->
                    <div v-else-if="activeSection === 'ref-half'">
                        <h1>Half / Split Slide</h1>
                        <p class="lead">Combines a strong visual with explanatory text. Ideal for product showcases or
                            "about me" sections.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"half"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">image</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">URL to the image.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">imageSide</td>
                                            <td class="p-3 font-mono text-xs">"left" | "right"</td>
                                            <td class="p-3">Defaults to 'left'.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Headline text.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">paragraphs</td>
                                            <td class="p-3 font-mono text-xs">string[]</td>
                                            <td class="p-3">Array of text blocks.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">cta</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Button label.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.half" />
                        </div>
                    </div>

                    <!-- REF: FEATURES -->
                    <div v-else-if="activeSection === 'ref-features'">
                        <h1>Features Slide</h1>
                        <p class="lead">Displays a grid of cards, perfect for listing benefits, stats, or services.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"features"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Section header.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">description</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Optional context.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">features</td>
                                            <td class="p-3 font-mono text-xs">Feature[]</td>
                                            <td class="p-3">Array of objects: <code>{ title, desc, icon? }</code>.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.features" />
                        </div>
                    </div>

                    <!-- REF: TIMELINE -->
                    <div v-else-if="activeSection === 'ref-timeline'">
                        <h1>Timeline Slide</h1>
                        <p class="lead">Horizontal scrolling view for chronological events, roadmaps, or history.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"timeline"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Header.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">timeline</td>
                                            <td class="p-3 font-mono text-xs">Event[]</td>
                                            <td class="p-3">Array: <code>{ date, title, description }</code>.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.timeline" />
                        </div>
                    </div>

                    <!-- REF: STEPS -->
                    <div v-else-if="activeSection === 'ref-steps'">
                        <h1>Steps Slide</h1>
                        <p class="lead">Used for tutorials, "how-to" guides, or process flows.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"steps"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Process name.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">steps</td>
                                            <td class="p-3 font-mono text-xs">Step[]</td>
                                            <td class="p-3">Array: <code>{ step, title, description }</code>.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.steps" />
                        </div>
                    </div>

                    <!-- REF: FLEX -->
                    <div v-else-if="activeSection === 'ref-flex'">
                        <h1>Flex Layout</h1>
                        <p class="lead">Flow-based layout for composing slides using semantic sizing. No coordinates
                            needed—perfect for LLM generation.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Slide Options</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"flex"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">direction</td>
                                            <td class="p-3 font-mono text-xs">"horizontal" | "vertical"</td>
                                            <td class="p-3">Main flow direction. Default: "horizontal".</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">gap</td>
                                            <td class="p-3 font-mono text-xs">SpacingToken</td>
                                            <td class="p-3">Gap between elements. Default: "none".</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">padding</td>
                                            <td class="p-3 font-mono text-xs">SpacingToken</td>
                                            <td class="p-3">Container padding. Default: "none".</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">elements</td>
                                            <td class="p-3 font-mono text-xs">FlexElement[]</td>
                                            <td class="p-3">Array of flex elements in flow order.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Size Tokens</h2>
                            <p>Each element can have a <code>size</code> property to control how much space it occupies:
                            </p>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>auto</code><br><span
                                        class="text-xs text-white/40">flexible</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>quarter</code><br><span
                                        class="text-xs text-white/40">25%</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>third</code><br><span
                                        class="text-xs text-white/40">33%</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>half</code><br><span
                                        class="text-xs text-white/40">50%</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>two-thirds</code><br><span
                                        class="text-xs text-white/40">66%</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>three-quarters</code><br><span
                                        class="text-xs text-white/40">75%</span></div>
                                <div class="p-4 bg-white/5 rounded-lg text-center"><code>full</code><br><span
                                        class="text-xs text-white/40">100%</span></div>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Element Types</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Properties</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">content</td>
                                            <td class="p-3 font-mono text-xs">elements, valign, halign, gap, padding
                                            </td>
                                            <td class="p-3">Container that groups child elements vertically.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">image</td>
                                            <td class="p-3 font-mono text-xs">src, alt?, fill?, fit?, rounded?</td>
                                            <td class="p-3">Visual media element.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">title</td>
                                            <td class="p-3 font-mono text-xs">text, size?, align?</td>
                                            <td class="p-3">Large heading (lg | xl | 2xl | 3xl).</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">text</td>
                                            <td class="p-3 font-mono text-xs">text, align?, muted?</td>
                                            <td class="p-3">Body paragraph text.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">bullets</td>
                                            <td class="p-3 font-mono text-xs">items: string[]</td>
                                            <td class="p-3">Unordered bullet list.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">ordered</td>
                                            <td class="p-3 font-mono text-xs">items: string[]</td>
                                            <td class="p-3">Numbered list.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">button</td>
                                            <td class="p-3 font-mono text-xs">label, action?, variant?, fullWidth?</td>
                                            <td class="p-3">CTA button (primary | secondary | outline | ghost).</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">timeline</td>
                                            <td class="p-3 font-mono text-xs">items: TimelineItem[], compact?</td>
                                            <td class="p-3">Embedded timeline.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">stepper</td>
                                            <td class="p-3 font-mono text-xs">items: StepItem[], compact?</td>
                                            <td class="p-3">Embedded step process.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">spacer</td>
                                            <td class="p-3 font-mono text-xs">size?: SpacingToken</td>
                                            <td class="p-3">Adds visual spacing.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Content Container</h2>
                            <p>Use <code>content</code> to group related elements with alignment control:</p>
                            <div class="overflow-x-auto border border-white/10 rounded-lg mt-6">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Values</th>
                                            <th class="p-3 border-b border-white/10">Default</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">valign</td>
                                            <td class="p-3 font-mono text-xs">top | center | bottom</td>
                                            <td class="p-3">center</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">halign</td>
                                            <td class="p-3 font-mono text-xs">left | center | right</td>
                                            <td class="p-3">left</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">gap</td>
                                            <td class="p-3 font-mono text-xs">none | xs | sm | md | lg | xl | 2xl</td>
                                            <td class="p-3">md</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">padding</td>
                                            <td class="p-3 font-mono text-xs">none | xs | sm | md | lg | xl | 2xl</td>
                                            <td class="p-3">lg</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Example</h2>
                            <LivePreview :initial-code="EXAMPLES.flex" />
                        </div>
                    </div>

                    <!-- REF: CHART -->
                    <div v-else-if="activeSection === 'ref-chart'">
                        <h1>Chart Slide</h1>
                        <p class="lead">Visualize data extracted from CSV/Excel files. Perfect for LLM-generated reports
                            and dashboards.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"chart"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">chartType</td>
                                            <td class="p-3 font-mono text-xs">"bar" | "line" | "pie" | "doughnut"</td>
                                            <td class="p-3">Type of chart to render.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">title</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Chart title (optional).</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">subtitle</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Subtitle text (optional).</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">data</td>
                                            <td class="p-3 font-mono text-xs">ChartData</td>
                                            <td class="p-3">Object with <code>labels</code> and <code>datasets</code>.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Data Structure</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">data.labels</td>
                                            <td class="p-3 font-mono text-xs">string[]</td>
                                            <td class="p-3">X-axis labels or pie segment names.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">data.datasets</td>
                                            <td class="p-3 font-mono text-xs">Dataset[]</td>
                                            <td class="p-3">Each with <code>label</code>, <code>values</code>, and
                                                optional <code>color</code>.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-cyan-400">dataset.color</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3"><code>c:p</code> (primary), <code>c:s</code> (secondary),
                                                <code>c:m</code> (muted), or hex.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Chart Types Section -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Chart Types</h2>

                            <div class="space-y-12">
                                <!-- Bar Chart -->
                                <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                            <i class="fa-solid fa-chart-column"></i>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">Bar Chart</h3>
                                            <p class="text-sm text-white/50">Best for comparing discrete categories</p>
                                        </div>
                                    </div>
                                    <p class="text-white/60 text-sm mb-4">Use bar charts to compare values across
                                        categories. Ideal for revenue by quarter, sales by region, or any categorical
                                        comparison.</p>
                                    <LivePreview initial-code='{
  "type": "chart",
  "chartType": "bar",
  "title": "Sales by Region",
  "subtitle": "Q4 2024 Performance",
  "data": {
    "labels": ["North", "South", "East", "West"],
    "datasets": [{
      "label": "Sales ($K)",
      "values": [420, 380, 510, 290],
      "color": "c:p"
    }]
  }
}' />
                                </div>

                                <!-- Line Chart -->
                                <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                                            <i class="fa-solid fa-chart-line"></i>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">Line Chart</h3>
                                            <p class="text-sm text-white/50">Best for trends over time</p>
                                        </div>
                                    </div>
                                    <p class="text-white/60 text-sm mb-4">Use line charts to show trends and changes
                                        over time. Perfect for growth metrics, stock prices, or any time-series data.
                                    </p>
                                    <LivePreview initial-code='{
  "type": "chart",
  "chartType": "line",
  "title": "Monthly Active Users",
  "subtitle": "2024 Growth Trend",
  "data": {
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    "datasets": [{
      "label": "Users (K)",
      "values": [45, 52, 61, 78, 95, 120],
      "color": "#10b981"
    }]
  }
}' />
                                </div>

                                <!-- Pie Chart -->
                                <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                            <i class="fa-solid fa-chart-pie"></i>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">Pie Chart</h3>
                                            <p class="text-sm text-white/50">Best for showing proportions</p>
                                        </div>
                                    </div>
                                    <p class="text-white/60 text-sm mb-4">Use pie charts to show how parts make up a
                                        whole. Ideal for market share, budget allocation, or percentage distributions.
                                    </p>
                                    <LivePreview initial-code='{
  "type": "chart",
  "chartType": "pie",
  "title": "Market Share",
  "subtitle": "Industry Distribution Q4 2024",
  "data": {
    "labels": ["Product A", "Product B", "Product C", "Others"],
    "datasets": [{
      "label": "Share %",
      "values": [35, 28, 22, 15]
    }]
  }
}' />
                                </div>

                                <!-- Doughnut Chart -->
                                <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                                            <i class="fa-solid fa-circle-notch"></i>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">Doughnut Chart</h3>
                                            <p class="text-sm text-white/50">Modern alternative to pie charts</p>
                                        </div>
                                    </div>
                                    <p class="text-white/60 text-sm mb-4">Similar to pie charts but with a hollow
                                        center. The modern look works great for dashboards and can display a metric in
                                        the center.</p>
                                    <LivePreview initial-code='{
  "type": "chart",
  "chartType": "doughnut",
  "title": "Budget Allocation",
  "subtitle": "2025 Planned Spend",
  "data": {
    "labels": ["Engineering", "Marketing", "Sales", "Operations"],
    "datasets": [{
      "label": "Budget",
      "values": [40, 25, 20, 15]
    }]
  }
}' />
                                </div>
                            </div>
                        </div>

                        <!-- Multiple Datasets Example -->
                        <div class="my-12">
                            <h2 class="text-2xl font-bold text-white mb-6">Advanced: Multiple Datasets</h2>
                            <p class="text-white/60 mb-6">Bar and line charts support multiple datasets for comparisons.
                                Each dataset gets its own color and legend entry.</p>
                            <LivePreview initial-code='{
  "type": "chart",
  "chartType": "bar",
  "title": "Year-over-Year Comparison",
  "subtitle": "Revenue by Quarter",
  "data": {
    "labels": ["Q1", "Q2", "Q3", "Q4"],
    "datasets": [
      {
        "label": "2023",
        "values": [100, 120, 140, 160],
        "color": "#6b7280"
      },
      {
        "label": "2024",
        "values": [120, 150, 180, 220],
        "color": "c:p"
      }
    ]
  },
  video: `{
  "type": "statement",
  "sizing": "container",
  "meta": { "orbColor": "#ec4899" },
  "background": {
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "opacity": 0.4
  },
  "tag": "Cinematic",
  "title": "Video Backgrounds",
  "subtitle": "Immersive support."
}`
}' />
                        </div>

                        <!-- Color Tokens -->
                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Color Tokens</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Token</th>
                                            <th class="p-3 border-b border-white/10">Maps To</th>
                                            <th class="p-3 border-b border-white/10">Default</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">c:p</td>
                                            <td class="p-3">--lumina-colors-primary</td>
                                            <td class="p-3"><span
                                                    class="inline-block w-4 h-4 rounded bg-blue-500 mr-2"></span>#3b82f6
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-green-400">c:s</td>
                                            <td class="p-3">--lumina-colors-secondary</td>
                                            <td class="p-3"><span
                                                    class="inline-block w-4 h-4 rounded bg-emerald-500 mr-2"></span>#10b981
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-gray-400">c:m</td>
                                            <td class="p-3">--lumina-colors-muted</td>
                                            <td class="p-3"><span
                                                    class="inline-block w-4 h-4 rounded bg-gray-400 mr-2"></span>#9ca3af
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-pink-400">#ec4899</td>
                                            <td class="p-3">Direct hex color</td>
                                            <td class="p-3"><span
                                                    class="inline-block w-4 h-4 rounded bg-pink-500 mr-2"></span>Custom
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <h4 class="text-yellow-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro
                                Tips
                            </h4>
                            <ul class="text-sm text-yellow-200/80 space-y-2 m-0 list-none">
                                <li>📊 <strong>Bar charts</strong> work best with 4-8 categories</li>
                                <li>📈 <strong>Line charts</strong> need at least 3 data points for smooth curves</li>
                                <li>🥧 <strong>Pie/Doughnut</strong> should have 3-6 segments max for clarity</li>
                                <li>🤖 <strong>LLM Tip:</strong> Have agents extract tabular data from CSVs and generate
                                    charts automatically</li>
                            </ul>
                        </div>
                    </div>

                    <!-- REF: CUSTOM HTML -->
                    <div v-else-if="activeSection === 'ref-custom'">
                        <h1>Custom HTML Slide</h1>
                        <p class="lead">Full control with raw HTML content. Inject any HTML structure with custom
                            styling.</p>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Configuration</h2>
                            <div class="overflow-x-auto border border-white/10 rounded-lg">
                                <table class="w-full text-left text-sm text-gray-400">
                                    <thead class="bg-white/5 text-white font-bold">
                                        <tr>
                                            <th class="p-3 border-b border-white/10">Property</th>
                                            <th class="p-3 border-b border-white/10">Type</th>
                                            <th class="p-3 border-b border-white/10">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="p-3 font-mono text-purple-400">type</td>
                                            <td class="p-3 font-mono text-xs">"custom"</td>
                                            <td class="p-3">Required.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">html</td>
                                            <td class="p-3 font-mono text-xs">string</td>
                                            <td class="p-3">Raw HTML content to render.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-3 font-mono text-blue-400">css</td>
                                            <td class="p-3 font-mono text-xs">string?</td>
                                            <td class="p-3">Optional scoped CSS styles.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Basic Example</h2>
                            <p class="text-white/60 mb-6">Render any HTML structure with full styling control.</p>
                            <LivePreview initial-code='{
  "type": "custom",
  "html": "<div class=\"custom-slide\"><h1 class=\"custom-title\">Welcome!</h1><p class=\"custom-text\">This is fully custom HTML content.</p><div class=\"custom-grid\"><div class=\"custom-card\">Card 1</div><div class=\"custom-card\">Card 2</div><div class=\"custom-card\">Card 3</div></div></div>",
  "css": ".custom-slide { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; padding: 2rem; } .custom-title { font-size: 3rem; font-weight: bold; margin-bottom: 1rem; background: linear-gradient(90deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } .custom-text { font-size: 1.25rem; opacity: 0.7; margin-bottom: 2rem; } .custom-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; } .custom-card { padding: 2rem; background: rgba(255,255,255,0.05); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); text-align: center; transition: transform 0.2s; } .custom-card:hover { transform: translateY(-4px); }"
}' />
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Use Cases</h2>
                            <ul class="space-y-3 text-white/70">
                                <li><strong>Embedding iframes:</strong> YouTube videos, maps, or external widgets</li>
                                <li><strong>Custom visualizations:</strong> D3.js charts, SVG animations</li>
                                <li><strong>Brand-specific layouts:</strong> Complex designs not covered by built-in
                                    layouts</li>
                                <li><strong>Interactive components:</strong> Forms, quizzes, or custom buttons</li>
                            </ul>
                        </div>

                        <div class="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <h4 class="text-yellow-400 font-bold mb-2"><i class="fa-solid fa-lightbulb mr-2"></i>Pro
                                Tips</h4>
                            <ul class="text-sm text-yellow-200/80 space-y-2 m-0 list-none">
                                <li>🎨 <strong>Scoped CSS:</strong> Styles are scoped to prevent conflicts with Lumina's
                                    base styles</li>
                                <li>📱 <strong>Responsive:</strong> Use CSS Grid or Flexbox with relative units for
                                    mobile support</li>
                                <li>🤖 <strong>LLM Usage:</strong> Custom slides are great when the AI needs complete
                                    creative freedom</li>
                                <li>⚠️ <strong>Sanitization:</strong> HTML is rendered as-is; sanitize user input if
                                    needed</li>
                            </ul>
                        </div>
                    </div>

                    <!-- REF: AUTO -->
                    <div v-else-if="activeSection === 'ref-auto'">
                        <h1>Auto Strategy</h1>
                        <p class="lead">Smartly chooses the best layout based on the data structure provided. Useful for
                            AI agents or rapid prototyping.</p>

                        <div class="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl my-8">
                            <h3 class="text-blue-400 font-bold mb-2">How it works</h3>
                            <ul class="list-disc list-inside text-sm text-blue-200/80 space-y-1">
                                <li>If <code>chartType</code> + <code>data.datasets</code> exist ->
                                    <strong>Chart</strong>
                                </li>
                                <li>If <code>timeline</code> array exists -> <strong>Timeline</strong></li>
                                <li>If <code>steps</code> array exists -> <strong>Steps</strong></li>
                                <li>If <code>features</code> array exists -> <strong>Features</strong></li>
                                <li>If <code>image</code> exists -> <strong>Half</strong></li>
                                <li>Otherwise -> <strong>Statement</strong></li>
                            </ul>
                        </div>

                        <div class="my-8">
                            <h2 class="text-xl font-bold text-white mb-4">Live Examples</h2>
                            <p class="text-sm text-gray-400 mb-6">Use the navigation arrows to see how each slide
                                renders with the same <code>type: "auto"</code> but different data structures.</p>
                            <LivePreview initial-code='{
  "slides": [
    {
      "type": "auto",
      "title": "Welcome to Lumina",
      "subtitle": "The AI-Native Presentation Engine"
    },
    {
      "type": "auto",
      "title": "Core Features",
      "features": [
        { "title": "Fast", "desc": "60fps animations", "icon": "fa-bolt" },
        { "title": "Simple", "desc": "JSON-first API", "icon": "fa-code" },
        { "title": "Smart", "desc": "AI-ready engine", "icon": "fa-brain" }
      ]
    },
    {
      "type": "auto",
      "title": "Our Roadmap",
      "timeline": [
        { "date": "Q1", "title": "Alpha", "description": "Core Engine" },
        { "date": "Q2", "title": "Beta", "description": "Public Testing" },
        { "date": "Q4", "title": "Launch", "description": "V1.0 Release" }
      ]
    },
    {
      "type": "auto",
      "title": "Getting Started",
      "steps": [
        { "step": 1, "title": "Install", "description": "npm install lumina-slides" },
        { "step": 2, "title": "Import", "description": "Import the Lumina class" },
        { "step": 3, "title": "Create", "description": "Define your JSON slides" }
      ]
    },
    {
      "type": "auto",
      "title": "Visual Content",
      "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      "paragraphs": ["Auto-detect image slides for visual storytelling."]
    }
  ]
}' />
                        </div>
                    </div>

                </div>
            </Transition>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick } from 'vue';
import { Lumina } from '../../core/Lumina';
import { parsePartialJson } from '../../utils/streaming';
import LivePreview from './LivePreview.vue';

const activeSection = ref('intro');

// --- DEMO LOGIC ---
const demoInput = ref('');
const demoStarted = ref(false);
let demoEngine: Lumina | null = null;

const TARGET_JSON = `{
  "meta": { "title": "Lumina Demo" },
  "slides": [
    {
      "type": "half",
      "sizing": "container",
      "meta": {
        "orbColor": "#8b5cf6"
      },
      "imageSide": "left",
      "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
      "tag": "Left Aligned",
      "title": "Image on Left",
      "paragraphs": [
        "The classic split screen. Image on the left, content on the right.",
        "Perfect for introducing a product or feature where the visual context leads the narrative."
      ],
      "cta": "Explore Left"
    },
    {
      "type": "statement",
      "sizing": "container",
      "meta": {
        "orbColor": "#ec4899"
      },
      "tag": "Minimal",
      "title": "Impactful Headlines",
      "subtitle": "The standard statement slide allows for massive typography to drive a point home."
    },
    {
      "type": "features",
      "sizing": "container",
      "title": "Grid System",
      "description": "The features layout automatically arranges cards into a responsive grid.",
      "features": [
        { "title": "Card One", "desc": "Standard card with an icon.", "icon": "fa-bolt" },
        { "title": "Card Two", "desc": "Cards scale on hover.", "icon": "fa-star" },
        { "title": "Card Three", "desc": "Fully responsive on mobile.", "icon": "fa-mobile" }
      ]
    },
    {
      "type": "timeline",
      "sizing": "container",
      "title": "Project History",
      "subtitle": "A visual journey through our milestones.",
      "timeline": [
        { "date": "Q1 2023", "title": "Inception", "description": "The initial concept was drafted." },
        { "date": "Q3 2023", "title": "Prototype", "description": "First functional MVP released." },
        { "date": "Q1 2024", "title": "Beta Launch", "description": "Public beta opened to users." }
      ]
    }
  ]
}`;

async function runDemo() {
    demoInput.value = '';
    demoStarted.value = true;

    // Initialize Engine if needed
    if (!demoEngine) {
        // Ensure container is cleared to avoid duplicates
        const container = document.getElementById('streaming-demo-container');
        if (container) container.innerHTML = '';

        nextTick(() => {
            demoEngine = new Lumina('#streaming-demo-container', {
                ui: { visible: true, showControls: true },
                keyboard: false,
                animation: { enabled: true, durationIn: 0.5 }
            });
        });
    }

    let i = 0;
    // Faster typing for examples
    const interval = setInterval(() => {
        demoInput.value += TARGET_JSON[i];
        i++;
        if (i >= TARGET_JSON.length) clearInterval(interval);
    }, 10);
}

function loadIntoDemo(json: string) {
    activeSection.value = 'agents-streaming';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    demoInput.value = '';
    demoStarted.value = true;

    setTimeout(() => {
        if (!demoEngine) {
            const container = document.getElementById('streaming-demo-container');
            if (container) container.innerHTML = '';
            demoEngine = new Lumina('#streaming-demo-container', {
                ui: { visible: true },
                keyboard: false,
                animation: { enabled: true, durationIn: 0.5 }
            });
        }

        let i = 0;
        const interval = setInterval(() => {
            demoInput.value += json[i];
            i++;
            if (i >= json.length) clearInterval(interval);
        }, 5);
    }, 100);
}

const EXAMPLES = {
    statement: `{
  "type": "statement",
  "sizing": "container",
  "t": "Big Impact",
  "s": "Created instantly from JSON.",
  "meta": { "variant": "v:g" }
}`,
    features: `{
  "type": "features",
  "sizing": "container",
  "t": "Core Capabilities",
  "fs": [
    { "t": "Fast", "desc": "60fps", "icon": "bolt" },
    { "t": "AI", "desc": "Native", "icon": "robot" },
    { "t": "Typed", "desc": "TS", "icon": "code" }
  ]
}`,
    timeline: `{
  "type": "timeline",
  "sizing": "container",
  "t": "Product Roadmap",
  "tl": [
    { "date": "Q1", "t": "Alpha", "desc": "Core Engine" },
    { "date": "Q2", "t": "Beta", "desc": "Public API" },
    { "date": "Q3", "t": "Launch", "desc": "Global Scale" }
  ]
}`,
    half: `{
  "type": "half",
  "sizing": "container",
  "imageSide": "left",
  "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000",
  "t": "Split Layout",
  "tag": "Visual",
  "paragraphs": ["Image on left, text on right."]
}`,
    steps: `{
  "type": "steps",
  "sizing": "container",
  "t": "Process Flow",
  "steps": [
    { "step": "01", "t": "Install", "desc": "npm install" },
    { "step": "02", "t": "Import", "desc": "import { Lumina }..." },
    { "step": "03", "t": "Launch", "desc": "new Lumina(...)" }
  ]
}`,
    flex: `{
  "type": "flex",
  "sizing": "container",
  "direction": "horizontal",
  "elements": [
    { "type": "image", "src": "./brains.png", "size": "half", "fill": true },
    { "type": "content", "size": "half", "valign": "center", "padding": "xl", "gap": "md", "elements": [
      { "type": "title", "text": "Visual Story", "size": "2xl" },
      { "type": "bullets", "items": ["Image fills height", "Content centered", "No coordinates"] },
      { "type": "button", "label": "Learn More", "variant": "primary" }
    ]}
  ]
}` ,
    video: `{
  "type": "statement",
  "sizing": "container",
  "meta": { "orbColor": "#ec4899" },
  "background": {
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "opacity": 0.4
  },
  "tag": "Cinematic",
  "title": "Video Backgrounds",
  "subtitle": "Immersive support."
}`,
    video_half: `{
  "type": "half",
  "sizing": "container",
  "video": {
    "type": "video",
    "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "autoplay": true,
    "muted": true
  },
  "title": "Watch This"
}`,
    video_flex: `{
  "type": "flex",
  "sizing": "container",
  "elements": [
    { 
      "type": "video", 
      "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "controls": true,
      "size": "half"
    }
  ]
}`
};

// Watch input and parse
watch(demoInput, (val) => {
    if (!demoEngine) return;
    const parsed = parsePartialJson(val);
    if (parsed) {
        // Handle Deck vs Slide
        if (parsed.slides && Array.isArray(parsed.slides)) {
            // Apply sizing: container to all slides if missing
            parsed.slides.forEach((s: any) => s.sizing = 'container');
            demoEngine.load(parsed);

            // Auto-advance logic: check if we have a new slide that is ready
            const availableSlides = parsed.slides.filter((s: any) => s.title || s.type);
            const targetIndex = availableSlides.length - 1;

            if (targetIndex > demoEngine.currentSlideIndex) {
                demoEngine.goTo(targetIndex);
            }
        } else {
            // Wrap single slide
            demoEngine.load({
                meta: { title: "Demo" },
                slides: [{ ...parsed, sizing: 'container' }]
            });
        }
    }
});

onUnmounted(() => {
    if (demoEngine) demoEngine.destroy();
});



const navigation = [
    {
        title: 'Getting Started',
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'install', label: 'Installation' },
            { id: 'setup', label: 'Quick Start' },
            { id: 'theming', label: 'Theming & Presets' }
        ]
    },
    {
        title: 'Concepts',
        items: [
            { id: 'deck', label: 'Deck Structure' },
            { id: 'slides', label: 'Slide Layouts' },
            { id: 'media', label: 'Media & Video' },
            { id: 'sizing', label: 'Embedding & Sizing' },
            { id: 'agents-intro', label: 'Agent Protocol' },
            { id: 'agents-tokens', label: 'Token Optimization' }
        ]
    },
    {
        title: 'Layouts',
        items: [
            { id: 'ref-statement', label: 'Statement' },
            { id: 'ref-half', label: 'Half / Split' },
            { id: 'ref-features', label: 'Features' },
            { id: 'ref-timeline', label: 'Timeline' },
            { id: 'ref-steps', label: 'Steps' },
            { id: 'ref-flex', label: 'Flex' },
            { id: 'ref-chart', label: 'Chart' },
            { id: 'ref-custom', label: 'Custom HTML' },
            { id: 'ref-auto', label: 'Auto Strategy' }
        ]
    },
    {
        title: 'AI & LLM Integration',
        items: [
            { id: 'agents-streaming', label: 'Streaming & Realtime' },
            { id: 'agents-intro', label: 'Agent Protocol' },
            { id: 'agents-tokens', label: 'Token Optimization' }
        ]
    },
    {
        title: 'Advanced',
        items: [
            { id: 'config', label: 'Configuration' },
            { id: 'events', label: 'Events & API' },
            { id: 'sizing', label: 'Embedding' },
            { id: 'speaker-notes', label: 'Speaker Notes' }
        ]
    }
];


function scroll(id: string) {
    nextTick(() => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

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

.doc-content h3 {
    @apply text-[20px] font-extrabold text-white mb-[15px] mt-8 font-heading;
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
