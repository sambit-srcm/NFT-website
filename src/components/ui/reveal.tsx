"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before this element animates. */
  delay?: number;
  variants?: Variants;
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
};

/**
 * Animates its children in when scrolled into view.
 *
 * When the visitor prefers reduced motion the content renders in its final
 * state immediately rather than animating, so nothing is hidden from them.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
