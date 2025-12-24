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

                    <!-- INTRODUCTION -->
                    <div v-if="activeSection === 'intro'">
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
                        <p>Customize the look and feel using CSS variables or the configuration object.</p>

                        <pre class="language-css"><code><span class="text-gray-500">/* In your CSS */</span>
<span class="text-yellow-400">:root</span> {
    --lumina-primary: <span class="text-blue-400">#3b82f6</span>;
    --lumina-bg: <span class="text-blue-400">#050505</span>;
    --lumina-font-heading: 'Inter', sans-serif;
}</code></pre>
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
                        <p>LLM tokens cost money and latency. Lumina supports a <strong>Hybrid Schema</strong> that
                            accepts short aliases.</p>

                        <div class="not-prose grid gap-6 mt-8">
                            <div class="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                                <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Standard JSON
                                    (120 Tokens)</h3>
                                <pre class="!mb-0 !p-0 !bg-transparent !border-none"><code>{
  "type": "statement",
  "title": "Quarterly Review",
  "subtitle": "Growth is exceeding expectations."
}</code></pre>
                            </div>

                            <div class="bg-[#0A0A0A] border border-green-500/20 rounded-xl p-6 relative">
                                <span
                                    class="absolute top-4 right-4 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                                    ~40% Less Tokens
                                </span>
                                <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Optimized
                                    JSON (70 Tokens)</h3>
                                <pre class="!mb-0 !p-0 !bg-transparent !border-none"><code>{
  "type": "statement",
  "t": "Quarterly Review",
  "s": "Growth is exceeding expectations."
}</code></pre>
                            </div>
                        </div>

                        <h3>Supported Aliases</h3>
                        <table class="w-full text-left text-sm text-gray-400">
                            <thead class="bg-white/5 text-white">
                                <tr>
                                    <th class="p-3">Full Key</th>
                                    <th class="p-3">Alias</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                <tr>
                                    <td class="p-3">title</td>
                                    <td class="p-3 text-green-400">t</td>
                                </tr>
                                <tr>
                                    <td class="p-3">subtitle</td>
                                    <td class="p-3 text-green-400">s</td>
                                </tr>
                                <tr>
                                    <td class="p-3">description</td>
                                    <td class="p-3 text-green-400">d</td>
                                </tr>
                                <tr>
                                    <td class="p-3">features</td>
                                    <td class="p-3 text-green-400">fs</td>
                                </tr>
                                <tr>
                                    <td class="p-3">timeline</td>
                                    <td class="p-3 text-green-400">tl</td>
                                </tr>
                            </tbody>
                        </table>
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

                    <!-- REF: AUTO -->
                    <div v-else-if="activeSection === 'ref-auto'">
                        <h1>Auto Strategy</h1>
                        <p class="lead">Smartly chooses the best layout based on the data structure provided. Useful for
                            AI agents or rapid prototyping.</p>

                        <div class="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl my-8">
                            <h3 class="text-blue-400 font-bold mb-2">How it works</h3>
                            <ul class="list-disc list-inside text-sm text-blue-200/80 space-y-1">
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
            { id: 'setup', label: 'Quick Start' }
        ]
    },
    {
        title: 'Agents & LLMs',
        items: [
            { id: 'agents-streaming', label: 'Streaming & Realtime' },
            { id: 'agents-intro', label: 'The Agent Protocol' },
            { id: 'agents-tokens', label: 'Token Optimization' },
            { id: 'agents-layouts', label: 'Layout Gallery' },
            { id: 'agents-auto', label: 'Auto-Layouts' },
            { id: 'agents-state', label: 'State & Feedback' }
        ]
    },
    {
        title: 'Layout Reference',
        items: [
            { id: 'ref-statement', label: 'Statement' },
            { id: 'ref-half', label: 'Half / Split' },
            { id: 'ref-features', label: 'Features' },
            { id: 'ref-timeline', label: 'Timeline' },
            { id: 'ref-steps', label: 'Steps' },
            { id: 'ref-flex', label: 'Flex' },
            { id: 'ref-custom', label: 'Custom HTML' },
            { id: 'ref-auto', label: 'Auto Strategy' }
        ]
    },
    {
        title: 'Core Concepts',
        items: [
            { id: 'deck', label: 'Deck Structure' },
            { id: 'slides', label: 'Slide Layouts' },
            { id: 'sizing', label: 'Embedding & Sizing' },
            { id: 'config', label: 'Configuration' },
            { id: 'events', label: 'Events & API' },
            { id: 'theming', label: 'Theming' },
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
