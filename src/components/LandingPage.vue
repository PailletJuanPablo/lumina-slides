<template>
    <div class="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#0f172a]/80">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div
                        class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <span class="text-white font-bold text-lg">L</span>
                    </div>
                    <span class="text-xl font-bold text-white tracking-tight">Lumina<span
                            class="text-cyan-400">Engine</span></span>
                </div>
                <div class="flex items-center gap-8">
                    <a href="#features" class="text-sm font-medium hover:text-white transition-colors">Features</a>
                    <a href="#showcase" class="text-sm font-medium hover:text-white transition-colors">Showcase</a>
                    <a href="https://github.com/lumina-engine" target="_blank"
                        class="text-sm font-medium hover:text-white transition-colors">GitHub</a>
                    <a href="/?deck=deck"
                        class="px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg shadow-white/10">
                        Live Demo
                    </a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <header class="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
            <!-- Background Glows -->
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none rounded-full blur-3xl opacity-50">
            </div>
            <div
                class="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none">
            </div>

            <div class="max-w-7xl mx-auto relative z-10 text-center">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 animate-fade-in-up">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    v8.0.0 Now Available
                </div>
                <h1
                    class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-8 drop-shadow-2xl">
                    Cinematic Presentations<br>
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        for the Modern Web
                    </span>
                </h1>
                <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Build stunning, high-performance slide decks using Vue 3 and GSAP.
                    Zero config, fully declarative, and infinitely customizable.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="/?deck=deck"
                        class="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
                        Start Presentation
                    </a>
                    <a href="#code"
                        class="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                        View Documentation
                    </a>
                </div>
            </div>
        </header>

        <!-- Feature Grid -->
        <section id="features" class="py-24 bg-slate-900/50">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div
                        class="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Instant Performance</h3>
                        <p class="text-slate-400 leading-relaxed">
                            Powered by GSAP for butter-smooth 60fps animations, even with complex SVG and WebGL content.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div
                        class="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Declarative Syntax</h3>
                        <p class="text-slate-400 leading-relaxed">
                            Define your slides using simple JSON or Vue components. No messy imperative code required.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div
                        class="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors group">
                        <div
                            class="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-2 2h-2zM15 7h6a2 2 0 012 2v2a2 2 0 01-2 2h-6V7zM15 14h6a2 2 0 012 2v2a2 2 0 01-2 2h-6v-4z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Theme System</h3>
                        <p class="text-slate-400 leading-relaxed">
                            Built-in support for dark mode, layouts, and custom transitions. Fully Tailwind compatible.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Code Preview -->
        <section id="code" class="py-24 px-6">
            <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Simple yet Powerful</h2>
                    <p class="text-lg text-slate-400 mb-8 leading-relaxed">
                        Create complex animations without the headache. Lumina Engine handles the timeline, you handle
                        the content.
                    </p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-3 text-slate-300">
                            <div
                                class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                                ✓</div>
                            Automatic slide transitions
                        </li>
                        <li class="flex items-center gap-3 text-slate-300">
                            <div
                                class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                                ✓</div>
                            Built-in keyboard events
                        </li>
                        <li class="flex items-center gap-3 text-slate-300">
                            <div
                                class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                                ✓</div>
                            Reactive state management
                        </li>
                    </ul>
                </div>
                <div class="relative group">
                    <div
                        class="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000">
                    </div>
                    <div class="relative rounded-xl bg-[#0B1120] border border-white/5 overflow-hidden shadow-2xl">
                        <div class="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div class="ml-4 text-xs text-slate-500 font-mono">MyDeck.json</div>
                        </div>
                        <div class="p-6 font-mono text-sm overflow-x-auto">
                            <div class="text-blue-400"> const deck = [</div>
                            <div class="pl-4">
                                <span class="text-purple-400">{</span>
                                <div class="pl-4">
                                    <span class="text-sky-300">id:</span> <span
                                        class="text-emerald-400">"slide-1"</span>,<br>
                                    <span class="text-sky-300">layout:</span> <span
                                        class="text-emerald-400">"hero"</span>,<br>
                                    <span class="text-sky-300">content:</span> <span class="text-emerald-400">"Hello
                                        World"</span>,<br>
                                    <span class="text-sky-300">animation:</span> <span
                                        class="text-emerald-400">"fade-in-up"</span>
                                </div>
                                <span class="text-purple-400">},</span>
                            </div>
                            <div class="pl-4">
                                <span class="text-purple-400">{</span>
                                <div class="pl-4">
                                    <span class="text-sky-300">id:</span> <span
                                        class="text-emerald-400">"slide-2"</span>,<br>
                                    <span class="text-sky-300">layout:</span> <span
                                        class="text-emerald-400">"split"</span>,<br>
                                    <span class="text-sky-300">image:</span> <span
                                        class="text-emerald-400">"/demo.png"</span>
                                </div>
                                <span class="text-purple-400">}</span>
                            </div>
                            <div class="text-blue-400">]</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-12 border-t border-white/5 bg-[#0f172a] text-center">
            <p class="text-slate-500 text-sm">
                © 2025 Lumina Engine. Released under MIT License. <br>
                Created by <a href="https://pailletjp.com" target="_blank"
                    class="text-slate-400 hover:text-cyan-400 transition-colors">Juan Pablo Paillet</a> for the Vue
                community.
            </p>
        </footer>
    </div>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
