/**
 * LUMINA ENGINE TYPES
 * Centralized type definitions for strict contract enforcement.
 */

// --- Slide & Deck Definitions ---

/**
 * Supported slide layout types.
 * Each type corresponds to a registered Vue component (e.g. 'statement' -> LayoutStatement).
 */
export type SlideType = 'statement' | 'half' | 'features' | 'timeline' | 'steps' | 'flex' | 'chart' | (string & {});

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

// --- Chart Layout Types ---

/**
 * Supported chart types.
 */
export type ChartType = 'bar' | 'line' | 'pie' | 'doughnut';

/**
 * A single dataset for chart visualization.
 */
export interface ChartDataset {
    /** Label for this dataset (appears in legend). */
    label: string;
    /** Numeric values corresponding to each label. */
    values: number[];
    /** 
     * Color for this dataset. Supports Lumina tokens:
     * - 'c:p' → primary color
     * - 'c:s' → secondary color  
     * - 'c:m' → muted color
     * - Or any valid CSS color (hex, rgb, etc.)
     */
    color?: string;
}

/**
 * Data structure for chart visualization.
 */
export interface ChartData {
    /** Labels for the x-axis or pie segments. */
    labels: string[];
    /** Array of datasets to display. */
    datasets: ChartDataset[];
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
 * Video element - Visual media.
 */
export interface FlexElementVideo extends VideoProperties {
    type: 'video';
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
    | (FlexElementVideo & { size?: FlexSize })
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
    /** Speaker notes for this slide (supports basic markdown). */
    notes?: string;
    /** Background image or video. */
    background?: string | VideoProperties;
    /** Opacity of the background (0-1). Default: 1 (or 0.2 for default dark overlay) */
    backgroundOpacity?: number;
}

/**
 * Common properties for video elements.
 */
export interface VideoProperties {
    type: 'video';
    src: string;
    poster?: string;
    /** Default: true for backgrounds, false for elements */
    autoplay?: boolean;
    /** Default: true for backgrounds, false for elements */
    loop?: boolean;
    /** Default: true for backgrounds, false for elements */
    muted?: boolean;
    /** Default: false */
    controls?: boolean;
    /** Custom CSS class */
    className?: string;
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
    /** Image URL (optional if video is provided). */
    image?: string;
    /** Video properties (optional). */
    video?: VideoProperties;
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
 * Slide: Custom HTML
 * Renders arbitrary HTML content fullscreen.
 * Use with caution - HTML is injected directly.
 * @example
 * ```json
 * {
 *   "type": "custom",
 *   "html": "<div class='my-custom-slide'>Custom Content</div>",
 *   "css": ".my-custom-slide { color: white; }"
 * }
 * ```
 */
export interface SlideCustom extends SlideBase {
    type: 'custom';
    /** Raw HTML content to render */
    html: string;
    /** Optional scoped CSS styles */
    css?: string;
}

/**
 * Slide: Chart Layout
 * Renders data visualizations using Chart.js.
 * @example
 * ```json
 * {
 *   "type": "chart",
 *   "chartType": "bar",
 *   "title": "Revenue by Quarter",
 *   "data": {
 *     "labels": ["Q1", "Q2", "Q3", "Q4"],
 *     "datasets": [{ "label": "2024", "values": [120, 150, 180, 220], "color": "c:p" }]
 *   }
 * }
 * ```
 */
export interface SlideChart extends SlideBase {
    type: 'chart';
    /** The type of chart to render. */
    chartType: ChartType;
    /** Chart title displayed above the chart. */
    title?: string;
    /** Subtitle or description. */
    subtitle?: string;
    /** The chart data configuration. */
    data: ChartData;
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
 * Slide: Video Layout
 * Full screen video player.
 */
export interface SlideVideo extends SlideBase {
    type: 'video';
    video: VideoProperties;
    /** Optional caption or title overlay */
    title?: string;
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
    | SlideChart
    | SlideCustom
    | SlideVideo
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

// ============================================================================
// THEME CONFIGURATION TYPES
// Comprehensive design token system for full customization
// ============================================================================

/**
 * Color palette configuration.
 * All values should be Hex codes (e.g. '#EF4444') or valid CSS colors.
 */
export interface ThemeColors {
    // --- Core Colors ---
    /** Main brand/accent color. Used for highlights, buttons, links. */
    primary?: string;
    /** Secondary brand color. Used for complementary elements. */
    secondary?: string;
    /** Tertiary/accent color. Used for special highlights. */
    accent?: string;
    /** Main background color. */
    background?: string;
    /** Elevated surface color (cards, panels, modals). */
    surface?: string;
    /** Primary text color. */
    text?: string;
    /** Secondary/subdued text color. */
    textSecondary?: string;
    /** Muted/disabled text color. */
    muted?: string;

