const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
const { z } = require('zod');
const { zodToJsonSchema } = require('zod-to-json-schema');

admin.initializeApp();
const db = admin.firestore();

// --- Zod Schema Definitions (Shared) ---

// Helpers
const fuzzyArray = (schema) => z.union([schema, z.array(schema), z.null(), z.undefined()]).transform(val => Array.isArray(val) ? val : (val ? [val] : []));
const fuzzyString = z.union([z.string(), z.number(), z.null(), z.undefined()]).transform(val => String(val || ""));
const IconSchema = z.string().describe("Icon name (e.g. 'star', 'users', 'check', 'rocket', 'code'). REQUIRED for Features layout.");
const SpacingTokenSchema = z.enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']);

// Base
const SlideBaseShape = z.object({
    id: z.string().optional(),
    sizing: z.enum(['viewport', 'container']).optional(),
    notes: z.string().describe("Speaker notes (markdown)"),
    background: z.string().optional(),
    backgroundOpacity: z.number().optional()
});

// Layouts
const SlideStatement = SlideBaseShape.extend({
    type: z.literal('statement'),
    title: fuzzyString,
    subtitle: fuzzyString.optional(),
    tag: fuzzyString.optional()
}).describe("Layout: Statement");

const SlideHalf = SlideBaseShape.extend({
    type: z.literal('half'),
    imageSide: z.enum(['left', 'right']),
    image: fuzzyString,
    title: fuzzyString,
    paragraphs: fuzzyArray(z.string()),
    cta: fuzzyString.optional(),
    tag: fuzzyString.optional()
}).describe("Layout: Half");

const SlideFeatures = SlideBaseShape.extend({
    type: z.literal('features'),
    title: fuzzyString,
    description: fuzzyString.optional(),
    features: z.array(z.object({
        title: fuzzyString,
        desc: fuzzyString,
        icon: IconSchema // Strict check for icon
    })).min(1).describe("List of features. Each feature MUST have an icon.")
}).describe("Layout: Features");

const SlideTimeline = SlideBaseShape.extend({
    type: z.literal('timeline'),
    title: fuzzyString,
    timeline: fuzzyArray(z.object({
        date: fuzzyString,
        title: fuzzyString,
        description: fuzzyString
    }))
}).describe("Layout: Timeline");

const SlideSteps = SlideBaseShape.extend({
    type: z.literal('steps'),
    title: fuzzyString,
    subtitle: fuzzyString.optional(),
    steps: fuzzyArray(z.object({
        step: fuzzyString.describe("Step number (01, 02...)"),
        title: fuzzyString,
        description: fuzzyString
    }))
}).describe("Layout: Steps");

const SlideChart = SlideBaseShape.extend({
    type: z.literal('chart'),
    chartType: z.enum(['bar', 'line', 'pie', 'doughnut']),
    title: fuzzyString.optional(),
    data: z.object({
        labels: fuzzyArray(z.string()),
        datasets: fuzzyArray(z.object({
            label: fuzzyString,
            values: fuzzyArray(z.number()),
            color: z.string().optional()
        }))
    })
}).describe("Layout: Chart");

// Flex System
const FlexElement = z.lazy(() => z.union([
    z.object({ type: z.literal('title'), text: fuzzyString, size: z.enum(['lg', 'xl', '2xl', '3xl']).optional(), align: z.enum(['left', 'center', 'right']).optional() }),
    z.object({ type: z.literal('text'), text: fuzzyString, align: z.enum(['left', 'center', 'right']).optional(), muted: z.boolean().optional() }),
    z.object({ type: z.literal('image'), src: fuzzyString, size: z.string().optional(), fill: z.boolean().optional(), rounded: z.string().optional() }),
    z.object({ type: z.literal('button'), label: fuzzyString, variant: z.enum(['primary', 'secondary', 'outline', 'ghost']).optional() }),
    z.object({ type: z.literal('spacer'), size: SpacingTokenSchema.optional() }),
    z.object({ type: z.literal('timeline'), items: fuzzyArray(z.object({ date: fuzzyString, title: fuzzyString, description: fuzzyString })), compact: z.boolean().optional() }),
    z.object({ type: z.literal('stepper'), items: fuzzyArray(z.object({ step: fuzzyString, title: fuzzyString, description: fuzzyString })), compact: z.boolean().optional() }),
    z.object({ type: z.literal('content'), elements: fuzzyArray(FlexElement), size: z.string().optional(), valign: z.string().optional(), halign: z.string().optional(), gap: SpacingTokenSchema.optional() })
]));

