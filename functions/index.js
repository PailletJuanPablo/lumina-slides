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

// Theme
const ThemeConfig = z.object({
    colors: z.object({
        primary: z.string().optional(),
        background: z.string().optional(),
        text: z.string().optional(),
        muted: z.string().optional()
    }).optional(),
    fonts: z.object({
        heading: z.string().optional(),
        body: z.string().optional()
    }).optional()
}).describe("Theme Configuration");

const AvailablePresets = z.enum(['default', 'ocean', 'forest', 'cyber', 'luxury']).describe("Available Theme Presets");

// Union
const SlideSchema = z.discriminatedUnion('type', [
    SlideStatement, SlideHalf, SlideFeatures, SlideTimeline, SlideSteps, SlideChart, SlideFlex
]);

const DeckSchema = z.object({
    meta: z.object({ title: fuzzyString, author: fuzzyString.optional() }).optional(),
    slides: z.array(SlideSchema)
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
