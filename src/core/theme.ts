import { ThemeConfig, ThemeColors, ThemeTypography, ThemeSpacing, ThemeBorderRadius, ThemeEffects, ThemeComponents } from './types';
import { THEME_PRESETS } from './presets';

/**
 * Default Theme Values
 * Complete set of default design tokens for the Lumina Engine.
 */
export const DEFAULT_THEME: Required<ThemeConfig> = {
    colors: {
        // Core
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        accent: '#06b6d4',
        background: '#030303',
        surface: '#0a0a0a',
        text: '#ffffff',
        textSecondary: '#e5e7eb',
        muted: '#9ca3af',

        // Semantic
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',

        // UI Elements
        border: 'rgba(255, 255, 255, 0.1)',
        borderSubtle: 'rgba(255, 255, 255, 0.05)',
        shadow: '#000000',
        overlay: 'rgba(0, 0, 0, 0.5)',
        highlight: 'rgba(59, 130, 246, 0.2)',

        // Interactive
        buttonPrimary: '#3b82f6',
        buttonPrimaryText: '#ffffff',
        buttonSecondary: 'rgba(255, 255, 255, 0.1)',
        buttonSecondaryText: '#ffffff',
        link: '#3b82f6',
        linkHover: '#60a5fa',

        // Gradients
        gradientFrom: '#3b82f6',
        gradientVia: undefined,
        gradientTo: '#8b5cf6',
    },

    typography: {
        fontFamily: {
            heading: 'Inter, system-ui, sans-serif',
            body: 'Inter, system-ui, sans-serif',
            mono: 'ui-monospace, SFMono-Regular, monospace',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },
        lineHeight: {
            tight: '1.1',
            snug: '1.25',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },

    spacing: {
        none: '0',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
    },

    borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
    },

    effects: {
        // Gradients
        useGradients: true,
        gradientDirection: 'to-b',
        gradientFrom: undefined, // Falls back to colors.gradientFrom
        gradientVia: undefined,
        gradientTo: undefined, // Falls back to colors.gradientTo

        // Shadows
        useShadows: true,
        shadowIntensity: 'md',
        shadowColor: 'rgba(0, 0, 0, 0.4)',

        // Glass
        useGlass: true,
        glassOpacity: 0.12,
        glassBlur: '20px',
        glassBorderOpacity: 0.20,

        // Orb
        useOrb: true,
        orbOpacity: 0.20,
        orbBlur: '120px',
        orbSize: '80vw',

        // Animations
        animationsEnabled: true,
        transitionDuration: '0.3s',
        transitionEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        hoverScale: 1.05,
    },

    components: {
        // Buttons
        buttonRadius: '9999px',
        buttonPadding: '0.75rem 1.5rem',
        buttonFontWeight: 700,
        buttonTextTransform: 'none',

        // Cards
        cardRadius: '1.5rem',
        cardPadding: '2rem',
        cardBorderWidth: '1px',
        cardBackground: undefined, // Uses surface color

        // Timeline
        timelineNodeSize: '1rem',
        timelineLineWidth: '2px',
        timelineNodeColor: undefined, // Uses primary
        timelineLineColor: undefined, // Uses border

        // Steps
        stepBadgeSize: '2.5rem',
        stepFontSize: '1rem',

        // Progress
        progressHeight: '0.5rem',
        progressRadius: '9999px',
        progressBackground: 'rgba(255, 255, 255, 0.1)',
        progressFill: undefined, // Uses primary

        // Tags
        tagPadding: '0.25rem 1rem',
        tagRadius: '9999px',
        tagFontSize: '0.75rem',

        // Inputs
        inputRadius: '0.5rem',
        inputPadding: '0.75rem 1rem',
        inputBorder: undefined, // Uses border color
        inputFocusBorder: undefined, // Uses primary
    },

    // Legacy (empty object - use typography.fontFamily instead)
    fonts: {},
};

const DEFAULT_THEME_ID = 'lumina-theme-styles';

/**
 * Deep merge utility for theme configuration.
 */
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
    const result = { ...target };

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = target[key];

            if (
                sourceValue !== null &&
                sourceValue !== undefined &&
                typeof sourceValue === 'object' &&
                !Array.isArray(sourceValue) &&
                typeof targetValue === 'object' &&
                !Array.isArray(targetValue)
            ) {
                result[key] = deepMerge(targetValue, sourceValue);
            } else if (sourceValue !== undefined) {
                result[key] = sourceValue as any;
            }
        }
    }

    return result;
}