const SlideFlex = SlideBaseShape.extend({
    type: z.literal('flex'),
    direction: z.enum(['horizontal', 'vertical']).optional(),
    gap: SpacingTokenSchema.optional(),
    elements: fuzzyArray(FlexElement)
}).describe("Layout: Flex");

// Theme - Expanded Configuration
const ThemeColorsSchema = z.object({
    primary: z.string().optional().describe("Main brand/accent color"),
    secondary: z.string().optional().describe("Secondary brand color"),
    accent: z.string().optional().describe("Tertiary/accent color"),
    background: z.string().optional().describe("Main background color"),
    surface: z.string().optional().describe("Elevated surface color"),
    text: z.string().optional().describe("Primary text color"),
    textSecondary: z.string().optional().describe("Secondary text color"),
    muted: z.string().optional().describe("Muted/disabled text color"),
    success: z.string().optional().describe("Success state color"),
    warning: z.string().optional().describe("Warning state color"),
    danger: z.string().optional().describe("Danger/error state color"),
    info: z.string().optional().describe("Informational state color"),
    border: z.string().optional().describe("Border color"),
    borderSubtle: z.string().optional().describe("Subtle border color"),
    shadow: z.string().optional().describe("Shadow color"),
    overlay: z.string().optional().describe("Overlay color for modals"),
    highlight: z.string().optional().describe("Highlight/selection color"),
    buttonPrimary: z.string().optional().describe("Primary button background"),
    buttonPrimaryText: z.string().optional().describe("Primary button text"),
    buttonSecondary: z.string().optional().describe("Secondary button background"),
    buttonSecondaryText: z.string().optional().describe("Secondary button text"),
    link: z.string().optional().describe("Link color"),
    linkHover: z.string().optional().describe("Link hover color"),
    gradientFrom: z.string().optional().describe("Gradient start color"),
    gradientVia: z.string().optional().describe("Gradient middle color"),
    gradientTo: z.string().optional().describe("Gradient end color"),
}).describe("Color palette with 25+ customizable colors");

const ThemeTypographySchema = z.object({
    fontFamily: z.object({
        heading: z.string().optional().describe("Font for headings"),
        body: z.string().optional().describe("Font for body text"),
        mono: z.string().optional().describe("Font for code"),
    }).optional().describe("Font family definitions"),
    fontSize: z.record(z.string()).optional().describe("Font size scale (xs, sm, base, lg, xl, 2xl-7xl)"),
    fontWeight: z.record(z.number()).optional().describe("Font weight scale (light, normal, medium, semibold, bold)"),
    lineHeight: z.record(z.string()).optional().describe("Line height scale (tight, snug, normal, relaxed, loose)"),
    letterSpacing: z.record(z.string()).optional().describe("Letter spacing scale"),
}).describe("Typography configuration");

const ThemeSpacingSchema = z.record(z.string()).optional().describe("Spacing scale (none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl)");

const ThemeBorderRadiusSchema = z.record(z.string()).optional().describe("Border radius scale (none, sm, md, lg, xl, 2xl, 3xl, full)");

const ThemeEffectsSchema = z.object({
    useGradients: z.boolean().optional().describe("Enable/disable gradients"),
    gradientDirection: z.enum(['to-t', 'to-b', 'to-l', 'to-r', 'to-tl', 'to-tr', 'to-bl', 'to-br']).optional(),
    gradientFrom: z.string().optional(),
    gradientVia: z.string().optional(),
    gradientTo: z.string().optional(),
    useShadows: z.boolean().optional().describe("Enable/disable shadows"),
    shadowIntensity: z.enum(['none', 'sm', 'md', 'lg', 'xl', '2xl']).optional(),
    shadowColor: z.string().optional(),
    useGlass: z.boolean().optional().describe("Enable/disable glassmorphism"),
    glassOpacity: z.number().optional().describe("Glass panel opacity (0-1)"),
    glassBlur: z.string().optional().describe("Glass blur amount"),
    glassBorderOpacity: z.number().optional(),
    useOrb: z.boolean().optional().describe("Enable/disable ambient orb"),
    orbOpacity: z.number().optional(),
    orbBlur: z.string().optional(),
    orbSize: z.string().optional(),
    animationsEnabled: z.boolean().optional().describe("Enable/disable animations"),
    transitionDuration: z.string().optional(),
    transitionEasing: z.string().optional(),
    hoverScale: z.number().optional(),
}).describe("Visual effects configuration");

