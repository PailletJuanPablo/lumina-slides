<template>
    <div class="min-h-screen pt-32 px-8 max-w-7xl mx-auto pb-24">
        <h1 class="text-6xl font-bold mb-12 tracking-tighter">API Reference</h1>

        <div v-if="loading" class="text-white/50 animate-pulse">Generated docs loading...</div>
        <div v-else-if="error" class="text-red-400">Failed to load API docs. {{ error }}</div>

        <div v-else class="space-y-24">
            <div v-for="kind in apiData" :key="kind.name" class="space-y-12">
                <div class="border-b border-white/10 pb-6">
                    <h2 class="text-4xl font-bold text-blue-400 mb-2">{{ kind.name }}</h2>
                    <p class="text-white/60">Module Reference</p>
                </div>

                <!-- 1. Classes -->
                <div v-if="hasChildren(kind, [128])" class="space-y-16">
                    <div v-for="cls in getChildren(kind, [128])" :key="cls.id" class="space-y-6">
                        <div class="flex items-baseline gap-4">
                            <h3 class="text-3xl font-bold text-emerald-400">{{ cls.name }}</h3>
                            <span
                                class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">Class</span>
                        </div>

                        <div class="prose prose-invert max-w-none text-white/80 text-lg leading-relaxed"
                            v-html="renderComment(cls.comment)"></div>

                        <!-- Examples -->
                        <div v-if="getDbTags(cls.comment, '@example').length" class="space-y-4 my-8">
                            <div v-for="(example, i) in getDbTags(cls.comment, '@example')" :key="i"
                                class="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
                                <div
                                    class="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-white/40 uppercase">
                                    Example
                                </div>
                                <div class="p-6 font-mono text-sm text-blue-200 whitespace-pre-wrap overflow-x-auto"
                                    v-html="renderMarkdown(example)"></div>
                            </div>
                        </div>

                        <!-- Constructor -->
                        <div class="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                            <div class="px-8 py-6 border-b border-white/5">
                                <h4 class="text-xl font-bold">Constructor</h4>
                            </div>
                            <div class="p-8 space-y-8">
                                <div v-for="method in getChildren(cls, [512])" :key="method.id">
                                    <code class="text-lg md:text-xl font-bold text-emerald-200 block mb-4">
                                        new {{ cls.name }}(<span v-html="renderParams(method.signatures[0])"></span>)
                                     </code>
                                    <div class="text-white/70 mb-4"
                                        v-html="renderComment(method.signatures[0].comment)"></div>
                                    <div v-if="method.signatures[0].parameters" class="space-y-2">
                                        <div v-for="param in method.signatures[0].parameters" :key="param.id"
                                            class="flex gap-4 text-sm">
                                            <div class="w-32 shrink-0 font-mono text-purple-300">{{ param.name }}:</div>
                                            <div class="text-white/50">{{ renderType(param.type) }}</div>
                                            <div class="text-white/70" v-html="renderComment(param.comment)"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Methods -->
                        <div v-if="getChildren(cls, [2048]).length">
                            <h4 class="text-2xl font-bold mb-6 mt-12">Methods</h4>
                            <div class="grid gap-6">
                                <div v-for="method in getChildren(cls, [2048])" :key="method.id"
                                    class="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition duration-300">
                                    <div class="flex items-start justify-between mb-4">
                                        <code class="text-xl font-bold text-emerald-200">
                                            {{ method.name }}(<span v-html="renderParams(method.signatures[0])"></span>)
                                        </code>
                                        <span class="text-xs font-mono text-white/40">Points: {{ method.id }}</span>
                                    </div>

                                    <div class="prose prose-invert max-w-none text-white/70 mb-4"
                                        v-html="renderComment(method.signatures[0].comment)"></div>

                                    <!-- Method Params Table -->
                                    <div v-if="method.signatures[0].parameters"
                                        class="mt-6 pt-6 border-t border-white/5">
                                        <h5 class="text-xs font-bold uppercase text-white/40 mb-3">Parameters</h5>
                                        <div class="space-y-3">
                                            <div v-for="param in method.signatures[0].parameters" :key="param.id"
                                                class="grid grid-cols-[120px_1fr] md:grid-cols-[150px_200px_1fr] gap-4 text-sm">
                                                <div class="font-mono text-purple-300">{{ param.name }}</div>
                                                <div class="font-mono text-white/50 truncate"
                                                    v-html="renderType(param.type, true)"></div>
                                                <div class="text-white/70" v-html="renderComment(param.comment)"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Interfaces -->
                <div v-if="hasChildren(kind, [256])" class="space-y-12">
                    <h3 class="text-3xl font-bold text-pink-400 border-b border-white/10 pb-4">Interfaces & Types</h3>
                    <div class="grid gap-12">
                        <div v-for="iface in getChildren(kind, [256])" :key="iface.id" class="space-y-6">
                            <div class="flex items-baseline gap-4">
                                <h4 class="text-2xl font-bold text-pink-300">{{ iface.name }}</h4>
                                <span
                                    class="px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 text-xs font-bold uppercase">Interface</span>
                            </div>
                            <div class="prose prose-invert max-w-none text-white/80"
                                v-html="renderComment(iface.comment)"></div>

                            <!-- Examples -->
                            <div v-if="getDbTags(iface.comment, '@example').length" class="space-y-4 my-6">
                                <div v-for="(example, i) in getDbTags(iface.comment, '@example')" :key="i"
                                    class="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
                                    <div
                                        class="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-bold text-white/40 uppercase">
                                        Example Structure
                                    </div>
                                    <div class="p-6 font-mono text-xs md:text-sm text-blue-200 whitespace-pre-wrap overflow-x-auto"
                                        v-html="renderMarkdown(example)"></div>
                                </div>
                            </div>

                            <!-- Interface Properties -->
                            <div v-if="getChildren(iface, [1024]).length"
                                class="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                <div
                                    class="grid grid-cols-[200px_1fr_1fr] gap-0 text-sm font-bold bg-white/5 border-b border-white/10 p-4 text-white/40 uppercase tracking-wider">
                                    <div>Property</div>
                                    <div>Type</div>
                                    <div>Description</div>
                                </div>
                                <div class="divide-y divide-white/5">
                                    <div v-for="prop in getChildren(iface, [1024])" :key="prop.id"
                                        class="grid grid-cols-[200px_1fr_1fr] gap-4 p-4 hover:bg-white/5 transition">
                                        <div class="font-mono text-purple-300">{{ prop.name }}<span
                                                v-if="prop.flags.isOptional" class="text-white/30">?</span></div>
                                        <div class="font-mono text-white/60 break-words"
                                            v-html="renderType(prop.type, true)"></div>
                                        <div class="text-white/70" v-html="renderComment(prop.comment)"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const apiData = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Kind Mapping for TypeDoc