/**
 * THEME MANAGER
 * Generates and injects CSS Custom Properties based on the configuration.
 */
export class ThemeManager {
    /**
     * Injects the requested theme into the document head.
     * 
     * @param theme - A preset name ('ocean', 'cyber') or a complete ThemeConfig object.
     * @param overrides - Optional additional overrides to merge on top.
     */
    static inject(theme: ThemeConfig | string, overrides?: ThemeConfig) {
        let config: ThemeConfig;

        // 1. Resolve Base Preset or Config
        if (typeof theme === 'string') {
            const preset = THEME_PRESETS[theme] || THEME_PRESETS['default'];
            config = deepMerge(DEFAULT_THEME, preset);
        } else {
            config = deepMerge(DEFAULT_THEME, theme);
        }

        // 2. Apply Overrides
        if (overrides) {
            config = deepMerge(config, overrides);
        }

        // 3. Handle legacy fonts -> typography migration
        if (config.fonts && !config.typography?.fontFamily) {
            config.typography = config.typography || {};
            config.typography.fontFamily = {
                heading: config.fonts.heading,
                body: config.fonts.body,
                mono: config.fonts.mono,
            };
        }

        let styleEl = document.getElementById(DEFAULT_THEME_ID);

        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = DEFAULT_THEME_ID;
            document.head.appendChild(styleEl);
        }

