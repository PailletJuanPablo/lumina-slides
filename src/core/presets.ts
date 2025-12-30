import { ThemeConfig } from './types';

/**
 * THEME PRESETS
 * Pre-configured themes that users can select by name.
 * Each preset only defines values that differ from DEFAULT_THEME.
 * 
 * Available presets: 'default', 'ocean', 'midnight', 'forest', 'cyber', 'latte'
 */
export const THEME_PRESETS: Record<string, ThemeConfig> = {
    default: {
        colors: {
            primary: '#3b82f6',
            secondary: '#8b5cf6',
            accent: '#06b6d4',
            background: '#030303',
            surface: '#0a0a0a',
            text: '#ffffff',
            textSecondary: '#e5e7eb',
            muted: '#9ca3af',
            gradientFrom: '#3b82f6',
            gradientTo: '#8b5cf6',
        },
        typography: {
            fontFamily: {
                heading: 'Inter, system-ui, sans-serif',
                body: 'Inter, system-ui, sans-serif',
                mono: 'ui-monospace, SFMono-Regular, monospace',
            },
        },
        effects: {
            useGradients: true,
            useGlass: true,
            useOrb: true,
            useShadows: true,
        },
    },

    ocean: {
        colors: {
            primary: '#06b6d4',
            secondary: '#0ea5e9',
            accent: '#22d3ee',
            background: '#0f172a',
            surface: '#1e293b',
            text: '#f0f9ff',
            textSecondary: '#e0f2fe',
            muted: '#94a3b8',
            success: '#14b8a6',
            warning: '#fb923c',
            danger: '#f43f5e',
            info: '#38bdf8',
            border: 'rgba(148, 163, 184, 0.2)',
            gradientFrom: '#06b6d4',
            gradientTo: '#0ea5e9',
        },
        typography: {
            fontFamily: {
                heading: 'Outfit, Inter, sans-serif',
                body: 'Inter, system-ui, sans-serif',
            },
        },
        effects: {
            orbOpacity: 0.3,
            glassOpacity: 0.05,
        },
    },

    midnight: {
        colors: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            accent: '#a78bfa',
            background: '#000000',
            surface: '#0a0a0f',
            text: '#e0e7ff',
            textSecondary: '#c7d2fe',
            muted: '#6b7280',
            success: '#10b981',
            warning: '#fbbf24',
            danger: '#f87171',
            info: '#60a5fa',
            border: 'rgba(99, 102, 241, 0.2)',
            gradientFrom: '#6366f1',
            gradientTo: '#a855f7',
        },
        effects: {
            orbOpacity: 0.5,
            shadowIntensity: 'lg',
        },
    },

    forest: {
        colors: {
            primary: '#10b981',
            secondary: '#059669',
            accent: '#34d399',
            background: '#022c22',
            surface: '#064e3b',
            text: '#ecfdf5',
            textSecondary: '#d1fae5',
            muted: '#6ee7b7',
            success: '#22c55e',
            warning: '#fbbf24',
            danger: '#ef4444',
            info: '#38bdf8',
            border: 'rgba(52, 211, 153, 0.2)',
            gradientFrom: '#10b981',
            gradientTo: '#059669',
        },
        effects: {
            orbOpacity: 0.35,
            orbBlur: '150px',
        },
    },

    cyber: {
        colors: {
            primary: '#f472b6',
            secondary: '#e879f9',
            accent: '#22d3ee',
            background: '#18181b',
            surface: '#27272a',
            text: '#ffffff',
            textSecondary: '#fafafa',
            muted: '#a1a1aa',
            success: '#4ade80',
            warning: '#facc15',
            danger: '#f87171',
            info: '#38bdf8',
            border: 'rgba(244, 114, 182, 0.3)',
            gradientFrom: '#f472b6',
            gradientTo: '#e879f9',
        },
        typography: {
            fontFamily: {
                heading: 'Orbitron, sans-serif',
                body: 'Rajdhani, sans-serif',
            },
            letterSpacing: {
                widest: '0.15em',
            },
        },
        effects: {
            orbOpacity: 0.6,
            shadowIntensity: 'xl',
            shadowColor: 'rgba(244, 114, 182, 0.3)',
        },
        components: {
            cardRadius: '0.5rem',
            buttonRadius: '0.5rem',
        },
    },

    latte: {
        colors: {
            primary: '#d97706',
            secondary: '#ea580c',
            accent: '#f59e0b',
            background: '#fffbeb',
            surface: '#fef3c7',
            text: '#451a03',
            textSecondary: '#78350f',
            muted: '#92400e',
            success: '#16a34a',
            warning: '#ca8a04',
            danger: '#dc2626',
            info: '#2563eb',
            border: 'rgba(146, 64, 14, 0.2)',
            shadow: 'rgba(120, 53, 15, 0.1)',
            gradientFrom: '#d97706',
            gradientTo: '#ea580c',
        },
        typography: {
            fontFamily: {
                heading: 'Playfair Display, Georgia, serif',
                body: 'Lato, system-ui, sans-serif',
            },
        },
        effects: {
            useOrb: false, // Light mode, no orb
            glassOpacity: 0.5,
            glassBorderOpacity: 0.15,
            shadowColor: 'rgba(120, 53, 15, 0.15)',
        },
        components: {
            cardBackground: 'rgba(255, 255, 255, 0.7)',
        },
    },

    // Additional presets for more variety

    sunset: {
        colors: {
            primary: '#f97316',
            secondary: '#f43f5e',
            accent: '#fb7185',
            background: '#1c1917',
            surface: '#292524',
            text: '#fafaf9',
            textSecondary: '#e7e5e4',
            muted: '#a8a29e',
            gradientFrom: '#f97316',
            gradientTo: '#f43f5e',
        },
        effects: {
            orbOpacity: 0.45,
            gradientDirection: 'to-br',
        },
    },

    monochrome: {
        colors: {
            primary: '#ffffff',
            secondary: '#a1a1aa',
            accent: '#d4d4d8',
            background: '#09090b',
            surface: '#18181b',
            text: '#fafafa',
            textSecondary: '#e4e4e7',
            muted: '#71717a',
            border: 'rgba(255, 255, 255, 0.1)',
            gradientFrom: '#ffffff',
            gradientTo: '#a1a1aa',
        },
        effects: {
            useGradients: false,
            orbOpacity: 0.2,
        },
    },
};
