/**
 * LUMINA ENGINE TYPES
 * Centralized type definitions for strict contract enforcement.
 */

// --- Slide & Deck Definitions ---

/**
 * Supported slide layout types.
 * Each type corresponds to a registered Vue component (e.g. 'statement' -> LayoutStatement).
 */
export type SlideType = 'statement' | 'half' | 'features' | 'timeline' | 'steps' | 'flex' | (string & {});

/**
 * Structure for items in the 'timeline' layout.
 */
export interface TimelineItem {
    date: string;
    title: string;
    t?: string;        // Alias for title
    description: string;
    desc?: string;     // Alias for description
    icon?: string;
}

/**
 * Structure for items in the 'steps' layout.
 */
export interface StepItem {
    step: string; // e.g., "01"
    title: string;
    description?: string;
    icon?: string;
}

// --- Flex Layout Types ---

/**
 * Size tokens for flex element sizing.
 * Determines how much horizontal/vertical space an element occupies.
 */
export type FlexSize = 'auto' | 'quarter' | 'third' | 'half' | 'two-thirds' | 'three-quarters' | 'full';

/**
 * Spacing tokens used for gaps and padding.
 */
export type SpacingToken = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Vertical alignment options.
 */
export type VAlign = 'top' | 'center' | 'bottom';

/**
 * Horizontal alignment options.
 */
export type HAlign = 'left' | 'center' | 'right';

/**
 * Text alignment options.
 */
export type TextAlign = 'left' | 'center' | 'right';

/**
 * Title element - Large heading text.
 */
export interface FlexElementTitle {
    type: 'title';
    text: string;
    /** Heading size. Default: 'xl' */
    size?: 'lg' | 'xl' | '2xl' | '3xl';
    /** Text alignment. Default: 'left' */
    align?: TextAlign;
}

/**
 * Text element - Body paragraph text.
 */
export interface FlexElementText {
    type: 'text';
    text: string;
    /** Text alignment. Default: 'left' */
    align?: TextAlign;
    /** Muted/subtle appearance. Default: false */
    muted?: boolean;
}

/**
 * Bullets element - Unordered list.
 */
export interface FlexElementBullets {
    type: 'bullets';
    items: string[];
}

/**
 * Ordered element - Numbered list.
 */
export interface FlexElementOrdered {
    type: 'ordered';
    items: string[];
}

/**
 * Image element - Visual media.
 */
