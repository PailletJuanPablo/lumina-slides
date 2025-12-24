<template>
    <div class="min-h-screen pt-28 px-4 lg:px-8 max-w-5xl mx-auto pb-32">
        <div class="text-center mb-12">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">Prompt Builder</h1>
            <p class="text-lg text-white/60">Create a customized prompt for any LLM to generate Lumina slides</p>
        </div>

        <!-- Progress Steps -->
        <div class="flex justify-center mb-12">
            <div class="flex items-center gap-2">
                <template v-for="(step, i) in steps" :key="i">
                    <button @click="currentStep = i" :class="[
                        'w-10 h-10 rounded-full font-bold text-sm transition-all',
                        currentStep === i
                            ? 'bg-blue-500 text-white scale-110'
                            : currentStep > i
                                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                : 'bg-white/10 text-white/40'
                    ]">
                        {{ currentStep > i ? '✓' : i + 1 }}
                    </button>
                    <div v-if="i < steps.length - 1" class="w-8 h-0.5 bg-white/10"></div>
                </template>
            </div>
        </div>

        <!-- Step Content -->
        <div class="max-w-2xl mx-auto">
            <!-- Step 1: Language -->
            <div v-if="currentStep === 0" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-8">{{ steps[0] }}</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <button v-for="lang in languages" :key="lang.code" @click="form.language = lang.code; nextStep()"
                        :class="[
                            'p-6 rounded-xl border transition-all text-center hover:scale-105',
                            form.language === lang.code
                                ? 'bg-blue-500/20 border-blue-500 text-white'
                                : 'bg-white/5 border-white/10 hover:border-white/30'
                        ]">
                        <span class="text-3xl block mb-2">{{ lang.flag }}</span>
                        <span class="font-medium">{{ lang.name }}</span>
                    </button>
                </div>
            </div>

            <!-- Step 2: Style -->
            <div v-if="currentStep === 1" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-8">{{ steps[1] }}</h2>
                <div class="grid grid-cols-2 gap-4">
                    <button v-for="style in styles" :key="style.id" @click="form.style = style.id; nextStep()" :class="[
                        'p-6 rounded-xl border transition-all hover:scale-105',
                        form.style === style.id
                            ? 'bg-blue-500/20 border-blue-500'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                    ]">
                        <span class="text-2xl mb-2 block">{{ style.icon }}</span>
                        <span class="font-bold block">{{ style.name }}</span>
                        <span class="text-sm text-white/50">{{ style.desc }}</span>
                    </button>
                </div>
            </div>

            <!-- Step 3: Topic -->
            <div v-if="currentStep === 2" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-8">{{ steps[2] }}</h2>
                <textarea v-model="form.topic" rows="4"
                    class="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                    placeholder="Describe your presentation topic in a few sentences..."></textarea>
                <button @click="nextStep()" :disabled="!form.topic.trim()"
                    class="w-full py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition">
                    Continue →
                </button>
            </div>

            <!-- Step 4: Audience -->
            <div v-if="currentStep === 3" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-8">{{ steps[3] }}</h2>
                <div class="grid grid-cols-2 gap-4">
                    <button v-for="aud in audiences" :key="aud.id" @click="form.audience = aud.id; nextStep()" :class="[
                        'p-6 rounded-xl border transition-all hover:scale-105',
                        form.audience === aud.id
                            ? 'bg-blue-500/20 border-blue-500'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                    ]">
                        <span class="text-2xl mb-2 block">{{ aud.icon }}</span>
                        <span class="font-bold">{{ aud.name }}</span>
                    </button>
                </div>
            </div>

            <!-- Step 5: Slide Count -->
            <div v-if="currentStep === 4" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-8">{{ steps[4] }}</h2>
                <div class="flex items-center justify-center gap-4">
                    <button @click="form.slideCount = Math.max(3, form.slideCount - 1)"
                        class="w-12 h-12 rounded-full bg-white/10 text-xl font-bold hover:bg-white/20">−</button>
                    <span class="text-5xl font-bold w-20 text-center">{{ form.slideCount }}</span>
                    <button @click="form.slideCount = Math.min(20, form.slideCount + 1)"
                        class="w-12 h-12 rounded-full bg-white/10 text-xl font-bold hover:bg-white/20">+</button>
                </div>
                <p class="text-center text-white/40 text-sm">Recommended: 5-12 slides</p>
                <button @click="nextStep()"
                    class="w-full py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition">
                    Generate Prompt →
                </button>
            </div>

            <!-- Step 6: Result -->
            <div v-if="currentStep === 5" class="space-y-6">
                <h2 class="text-2xl font-bold text-center mb-4">Your Prompt is Ready!</h2>
                <p class="text-center text-white/60 mb-8">Copy and paste this into ChatGPT, Claude, or any LLM</p>

                <div class="relative">
                    <div class="p-6 rounded-xl bg-black border border-white/10 max-h-96 overflow-y-auto">
                        <pre class="text-sm text-white/80 whitespace-pre-wrap font-mono">{{ generatedPrompt }}</pre>
                    </div>
                    <button @click="copyPrompt" :class="[
                        'absolute top-4 right-4 px-4 py-2 rounded-lg font-bold text-sm transition',
                        copied ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20'
                    ]">
                        {{ copied ? '✓ Copied!' : 'Copy' }}
                    </button>
                </div>

                <div class="flex gap-4">
                    <button @click="currentStep = 0"
                        class="flex-1 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition">
                        ← Start Over
                    </button>
                    <a href="https://chat.openai.com" target="_blank"
                        class="flex-1 py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition text-center">
                        Open ChatGPT →
                    </a>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div v-if="currentStep > 0 && currentStep < 5" class="max-w-2xl mx-auto mt-8">
            <button @click="currentStep--" class="text-white/50 hover:text-white transition">
                ← Back
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const currentStep = ref(0);
const copied = ref(false);
const basePrompt = ref('');

