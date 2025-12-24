/**
 * SPEAKER NOTES ENTRY POINT
 * 
 * Standalone entry point for the speaker notes popup window.
 * Creates a minimal Vue app with only the SpeakerNotes component.
 * This keeps the popup bundle small and focused.
 */
import { createApp } from 'vue';
import LuminaSpeakerNotes from './components/LuminaSpeakerNotes.vue';

// Create and mount the speaker notes app
const app = createApp(LuminaSpeakerNotes);
app.mount('#speaker-notes');
