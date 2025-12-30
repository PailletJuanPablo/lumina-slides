
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

// --- THEME CONFIGURATION SCHEMA ---
// Comprehensive design token system for LLM-driven theming

const ThemeColorsSchema = z.object({
    primary: z.string().optional().describe("Main brand/accent color. Used for highlights, buttons, links. Example: '#3b82f6'"),
    secondary: z.string().optional().describe("Secondary brand color. Used for complementary elements. Example: '#8b5cf6'"),
    accent: z.string().optional().describe("Tertiary/accent color. Used for special highlights. Example: '#06b6d4'"),
    background: z.string().optional().describe("Main background color. Example: '#030303'"),
    surface: z.string().optional().describe("Elevated surface color (cards, panels, modals). Example: '#0a0a0a'"),
    text: z.string().optional().describe("Primary text color. Example: '#ffffff'"),
    textSecondary: z.string().optional().describe("Secondary/subdued text color. Example: '#e5e7eb'"),
    muted: z.string().optional().describe("Muted/disabled text color. Example: '#9ca3af'"),
    success: z.string().optional().describe("Success state color (green tones). Example: '#10b981'"),
    warning: z.string().optional().describe("Warning state color (yellow/amber). Example: '#f59e0b'"),
    danger: z.string().optional().describe("Danger/error state color (red). Example: '#ef4444'"),
    info: z.string().optional().describe("Informational state color (blue). Example: '#3b82f6'"),
    border: z.string().optional().describe("Border color for containers, cards. Example: 'rgba(255,255,255,0.1)'"),
    borderSubtle: z.string().optional().describe("Subtle border for dividers. Example: 'rgba(255,255,255,0.05)'"),
    shadow: z.string().optional().describe("Shadow color. Example: '#000000'"),
    overlay: z.string().optional().describe("Overlay color for modals. Example: 'rgba(0,0,0,0.5)'"),
    highlight: z.string().optional().describe("Highlight/selection color."),
    buttonPrimary: z.string().optional().describe("Primary button background."),
    buttonPrimaryText: z.string().optional().describe("Primary button text color."),
    buttonSecondary: z.string().optional().describe("Secondary button background."),
    buttonSecondaryText: z.string().optional().describe("Secondary button text color."),
    link: z.string().optional().describe("Link color."),
    linkHover: z.string().optional().describe("Link hover color."),
    gradientFrom: z.string().optional().describe("Gradient start color. Example: '#3b82f6'"),
    gradientVia: z.string().optional().describe("Gradient middle color (optional)."),
    gradientTo: z.string().optional().describe("Gradient end color. Example: '#8b5cf6'"),
}).describe("Color palette configuration with 25+ customizable colors.");

const ThemeTypographySchema = z.object({
    fontFamily: z.object({
        heading: z.string().optional().describe("Font for headings. Example: 'Inter, sans-serif'"),
        body: z.string().optional().describe("Font for body text. Example: 'Inter, sans-serif'"),
        mono: z.string().optional().describe("Font for code. Example: 'monospace'"),
    }).optional().describe("Font family definitions."),
    fontSize: z.object({
        xs: z.string().optional().describe("Extra small: 0.75rem"),
        sm: z.string().optional().describe("Small: 0.875rem"),
        base: z.string().optional().describe("Base: 1rem"),
        lg: z.string().optional().describe("Large: 1.125rem"),
        xl: z.string().optional().describe("Extra large: 1.25rem"),
        '2xl': z.string().optional().describe("2XL: 1.5rem"),
        '3xl': z.string().optional().describe("3XL: 1.875rem"),
        '4xl': z.string().optional().describe("4XL: 2.25rem"),
        '5xl': z.string().optional().describe("5XL: 3rem"),
        '6xl': z.string().optional().describe("6XL: 3.75rem"),
        '7xl': z.string().optional().describe("7XL: 4.5rem"),
    }).optional().describe("Font size scale."),
    fontWeight: z.object({
        light: z.number().optional().describe("Light: 300"),
        normal: z.number().optional().describe("Normal: 400"),
        medium: z.number().optional().describe("Medium: 500"),
        semibold: z.number().optional().describe("Semibold: 600"),
        bold: z.number().optional().describe("Bold: 700"),
        extrabold: z.number().optional().describe("Extra bold: 800"),
    }).optional().describe("Font weight scale."),
    lineHeight: z.object({
        tight: z.string().optional().describe("Tight: 1.1"),
        snug: z.string().optional().describe("Snug: 1.25"),
        normal: z.string().optional().describe("Normal: 1.5"),
        relaxed: z.string().optional().describe("Relaxed: 1.625"),
        loose: z.string().optional().describe("Loose: 2"),
    }).optional().describe("Line height scale."),
    letterSpacing: z.object({
        tighter: z.string().optional().describe("-0.05em"),
        tight: z.string().optional().describe("-0.025em"),
        normal: z.string().optional().describe("0"),
        wide: z.string().optional().describe("0.025em"),
        wider: z.string().optional().describe("0.05em"),
        widest: z.string().optional().describe("0.1em"),
    }).optional().describe("Letter spacing scale."),
}).describe("Typography configuration: fonts, sizes, weights, line-heights.");

