
/**
 * Feature: Token Optimization (Compression)
 * A dictionary of common values mapped to short codes.
 * This can be provided to the LLM to reduce output size.
 */

export const COMPRESSION_DICT = {
    // Icons
    'i:s': 'star',
    'i:u': 'users',
    'i:c': 'check',
    'i:a': 'arrow-right',

    // Colors (Tailwind standard approximation)
    'c:p': '#6366f1', // Primary (Indigo)
    'c:s': '#10b981', // Success (Emerald)
    'c:d': '#ef4444', // Danger (Red)

    // Variants
    'v:g': 'gradient',
    'v:o': 'outlined',
    'v:s': 'soft',
};

/**
 * Expands a compressed value if it exists in the dictionary.
 */
export function expandValue(val: string): string {
    if (val in COMPRESSION_DICT) {
        return (COMPRESSION_DICT as any)[val];
    }
    return val;
}
