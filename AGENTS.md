# Building Agents with Lumina: Integration Guide

This guide describes how to integrate **Lumina Engine** with an AI Agent (powered by OpenAI, Anthropic, Gemini, etc.).

Lumina is designed to be the "Display Implementation" for your agent. Your agent generates JSON, and Lumina renders it.

## 1. The Core Loop

The basic architecture of a Lumina-powered Agent application is:

1.  **User** sends a prompt ("Show me Q3 financial results").
2.  **Agent** generates a declarative JSON structure (The "Deck").
3.  **App** feeds this JSON to `Lumina.load(json)`.
4.  **Lumina** renders the UI.
5.  **User** clicks a button or changes slide.
6.  **Lumina** emits an event.
7.  **App** captures event and feeds it back to **Agent** as context for the next turn.

---

## 2. System Prompting

The key to high-quality output is a good System Prompt. You need to teach the LLM the schema.

### Recommended System Instructions

We recommend dynamically generating your system prompt using the helper, or copying the structure below.

```typescript
// Option A: Use the helper (Recommended)
import { generateSystemPrompt } from "lumina-slides/core";

const systemMessage = generateSystemPrompt({
  mode: "reasoning", // 'fast' | 'reasoning'
  includeSchema: true,
});
```

### Manual Prompt Structure

If you are manually crafting the prompt, ensure you include:

1.  **Role**: "You are a UI Generator. You output JSON only."
2.  **Schema Definition**: Briefly describe the available `type` values (`statement`, `timeline`, `features`, `flex`, etc.).
3.  **Alias Usage**: Tell the model to use aliases (`t`, `s`, `desc`) to save tokens.

---

## 3. Token Optimization (Aliases)

Lumina supports (and encourages) the use of "Aliases" — short keys that map to full property names. This significantly reduces token usage and generation latency.

| Property        | Full Name     | Alias        |
| :-------------- | :------------ | :----------- |
| **Title**       | `title`       | `t`          |
| **Subtitle**    | `subtitle`    | `s`          |
| **Description** | `description` | `d` / `desc` |
| **Background**  | `background`  | `bg`         |
| **Image**       | `image`       | `img`        |
| **Features**    | `features`    | `fs`         |
| **Steps**       | `steps`       | `st`         |
| **Timeline**    | `timeline`    | `tl`         |

**Example Output:**

```json
{
  "type": "statement",
  "t": "Analysis Complete",
  "s": "Here are the results found.",
  "bg": "dark"
}
```

---

## 4. Streaming & Partial Parsing

For a perceived "instant" response, you should stream the Layout to the engine as it is being generated.

Lumina provides a `parsePartialJson` utility that can take a broken/incomplete JSON string and return a valid object (filling missing closing braces, quotes, etc.).

```typescript
import { parsePartialJson } from "lumina-slides/utils";

// In your LLM stream handler
async function onStreamChunk(chunk) {
  fullString += chunk;

  // 1. Repair the broken JSON
  const validJson = parsePartialJson(fullString);

  // 2. Update the engine immediately
  // Lumina diffs the changes, so this is cheap.
  engine.load(validJson);
}
```

---

## 5. Handling User Interaction (The Feedback Loop)

To make your presentation "Agentic", it needs to respond to the user.

### Listening to Actions

When a user clicks a button in a `features` list or a `flex` button, Lumina emits an `action` event.

```typescript
engine.on("action", (payload) => {
  // payload: { type: 'button', value: 'view_details', label: 'More Info' }

  // Send this back to the Agent!
  chatHistory.push({
    role: "user",
    content: `User clicked button "${payload.label}" with value "${payload.value}"`,
  });

  generateNextResponse();
});
```

### Exporting State

If the user navigates around, the Agent needs to know where they are.

```typescript
const state = engine.exportState();
// Returns:
// {
//   currentSlideIndex: 2,
//   currentSlideType: "features",
//   ...
// }
```

Include this state in your next prompt so the Agent knows context: _"The user is currently looking at slide 3 (Features)."_

---

## 6. Compression Dictionary

To further save tokens, Lumina recognizes standardized short-codes for common values.

**Colors:**

- `c:p` -> Primary Color
- `c:s` -> Success Color
- `c:d` -> Danger/Error Color

**Icons:**

- `i:s` -> Star
- `i:u` -> Users
- `i:a` -> Arrow Right
- `i:c` -> Checkmark

**Example:**

```json
{ "icon": "i:c", "meta": { "color": "c:s" } }
```