export interface FlexElementImage {
    type: 'image';
    src: string;
    alt?: string;
    /** Fill entire container edge-to-edge. Default: true */
    fill?: boolean;
    /** Object-fit mode when fill is true. Default: 'cover' */
    fit?: 'cover' | 'contain';
    /** Border radius. Default: 'none' when fill, 'lg' otherwise */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Button element - Call-to-action button.
 */
export interface FlexElementButton {
    type: 'button';
    label: string;
    /** Action identifier emitted on click. */
    action?: string;
    /** Visual variant. Default: 'primary' */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    /** Full width button. Default: false */
    fullWidth?: boolean;
}

/**
 * Timeline element - Embedded timeline with events.
 */
export interface FlexElementTimeline {
    type: 'timeline';
    items: TimelineItem[];
    /** Compact display mode. Default: false */
    compact?: boolean;
}

/**
 * Stepper element - Embedded step-by-step process.
 */
export interface FlexElementStepper {
    type: 'stepper';
    items: StepItem[];
    /** Compact display mode. Default: false */
    compact?: boolean;
}

/**
 * Spacer element - Adds visual spacing.
 */
export interface FlexElementSpacer {
    type: 'spacer';
    /** Size of the space. Default: 'md' */
    size?: SpacingToken;
}

/**
 * Content container - Groups child elements vertically with alignment control.
 */
export interface FlexElementContent {
    type: 'content';
    elements: FlexChildElement[];
    /** Vertical alignment of content. Default: 'center' */
    valign?: VAlign;
    /** Horizontal alignment of content. Default: 'left' */
    halign?: HAlign;
    /** Gap between child elements. Default: 'md' */
    gap?: SpacingToken;
    /** Internal padding. Default: 'lg' */
    padding?: SpacingToken;
}

/**
 * Child elements that can appear inside a content container.
 */
export type FlexChildElement =
    | FlexElementTitle
    | FlexElementText
    | FlexElementBullets
    | FlexElementOrdered
    | FlexElementButton
    | FlexElementTimeline
    | FlexElementStepper
    | FlexElementSpacer;

/**
 * Top-level flex elements that can have size.
 */
export type FlexElement =
    | (FlexElementImage & { size?: FlexSize })
    | (FlexElementContent & { size?: FlexSize })
    | (FlexElementTitle & { size?: FlexSize })
    | (FlexElementText & { size?: FlexSize })
    | (FlexElementBullets & { size?: FlexSize })
    | (FlexElementOrdered & { size?: FlexSize })
    | (FlexElementButton & { size?: FlexSize })
    | (FlexElementTimeline & { size?: FlexSize })
    | (FlexElementStepper & { size?: FlexSize });

/**
 * Metadata for individual slides.
 * Can contain arbitrary data used by custom layouts.
 */
export interface SlideMeta {
    orbColor?: string;
    orbPos?: { top: string; left: string };
    [key: string]: any;
}

/**
 * Base properties shared by all slides.
 */
interface SlideBase {
    /** Unique ID for keying loop optimization (optional). */
    id?: string;
    /** Slide-specific metadata. */
    meta?: SlideMeta;
    /** Sizing mode: 'viewport' (100vh) or 'container' (100%). Default: 'viewport' */
    sizing?: 'viewport' | 'container';
}

/**
 * Slide: Statement Layout
 * A simple, high-impact text layout.
 * @example
 * ```json
 * {
 *   "type": "statement",
 *   "meta": { "orbColor": "#3b82f6" },
 *   "tag": "Declarative Engine",
 *   "title": "Lumina V8",
 *   "subtitle": "A highly modular, performance-first presentation engine."
 * }
 * ```
 */
export interface SlideStatement extends SlideBase {
    type: 'statement';
    tag?: string;
    title: string;
    subtitle?: string;
}

/**
 * Feature Item structure for Features Layout.
 */
export interface FeatureItem {
    title: string;
    desc: string;
    icon: string;
}

/**
 * Slide: Features Layout
 * A grid of feature cards.
 * @example
 * ```json
 * {
 *   "type": "features",
 *   "title": "Core Capabilities",
 *   "description": "Built to scale.",
 *   "features": [
 *     { "title": "Reactive", "desc": "State management", "icon": "fa-database" },
 *     { "title": "Modular", "desc": "Tree-shakable", "icon": "fa-cube" }
 *   ]
 * }
 * ```
 */
export interface SlideFeatures extends SlideBase {
    type: 'features';
    title: string;
    description?: string;
    /** List of feature cards to display. */
    features: FeatureItem[];
}

/**
 * Slide: Split/Half Layout
 * Text on one side, image on the other.
 * @example
 * ```json
 * {
 *   "type": "half",
 *   "imageSide": "left",
 *   "image": "https://example.com/photo.jpg",
 *   "title": "Smart Split Layouts",
 *   "paragraphs": ["Lumina adapts to viewport size.", "Content is King."],
 *   "cta": "Read Documentation"
 * }
 * ```
 */
export interface SlideHalf extends SlideBase {
    type: 'half';
    /** Which side the image appears on. */
    imageSide: 'left' | 'right';
    image: string;
    tag?: string;
    title: string;
    paragraphs: string[];
    cta?: string;
}

/**
 * Slide: Timeline Layout
 * Chronological list of events.
 */
export interface SlideTimeline extends SlideBase {
    type: 'timeline';
    title: string;
    subtitle?: string;
    timeline: TimelineItem[];
}

/**
 * Slide: Steps / Process Layout
 * Numbered steps with descriptions.
 */
export interface SlideSteps extends SlideBase {
    type: 'steps';
    title: string;
    subtitle?: string;
    steps: StepItem[];
}

/**
 * Slide: Flex Layout
 * Flow-based layout for composing slides using semantic sizing.
 * Elements flow in order with size tokens (half, third, etc.) instead of coordinates.
 * @example
 * ```json
 * {
 *   "type": "flex",
 *   "direction": "horizontal",
 *   "elements": [
 *     { "type": "image", "src": "photo.jpg", "size": "half", "fill": true },
 *     { "type": "content", "size": "half", "valign": "center", "elements": [
 *       { "type": "title", "text": "Hello World" },
 *       { "type": "bullets", "items": ["Point A", "Point B"] }
 *     ]}
 *   ]
 * }
 * ```
 */
export interface SlideFlex extends SlideBase {
    type: 'flex';
    /** Main flow direction. Default: 'horizontal' */
    direction?: 'horizontal' | 'vertical';
    /** Gap between top-level elements. Default: 'none' */
    gap?: SpacingToken;
    /** Padding around the entire container. Default: 'none' */
    padding?: SpacingToken;
    /** Array of flex elements to render. */
    elements: FlexElement[];
}

/**
 * Slide: Generic / Custom
 * Fallback for custom layouts or unknown types.
 */
export interface SlideGeneric extends SlideBase {
    type: string & {};
    [key: string]: any;
}

/**
 * The main Slide Data structure.
 * A discriminated union of all supported slide types.
 */
export type BaseSlideData =
    | SlideStatement
    | SlideFeatures
    | SlideHalf
    | SlideTimeline
    | SlideSteps
    | SlideFlex
    | SlideGeneric;

/**
 * Global metadata for the entire presentation deck.
 */
export interface DeckMeta {
    title: string;
    author?: string;
    date?: string;
    [key: string]: any;
}

/**
 * The complete Deck object.
 * This is the primary data structure passed to `engine.load()`.
 */
export interface Deck {
    meta: DeckMeta;
    slides: BaseSlideData[];
}

// --- Configuration ---

/**
 * Configuration for the visual theme.
 */
export interface ThemeConfig {
    /**
     * Color palette overrides.
     * Values should be Hex codes (e.g. '#EF4444').
     */
    colors?: {
        primary?: string;
        background?: string;
        text?: string;
        muted?: string;
    };
    /**
     * Font family overrides.
     * Values should be valid CSS font-family strings.
     */
    fonts?: {
        heading?: string;
        body?: string;
        mono?: string;
    };
    // Future: Spacing, Border Radius, etc.
}

/**
 * Custom keyboard shortcuts.
 */
export interface LuminaKeyBindings {
    next: string[];
    prev: string[];
}

/**
 * UI Visibility toggles.
 */
export interface LuminaUIOptions {
    visible?: boolean;        // Global UI visibility
    showProgressBar?: boolean;
    showSlideCount?: boolean;
    showControls?: boolean;   // Next/Prev buttons
}

/**
 * Animation configuration settings.
 */
export interface LuminaAnimationOptions {
    /** Global toggle for animations. */
    enabled?: boolean;
    /** The style of entry animation for slide elements. */
    type?: 'fade' | 'slide' | 'zoom' | 'cascade'; // Default: 'cascade'
    /** Duration of entry animations in seconds. */
    durationIn?: number;
    /** Duration of exit animations in seconds. */
    durationOut?: number;
    /** Stagger delay between sequential elements in seconds. */
    stagger?: number;
    /** GSAP easing string (e.g. 'power3.out'). */
    ease?: string;
}

/**
 * Main initialization options for the Lumina Engine.
 */
export interface LuminaOptions {
    /** CSS Selector for the container to mount into (default: '#app' or internal). */
    selector?: string;
    /** Whether to loop back to the start after the last slide. */
    loop?: boolean;
    /** Enable/Disable keyboard navigation. */
    navigation?: boolean;
    /** Enable/Disable keyboard shortcuts. */
    keyboard?: boolean;
    /** Enable/Disable touch swipe gestures. */
    touch?: boolean;
    /** Enable debug logs. */
    debug?: boolean;
    /** Theme configuration object or preset name string. */
    theme?: ThemeConfig | string;
    /** UI element toggles. */
    ui?: LuminaUIOptions;
    /** Custom key bindings. */
    keys?: LuminaKeyBindings;
    /** Animation settings. */
    animation?: LuminaAnimationOptions;
}

// --- Events ---

/**
 * Supported event names emitted by the engine.
 */
export type LuminaEventType = 'ready' | 'slideChange' | 'action' | 'error';

/**
 * Payload for the 'slideChange' event.
 */
export interface SlideChangePayload {
    index: number;
    previousIndex: number;
    slide: BaseSlideData;
}

/**
 * Payload for the 'action' event (e.g. button clicks).
 */
export interface ActionPayload {
    type: string;
    label?: string;
    value?: any;
    origin?: string; // Component ID
}

/**
 * Map of event names to their payload types.
 */
export interface LuminaEventMap {
    /** Fired when a deck is successfully loaded. */
    ready: Deck;
    /** Fired when the active slide changes. */
    slideChange: SlideChangePayload;
    /** Fired when a user interaction occurs. */
    action: ActionPayload;
    /** Fired when an internal error occurs. */
    error: Error;
}
