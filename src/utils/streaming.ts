
/**
 * Feature: Streaming Renderer
 * Utilities to handle partial JSON streams from LLMs.
 */

// --- 1. Robust Stream Parser (Improvement: "Stack-based Parser") ---

/**
 * Attempts to parse a partial JSON string by auto-closing brackets and quotes.
 * This is a simplified "repair" logic optimized for the specific structure of Lumina Decks.
 */
export function parsePartialJson(input: string): any {
    let fixed = input.trim();

    // 1. Remove trailing commas (common in streams)
    fixed = fixed.replace(/,(\s*[}\]])/g, '$1');

    // 2. Count open brackets/braces
    const stack: string[] = [];
    let inString = false;
    let isEscaped = false;

    for (let i = 0; i < fixed.length; i++) {
        const char = fixed[i];

        if (inString) {
            if (char === '\\') {
                isEscaped = !isEscaped;
            } else if (char === '"' && !isEscaped) {
                inString = false;
            } else {
                isEscaped = false;
            }
            continue;
        }

        if (char === '"') {
            inString = true;
        } else if (char === '{') {
            stack.push('}');
        } else if (char === '[') {
            stack.push(']');
        } else if (char === '}') {
            if (stack[stack.length - 1] === '}') stack.pop();
        } else if (char === ']') {
            if (stack[stack.length - 1] === ']') stack.pop();
        }
    }

    // 3. Auto-close strings
    if (inString) {
        fixed += '"';
        // If we closed a property key "key": "val, we might need value closing
        // But usually streams cut off at value. "title": "my tit
    }

    // 4. Auto-close structural stack in reverse
    while (stack.length > 0) {
        fixed += stack.pop();
    }

    try {
        return JSON.parse(fixed);
    } catch (e) {
        // If it still fails, return null or a safe fallback
        // console.warn("Stream parse failed, waiting for more chunks...");
        return null;
    }
}


// --- 2. Smooth Stream Interpolation (Improvement: "Debounce") ---

/**
 * Creates a debounced version of a function that only fires 
 * if the stream pauses for a few ms, preventing UI jitter.
 */
export function createDebouncedLoader<T>(
    callback: (data: T) => void,
    delay = 50
) {
    let timeout: any = null;

    return (rawData: string) => {
        const parsed = parsePartialJson(rawData);

        if (!parsed) return; // Skip invalid frames

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback(parsed);
        }, delay);
    };
}


// --- 3. Ghost Loading State Helper (Improvement: "Ghost Loading") ---

/**
 * Checks if a slide object is structurally complete enough to render.
 * Use this in UI components to toggle a "Skeleton" view.
 */
export function isSlideReady(slide: any): boolean {
    if (!slide) return false;
    if (!slide.type) return false;

    // For statement, we need at least a title partial
    if (slide.type === 'statement' && typeof slide.title !== 'string') return false;

    // For features, we need the array to exist
    if (slide.type === 'features' && !Array.isArray(slide.features)) return false;

    return true;
}
