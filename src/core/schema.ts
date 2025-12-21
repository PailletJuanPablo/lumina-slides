
import { z } from 'zod';
// Import types to ensure we are matching the contract

/**
 * Normalizes short aliases (t -> title, s -> subtitle) to full property names.
 */
const normalizeAliases = (obj: any) => {
    if (!obj || typeof obj !== 'object') return obj;
    const map: Record<string, string> = {
        't': 'title',
        's': 'subtitle',
        'd': 'description',
        'desc': 'description',
        'bg': 'background',
        'img': 'image',
        'fs': 'features',
        'tl': 'timeline',
        'st': 'steps'
    };
    const newObj: any = { ...obj };
    for (const [short, full] of Object.entries(map)) {
        if (short in newObj && !(full in newObj)) {
            newObj[full] = newObj[short];
            delete newObj[short]; // Optional: keep clean
        }
    }
    return newObj;
};

// --- 1. Fuzzy Helpers (Improvement: "Fuzzy Validation") ---


/**
 * Creates a schema that accepts T, [T], null, or undefined, 
 * and always returns T[] (empty array if null/undefined).
 */
const fuzzyArray = <T extends z.ZodTypeAny>(schema: T) => {
    return z
        .union([schema, z.array(schema), z.null(), z.undefined()])
        .transform((val) => {
            if (val === null || val === undefined) return [];
            if (Array.isArray(val)) return val;
            return [val];
        });
};

/**
 * Coerces numbers/nulls to string.
 */
const fuzzyString = z
    .union([z.string(), z.number(), z.null(), z.undefined()])
    .transform((val) => (val === null || val === undefined) ? "" : String(val));



// --- 2. Primitives ---

const IconSchema = z.string().describe("Icon name (e.g. 'star', 'users', 'arrow-right'). Use standard Lucide/FontAwesome names.");

// --- 3. Slide Schemas (Improvement: "Semantic Descriptions") ---

// --- 3. Slide Schemas (Improvement: "Semantic Descriptions") ---

// 1. Define the BASE SHAPE (ZodObject) so we can extend it.
const SlideBaseShape = z.object({
    id: z.string().optional().describe("Unique ID for the slide. Useful for navigation."),
    sizing: z.enum(['viewport', 'container']).optional().describe("How the slide fits the screen. Default: 'viewport'."),
    meta: z.record(z.string(), z.any()).optional().describe("Arbitrary metadata for custom behavior."),
});

// Layout: Statement
const SlideStatementSchema = SlideBaseShape.extend({
    type: z.literal('statement').describe("Use for high-impact titles, covers, or quotes."),
    title: fuzzyString.describe("Main headline. Keep it punchy (3-6 words)."),
    subtitle: fuzzyString.optional().describe("Supporting text or attribution."),
    tag: fuzzyString.optional().describe("Small eyebrow tag above the title."),
});

// Layout: Features
const FeatureItemSchema = z.object({
    title: fuzzyString.describe("Feature name."),
    desc: fuzzyString.describe("Short benefit description."),
    icon: IconSchema.optional().describe("Visual icon for the feature."),
});

const SlideFeaturesSchema = SlideBaseShape.extend({
    type: z.literal('features').describe("Use for lists of benefits, stats, or grid items."),
    title: fuzzyString.describe("Section header."),
    description: fuzzyString.optional().describe("Contextual description."),
    features: fuzzyArray(FeatureItemSchema).describe("Array of feature cards."),
});

// Layout: Timeline
const TimelineItemSchema = z.object({
    date: fuzzyString.describe("Time marker (Year, Date, or 'Now')."),
    title: fuzzyString.describe("Event title."),
    description: fuzzyString.describe("Event details (1-2 sentences)."),
    icon: IconSchema.optional().describe("Optional marker icon."),
});

const SlideTimelineSchema = SlideBaseShape.extend({
    type: z.literal('timeline').describe("Use for history, roadmaps, or chronological steps."),
    title: fuzzyString.describe("Timeline header."),
    subtitle: fuzzyString.optional(),
    timeline: fuzzyArray(TimelineItemSchema).describe("Ordered events."),
});

// Layout: Steps
const StepItemSchema = z.object({
    step: fuzzyString.describe("Step number/label (e.g., '01', 'A')."),
    title: fuzzyString.describe("Action title."),
    description: fuzzyString.optional().describe("Action details."),
    icon: IconSchema.optional(),
});

const SlideStepsSchema = SlideBaseShape.extend({
    type: z.literal('steps').describe("Use for tutorials, 'how-to' guides, or process flows."),
    title: fuzzyString.describe("Process header."),
    subtitle: fuzzyString.optional(),
    steps: fuzzyArray(StepItemSchema).describe("Sequential steps."),
});

// Layout: Half
const SlideHalfSchema = SlideBaseShape.extend({
    type: z.literal('half').describe("Use when you have a strong visual + explanations."),
    imageSide: z.enum(['left', 'right']).default('left').describe("Which side the image goes on."),
    image: fuzzyString.describe("URL to the image."),
    title: fuzzyString.describe("Headline."),
    tag: fuzzyString.optional(),
    paragraphs: fuzzyArray(z.string()).describe("Array of text blocks/paragraphs."),
    cta: fuzzyString.optional().describe("Call to Action label (button)."),
});

// Union of all Slides (Validation Layer)
export const SlideSchema = z.discriminatedUnion('type', [
    SlideStatementSchema,
    SlideFeaturesSchema,
    SlideTimelineSchema,
    SlideStepsSchema,
    SlideHalfSchema,
]);

// Deck Schema
export const DeckMetaSchema = z.object({
    title: fuzzyString.describe("Title of the entire presentation."),
    author: fuzzyString.optional(),
    date: fuzzyString.optional(),
}).passthrough();

export const DeckSchema = z.object({
    meta: DeckMetaSchema.describe("Global deck settings."),
    // Apply normalization (Alias -> Full key) at the entrance of each slide
    slides: z.array(z.preprocess(normalizeAliases, SlideSchema)).describe("Ordered array of slide definitions."),
});


// --- 4. Utilities (Improvement: "JSON Schema Export") ---

/**
 * Exports the JSON Schema for the Deck structure.
 * Useful for passing to OpenAI `response_format`.
 */
export function getLuminaJsonSchema() {
    try {
        const { zodToJsonSchema } = require('zod-to-json-schema');
        return zodToJsonSchema(DeckSchema, "LuminaDeck");
    } catch (e) {
        console.warn("zod-to-json-schema not installed. Install it to export raw JSON Schema.");
        return {};
    }
}
