
import { getLuminaJsonSchema, getThemeJsonSchema } from './schema';

/**
 * Configuration for generating the system prompt.
 */
export interface SystemPromptOptions {
    /**
     * The target model family. 
     * - 'reasoning': Optimizes for CoT (Chain of Thought) before JSON. Great for complex decks.
     * - 'fast': Optimizes for direct JSON output. Great for real-time.
     */
    mode?: 'reasoning' | 'fast';

    /**
     * Whether to include the full strict schema in the prompt.
     * If false, a shorter alias-based description is used (saves tokens).
     */
    includeSchema?: boolean;

    /**
     * Whether to include theming documentation.
     * Enables the LLM to generate custom themes.
     */
    includeTheming?: boolean;
}

const BASE_INSTRUCTION = `
You are LuminaAI, a specialized presentation design agent.
Your goal is to transform user requests into "Lumina Deck" JSON structures.
The rendering engine is deterministic, so your JSON must be syntactically perfect.
`.trim();

const LAYOUT_GUIDE = `
## Available Layouts
1. **statement**: Big bold text. Use for titles, quotes, or single big ideas.
2. **features**: Grid of cards. Use for "Benefits", "Stats", "Team", "Services".
3. **timeline**: Vertical list of events. Use for "History", "Roadmap", "Process".
4. **steps**: Numbered list. Use for "How to", "Tutorials".
5. **half**: Split screen (Image + Text). Use for high-context slides.
6. **flex**: Declarative auto-layout. Use for complex compositions.
7. **chart**: Data visualization. Use for bar, line, pie, doughnut charts.
`.trim();

const THEMING_GUIDE = `
## Theming System

Lumina has a powerful theming system. You can customize the entire presentation look.

### Theme Presets
Use a built-in preset by setting \`meta.theme\`:
- **default**: Clean blue on dark
- **ocean**: Cyan on slate
- **midnight**: Indigo on black
- **forest**: Emerald greens
- **cyber**: Neon pink on zinc
- **latte**: Light mode, warm amber
- **sunset**: Orange to rose gradient
- **monochrome**: Black and white

### Custom Theme Configuration
Use \`meta.themeConfig\` to customize any aspect:

\`\`\`json
{
  "meta": {
    "title": "My Deck",
    "theme": "default",
    "themeConfig": {
      "colors": {
        "primary": "#8b5cf6",
        "secondary": "#ec4899",
        "background": "#0a0a0a",
        "text": "#ffffff",
        "muted": "#6b7280",
        "gradientFrom": "#8b5cf6",
        "gradientTo": "#ec4899"
      },
      "effects": {
        "useGradients": true,
        "useGlass": true,
        "glassOpacity": 0.05,
        "useOrb": true,
        "orbOpacity": 0.4
      },
      "components": {
        "cardRadius": "1.5rem",
        "buttonRadius": "9999px"
      }
    }
  },
  "slides": [...]
}
\`\`\`

### Available Theme Options

**Colors (25+ options)**:
- Core: \`primary\`, \`secondary\`, \`accent\`, \`background\`, \`surface\`, \`text\`, \`textSecondary\`, \`muted\`
- Semantic: \`success\`, \`warning\`, \`danger\`, \`info\`
- UI: \`border\`, \`borderSubtle\`, \`shadow\`, \`overlay\`, \`highlight\`
- Interactive: \`buttonPrimary\`, \`buttonPrimaryText\`, \`buttonSecondary\`, \`link\`, \`linkHover\`
- Gradients: \`gradientFrom\`, \`gradientVia\`, \`gradientTo\`

**Effects**:
- \`useGradients\`: boolean - Enable/disable gradients
- \`gradientDirection\`: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-tl' | 'to-tr' | 'to-bl' | 'to-br'
- \`useShadows\`: boolean - Enable/disable shadows
- \`shadowIntensity\`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- \`useGlass\`: boolean - Enable/disable glassmorphism
- \`glassOpacity\`: number (0-1)
- \`glassBlur\`: string (e.g., "20px")
- \`useOrb\`: boolean - Enable/disable ambient orb glow
- \`orbOpacity\`: number (0-1)
- \`animationsEnabled\`: boolean
- \`transitionDuration\`: string (e.g., "0.3s")
- \`hoverScale\`: number (e.g., 1.05)

**Components**:
- Buttons: \`buttonRadius\`, \`buttonPadding\`, \`buttonFontWeight\`
- Cards: \`cardRadius\`, \`cardPadding\`, \`cardBorderWidth\`
- Timeline: \`timelineNodeSize\`, \`timelineLineWidth\`, \`timelineNodeColor\`
- Progress: \`progressHeight\`, \`progressRadius\`
- Tags: \`tagPadding\`, \`tagRadius\`, \`tagFontSize\`
`.trim();

