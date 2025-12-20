export { Lumina } from './core/Lumina';

// Types
export type {
    LuminaOptions,
    Deck,
    BaseSlideData as SlideData,
    ThemeConfig,
    LuminaEventMap,
    // Detailed Types for Docs
    DeckMeta,
    // Slide Interfaces
    SlideStatement,
    SlideFeatures,
    SlideHalf,
    SlideTimeline,
    SlideSteps,
    FeatureItem,
    StepItem,
    SlideMeta,
    LuminaEventType,
    SlideChangePayload,
    ActionPayload,
    LuminaUIOptions,
    LuminaAnimationOptions,
    LuminaKeyBindings
} from './core/types';

// Events
export { bus } from './core/events';
export { default as LuminaDeck } from './components/LuminaDeck.vue';
import './style/main.css';