const ThemeComponentsSchema = z.object({
    buttonRadius: z.string().optional(),
    buttonPadding: z.string().optional(),
    buttonFontWeight: z.number().optional(),
    buttonTextTransform: z.enum(['none', 'uppercase', 'capitalize']).optional(),
    cardRadius: z.string().optional(),
    cardPadding: z.string().optional(),
    cardBorderWidth: z.string().optional(),
    cardBackground: z.string().optional(),
    timelineNodeSize: z.string().optional(),
    timelineLineWidth: z.string().optional(),
    timelineNodeColor: z.string().optional(),
    timelineLineColor: z.string().optional(),
    stepBadgeSize: z.string().optional(),
    stepFontSize: z.string().optional(),
    progressHeight: z.string().optional(),
    progressRadius: z.string().optional(),
    progressBackground: z.string().optional(),
    progressFill: z.string().optional(),
    tagPadding: z.string().optional(),
    tagRadius: z.string().optional(),
    tagFontSize: z.string().optional(),
}).describe("Component-specific theming");

const ThemeConfig = z.object({
    colors: ThemeColorsSchema.optional(),
    typography: ThemeTypographySchema.optional(),
    spacing: ThemeSpacingSchema.optional(),
    borderRadius: ThemeBorderRadiusSchema.optional(),
    effects: ThemeEffectsSchema.optional(),
    components: ThemeComponentsSchema.optional(),
    // Legacy support
    fonts: z.object({
        heading: z.string().optional(),
        body: z.string().optional(),
        mono: z.string().optional()
    }).optional().describe("Deprecated: Use typography.fontFamily instead")
}).describe("Complete theme configuration for full visual customization");

const AvailablePresets = z.enum(['default', 'ocean', 'midnight', 'forest', 'cyber', 'latte', 'sunset', 'monochrome']).describe("Available Theme Presets");

// Union
const SlideSchema = z.discriminatedUnion('type', [
    SlideStatement, SlideHalf, SlideFeatures, SlideTimeline, SlideSteps, SlideChart, SlideFlex
]);

const DeckSchema = z.object({
    meta: z.object({
        title: fuzzyString,
        author: fuzzyString.optional(),
        theme: z.string().optional(),
        themeConfig: ThemeConfig.optional(),
        orbColor: z.string().optional()
    }).optional(),
    slides: z.array(SlideSchema)
});

// Update Notes Schema
const UpdateNotesSchema = z.object({
    deckId: z.string(),
    notes: z.array(z.object({
        slideIndex: z.number().int().min(0),
        note: z.string()
    })).min(1)
});

// Patch Deck Schema
const PatchDeckSchema = z.object({
    deckId: z.string(),
    meta: z.object({
        title: fuzzyString.optional(),
        author: fuzzyString.optional(),
        theme: fuzzyString.optional(),
        themeConfig: ThemeConfig.optional(),
        orbColor: fuzzyString.optional()
    }).optional(),
    slides: z.array(z.object({
        index: z.number().int().min(0),
        content: SlideSchema
    })).optional()
});

// --- Functions ---

/**
 * Save a deck to Firestore with VALIDATION.
 */
exports.saveDeck = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        try {
            const rawDeck = req.body;

            // Strict Validation
            const validation = DeckSchema.safeParse(rawDeck);

            if (!validation.success) {
                // Format errors for the LLM
                const errorMessages = validation.error.issues.map(issue => {
                    const path = issue.path.join('.');
                    return `Field '${path}': ${issue.message}. Code: ${issue.code}`;
                });

                return res.status(400).send({
                    error: "Validation Failed",
                    details: errorMessages,
                    instructions: "Fix the JSON structure according to the 'details' provided and try to save again."
                });
            }

            // Valid Deck
            const deck = validation.data;

            // Add server-side metadata
            const dataToSave = {
                ...deck,
                savedAt: admin.firestore.FieldValue.serverTimestamp(),
                source: "api"
            };

            const writeResult = await db.collection("decks").add(dataToSave);

            return res.status(200).json({
                id: writeResult.id,
                message: "Deck saved successfully",
                url: `https://pailletjuanpablo.github.io/lumina-slides/?id=${writeResult.id}`
            });

        } catch (error) {
            console.error("Error saving deck:", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    });
});

/**
 * Get a deck by ID.
 */
