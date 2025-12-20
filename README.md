# Lumina Engine

<div align="center">
  <br />
  <p>
    <b>The Declarative Presentation Engine for the Modern Web</b>
  </p>
  <p>
    Create cinematic, timeline-driven presentations using simple JSON and the full power of Vue 3 + GSAP.
  </p>
  <br />
</div>

**Lumina Engine** is a high-performance, drop-in library that turns declarative JSON definitions into GPU-accelerated, interactive slide decks. It is designed for developers who want to build immersive storytelling experiences without getting bogged down in animation logic.

## ✨ Features

- **� Declarative First**: Define your entire deck structure, content, and flow in a single JSON object.
- **🚀 Performance Core**: Built on Vue 3's Composition API for reactivity and GSAP for buttery smooth standard-compliant animations.
- **🎨 Cinematic Layouts**: Comes with 5+ responsive, production-ready layouts (`statement`, `timeline`, `features`, `half`, `steps`).
- **🛡️ Type Safe**: Written in 100% strict TypeScript.
- **🔌 Event Driven**: Hook into every slide change, interaction, and state update with a robust event system.
- **� Theming API**: Runtime CSS variable generation for instant branding (Dark/Light mode ready).

## 📦 Installation

```bash
npm install lumina-slides gsap
```

## ⚡ Quick Start

### 1. Initialize the Engine

Mount the engine to any DOM element.

```typescript
import { Lumina } from "lumina-slides";
import "lumina-slides/style.css";

const engine = new Lumina("#app", {
  theme: {
    colors: { primary: "#6366f1" }, // Customize your brand color
  },
});
```

### 2. Load Your Deck

Pass your declarative JSON structure to the `load` method.

```typescript
engine.load({
  meta: { title: "Project Roadmap" },
  slides: [
    {
      type: "statement",
      title: "Welcome to Lumina",
      subtitle: "Declarative presentations for the web.",
      meta: { orbColor: "#4f46e5" },
    },
    {
      type: "timeline",
      title: "History",
      timeline: [
        { date: "2023", title: "Inception", description: "Project started." },
        { date: "2024", title: "Launch", description: "v1.0 Release." },
      ],
    },
  ],
});
```

## 🧩 Built-in Layouts

Lumina comes with a set of "Pro" layouts out of the box. Just specify the `type` property in your slide object.

| Type            | Description                                                | Key Props                          |
| :-------------- | :--------------------------------------------------------- | :--------------------------------- |
| **`statement`** | High-impact text focus. Perfect for covers and quotes.     | `title`, `subtitle`, `tag`         |
| **`half`**      | Split layout with image on one side, content on the other. | `image`, `imageSide`, `paragraphs` |
| **`features`**  | Responsive grid of cards with icons.                       | `features` (array of cards)        |
| **`timeline`**  | Vertical interactive chronological list.                   | `timeline` (array of events)       |
| **`steps`**     | Sequential process steps with numbers.                     | `steps` (array of steps)           |

## 📚 API Reference

### `engine.on(event, callback)`

Listen to engine events to build custom navigational controls or analytics.

```typescript
// Slide Change Event
engine.on("slideChange", (payload) => {
  console.log(`Current Slide Index: ${payload.index}`);
  console.log("Active Slide Data:", payload.slide);
});

// User Actions (Buttons, Links)
engine.on("action", (payload) => {
  if (payload.type === "cta-click") {
    window.open(payload.value, "_blank");
  }
});
```

### Configuration Options

Pass these to the constructor `new Lumina(selector, options)`.

```typescript
interface LuminaOptions {
  /** Enable infinite looping of slides */
  loop?: boolean;
  /** Enable keyboard arrow navigation */
  keyboard?: boolean;
  /** UI Visibility Settings */
  ui?: {
    showProgressBar?: boolean;
    showControls?: boolean;
    showSlideCount?: boolean;
  };
  /** Animation Tunings */
  animation?: {
    stagger?: number; // Time between element entries
    durationIn?: number; // Slide entry speed
  };
}
```

## 📄 License

MIT
