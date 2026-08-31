import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language for the landing page.
 *
 * Every section reuses these so the whole page eases identically instead of
 * each component inventing its own timing.
 */

export const EASE_OUT: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

/**
 * Parent variant for lists. Children animate in sequence rather than together,
 * which reads as deliberate instead of a single flash.
 */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Viewport config shared by scroll-triggered sections. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
