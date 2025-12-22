# Lumina Engine

<div align="center">
  <br />
  <p>
    <b>The Interface Layer for the Agentic Era</b>
  </p>
    The first presentation engine designed for <b>LLMs</b>. Turn JSON into cinematic, interactive experiences.
  </p>
  <br />

  <img src="https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/demo.gif" alt="Lumina Engine Demo" width="100%" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" />

  <br />
</div>

**Lumina Engine** is a high-performance, declarative library that enables AI agents and LLMs to generate professional, interactive UI and slide decks by simply outputting JSON. It bridges the gap between text generation and visual storytelling, offering deterministic, GPU-accelerated rendering without the hallucination of pixel-generation.

> [!IMPORTANT] > **Building an Agent?**
> Read the complete **[Lumina for Agents Guide](./AGENTS.md)** to learn about Streaming, Auto-Layouts, and Token Optimization.

## 🤖 Why for LLMs?

Traditional UI libraries require understanding complex component trees, CSS modules, and state management. Lumina abstracts this into a **single, flat JSON schema**.

- **structured_output Friendly**: Designed to match the capabilities of models like GPT-4o, Claude 3.5 Sonnet, and Gemini Pro.
- **Hallucination Proof**: The renderer handles the "how", the LLM only cares about the "what".
- **Zero Config**: No build steps or bundler configuration needed to generate visual content dynamically.

## ✨ Features

- **📄 JSON-First Architecture**: Define entire decks, including content, styling, and flow, in one serializable object.
- **⚡ Reactive & Performant**: Built on Vue 3 + GSAP for 60fps animations even on mobile.
- **🎨 Cinematic Layouts**: "Pro" layouts (`timeline`, `statement`, `features`) that look good by default.
- **🛡️ Type Safe**: Full TypeScript support with exported types for your AI system prompts.
- **🔌 Event Driven**: Hook into every user interaction to feed state back to your agent.

## 📦 Installation

```bash
npm install lumina-slides gsap
```

## ⚡ Quick Start for Agents

### 1. The "System Prompt"

Your agent generates this structure:

```json
{
  "meta": { "title": "Quarterly Review" },
  "slides": [
    {
      "type": "statement",
      "title": "Q4 Performance",
      "subtitle": "Exceeding expectations.",
      "meta": { "variant": "gradient" }
    },
    {
      "type": "features",
      "title": "Key Metrics",
      "features": [
        {
          "title": "Growth",
          "description": "+145% YoY",
          "icon": "trending-up"
        },
        { "title": "Retention", "description": "98% Renewal", "icon": "users" }
      ]
    }
  ]
}
```

### 2. The Engine Renders

You pass that JSON directly to Lumina.

```typescript
import { Lumina } from "lumina-slides";
import "lumina-slides/style.css";

const engine = new Lumina("#app");

// Imagine this comes from your LLM stream
const llmOutput = await agent.generatePresentation();

engine.load(llmOutput);
```

## 🧩 Built-in Layouts

Lumina provides semantic layout types that LLMs can easily select based on context.

### **Statement**

Big ideas, quotes, titles. Great for "cover" slides.

[![Statement Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-statement.png)](public/layout-statement.json)
[View JSON Source](public/layout-statement.json)

### **Half**

Comparisons, text + image context.

[![Half Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-half.png)](public/layout-half.json)
[View JSON Source](public/layout-half.json)

### **Features**

Lists of benefits, KPIs, or grid items.

[![Features Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-features.png)](public/layout-features.json)
[View JSON Source](public/layout-features.json)

### **Timeline**

Chronological events, roadmaps, history.

[![Timeline Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-timeline.png)](public/layout-timeline.json)
[View JSON Source](public/layout-timeline.json)

### **Steps**

Tutorials, flows, numbered processes.

[![Steps Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-steps.png)](public/layout-steps.json)
[View JSON Source](public/layout-steps.json)

### **Embedded (Widget Mode)**

Slides constrained to a container, perfect for dashboards.

[![Embedded Layout](https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/layout-embedded.png)](public/layout-embedded.json)
[View JSON Source](public/layout-embedded.json)

## 📚 API Reference

### `engine.load(deck: DeckDefinition)`

Loads a new deck. This is reactive - calling it again with new data (e.g. streaming chunks) will update the view seamlessly.

### `engine.on(event, callback)`

Listen to interactions to create loops where the user's action prompts the AI for the next step.

```typescript
engine.on("action", (payload) => {
  // Feed user interaction back to the AI
  agent.send(`User clicked on button: ${payload.value}`);
});
```

## 📄 License

MIT
