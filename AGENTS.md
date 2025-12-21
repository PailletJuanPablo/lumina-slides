# Lumina for Agents: The Complete Guide

Lumina is the first presentation engine built from the ground up for **Agentic AI**. It allows LLMs (Large Language Models) to control a high-performance, cinematic UI using simple, deterministic JSON.

This guide covers everything you need to build a "Presentation Agent" or "UI Generator" using Lumina.

---

## 1. The Core Philosophy

**"Fuzzy JSON in, 60fps UI out."**

Agents struggle with strict pixel-perfect CSS or complex component trees. Lumina solves this by exposing a **Semantic JSON API**.

- **Role of the Agent**: Decide _what_ to show (Content + Intent).
- **Role of Lumina**: Decide _how_ to show it (Layout + Animation + Typography).

---

## 2. The Protocol (JSON Schema)

Lumina accepts a flat standard JSON structure. It features "Fuzzy Validation" (autocorrection) and "Hybrid Aliases" (token saving).

### 2.1 Standard Structure

```typescript
interface Deck {
  meta: { title: string; theme?: string };
  slides: Slide[];
}
```

### 2.2 Token-Optimized Aliases

To save tokens, you can use these short-codes. The engine normalizes them automatically.

| Field           | Alias       | Target        |
| :-------------- | :---------- | :------------ |
| **Title**       | `t`         | `title`       |
| **Subtitle**    | `s`         | `subtitle`    |
| **Description** | `d`, `desc` | `description` |
| **Image**       | `img`       | `image`       |
| **Background**  | `bg`        | `background`  |
| **Timeline**    | `tl`        | `timeline`    |
| **Features**    | `fs`        | `features`    |
| **Steps**       | `st`        | `steps`       |

**Example (Ultra-Low Token Usage):**

```json
{
  "type": "statement",
  "t": "Q3 Analysis",
  "s": "Growth is steady.",
  "meta": { "variant": "v:g" }
}
```

---

## 3. Runtime Features for Agents

### 3.1 Streaming Support (Real-time Generation)

Lumina includes a robust **Partial JSON Parser**. You can feed the raw string stream from OpenAI/Anthropic directly into the engine.

```typescript
import { parsePartialJson } from "lumina-slides/utils";

// As tokens arrive...
engine.load(parsePartialJson(incompleteString));
```

- **Ghost Loading**: If a slide is incomplete, Lumina shows a skeleton state automatically.
- **Debouncing**: Updates are throttled to 60fps to prevent layout thrashing.

### 3.2 Auto-Layout (`type: "auto"`)

If your Agent isn't sure which layout fits best, use `type: "auto"`. Lumina uses **Semantic Heuristics** to pick the best view:

- **Has Dates?** -> Selects `Timeline`.
- **Has Numbers/List?** -> Selects `Features`.
- **Has Image?** -> Selects `Half`.
- **Just Title?** -> Selects `Statement`.

It also avoids repetition (e.g., won't picking `Statement` 3 times in a row).

### 3.3 Diff Updates (Patching)

For corrections, you don't need to generate the whole deck again. Use the `patch` method.

```typescript
// Agent realizes it made a typo on Slide 2
engine.patch({
  slides: [
    {}, // Skip slide 0
    {}, // Skip slide 1
    { title: "Corrected Title" }, // Patch slide 2
  ],
});
```

---

## 4. The Feedback Loop

Lumina provides a standardized way to feed user interaction back to the Agent.

### `engine.exportState()`

Returns a snapshot of the session tailored for LLM context windows.

**Output Example:**

```json
{
  "status": "active",
  "narrative": "User is currently on slide 3. Session Flow: User clicked on 'Pricing' -> User Next -> User Back.",
  "engagementLevel": "High Engagement",
  "currentSlide": { "id": "pricing", "type": "features" }
}
```

**Usage Strategy:**

1. Agent generates Deck.
2. User interacts.
3. App calls `exportState()`.
4. App sends new prompt to Agent: _"Here is the user's current state. They seem stuck on the pricing slide. What should we show next?"_

---

## 5. System Prompts

We export a dynamic prompt generator to help you configure your Agent.

```typescript
import { generateSystemPrompt } from "lumina-slides/core";

const prompt = generateSystemPrompt({
  mode: "reasoning", // or 'fast'
  includeSchema: true,
});
```

### Modes

- **`fast`**: Instructions optimized for direct JSON output. minimal tokens.
- **`reasoning`**: Instructions to use `<thinking>` tags before JSON. Better for complex narratives.

---

## 6. Compression Dictionary

Use these short-values for common assets to save tokens.

- **Colors**: `c:p` (Primary), `c:s` (Success), `c:d` (Danger).
- **Icons**: `i:s` (Star), `i:u` (Users), `i:a` (Arrow).
- **Styles**: `v:g` (Gradient), `v:o` (Outlined).

**Example:**

```json
{ "icon": "i:s", "meta": { "color": "c:p" } }
```

---

## 7. Scenarios

### Scenario A: The "Co-Pilot" (Chat Interface)

1. User types "Make a slide about our Q3 goals".
2. Agent calls `generateSystemPrompt({ mode: 'fast' })`.
3. Agent streams JSON using `parsePartialJson`.
4. Lumina renders in real-time.

### Scenario B: The "Analyst" (Data -> Slides)

1. You feed a CSV/PDF to the Agent.
2. Agent uses `type: "auto"` for each row of data.
3. Lumina automatically chooses `Timeline` for dates and `Features` for financial stats.

### Scenario C: The "Interactive Tutor"

1. Agent generates a "Question" slide using `features`.
2. User clicks an option.
3. `engine.on('action')` captures the click.
4. App sends selection to Agent.
5. Agent `patch()`es the next slide to show specific feedback based on the answer.
