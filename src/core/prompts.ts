
import { getLuminaJsonSchema } from './schema';

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
`.trim();

/**
 * Feature: Dynamic Prompt Generator
 * Builds a system prompt customized for the specific needs of the session.
 */
export function generateSystemPrompt(options: SystemPromptOptions = {}) {
    const { mode = 'fast', includeSchema = true } = options;

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

    // 2. Schema Injection
    if (includeSchema) {
        const schema = JSON.stringify(getLuminaJsonSchema(), null, 2);
        sections.push(`
## Strict JSON Schema
You must respect this schema for every object:
${schema}
    `.trim());
    } else {
        // Simplified guide if schema is too heavy
        sections.push(LAYOUT_GUIDE);
    }

    // 3. Examples (Few-Shot)
    sections.push(EXAMPLES);

    return sections.join("\n\n---\n\n");
}
