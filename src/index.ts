export { Lumina } from './core/Lumina';

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
    SlideCustom,
    FeatureItem,
    StepItem,
    SlideMeta,
    LuminaEventType,
    SlideChangePayload,
    ActionPayload,
    LuminaUIOptions,
    LuminaAnimationOptions,
    LuminaKeyBindings,
    // Speaker Notes
    SpeakerSyncPayload
} from './core/types';

// Events
export { bus } from './core/events';

// Speaker Notes
export { SpeakerChannel } from './core/speaker-channel';

export { default as LuminaDeck } from './components/LuminaDeck.vue';
import './style/main.css';