    // --- Semantic Colors ---
    /** Success state color (green tones). */
    success?: string;
    /** Warning state color (yellow/amber tones). */
    warning?: string;
    /** Danger/error state color (red tones). */
    danger?: string;
    /** Informational state color (blue tones). */
    info?: string;

    // --- UI Element Colors ---
    /** Border color for containers, cards, inputs. */
    border?: string;
    /** Subtle border color for dividers. */
    borderSubtle?: string;
    /** Shadow color (used with rgba). */
    shadow?: string;
    /** Overlay color for modals, backdrops. */
    overlay?: string;
    /** Highlight/selection color. */
    highlight?: string;

    // --- Interactive Element Colors ---
    /** Primary button background. */
    buttonPrimary?: string;
    /** Primary button text. */
    buttonPrimaryText?: string;
    /** Secondary button background. */
    buttonSecondary?: string;
    /** Secondary button text. */
    buttonSecondaryText?: string;
    /** Link color. */
    link?: string;
    /** Link hover color. */
    linkHover?: string;

    // --- Gradient Colors ---
    /** Gradient start color. */
    gradientFrom?: string;
    /** Gradient middle color (optional). */
    gradientVia?: string;
    /** Gradient end color. */
    gradientTo?: string;
}

/**
 * Typography configuration.
 */
export interface ThemeTypography {
    /** Font family definitions. */
    fontFamily?: {
        /** Font for headings (h1-h6, titles). */
        heading?: string;
        /** Font for body text, paragraphs. */
        body?: string;
        /** Font for code, monospace text. */
        mono?: string;
    };
    /** Font size scale. Values should be CSS size values (rem, px, etc.). */
    fontSize?: {
        /** Extra small: 0.75rem / 12px */
        xs?: string;
        /** Small: 0.875rem / 14px */
        sm?: string;
        /** Base: 1rem / 16px */
        base?: string;
        /** Large: 1.125rem / 18px */
        lg?: string;
        /** Extra large: 1.25rem / 20px */
        xl?: string;
        /** 2XL: 1.5rem / 24px */
        '2xl'?: string;
        /** 3XL: 1.875rem / 30px */
        '3xl'?: string;
        /** 4XL: 2.25rem / 36px */
        '4xl'?: string;
        /** 5XL: 3rem / 48px */
        '5xl'?: string;
        /** 6XL: 3.75rem / 60px */
        '6xl'?: string;
        /** 7XL: 4.5rem / 72px */
        '7xl'?: string;
    };
    /** Font weight scale. Values should be numeric (100-900). */
    fontWeight?: {
        /** Light weight: 300 */
        light?: number;
        /** Normal weight: 400 */
        normal?: number;
        /** Medium weight: 500 */
        medium?: number;
        /** Semibold weight: 600 */
        semibold?: number;
        /** Bold weight: 700 */
        bold?: number;
        /** Extra bold weight: 800 */
        extrabold?: number;
    };
    /** Line height scale. Values should be unitless or CSS values. */
    lineHeight?: {
        /** Tight: 1.1 */
        tight?: string;
        /** Snug: 1.25 */
        snug?: string;
        /** Normal: 1.5 */
        normal?: string;
        /** Relaxed: 1.625 */
        relaxed?: string;
        /** Loose: 2 */
        loose?: string;
    };
    /** Letter spacing scale. Values should be CSS values (em, px). */
    letterSpacing?: {
        /** Tighter: -0.05em */
        tighter?: string;
        /** Tight: -0.025em */
        tight?: string;
        /** Normal: 0 */
        normal?: string;
        /** Wide: 0.025em */
        wide?: string;
        /** Wider: 0.05em */
        wider?: string;
        /** Widest: 0.1em (tracking-widest for labels) */
        widest?: string;
    };
}

/**
 * Spacing scale configuration.
 * Values should be CSS size values (rem, px, etc.).
 */
export interface ThemeSpacing {
    /** 0 */
    none?: string;
    /** 0.25rem / 4px */
    xs?: string;
    /** 0.5rem / 8px */
    sm?: string;
    /** 1rem / 16px */
    md?: string;
    /** 1.5rem / 24px */
    lg?: string;
    /** 2rem / 32px */
    xl?: string;
    /** 3rem / 48px */
    '2xl'?: string;
    /** 4rem / 64px */
    '3xl'?: string;
    /** 6rem / 96px */
    '4xl'?: string;
}

/**
 * Border radius scale configuration.
 * Values should be CSS size values (rem, px, etc.).
 */
export interface ThemeBorderRadius {
    /** No rounding: 0 */
    none?: string;
    /** Small: 0.25rem / 4px */
    sm?: string;
    /** Medium: 0.5rem / 8px */
    md?: string;
    /** Large: 0.75rem / 12px */
    lg?: string;
    /** Extra large: 1rem / 16px */
    xl?: string;
    /** 2XL: 1.5rem / 24px */
    '2xl'?: string;
    /** 3XL: 2rem / 32px */
    '3xl'?: string;
    /** Full circle/pill: 9999px */
    full?: string;
}

/**
 * Visual effects configuration.
 */
export interface ThemeEffects {
    // --- Gradients ---
    /** Enable/disable gradient effects globally. */
    useGradients?: boolean;
    /** Gradient direction. */
    gradientDirection?: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-tl' | 'to-tr' | 'to-bl' | 'to-br';
    /** Override gradient start color (uses colors.gradientFrom if not set). */
    gradientFrom?: string;
    /** Override gradient via/middle color. */
    gradientVia?: string;
    /** Override gradient end color (uses colors.gradientTo if not set). */
    gradientTo?: string;

