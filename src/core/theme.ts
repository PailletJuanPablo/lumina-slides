import { ThemeConfig } from './types';
import { THEME_PRESETS } from './presets';

/**
 * THEME MANAGER
 * Generates and injects CSS Custom Properties based on the configuration.
 */

const DEFAULT_THEME_ID = 'lumina-theme-styles';

/**
 * THEME MANAGER
 * Handles the generation and injection of CSS Custom Properties (Variables)
 * to control the look and feel of the Lumina Engine at runtime.
 * 
 * Supports both strict configuration objects and string-based presets.
 */
export class ThemeManager {
    /**
     * Injects the requested theme into the document head.
     * If a string is provided, it looks up the preset.
     * If an object is provided, it merges it with the default preset.
     * 
     * @param theme - A preset name ('ocean', 'cyber') or a partial ThemeConfig object.
     */
    static inject(theme: ThemeConfig | string) {
        let config: ThemeConfig;

        // Resolve Preset
        if (typeof theme === 'string') {
            config = THEME_PRESETS[theme] || THEME_PRESETS['default'];
        } else {
            // Merge with default to ensure completeness if partial object provided
            config = { ...THEME_PRESETS['default'], ...theme };
            if (theme.colors) config.colors = { ...THEME_PRESETS['default'].colors, ...theme.colors };
            if (theme.fonts) config.fonts = { ...THEME_PRESETS['default'].fonts, ...theme.fonts };
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
     * Converts a ThemeConfig object into a CSS string of standard variables.
     * Also generates RGB triplets for use with alpha channels (e.g. `rgba(var(--color), 0.5)`).
     * 
     * @param theme - The resolved theme configuration.
     * @returns A string of CSS variables.
     */
    private static generateVars(theme: ThemeConfig): string {
        const cssVars: string[] = [];

        if (theme.colors) {
            for (const [key, value] of Object.entries(theme.colors)) {
                if (value) {
                    // Standard var
                    cssVars.push(`--lumina-${key}: ${value};`);

                    // RGB conversion for opacity usage
                    const rgb = this.hexToRgb(value);
                    if (rgb) {
                        cssVars.push(`--lumina-${key}-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};`);
                    }
                }
            }
        }

        if (theme.fonts) {
            for (const [key, value] of Object.entries(theme.fonts)) {
                if (value) cssVars.push(`--lumina-font-${key}: ${value};`);
            }
        }

        return cssVars.join(' ');
    }

    /**
     * Helper to parse a Hex color string into RGB components.
     * @param hex - Hex string (e.g. "#ffffff" or "000")
     * @returns Object with r, g, b values or null if invalid.
     */
    private static hexToRgb(hex: string) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}