const KIND_MAP: Record<number, string> = {
    32: 'Variable',
    64: 'Function',
    128: 'Class',
    256: 'Interface',
    512: 'Constructor',
    1024: 'Property',
    2048: 'Method',
    4194304: 'Type'
};
const hasChildren = (node: any, kinds: number[]) => node.children?.some((c: any) => kinds.includes(c.kind));
const getChildren = (node: any, kinds: number[]) => node.children ? node.children.filter((c: any) => kinds.includes(c.kind)) : [];

// --- Content Rendering Helpers ---

const renderComment = (comment: any) => {
    if (!comment?.summary) return '';
    const text = comment.summary.map((s: any) => s.text).join('');
    return renderMarkdown(text);
};

// Simple Markdown Parser (Bold, Code, Links)
const renderMarkdown = (text: string) => {
    if (!text) return '';
    return text
        .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/50 p-4 rounded-lg my-2"><code class="text-sm">$1</code></pre>') // Code Blocks
        .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-blue-200">$1</code>') // Inline Code
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') // Bold
        .replace(/\n/g, '<br>'); // Line Breaks
};

const getDbTags = (comment: any, tagName: string) => {
    if (!comment?.blockTags) return [];
    return comment.blockTags
        .filter((t: any) => t.tag === tagName)
        .map((t: any) => t.content.map((c: any) => c.text).join(''));
};