        const vars = this.generateVars(config);
        styleEl.innerHTML = `:root { ${vars} }`;
    }

    /**
     * Gets the current resolved theme configuration.
     */
    static getDefaultTheme(): Required<ThemeConfig> {
        return DEFAULT_THEME;
    }

    /**
     * Converts a ThemeConfig object into a CSS string of custom properties.
     */
    private static generateVars(theme: ThemeConfig): string {
        const cssVars: string[] = [];

        // --- Colors ---
        if (theme.colors) {
            for (const [key, value] of Object.entries(theme.colors)) {
                if (value) {
                    const cssKey = this.camelToKebab(key);
                    cssVars.push(`--lumina-color-${cssKey}: ${value};`);

                    // RGB conversion for opacity usage
                    const rgb = this.hexToRgb(value);
                    if (rgb) {
                        cssVars.push(`--lumina-color-${cssKey}-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};`);
                    }
                }
            }
        }

        // --- Typography ---
        if (theme.typography) {
            const typo = theme.typography;

            // Font Families
            if (typo.fontFamily) {
                for (const [key, value] of Object.entries(typo.fontFamily)) {
                    if (value) cssVars.push(`--lumina-font-${key}: ${value};`);
                }
            }

            // Font Sizes
            if (typo.fontSize) {
                for (const [key, value] of Object.entries(typo.fontSize)) {
                    if (value) cssVars.push(`--lumina-text-${key}: ${value};`);
                }
            }

            // Font Weights
            if (typo.fontWeight) {
                for (const [key, value] of Object.entries(typo.fontWeight)) {
                    if (value !== undefined) cssVars.push(`--lumina-font-weight-${key}: ${value};`);
                }
            }

            // Line Heights
            if (typo.lineHeight) {
                for (const [key, value] of Object.entries(typo.lineHeight)) {
                    if (value) cssVars.push(`--lumina-leading-${key}: ${value};`);
                }
            }

            // Letter Spacing
            if (typo.letterSpacing) {
                for (const [key, value] of Object.entries(typo.letterSpacing)) {
                    if (value) cssVars.push(`--lumina-tracking-${key}: ${value};`);
                }
            }
        }

        // --- Spacing ---
        if (theme.spacing) {
            for (const [key, value] of Object.entries(theme.spacing)) {
                if (value) cssVars.push(`--lumina-space-${key}: ${value};`);
            }
        }

        // --- Border Radius ---
        if (theme.borderRadius) {
            for (const [key, value] of Object.entries(theme.borderRadius)) {
                if (value) cssVars.push(`--lumina-radius-${key}: ${value};`);
            }
        }

        // --- Effects ---
        if (theme.effects) {
            const fx = theme.effects;

            // Booleans as 0/1 for CSS calc tricks
            cssVars.push(`--lumina-use-gradients: ${fx.useGradients ? 1 : 0};`);
            cssVars.push(`--lumina-use-shadows: ${fx.useShadows ? 1 : 0};`);
            cssVars.push(`--lumina-use-glass: ${fx.useGlass ? 1 : 0};`);
            cssVars.push(`--lumina-use-orb: ${fx.useOrb ? 1 : 0};`);
            cssVars.push(`--lumina-use-animations: ${fx.animationsEnabled ? 1 : 0};`);

            // Gradient
            if (fx.gradientDirection) cssVars.push(`--lumina-gradient-direction: ${this.gradientDirectionToCSS(fx.gradientDirection)};`);
            if (fx.gradientFrom) cssVars.push(`--lumina-gradient-from: ${fx.gradientFrom};`);
            if (fx.gradientVia) cssVars.push(`--lumina-gradient-via: ${fx.gradientVia};`);
            if (fx.gradientTo) cssVars.push(`--lumina-gradient-to: ${fx.gradientTo};`);

            // Shadows
            if (fx.shadowIntensity) cssVars.push(`--lumina-shadow-intensity: ${fx.shadowIntensity};`);
            if (fx.shadowColor) cssVars.push(`--lumina-shadow-color: ${fx.shadowColor};`);

            // Glass
            if (fx.glassOpacity !== undefined) cssVars.push(`--lumina-glass-opacity: ${fx.glassOpacity};`);
            if (fx.glassBlur) cssVars.push(`--lumina-glass-blur: ${fx.glassBlur};`);
            if (fx.glassBorderOpacity !== undefined) cssVars.push(`--lumina-glass-border-opacity: ${fx.glassBorderOpacity};`);

            // Orb
            if (fx.orbOpacity !== undefined) cssVars.push(`--lumina-orb-opacity: ${fx.orbOpacity};`);
            if (fx.orbBlur) cssVars.push(`--lumina-orb-blur: ${fx.orbBlur};`);
            if (fx.orbSize) cssVars.push(`--lumina-orb-size: ${fx.orbSize};`);

            // Animations
            if (fx.transitionDuration) cssVars.push(`--lumina-transition-duration: ${fx.transitionDuration};`);
            if (fx.transitionEasing) cssVars.push(`--lumina-transition-easing: ${fx.transitionEasing};`);
            if (fx.hoverScale !== undefined) cssVars.push(`--lumina-hover-scale: ${fx.hoverScale};`);
        }

        // --- Components ---
        if (theme.components) {
            const comp = theme.components;

            // Buttons
            if (comp.buttonRadius) cssVars.push(`--lumina-button-radius: ${comp.buttonRadius};`);
            if (comp.buttonPadding) cssVars.push(`--lumina-button-padding: ${comp.buttonPadding};`);
            if (comp.buttonFontWeight !== undefined) cssVars.push(`--lumina-button-font-weight: ${comp.buttonFontWeight};`);
            if (comp.buttonTextTransform) cssVars.push(`--lumina-button-text-transform: ${comp.buttonTextTransform};`);

            // Cards
            if (comp.cardRadius) cssVars.push(`--lumina-card-radius: ${comp.cardRadius};`);
            if (comp.cardPadding) cssVars.push(`--lumina-card-padding: ${comp.cardPadding};`);
            if (comp.cardBorderWidth) cssVars.push(`--lumina-card-border-width: ${comp.cardBorderWidth};`);
            if (comp.cardBackground) cssVars.push(`--lumina-card-background: ${comp.cardBackground};`);

            // Timeline
            if (comp.timelineNodeSize) cssVars.push(`--lumina-timeline-node-size: ${comp.timelineNodeSize};`);
            if (comp.timelineLineWidth) cssVars.push(`--lumina-timeline-line-width: ${comp.timelineLineWidth};`);
            if (comp.timelineNodeColor) cssVars.push(`--lumina-timeline-node-color: ${comp.timelineNodeColor};`);
            if (comp.timelineLineColor) cssVars.push(`--lumina-timeline-line-color: ${comp.timelineLineColor};`);

            // Steps
            if (comp.stepBadgeSize) cssVars.push(`--lumina-step-badge-size: ${comp.stepBadgeSize};`);
            if (comp.stepFontSize) cssVars.push(`--lumina-step-font-size: ${comp.stepFontSize};`);

            // Progress
            if (comp.progressHeight) cssVars.push(`--lumina-progress-height: ${comp.progressHeight};`);
            if (comp.progressRadius) cssVars.push(`--lumina-progress-radius: ${comp.progressRadius};`);
            if (comp.progressBackground) cssVars.push(`--lumina-progress-background: ${comp.progressBackground};`);
            if (comp.progressFill) cssVars.push(`--lumina-progress-fill: ${comp.progressFill};`);

            // Tags
            if (comp.tagPadding) cssVars.push(`--lumina-tag-padding: ${comp.tagPadding};`);
            if (comp.tagRadius) cssVars.push(`--lumina-tag-radius: ${comp.tagRadius};`);
            if (comp.tagFontSize) cssVars.push(`--lumina-tag-font-size: ${comp.tagFontSize};`);

            // Inputs
            if (comp.inputRadius) cssVars.push(`--lumina-input-radius: ${comp.inputRadius};`);
            if (comp.inputPadding) cssVars.push(`--lumina-input-padding: ${comp.inputPadding};`);
            if (comp.inputBorder) cssVars.push(`--lumina-input-border: ${comp.inputBorder};`);
            if (comp.inputFocusBorder) cssVars.push(`--lumina-input-focus-border: ${comp.inputFocusBorder};`);
        }

        // Legacy support: also generate old variable names for backwards compatibility
        if (theme.colors?.primary) cssVars.push(`--lumina-colors-primary: ${theme.colors.primary};`);
        if (theme.colors?.background) cssVars.push(`--lumina-colors-background: ${theme.colors.background};`);
        if (theme.colors?.text) cssVars.push(`--lumina-colors-text: ${theme.colors.text};`);
        if (theme.colors?.muted) cssVars.push(`--lumina-colors-muted: ${theme.colors.muted};`);

        // --- Auto-Contrast (Intelligent text color calculation) ---
        const autoContrastVars = this.generateAutoContrastVars(theme);
        cssVars.push(...autoContrastVars);

        return cssVars.join(' ');
    }

    /**
     * Convert camelCase to kebab-case.
     */
    private static camelToKebab(str: string): string {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /**
     * Convert gradient direction token to CSS value.
     */
    private static gradientDirectionToCSS(dir: string): string {
        const map: Record<string, string> = {
            'to-t': 'to top',
            'to-b': 'to bottom',
            'to-l': 'to left',
            'to-r': 'to right',
            'to-tl': 'to top left',
            'to-tr': 'to top right',
            'to-bl': 'to bottom left',
            'to-br': 'to bottom right',
        };
        return map[dir] || 'to bottom';
    }

    /**
     * Helper to parse a Hex color string into RGB components.
     * Supports both #RGB and #RRGGBB formats.
     */
    private static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
        // Handle shorthand hex (#RGB)
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * Calculate relative luminance of a color (WCAG formula).
     * Returns value between 0 (black) and 1 (white).
     */
    private static getLuminance(hex: string): number {
        const rgb = this.hexToRgb(hex);
        if (!rgb) return 0;

        // Convert to sRGB
        const toLinear = (c: number) => {
            const sRGB = c / 255;
            return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
        };

        const R = toLinear(rgb.r);
        const G = toLinear(rgb.g);
        const B = toLinear(rgb.b);

        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }

    /**
     * Determine if a background color is "light" or "dark".
     * Returns true if the color is light (should use dark text).
     */
    private static isLightColor(hex: string): boolean {
        return this.getLuminance(hex) > 0.4;
    }

    /**
     * Get optimal contrasting text color for a given background.
     * Returns dark or light text color based on background luminance.
     */
    private static getContrastTextColor(bgHex: string, darkText = '#1a1a1a', lightText = '#ffffff'): string {
        return this.isLightColor(bgHex) ? darkText : lightText;
    }

    /**
     * Get optimal muted text color for a given background.
     */
    private static getContrastMutedColor(bgHex: string): string {
        return this.isLightColor(bgHex) ? '#4b5563' : '#9ca3af';
    }

    /**
     * Extract hex color from various formats (hex, rgb, rgba, gradient).
     * Returns the first valid hex color found, or null.
     */
    private static extractHexColor(color: string): string | null {
        if (!color) return null;

        // Handle direct hex
        if (color.startsWith('#')) {
            return color.split(' ')[0];
        }

        // Handle rgb/rgba
        if (color.startsWith('rgb')) {
            const values = color.match(/\d+/g);
            if (values && values.length >= 3) {
                const r = parseInt(values[0]);
                const g = parseInt(values[1]);
                const b = parseInt(values[2]);
                return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }
        }

        // Try to find hex in string (for gradients)
        const hexMatch = color.match(/#[a-fA-F0-9]{3,6}/);
        if (hexMatch) return hexMatch[0];

        return null;
    }

    /**
     * Generate auto-contrast CSS variables based on background color.
     * These variables automatically adjust text colors for readability.
     * CRITICAL: Also overrides the main color variables when necessary.
     */
    private static generateAutoContrastVars(theme: ThemeConfig): string[] {
        const cssVars: string[] = [];

        // Get background color
        const bgColor = theme.colors?.background;
        if (!bgColor) return cssVars;

        const bgHex = this.extractHexColor(bgColor);
        if (!bgHex) return cssVars;

        const isLight = this.isLightColor(bgHex);

        // Auto text colors based on background
        const autoText = isLight ? '#000000' : '#ffffff';
        const autoMuted = isLight ? '#374151' : '#9ca3af'; // Darker mute for light mode (accessibility fix)
        const autoTextSecondary = isLight ? '#374151' : '#d1d5db';

        cssVars.push(`--lumina-auto-text: ${autoText};`);
        cssVars.push(`--lumina-auto-text-secondary: ${autoTextSecondary};`);
        cssVars.push(`--lumina-auto-muted: ${autoMuted};`);
        cssVars.push(`--lumina-auto-is-light: ${isLight ? '1' : '0'};`);

        // Check contrast and override when necessary
        const userText = theme.colors?.text;
        const textHex = userText ? this.extractHexColor(userText) : null;

        if (textHex) {
            const textLum = this.getLuminance(textHex);
            const bgLum = this.getLuminance(bgHex);
            const contrastRatio = (Math.max(textLum, bgLum) + 0.05) / (Math.min(textLum, bgLum) + 0.05);

            // If contrast is poor, FORCE override the main variables
            if (contrastRatio < 3) {
                cssVars.push(`--lumina-color-text-safe: ${autoText};`);
                cssVars.push(`--lumina-color-muted-safe: ${autoMuted};`);
                // FORCE OVERRIDE the main variables
                cssVars.push(`--lumina-color-text: ${autoText};`);
                cssVars.push(`--lumina-color-muted: ${autoMuted};`);
                cssVars.push(`--lumina-color-text-secondary: ${autoTextSecondary};`);
            } else {
                cssVars.push(`--lumina-color-text-safe: ${userText};`);
                cssVars.push(`--lumina-color-muted-safe: ${theme.colors.muted || autoMuted};`);
            }
        } else {
            cssVars.push(`--lumina-color-text-safe: ${autoText};`);
            cssVars.push(`--lumina-color-muted-safe: ${autoMuted};`);
        }

        // For LIGHT backgrounds, generate special glass panel colors
        if (isLight) {
            // Glass panels on light backgrounds need dark overlays
            cssVars.push(`--lumina-color-text-rgb: 0, 0, 0;`);
            cssVars.push(`--lumina-glass-opacity: 0.06;`);
            cssVars.push(`--lumina-glass-border-opacity: 0.15;`);
            // Surface should be white for readability
            cssVars.push(`--lumina-color-surface: #ffffff;`);
            cssVars.push(`--lumina-surface-text: #1a1a1a;`);
            cssVars.push(`--lumina-surface-muted: #4b5563;`);
            cssVars.push(`--lumina-shadow-color: rgba(0, 0, 0, 0.15);`);
            // Critical Overrides for Light Mode (High Contrast for Accessibility)
            cssVars.push(`--lumina-color-border: rgba(0, 0, 0, 0.12);`);
            cssVars.push(`--lumina-color-border-subtle: rgba(0, 0, 0, 0.08);`);
            // Muted text must be dark enough to be legible on light backgrounds (Global Fix)
            cssVars.push(`--lumina-color-muted: #374151;`); // gray-700 instead of gray-500
            cssVars.push(`--lumina-color-text-secondary: #1f2937;`); // gray-800
        } else {
            // Dark theme surface
            const surfaceColor = theme.colors?.surface;
            if (surfaceColor) {
                const surfaceHex = this.extractHexColor(surfaceColor);
                if (surfaceHex) {
                    const surfaceText = this.getContrastTextColor(surfaceHex);
                    const surfaceMuted = this.getContrastMutedColor(surfaceHex);
                    cssVars.push(`--lumina-surface-text: ${surfaceText};`);
                    cssVars.push(`--lumina-surface-muted: ${surfaceMuted};`);
                }
            }
        }

        return cssVars;
    }
}

