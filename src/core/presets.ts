import { ThemeConfig } from './types';

export const THEME_PRESETS: Record<string, ThemeConfig> = {
    default: {
        colors: {
            primary: '#3b82f6',
            background: '#030303',
            text: '#ffffff',
            muted: '#9ca3af'
        },
        fonts: {
            heading: 'Inter, sans-serif',
            body: 'Inter, sans-serif',
            mono: 'monospace'
        }
    },
    ocean: {
        colors: {
            primary: '#06b6d4', // Cyan
            background: '#0f172a', // Slate 900
            text: '#f0f9ff',
            muted: '#94a3b8'
        },
        fonts: {
            heading: 'Outfit, sans-serif',
            body: 'Inter, sans-serif'
        }
    },
    midnight: {
        colors: {
            primary: '#6366f1', // Indigo
            background: '#000000',
            text: '#e0e7ff',
            muted: '#6b7280'
        }
    },
    forest: {
        colors: {
            primary: '#10b981', // Emerald
            background: '#022c22', // Dark Green
            text: '#ecfdf5',
            muted: '#6ee7b7'
        }
    },
    cyber: {
        colors: {
            primary: '#f472b6', // Pink
            background: '#18181b', // Zinc 900
            text: '#ffffff',
            muted: '#a1a1aa'
        },
        fonts: {
            heading: 'Orbitron, sans-serif',
            body: 'Rajdhani, sans-serif'
        }
    },
    latte: {
        colors: {
            primary: '#d97706', // Amber
            background: '#fffbeb', // Amber 50
            text: '#451a03', // Amber 900
            muted: '#92400e'
        },
        fonts: {
            heading: 'Playfair Display, serif',
            body: 'Lato, sans-serif'
        }
    }
};