// --- Type Resolution & Rendering ---
const findTypeByName = (name: string) => {
    // Search top-level children for the type definition
    if (!apiData.value[0]?.children) return null;
    return apiData.value[0].children.find((c: any) => c.name === name);
};

const renderType = (type: any, expandRefs = false, depth = 0): string => {
    if (!type) return 'void';
    if (depth > 2) return '<span class="text-white/30">...</span>'; // Prevent infinite recursion

    // String Logic
    if (type.type === 'intrinsic') return `<span class="text-blue-300 font-mono">${type.name}</span>`;
    if (type.type === 'literal') return `<span class="text-green-300 font-mono">'${type.value}'</span>`;

    // References (Links or Expanded)
    if (type.type === 'reference') {
        const typeName = type.name;

        // Always expand specific complex types inline for better DX
        const typesToExpand = ['SlideType', 'LuminaEventType', 'ThemeConfig', 'LuminaKeyBindings', 'LuminaUIOptions', 'LuminaAnimationOptions'];
        if (expandRefs || typesToExpand.includes(typeName)) {
            const def = findTypeByName(typeName);
            if (def) {
                // If it's a type alias (union/reflection), render it
                if (def.kind === 4194304 && def.type) return renderType(def.type, false, depth + 1);
                // If it's an interface (likely has properties)
                if (def.kind === 256) {
                    // Check if it has children properties we can render as an object literal
                    const props = getChildren(def, [1024]);
                    if (props && props.length) {
                        // Build synthetic reflection to reuse object rendering logic
                        return renderType({
                            type: 'reflection',
                            declaration: { children: props }
                        }, false, depth + 1);
                    }
                }
            }
        }

        return `<span class="text-yellow-300 font-bold border-b border-white/10 decoration-dotted cursor-help" title="Reference">${typeName}</span>`;
    }

    // Unions (e.g. 'a' | 'b')
    if (type.type === 'union') {
        return type.types.map((t: any) => renderType(t, expandRefs, depth)).join('<span class="text-white/40 mx-2">|</span>');
    }

    // Arrays (e.g. Slide[])
    if (type.type === 'array') {
        return `${renderType(type.elementType, expandRefs, depth)}<span class="text-white/60">[]</span>`;
    }

    // Reflection (Object literals: { a: string })
    if (type.type === 'reflection' && type.declaration) {
        if (type.declaration.children) {
            const props = type.declaration.children.map((c: any) => {
                return `<span class="text-purple-300">${c.name}</span>: ${renderType(c.type, false, depth + 1)}`;
            });
            return `{ <span class="text-white/80">${props.join(', ')}</span> }`;
        }
        return 'object';
    }

    return 'any';
};

const renderParams = (sig: any) => {
    if (!sig?.parameters) return '';
    return sig.parameters.map((p: any) => `<span class="text-purple-300">${p.name}</span>: ${renderType(p.type)}`).join(', ');
};

onMounted(async () => {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        const res = await fetch(`${baseUrl}api-docs.json`);
        if (!res.ok) throw new Error('Docs not found');
        const json = await res.json();
        // TypeDoc structure often wraps everything in a root object
        // We ensure we have an array for the loop
        if (json.children) apiData.value = [json];
        else apiData.value = [];

        console.log("Docs Loaded:", apiData.value);
    } catch (e) {
        error.value = (e as Error).message;
    } finally {
        loading.value = false;
    }
});
</script>