    // --- Shadows ---
    /** Enable/disable shadow effects globally. */
    useShadows?: boolean;
    /** Shadow intensity level. */
    shadowIntensity?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Shadow color (supports CSS color). */
    shadowColor?: string;

    // --- Glass/Blur Effect ---
    /** Enable/disable glassmorphism effect on panels. */
    useGlass?: boolean;
    /** Glass panel opacity (0-1). */
    glassOpacity?: number;
    /** Glass blur amount (e.g., "20px"). */
    glassBlur?: string;
    /** Glass border opacity (0-1). */
    glassBorderOpacity?: number;

    // --- Ambient Orb/Glow ---
    /** Enable/disable ambient orb effect. */
    useOrb?: boolean;
    /** Orb opacity (0-1). */
    orbOpacity?: number;
    /** Orb blur amount (e.g., "120px"). */
    orbBlur?: string;
    /** Orb size (e.g., "60vw"). */
    orbSize?: string;

    // --- Animations ---
    /** Enable/disable animations globally. */
    animationsEnabled?: boolean;
    /** Default transition duration (e.g., "0.3s"). */
    transitionDuration?: string;
    /** Default transition easing (e.g., "ease-out", CSS cubic-bezier). */
    transitionEasing?: string;
    /** Hover scale factor (e.g., 1.05 for 5% scale up). */
    hoverScale?: number;
}

/**
 * Component-specific theming configuration.
 */
export interface ThemeComponents {
    // --- Buttons ---
    /** Button border radius token or CSS value. */
    buttonRadius?: string;
    /** Button padding (e.g., "0.75rem 1.5rem"). */
    buttonPadding?: string;
    /** Button font weight. */
    buttonFontWeight?: number;
    /** Button text transform (uppercase, capitalize, none). */
    buttonTextTransform?: 'none' | 'uppercase' | 'capitalize';