const steps = ['Language', 'Style', 'Topic', 'Audience', 'Slides', 'Done'];

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const styles = [
    { id: 'minimalist', name: 'Minimalist', desc: 'Clean and simple', icon: '◻️' },
    { id: 'corporate', name: 'Corporate', desc: 'Professional and formal', icon: '🏢' },
    { id: 'creative', name: 'Creative', desc: 'Bold and expressive', icon: '🎨' },
    { id: 'technical', name: 'Technical', desc: 'Data and detail focused', icon: '⚙️' },
];

const audiences = [
    { id: 'investors', name: 'Investors', icon: '💼' },
    { id: 'executives', name: 'Executives', icon: '👔' },
    { id: 'team', name: 'Team/Internal', icon: '👥' },
    { id: 'customers', name: 'Customers', icon: '🎯' },
    { id: 'students', name: 'Students', icon: '📚' },
    { id: 'general', name: 'General Public', icon: '🌍' },
];

const form = ref({
    language: 'en',
    style: 'minimalist',
    topic: '',
    audience: 'general',
    slideCount: 8
});

const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
        currentStep.value++;
    }
};

const generatedPrompt = computed(() => {
    const langName = languages.find(l => l.code === form.value.language)?.name || 'English';
    const styleName = styles.find(s => s.id === form.value.style)?.name || 'Minimalist';
    const audName = audiences.find(a => a.id === form.value.audience)?.name || 'General';

    return `${basePrompt.value}

---

## USER REQUEST

**Language**: ${langName}
**Style**: ${styleName}
**Audience**: ${audName}
**Slide Count**: ${form.value.slideCount}
**Topic**: ${form.value.topic}

**Requirements**:
- **JSON Schema**: Every slide object MUST include the "notes" property.
- Include key talking points and timing in the notes.
- Follow all quality constraints defined in the system prompt.

Please generate the presentation now.`;
});

const copyPrompt = async () => {
    try {
        await navigator.clipboard.writeText(generatedPrompt.value);
        copied.value = true;
        setTimeout(() => copied.value = false, 2000);
    } catch (e) {
        console.error('Failed to copy:', e);
    }
};

onMounted(async () => {
    try {
        const res = await fetch('/lumina-llm-prompt.txt');
        basePrompt.value = await res.text();
    } catch (e) {
        console.error('Failed to load base prompt:', e);
    }
});
</script>
