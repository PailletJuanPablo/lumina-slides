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
    SlideFlex,
    SlideChart,
    SlideGeneric,
    SlideCustom,
    FeatureItem,
    StepItem,
    TimelineItem,
    SlideMeta,
    LuminaEventType,
    SlideChangePayload,
    ActionPayload,
    LuminaUIOptions,
    LuminaAnimationOptions,
    LuminaKeyBindings,
    // Chart Types
    ChartType,
    ChartData,
    ChartDataset,
    // Flex Types
    FlexElement,
    FlexChildElement,
    FlexSize,
    SpacingToken,
    VAlign,
    HAlign,
    TextAlign,
    FlexElementImage,
    FlexElementContent,
    FlexElementTitle,
    FlexElementText,
    FlexElementBullets,
    FlexElementOrdered,
    FlexElementButton,
    FlexElementTimeline,
    FlexElementStepper,
    FlexElementSpacer,
    // Speaker Notes
    SpeakerSyncPayload
} from './core/types';

// Events
export { bus, EventBus, type Handler } from './core/events';

// Speaker Notes
export { SpeakerChannel, type MessageHandler } from './core/speaker-channel';

export { default as LuminaDeck } from './components/LuminaDeck.vue';
import './style/main.css';

