"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Makes every Framer Motion animation follow the device's "reduce motion" setting.
 * When it's on, things fade instead of sliding or moving. Components don't need
 * their own checks, so the server and browser always render the same first frame.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