    // --- Cards/Panels ---
    /** Card border radius token or CSS value. */
    cardRadius?: string;
    /** Card padding. */
    cardPadding?: string;
    /** Card border width (e.g., "1px"). */
    cardBorderWidth?: string;
    /** Card background (can override surface color). */
    cardBackground?: string;

    // --- Timeline ---
    /** Timeline node/dot size (e.g., "1rem"). */
    timelineNodeSize?: string;
    /** Timeline connector line width (e.g., "2px"). */
    timelineLineWidth?: string;
    /** Timeline node color (uses primary if not set). */
    timelineNodeColor?: string;
    /** Timeline line color (uses border if not set). */
    timelineLineColor?: string;

    // --- Steps ---
    /** Step number badge size. */
    stepBadgeSize?: string;
    /** Step number font size. */
    stepFontSize?: string;

    // --- Progress Bar ---
    /** Progress bar height. */
    progressHeight?: string;
    /** Progress bar border radius. */
    progressRadius?: string;
    /** Progress bar background (track). */
    progressBackground?: string;
    /** Progress bar fill color. */
    progressFill?: string;

    // --- Tags/Badges ---
    /** Tag padding. */
    tagPadding?: string;
    /** Tag border radius. */
    tagRadius?: string;
    /** Tag font size. */
    tagFontSize?: string;

    // --- Input/Form Elements ---
    /** Input border radius. */
    inputRadius?: string;
    /** Input padding. */
    inputPadding?: string;
    /** Input border color. */
    inputBorder?: string;
    /** Input focus border color. */
    inputFocusBorder?: string;
}

/**
 * Configuration for the visual theme.
 * Comprehensive design token system for full slide customization.
 * 
 * @example
 * ```typescript
 * const theme: ThemeConfig = {
 *   colors: {
 *     primary: '#8b5cf6',
 *     background: '#0a0a0a',
 *     text: '#ffffff'
 *   },
 *   effects: {
 *     useGradients: true,
 *     useGlass: true,
 *     glassBlur: '20px'
 *   }
 * };
 * ```
 */
export interface ThemeConfig {
    /**
     * Color palette configuration.
     * Defines all colors used throughout the presentation.
     */
    colors?: ThemeColors;

    /**
     * Typography configuration.
     * Controls fonts, sizes, weights, and text styling.
     */
    typography?: ThemeTypography;

    /**
     * Spacing scale configuration.
     * Defines consistent spacing values for gaps, padding, margins.
     */
    spacing?: ThemeSpacing;

    /**
     * Border radius configuration.
     * Defines rounded corner values for UI elements.
     */
    borderRadius?: ThemeBorderRadius;

    /**
     * Visual effects configuration.
     * Controls gradients, shadows, glass effects, animations.
     */
    effects?: ThemeEffects;

    /**
     * Component-specific theming.
     * Fine-grained control over individual component styles.
     */
    components?: ThemeComponents;

    // Legacy support (mapped to new structure internally)
    /** @deprecated Use typography.fontFamily instead */
    fonts?: {
        heading?: string;
        body?: string;
        mono?: string;
    };
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

// --- Speaker Notes ---

/**
 * Message payload for Speaker Notes cross-window synchronization.
 * Used by BroadcastChannel for bidirectional communication.
 */
export interface SpeakerSyncPayload {
    /** Action type for the sync message. */
    action: 'goto' | 'next' | 'prev' | 'state' | 'ping' | 'pong' | 'close';
    /** Current slide index (for 'goto' and 'state'). */
    index?: number;
    /** Total number of slides in the deck. */
    totalSlides?: number;
    /** Notes content for current slide. */
    currentNotes?: string;
    /** Preview info for the next slide. */
    nextSlidePreview?: {
        title?: string;
        type?: string;
    };
    /** Timestamp to prevent echo loops. */
    timestamp?: number;
    /** Channel ID for multi-instance support. */
    channelId?: string;
}
