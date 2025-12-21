/**
 * LUMINA ENGINE TYPES
 * Centralized type definitions for strict contract enforcement.
 */

// --- Slide & Deck Definitions ---

/**
 * Supported slide layout types.
 * Each type corresponds to a registered Vue component (e.g. 'statement' -> LayoutStatement).
 */
export type SlideType = 'statement' | 'half' | 'features' | 'timeline' | 'steps' | (string & {});

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