exports.getDeck = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "GET") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        try {
            const id = req.query.id;
            if (!id) {
                return res.status(400).send({ error: "Missing 'id' query parameter" });
            }

            const doc = await db.collection("decks").doc(id).get();

            if (!doc.exists) {
                return res.status(404).send({ error: "Deck not found" });
            }

            return res.status(200).json(doc.data());

        } catch (error) {
            console.error("Error getting deck:", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    });
});

/**
 * Get Schema
 */
exports.getSchema = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "GET") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        try {
            const requestedType = req.query.type;
            let result;

            if (requestedType) {
                if (requestedType === 'flex') result = zodToJsonSchema(SlideFlex, 'SlideFlex');
                else if (requestedType === 'chart') result = zodToJsonSchema(SlideChart, 'SlideChart');
                else if (requestedType === 'steps') result = zodToJsonSchema(SlideSteps, 'SlideSteps');
                else result = zodToJsonSchema(SlideSchema, 'Slide');
            } else {
                result = {
                    deckSchema: zodToJsonSchema(DeckSchema, 'LuminaDeck'),
                    themeConfig: zodToJsonSchema(ThemeConfig, 'ThemeConfig'),
                    availablePresets: zodToJsonSchema(AvailablePresets, 'ThemePresets')
                };
            }

            return res.status(200).json(result);

        } catch (error) {
            console.error("Error generating schema:", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    });
});
/**
 * Update Speaker Notes for an existing deck.
 */
exports.updateNotes = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        try {
            const rawBody = req.body;

            // Validate Input
            const validation = UpdateNotesSchema.safeParse(rawBody);

            if (!validation.success) {
                return res.status(400).send({
                    error: "Validation Failed",
                    details: validation.error.issues
                });
            }

            const { deckId, notes } = validation.data;
            const deckRef = db.collection("decks").doc(deckId);

            // Transaction to ensure atomicity
            await db.runTransaction(async (t) => {
                const deckDoc = await t.get(deckRef);

                if (!deckDoc.exists) {
                    throw "Deck not found";
                }

                const deckData = deckDoc.data();
                const slides = deckData.slides || [];

                // Update specific notes
                notes.forEach(update => {
                    if (slides[update.slideIndex]) {
                        slides[update.slideIndex].notes = update.note;
                    }
                });

                t.update(deckRef, { slides: slides });
            });

            return res.status(200).json({
                message: "Notes updated successfully",
                updatedSlides: notes.length
            });

        } catch (error) {
            console.error("Error updating notes:", error);
            if (error === "Deck not found") {
                return res.status(404).send({ error: "Deck not found" });
            }
            return res.status(500).send({ error: "Internal Server Error" });
        }
    });
});

/**
 * Patch an existing deck (Partial Update).
 * Allows updating metadata and/or replacing specific slides without sending the whole deck.
 */
exports.patchDeck = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send({ error: "Method Not Allowed" });
        }

        try {
            const rawBody = req.body;

            // Validate Input
            const validation = PatchDeckSchema.safeParse(rawBody);

            if (!validation.success) {
                return res.status(400).send({
                    error: "Validation Failed",
                    details: validation.error.issues
                });
            }

            const { deckId, meta, slides } = validation.data;
            const deckRef = db.collection("decks").doc(deckId);

            // Transaction
            await db.runTransaction(async (t) => {
                const deckDoc = await t.get(deckRef);

                if (!deckDoc.exists) {
                    throw "Deck not found";
                }

                const deckData = deckDoc.data();
                const existingSlides = deckData.slides || [];

                // 1. Update Meta if present
                const updatedMeta = { ...deckData.meta, ...meta };

                // 2. Update Slides if present
                if (slides && slides.length > 0) {
                    slides.forEach(update => {
                        // Ensure index is within bounds of array, or append?
                        // Decision: Only update existing. Appending via patch is risky without knowing length.
                        // Agent should use this for FIXES.
                        if (existingSlides[update.index]) {
                            existingSlides[update.index] = update.content;
                        } else {
                            // If index is exactly length, maybe append? Let's stick to safe updates for now.
                            console.warn(`Skipping patch for slide index ${update.index} (out of bounds)`);
                        }
                    });
                }

                t.update(deckRef, {
                    meta: updatedMeta,
                    slides: existingSlides,
                    updatedAt: admin.firestore.FieldValue.serverTimestamp()
                });
            });

            return res.status(200).json({
                message: "Deck patched successfully",
                id: deckId
            });

        } catch (error) {
            console.error("Error patching deck:", error);
            if (error === "Deck not found") {
                return res.status(404).send({ error: "Deck not found" });
            }
            return res.status(500).send({ error: "Internal Server Error" });
        }
    });
});
