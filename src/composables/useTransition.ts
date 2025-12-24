import { onMounted, onUnmounted, nextTick, inject, type Ref } from 'vue';
import gsap from 'gsap';
import { StoreKey } from '../core/store';

/**
 * REUSABLE TRANSITION SYSTEM
 * 
 * Automatically applies entrance animations to elements with 'reveal-*' classes.
 * Reads global configuration from the store to determine timing, ease, and stagger.
 * 
 * @param containerRef - Vue Ref pointing to the slide's root element.
 * @param onComplete - Optional callback fired when the entrance animation finishes.
 */
export function useTransition(containerRef: Ref<HTMLElement | null>, onComplete?: () => void) {
    const store = inject(StoreKey);
    let ctx: gsap.Context | null = null;

    const animateIn = () => {
        if (!containerRef.value || !store) return;

        ctx?.revert(); // Cleanup prev context

        const { enabled, type, durationIn, stagger, ease } = store.state.options.animation || {};

        // 1. ANIMATION DISABLED
        if (enabled === false) {
            // Force visibility immediately if animations are globally off
            gsap.set(containerRef.value.querySelectorAll('.reveal-up, .reveal-zoom, .reveal-content > *, .reveal-card, .reveal-img'), {
                opacity: 1, y: 0, scale: 1, visibility: 'visible'
            });
            return;
        }

        // 2. ANIMATION CONTEXT
        ctx = gsap.context(() => {
            const el = containerRef.value!;

            // --- PRESET LOGIC ---
            // 'fade': Simple opacity
            // 'slide': Stronger Y movement
            // 'zoom': Scale effects
            // 'cascade': The sophisticated default

            const isFade = type === 'fade';
            const isSlide = type === 'slide';
            const isZoom = type === 'zoom';

            // Initial Properties
            const initY = isFade ? 0 : (isSlide ? 80 : 40);
            const initScale = isZoom ? 0.8 : (type === 'cascade' ? 0.95 : 1);

            // Set Initial States
            // Set Initial States (Only if elements exist to avoid warnings)
            if (el.querySelector('.reveal-up')) gsap.set('.reveal-up', { y: initY, opacity: 0 });
            if (el.querySelector('.reveal-zoom')) gsap.set('.reveal-zoom', { scale: initScale, opacity: 0 });
            if (el.querySelector('.reveal-content > *')) gsap.set('.reveal-content > *', { y: isFade ? 0 : 30, opacity: 0 });
            if (el.querySelector('.reveal-card')) gsap.set('.reveal-card', { y: isFade ? 0 : 50, opacity: 0, scale: initScale });
            if (el.querySelector('.reveal-img')) gsap.set('.reveal-img', { scale: 1.1, opacity: 0 });

            // Timeline
            const tl = gsap.timeline({
                defaults: {
                    ease: ease || 'power3.out',
                    duration: durationIn || 0.8
                },
                onComplete
            });

            // Image (Always dramatic unless fade)
            if (el.querySelector('.reveal-img')) {
                tl.to('.reveal-img', {
                    scale: 1,
                    opacity: 1,
                    duration: (durationIn || 1) * 1.2,
                    ease: 'expo.out'
                }, 0);
            }

            const baseDur = durationIn || 0.8;
            const staggerTime = stagger || 0.1;

            // Cards
            if (el.querySelectorAll('.reveal-card').length) {
                tl.to('.reveal-card', {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: baseDur,
                    stagger: staggerTime,
                    ease: isSlide ? 'expo.out' : 'back.out(1.2)'
                }, 0.2);
            }

            // Content Stagger
            const content = el.querySelectorAll('.reveal-content > *');
            if (content.length) {
                tl.to(content, {
                    y: 0,
                    opacity: 1,
                    duration: baseDur,
                    stagger: staggerTime / 2
                }, 0.3);
            }

            // Generic Reveal Up
            if (el.querySelectorAll('.reveal-up').length) {
                tl.to('.reveal-up', {
                    y: 0,
                    opacity: 1,
                    duration: baseDur,
                    stagger: staggerTime
                }, 0.2);
            }

            // Zoom
            if (el.querySelector('.reveal-zoom')) {
                tl.to('.reveal-zoom', {
                    scale: 1,
                    opacity: 1,
                    duration: baseDur * 1.2,
                    ease: 'expo.out'
                }, 0.1);
            }

        }, containerRef);
    };

    onMounted(() => {
        nextTick(() => {
            animateIn();
        });
    });

    onUnmounted(() => {
        ctx?.revert();
    });

    return { animateIn };
}
