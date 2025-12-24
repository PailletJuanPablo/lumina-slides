
import { z } from 'zod';
// Import types to ensure we are matching the contract

/**
 * Normalizes short aliases (t -> title, s -> subtitle) to full property names.
 */
export const normalizeAliases = (obj: any): any => {
    if (!obj || typeof obj !== 'object') return obj;

    // Handle Arrays Recursively
    if (Array.isArray(obj)) {
        return obj.map(item => normalizeAliases(item));
    }

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

    const newObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const normalizedKey = map[key] || key;
            const value = obj[key];

            // Recurse into values (objects or arrays)
            newObj[normalizedKey] = normalizeAliases(value);
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
    description: fuzzyString.describe("Short benefit description."),
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

// Layout: Flex - Spacing and Size Tokens
const SpacingTokenSchema = z.enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']).describe("Spacing size token.");
const FlexSizeSchema = z.enum(['auto', 'quarter', 'third', 'half', 'two-thirds', 'three-quarters', 'full']).describe("Element size in container.");
const VAlignSchema = z.enum(['top', 'center', 'bottom']).describe("Vertical alignment.");
const HAlignSchema = z.enum(['left', 'center', 'right']).describe("Horizontal alignment.");
const TextAlignSchema = z.enum(['left', 'center', 'right']).describe("Text alignment.");

// Flex Element Schemas
const FlexElementTitleSchema = z.object({
    type: z.literal('title').describe("Large heading text."),
    text: fuzzyString.describe("The heading text."),
    size: z.enum(['lg', 'xl', '2xl', '3xl']).optional().describe("Heading size. Default: 'xl'."),
    align: TextAlignSchema.optional().describe("Text alignment. Default: 'left'."),
});

const FlexElementTextSchema = z.object({
    type: z.literal('text').describe("Body paragraph text."),
    text: fuzzyString.describe("The paragraph text."),
    align: TextAlignSchema.optional().describe("Text alignment. Default: 'left'."),
    muted: z.boolean().optional().describe("Muted/subtle appearance. Default: false."),
});

const FlexElementBulletsSchema = z.object({
    type: z.literal('bullets').describe("Unordered bullet list."),
    items: fuzzyArray(z.string()).describe("List items."),
});

const FlexElementOrderedSchema = z.object({
    type: z.literal('ordered').describe("Numbered list."),
    items: fuzzyArray(z.string()).describe("List items."),
});

const FlexElementImageSchema = z.object({
    type: z.literal('image').describe("Visual media element."),
    src: fuzzyString.describe("Image URL."),
    alt: fuzzyString.optional().describe("Alt text for accessibility."),
    fill: z.boolean().optional().describe("Fill container edge-to-edge. Default: true."),
    fit: z.enum(['cover', 'contain']).optional().describe("Object-fit when fill. Default: 'cover'."),
    rounded: z.enum(['none', 'sm', 'md', 'lg', 'xl', 'full']).optional().describe("Border radius."),
});

const FlexElementButtonSchema = z.object({
    type: z.literal('button').describe("Call-to-action button."),
    label: fuzzyString.describe("Button label text."),
    action: fuzzyString.optional().describe("Action identifier emitted on click."),
    variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).optional().describe("Visual variant. Default: 'primary'."),
    fullWidth: z.boolean().optional().describe("Full width button. Default: false."),
});

const FlexElementTimelineSchema = z.object({
    type: z.literal('timeline').describe("Embedded timeline with events."),
    items: fuzzyArray(TimelineItemSchema).describe("Timeline events."),
    compact: z.boolean().optional().describe("Compact display mode. Default: false."),
});

const FlexElementStepperSchema = z.object({
    type: z.literal('stepper').describe("Embedded step-by-step process."),
    items: fuzzyArray(StepItemSchema).describe("Step items."),
    compact: z.boolean().optional().describe("Compact display mode. Default: false."),
});

const FlexElementSpacerSchema = z.object({
    type: z.literal('spacer').describe("Adds visual spacing."),
    size: SpacingTokenSchema.optional().describe("Size of the space. Default: 'md'."),
});

// Child elements (inside content container)
const FlexChildElementSchema = z.discriminatedUnion('type', [
    FlexElementTitleSchema,
    FlexElementTextSchema,
    FlexElementBulletsSchema,
    FlexElementOrderedSchema,
    FlexElementButtonSchema,
    FlexElementTimelineSchema,
    FlexElementStepperSchema,
    FlexElementSpacerSchema,
]);

// Content container schema
const FlexElementContentSchema = z.object({
    type: z.literal('content').describe("Groups child elements vertically with alignment control."),
    elements: fuzzyArray(FlexChildElementSchema).describe("Child elements."),
    valign: VAlignSchema.optional().describe("Vertical alignment. Default: 'center'."),
    halign: HAlignSchema.optional().describe("Horizontal alignment. Default: 'left'."),
    gap: SpacingTokenSchema.optional().describe("Gap between children. Default: 'md'."),
    padding: SpacingTokenSchema.optional().describe("Internal padding. Default: 'lg'."),
    size: FlexSizeSchema.optional().describe("Size in parent flex container."),
});

// Top-level flex element (with size property)
const FlexElementSchema = z.discriminatedUnion('type', [
    FlexElementImageSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementContentSchema,
    FlexElementTitleSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementTextSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementBulletsSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementOrderedSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementButtonSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementTimelineSchema.extend({ size: FlexSizeSchema.optional() }),
    FlexElementStepperSchema.extend({ size: FlexSizeSchema.optional() }),
]);

const SlideFlexSchema = SlideBaseShape.extend({
    type: z.literal('flex').describe("Flow-based layout. Elements flow in order with semantic sizing."),
    direction: z.enum(['horizontal', 'vertical']).optional().describe("Main flow direction. Default: 'horizontal'."),
    gap: SpacingTokenSchema.optional().describe("Gap between elements. Default: 'none'."),
    padding: SpacingTokenSchema.optional().describe("Container padding. Default: 'none'."),
    elements: fuzzyArray(FlexElementSchema).describe("Flex elements in flow order."),
});

// Union of all Slides (Validation Layer)
export const SlideSchema = z.discriminatedUnion('type', [
    SlideStatementSchema,
    SlideFeaturesSchema,
    SlideTimelineSchema,
    SlideStepsSchema,
    SlideHalfSchema,
    SlideFlexSchema,
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