const ThemeSpacingSchema = z.object({
    none: z.string().optional().describe("0"),
    xs: z.string().optional().describe("0.25rem / 4px"),
    sm: z.string().optional().describe("0.5rem / 8px"),
    md: z.string().optional().describe("1rem / 16px"),
    lg: z.string().optional().describe("1.5rem / 24px"),
    xl: z.string().optional().describe("2rem / 32px"),
    '2xl': z.string().optional().describe("3rem / 48px"),
    '3xl': z.string().optional().describe("4rem / 64px"),
    '4xl': z.string().optional().describe("6rem / 96px"),
}).describe("Spacing scale for gaps, padding, margins.");

const ThemeBorderRadiusSchema = z.object({
    none: z.string().optional().describe("No rounding: 0"),
    sm: z.string().optional().describe("Small: 0.25rem"),
    md: z.string().optional().describe("Medium: 0.5rem"),
    lg: z.string().optional().describe("Large: 0.75rem"),
    xl: z.string().optional().describe("Extra large: 1rem"),
    '2xl': z.string().optional().describe("2XL: 1.5rem"),
    '3xl': z.string().optional().describe("3XL: 2rem"),
    full: z.string().optional().describe("Full circle: 9999px"),
}).describe("Border radius scale for rounded corners.");

const ThemeEffectsSchema = z.object({
    useGradients: z.boolean().optional().describe("Enable/disable gradient effects globally."),
    gradientDirection: z.enum(['to-t', 'to-b', 'to-l', 'to-r', 'to-tl', 'to-tr', 'to-bl', 'to-br']).optional().describe("Gradient direction."),
    gradientFrom: z.string().optional().describe("Override gradient start color."),
    gradientVia: z.string().optional().describe("Override gradient middle color."),
    gradientTo: z.string().optional().describe("Override gradient end color."),
    useShadows: z.boolean().optional().describe("Enable/disable shadow effects."),
    shadowIntensity: z.enum(['none', 'sm', 'md', 'lg', 'xl', '2xl']).optional().describe("Shadow intensity level."),
    shadowColor: z.string().optional().describe("Shadow color."),
    useGlass: z.boolean().optional().describe("Enable/disable glassmorphism effect."),
    glassOpacity: z.number().optional().describe("Glass panel opacity (0-1)."),
    glassBlur: z.string().optional().describe("Glass blur amount. Example: '20px'"),
    glassBorderOpacity: z.number().optional().describe("Glass border opacity (0-1)."),
    useOrb: z.boolean().optional().describe("Enable/disable ambient orb/glow effect."),
    orbOpacity: z.number().optional().describe("Orb opacity (0-1)."),
    orbBlur: z.string().optional().describe("Orb blur amount. Example: '120px'"),
    orbSize: z.string().optional().describe("Orb size. Example: '60vw'"),
    animationsEnabled: z.boolean().optional().describe("Enable/disable animations globally."),
    transitionDuration: z.string().optional().describe("Default transition duration. Example: '0.3s'"),
    transitionEasing: z.string().optional().describe("Default transition easing. Example: 'ease-out'"),
    hoverScale: z.number().optional().describe("Hover scale factor. Example: 1.05"),
}).describe("Visual effects: gradients, shadows, glass, orb, animations.");