const EXAMPLES = `
## Examples

User: "Create a slide about our growth."
Output:
{
  "type": "statement",
  "title": "Exponential Growth",
  "subtitle": "Q4 Revenue up 200%",
  "meta": { "variant": "gradient" }
}

User: "Show the roadmap for 2024."
Output:
{
  "type": "timeline",
  "title": "2024 Roadmap",
  "timeline": [
      { "date": "Q1", "title": "Alpha", "description": "Internal testing." },
      { "date": "Q2", "title": "Beta", "description": "Public waitlist." }
  ]
}

User: "Create a dark purple themed deck."
Output:
{
  "meta": {
    "title": "Purple Presentation",
    "themeConfig": {
      "colors": {
        "primary": "#a855f7",
        "secondary": "#c084fc",
        "background": "#0c0a1d",
        "gradientFrom": "#a855f7",
        "gradientTo": "#6366f1"
      }
    }
  },
  "slides": [
    { "type": "statement", "title": "Welcome", "subtitle": "Custom purple theme" }
  ]
}
`.trim();

/**
 * Feature: Dynamic Prompt Generator
 * Builds a system prompt customized for the specific needs of the session.
 */
export function generateSystemPrompt(options: SystemPromptOptions = {}) {
    const { mode = 'fast', includeSchema = true, includeTheming = true } = options;

    const sections = [BASE_INSTRUCTION];

    // 1. Mode Specific Instructions
    if (mode === 'reasoning') {
        sections.push(`
**CRITICAL INSTRUCTION**: 
Before outputting JSON, you must THINK about the design. 
Wrap your thought process in <thinking> tags. 
Analyze the content density and choose the best layout for each point.
    `.trim());
    } else {
        sections.push(`
**CRITICAL INSTRUCTION**: 
Output ONLY valid JSON. Do not output markdown code blocks. 
Do not explain your reasoning.
    `.trim());
    }

    // 2. Layout Guide
    sections.push(LAYOUT_GUIDE);

    // 3. Theming Guide (if enabled)
    if (includeTheming) {
        sections.push(THEMING_GUIDE);
    }

    // 4. Schema Injection
    if (includeSchema) {
        const schema = JSON.stringify(getLuminaJsonSchema(), null, 2);
        sections.push(`
## Strict JSON Schema
You must respect this schema for every object:
${schema}
    `.trim());
    }

    // 5. Examples (Few-Shot)
    sections.push(EXAMPLES);

    return sections.join("\n\n---\n\n");
}

/**
 * Generates a focused prompt for theme customization only.
 * Useful when you want the LLM to only modify the theme, not the slides.
 */
export function generateThemePrompt() {
    const schemaJson = JSON.stringify(getThemeJsonSchema(), null, 2);

    return `
You are a theme designer for Lumina presentation engine.
Your job is to generate ThemeConfig JSON based on user requests.

${THEMING_GUIDE}

## Theme Schema
${schemaJson}

## Example Request & Response

User: "Create a warm sunset theme"
Response:
{
  "colors": {
    "primary": "#f97316",
    "secondary": "#f43f5e",
    "accent": "#fb7185",
    "background": "#1c1917",
    "surface": "#292524",
    "text": "#fafaf9",
    "gradientFrom": "#f97316",
    "gradientTo": "#f43f5e"
  },
  "effects": {
    "useGradients": true,
    "gradientDirection": "to-br",
    "useOrb": true,
    "orbOpacity": 0.45
  }
}

Now generate a theme based on the user's request. Output ONLY valid JSON.
`.trim();
}
