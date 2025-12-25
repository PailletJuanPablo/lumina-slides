# Lumina Engine

<div align="center">

  <img src="https://raw.githubusercontent.com/PailletJuanPablo/lumina-slides/main/public/demo.gif" alt="Lumina Engine Demo" width="100%" style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 80px -20px rgba(0,0,0,0.5);" />

  <br />
  <br />

  <h1>JSON-Driven Presentation Engine</h1>
  
  <p style="font-size: 1.2em; max-width: 700px;">
    A lightweight, framework-agnostic library that renders beautiful, animated slide decks from simple JSON. 
    Perfect for AI-generated content, dynamic dashboards, and interactive presentations.
  </p>
  
  <p style="font-size: 1em; max-width: 600px; opacity: 0.8;">
    ✨ <b>60fps animations</b> · 🎨 <b>6 built-in themes</b> · 📱 <b>Responsive</b> · ⚡ <b>Zero dependencies UI</b>
  </p>

  <p>
    <a href="#-quick-start"><strong>🚀 Quick Start</strong></a> · 
    <a href="#-layouts--gallery"><strong>🎨 Layout Gallery</strong></a> · 
    <a href="AGENTS.md"><strong>🤖 Agent Guide</strong></a>
  </p>

[![Version](https://img.shields.io/npm/v/lumina-slides?style=for-the-badge&color=2563EB)](https://www.npmjs.com/package/lumina-slides)
[![Downloads](https://img.shields.io/npm/dt/lumina-slides?style=for-the-badge&color=7C3AED)](https://www.npmjs.com/package/lumina-slides)
[![License](https://img.shields.io/github/license/PailletJuanPablo/lumina-slides?style=for-the-badge&color=DB2777)](https://github.com/PailletJuanPablo/lumina-slides/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/Written%20In-TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

<br />

---

## 🎨 Layouts & Gallery

Lumina includes **7 built-in layouts** ready to use. Just set the `type` property in your JSON:

| Layout        | Description                                                                                                                               | Visual Preview                                                                                                            |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Statement** | Bold title slides for introductions, transitions, or key messages. Supports title, subtitle, and background. <br><br> `type: "statement"` | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-statement.png" width="200" style="border-radius: 6px;"> |
| **Features**  | Auto-grid layout for showcasing features, benefits, or stats. Adapts columns based on item count. <br><br> `type: "features"`             | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-features.png" width="200" style="border-radius: 6px;">  |
| **Timeline**  | Horizontal timeline with snap navigation. Great for roadmaps, history, or process flows. <br><br> `type: "timeline"`                      | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-timeline.png" width="200" style="border-radius: 6px;">  |
| **Steps**     | Numbered step-by-step guide. Perfect for tutorials, instructions, or procedures. <br><br> `type: "steps"`                                 | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-steps.png" width="200" style="border-radius: 6px;">     |
| **Half**      | Split layout with image on one side, content on the other. Fully responsive. <br><br> `type: "half"`                                      | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-half.png" width="200" style="border-radius: 6px;">      |
| **Chart**     | Data visualization with Chart.js. Supports bar, line, pie, and doughnut charts. <br><br> `type: "chart"`                                  | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-chart.png" width="200" style="border-radius: 6px;">     |
| **Flex**      | Declarative auto-layout system. Define structure with rows, columns, and nested containers. <br><br> `type: "flex"`                       | <img src="https://pailletjuanpablo.github.io/lumina-slides/layout-flex-demo.png" width="200" style="border-radius: 6px;"> |

> [!TIP] > **Embedded Mode**: All layouts can be rendered in compact containers (dashboards, widgets) by using the `compact: true` option.

> [!TIP] > **See the Code**: Click on the dropdowns below to see the exact JSON used to generate these slides.

<details>
<summary><b>Example: Timeline JSON</b></summary>

```json
{
  "type": "timeline",
  "title": "Project History",
  "timeline": [
    {
      "date": "2023",
      "title": "Inception",
      "description": "The idea is born."
    },
    {
      "date": "2024",
      "title": "Launch",
      "description": "First public release."
    }
  ]
}
```

</details>

<details>
<summary><b>Example: Chart JSON</b></summary>

```json
{
  "type": "chart",
  "chartType": "bar",
  "title": "Quarterly Revenue",
  "data": {
    "labels": ["Q1", "Q2", "Q3", "Q4"],
    "datasets": [
      { "label": "Revenue", "values": [120, 150, 180, 220], "color": "c:p" }
    ]
  }
}
```

</details>

---

## 🎭 Theming

Lumina includes **6 beautiful theme presets** out-of-the-box. Just pass the name:

```typescript
const engine = new Lumina("#app", { theme: "ocean" });
```

| Theme        | Description                         | Preview                                                                                                                 |
| :----------- | :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **default**  | Clean blue on dark. Professional.   | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-default.png" width="180" style="border-radius: 6px;">  |
| **ocean**    | Cyan on slate. Calm and focused.    | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-ocean.png" width="180" style="border-radius: 6px;">    |
| **midnight** | Indigo on black. Bold and dramatic. | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-midnight.png" width="180" style="border-radius: 6px;"> |
| **forest**   | Emerald greens. Natural and fresh.  | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-forest.png" width="180" style="border-radius: 6px;">   |
| **cyber**    | Neon pink. Sci-fi futuristic.       | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-cyber.png" width="180" style="border-radius: 6px;">    |
| **latte**    | Light mode. Warm amber on cream.    | <img src="https://pailletjuanpablo.github.io/lumina-slides/theme-latte.png" width="180" style="border-radius: 6px;">    |

---

## ⚡ Quick Start

### 1. Install

```bash
npm install lumina-slides
```

### 2. Implementation

Lumina is a **Framework Agnostic** class. It mounts to any DOM node.

```typescript
import { Lumina } from "lumina-slides";
import "lumina-slides/style.css";

const engine = new Lumina("#app", {
  theme: "dark",
  loop: true,
});

// Load Data (From your API, or static)
engine.load({
  meta: { title: "Demo Deck" },
  slides: [
    { type: "statement", title: "Hello World", subtitle: "Powered by Lumina" },
  ],
});
```

---

## 🤖 Building Agents?

We have a dedicated guide for that.

> [!IMPORTANT] > **Read the [Agent Integration Guide](./AGENTS.md)**
>
> Learn about:
>
> - **Streaming**: How to pipe token streams directly into the engine.
> - **Aliases**: Improve latency by 30% using `t` instead of `title`.
> - **Feedback Loops**: How to let the AI know what the user is clicking.

### Token Optimization

Lumina includes a built-in normalizer. Your LLM can output "lazy" JSON to save money.

| Concept        | Standard     | Short Alias |
| :------------- | :----------- | :---------- |
| **Header**     | `title`      | `t`         |
| **Sub-Header** | `subtitle`   | `s`         |
| **Picture**    | `image`      | `img`       |
| **Background** | `background` | `bg`        |

---

## 📚 Documentation & Resources

| Resource                                                                                | Description                                                      |
| :-------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| 📖 **[Full Documentation](https://pailletjuanpablo.github.io/lumina-slides/)**          | Complete guides, examples, and live playground                   |
| 🔧 **[API Reference](https://pailletjuanpablo.github.io/lumina-slides/#/api)**          | TypeDoc-generated API docs with all methods and types            |
| 🤖 **[Agent Integration Guide](./AGENTS.md)**                                           | How to integrate Lumina with AI agents (OpenAI, Anthropic, etc.) |
| 📝 **[LLM System Prompt](https://pailletjuanpablo.github.io/lumina-slides/prompt.txt)** | Ready-to-use system prompt for your AI to generate slides        |
| 🎮 **[Live Playground](https://pailletjuanpablo.github.io/lumina-slides/#/playground)** | Try Lumina in your browser with live JSON editing                |

---

<div align="center">
  <p>Built with ❤️ by <a href="https://pailletjp.com">Juan Pablo Paillet</a>.</p>
</div>
