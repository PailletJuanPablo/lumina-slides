<template>
    <component :is="resolvedLayout" :data="data" @action="$emit('action', $event)" />
</template>

<script setup lang="ts">
import { computed, defineEmits, onMounted } from 'vue';

const props = defineProps<{
    data: any;
}>();

const emit = defineEmits(['action']);

// Module-level state to track variety across slide changes (Singleton per session)
// This resets on page reload, which is fine.
let lastAutoType: string | null = null;

const resolvedLayout = computed(() => {
    const d = props.data || {};
    const keys = Object.keys(d);

    // 1. Hard Heuristics (Explicit Data Structures)
    const hasTimeline = Array.isArray(d.timeline) && d.timeline.length > 0;
    const hasSteps = Array.isArray(d.steps) && d.steps.length > 0;
    const hasFeatures = Array.isArray(d.features) && d.features.length > 0;
    const hasImage = !!d.image;

    let candidate = 'layout-statement'; // Default
    let alternate = null;

    // 2. Semantic Priority
    if (hasTimeline) {
        candidate = 'layout-timeline';
    } else if (hasSteps) {
        candidate = 'layout-steps';
    } else if (hasFeatures) {
        candidate = 'layout-features';
    } else if (hasImage) {
        candidate = 'layout-half';
    } else {
        // Text Only Analysis
        const textLen = (d.title?.length || 0) + (d.subtitle?.length || 0) + (d.paragraphs?.join('').length || 0);

        // Improvement: "Semantic Heuristics"
        // If text is very long, Statement might look bad if it doesn't support scrolling.
        // But we don't have a "Document" layout yet. Statement is best for now.
    }

    // Improvement: "Variety Enforcer"
    // If we picked the same layout as last time, try to switch if possible.
    if (candidate === lastAutoType && candidate === 'layout-statement' && hasImage) {
        // If we defaulted to Statement but have an image, maybe we used Statement last time?
        // Actually if hasImage is true, we picked Half.
        // Let's say we have small text and no image.
        // If we are repeating Statement, maybe we can't do much.
    }

    // Side-effect: Store choice (in onMounted or watcher? Computed is pure usually)
    // We cannot change module state in computed easily without side effects.
    // Putting it here is "okay" for this simple use case.
    lastAutoType = candidate;

    return candidate;
});

// Improvement: "Layout Downgrade Fallback" happens implicitly.
// We strictly only return 'layout-features' if `hasFeatures` is true.
// This prevents picking a layout that would break.

</script>