const ThemeComponentsSchema = z.object({
    buttonRadius: z.string().optional().describe("Button border radius."),
    buttonPadding: z.string().optional().describe("Button padding. Example: '0.75rem 1.5rem'"),
    buttonFontWeight: z.number().optional().describe("Button font weight."),
    buttonTextTransform: z.enum(['none', 'uppercase', 'capitalize']).optional().describe("Button text transform."),
    cardRadius: z.string().optional().describe("Card border radius."),
    cardPadding: z.string().optional().describe("Card padding."),
    cardBorderWidth: z.string().optional().describe("Card border width. Example: '1px'"),
    cardBackground: z.string().optional().describe("Card background override."),
    timelineNodeSize: z.string().optional().describe("Timeline node size. Example: '1rem'"),
    timelineLineWidth: z.string().optional().describe("Timeline line width. Example: '2px'"),
    timelineNodeColor: z.string().optional().describe("Timeline node color."),
    timelineLineColor: z.string().optional().describe("Timeline line color."),
    stepBadgeSize: z.string().optional().describe("Step badge size."),
    stepFontSize: z.string().optional().describe("Step font size."),
    progressHeight: z.string().optional().describe("Progress bar height."),
    progressRadius: z.string().optional().describe("Progress bar border radius."),
    progressBackground: z.string().optional().describe("Progress bar background."),
    progressFill: z.string().optional().describe("Progress bar fill color."),
    tagPadding: z.string().optional().describe("Tag padding."),
    tagRadius: z.string().optional().describe("Tag border radius."),
    tagFontSize: z.string().optional().describe("Tag font size."),
    inputRadius: z.string().optional().describe("Input border radius."),
    inputPadding: z.string().optional().describe("Input padding."),
    inputBorder: z.string().optional().describe("Input border color."),
    inputFocusBorder: z.string().optional().describe("Input focus border color."),
}).describe("Component-specific theming: buttons, cards, timeline, steps, etc.");

/**
 * Complete Theme Configuration Schema.
 * Comprehensive design token system for full slide customization by LLMs.
 */
export const ThemeConfigSchema = z.object({
    colors: ThemeColorsSchema.optional().describe("Color palette with 25+ customizable colors."),
    typography: ThemeTypographySchema.optional().describe("Typography: fonts, sizes, weights, line-heights."),
    spacing: ThemeSpacingSchema.optional().describe("Spacing scale for consistent gaps and padding."),
    borderRadius: ThemeBorderRadiusSchema.optional().describe("Border radius tokens for rounded corners."),
    effects: ThemeEffectsSchema.optional().describe("Visual effects: gradients, shadows, glass, orb."),
    components: ThemeComponentsSchema.optional().describe("Component-specific styling tokens."),
}).describe("Complete theme configuration for full visual customization.");

// Available theme preset names
const ThemePresetSchema = z.enum([
    'default', 'ocean', 'midnight', 'forest', 'cyber', 'latte', 'sunset', 'monochrome'
]).describe("Built-in theme preset name.");

// Deck Schema
export const DeckMetaSchema = z.object({
    title: fuzzyString.describe("Title of the entire presentation."),
    author: fuzzyString.optional(),
    date: fuzzyString.optional(),
    theme: ThemePresetSchema.optional().describe("Theme preset to use. Options: default, ocean, midnight, forest, cyber, latte, sunset, monochrome."),
    themeConfig: ThemeConfigSchema.optional().describe("Custom theme configuration to override preset values."),
}).passthrough();

export const DeckSchema = z.object({
    meta: DeckMetaSchema.describe("Global deck settings including title and theme."),
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

/**
 * Exports the JSON Schema for Theme Configuration only.
 * Useful for LLMs to understand all available theming options.
 */
export function getThemeJsonSchema() {
    try {
        const { zodToJsonSchema } = require('zod-to-json-schema');
        return zodToJsonSchema(ThemeConfigSchema, "LuminaThemeConfig");
    } catch (e) {
        console.warn("zod-to-json-schema not installed. Install it to export raw JSON Schema.");
        return {};
    }
}

