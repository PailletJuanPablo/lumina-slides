# Lumina Agent Integration Guide

<div align="center">

**Build AI-powered presentations with Lumina**

Turn your LLM's JSON output into beautiful, animated slide decks.

</div>

---

## Overview

Lumina is designed as a **display layer** for AI agents. Your agent generates simple JSON, and Lumina handles:

- ✨ **Rendering** — Beautiful, responsive layouts
- 🎬 **Animations** — 60fps GPU-accelerated transitions
- 🎨 **Theming** — 8 built-in themes, 80+ CSS variables, fully customizable colors/effects/components
- 📊 **Charts** — Built-in Chart.js integration
- 🔄 **Streaming** — Real-time updates as content generates

---

## Quick Links

| Resource                                                                            | Description                                    |
| :---------------------------------------------------------------------------------- | :--------------------------------------------- |
| 📝 **[System Prompt](https://pailletjuanpablo.github.io/lumina-slides/prompt.txt)** | Copy-paste this into your LLM's system message |
| 🎮 **[Playground](https://pailletjuanpablo.github.io/lumina-slides/#/playground)**  | Test JSON output live in your browser          |
| 📖 **[Full Docs](https://pailletjuanpablo.github.io/lumina-slides/)**               | Complete documentation with examples           |
| 🔧 **[API Reference](https://pailletjuanpablo.github.io/lumina-slides/#/api)**      | TypeDoc-generated API documentation            |

---

## The Integration Loop

```
┌─────────────┐     JSON      ┌─────────────┐     Render     ┌─────────────┐
│   AI Agent  │ ─────────────▶│   Lumina    │ ──────────────▶│    User     │
│  (GPT, etc) │               │   Engine    │                │   Screen    │
└─────────────┘               └─────────────┘                └─────────────┘
       ▲                                                            │
       │                         Events                             │
       └────────────────────────────────────────────────────────────┘
```

1. **User** sends a prompt ("Show me Q3 results")
2. **Agent** generates declarative JSON
3. **Lumina** renders the presentation
4. **User** interacts (clicks, navigates)
5. **Lumina** emits events back to your app
6. **App** feeds context to agent for next turn

---

## Setting Up Your LLM

### Option 1: Use the Ready-Made Prompt (Recommended)

Download and use our optimized system prompt:

```
https://pailletjuanpablo.github.io/lumina-slides/prompt.txt
```

This prompt includes:

- Complete JSON schema for all slide types
- Token-saving aliases
- Best practices for generating slides
- Example outputs

### Option 2: Programmatic Generation

```typescript
import { generateSystemPrompt } from "lumina-slides";

const systemMessage = generateSystemPrompt({
  mode: "reasoning", // 'fast' | 'reasoning'
  includeSchema: true,
});

// Use systemMessage in your OpenAI/Anthropic/etc. call
```

---

## Token Optimization

Lumina supports **short aliases** to reduce token usage by ~30%:

### Property Aliases

| Property    | Full Name     | Alias         |
| :---------- | :------------ | :------------ |
| Title       | `title`       | `t`           |
| Subtitle    | `subtitle`    | `s`           |
| Description | `description` | `d` or `desc` |
| Background  | `background`  | `bg`          |
| Image       | `image`       | `img`         |
| Features    | `features`    | `fs`          |
| Steps       | `steps`       | `st`          |
| Timeline    | `timeline`    | `tl`          |

### Example: Standard vs Optimized

**Standard (42 tokens):**

```json
{
  "type": "statement",
  "title": "Analysis Complete",
  "subtitle": "Here are the results",
  "background": "dark"
}
```

**Optimized (28 tokens):**

```json
{
  "type": "statement",
  "t": "Analysis Complete",
  "s": "Here are the results",
  "bg": "dark"
}
```

### Color & Icon Shortcuts

```json
{ "icon": "i:c", "color": "c:s" }
```

| Type  | Shortcut | Meaning   |
| :---- | :------- | :-------- |
| Color | `c:p`    | Primary   |
| Color | `c:s`    | Success   |
| Color | `c:d`    | Danger    |
| Icon  | `i:s`    | Star      |
| Icon  | `i:c`    | Checkmark |
| Icon  | `i:a`    | Arrow     |
| Icon  | `i:u`    | Users     |

---

## Streaming Support

For instant perceived response, stream the JSON as it generates:

```typescript
import { Lumina, parsePartialJson } from "lumina-slides";

const engine = new Lumina("#app");
let buffer = "";

// In your stream handler
async function onChunk(chunk: string) {
  buffer += chunk;

  // Parse incomplete JSON safely
  const validJson = parsePartialJson(buffer);

  // Lumina diffs changes efficiently
  if (validJson) {
    engine.load(validJson);
  }
}
```

Lumina will render partial content as it arrives, creating a "typing" effect.

---

## Handling User Interactions

### Listening to Events

```typescript
// User clicked a button
engine.on("action", (payload) => {
  console.log(payload);
  // { type: 'button', value: 'learn_more', label: 'Learn More' }

  // Feed back to agent
  chatHistory.push({
    role: "user",
    content: `User clicked: "${payload.label}"`,
  });
});

// User changed slides
engine.on("slideChange", (data) => {
  console.log(`Now on slide ${data.index}: ${data.slide.type}`);
});
```

### Exporting State for Context

```typescript
const state = engine.exportState();
// {
//   currentSlideIndex: 2,
//   currentSlideType: "features",
//   totalSlides: 5
// }

// Add to next prompt
const context = `User is viewing slide ${state.currentSlideIndex + 1} of ${
  state.totalSlides
} (${state.currentSlideType} layout).`;
```

---

## Example: Full Integration

```typescript
import { Lumina, parsePartialJson } from "lumina-slides";
import "lumina-slides/style.css";

// 1. Initialize engine
const engine = new Lumina("#presentation", {
  theme: "midnight",
  loop: true,
});

// 2. Handle user actions
engine.on("action", async (payload) => {
  await callAgent(`User clicked: ${payload.value}`);
});

// 3. Stream from your LLM
async function callAgent(userMessage: string) {
  let buffer = "";

  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    stream: true,
    messages: [
      { role: "system", content: LUMINA_SYSTEM_PROMPT },
      { role: "user", content: userMessage },
    ],
  });

  for await (const chunk of stream) {
    buffer += chunk.choices[0]?.delta?.content || "";
    const json = parsePartialJson(buffer);
    if (json) engine.load(json);
  }
}

// 4. Start
callAgent("Create a presentation about our Q3 results");
```

---

## Troubleshooting

### JSON Parse Errors

Use `parsePartialJson()` — it handles incomplete/malformed JSON gracefully.

### Slides Not Updating

Ensure you're calling `engine.load()` with the complete deck structure:

```json
{
  "meta": { "title": "My Deck" },
  "slides": [...]
}
```

### Performance Issues

- Use aliases to reduce token count
- Limit slides to 10-15 per deck
- Use `compact: true` for embedded widgets

---

<div align="center">

**Need help?** [Open an issue](https://github.com/PailletJuanPablo/lumina-slides/issues) or check the [full documentation](https://pailletjuanpablo.github.io/lumina-slides/).

</div>
