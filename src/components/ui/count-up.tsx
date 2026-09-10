"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Shows the final number right away, so it still works without JavaScript,
 * then animates up to it once the page has loaded. Skips the animation
 * entirely for reduced motion.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduceMotion) return;

    node.textContent = `0${suffix}`;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
      onComplete: () => {
        node.textContent = `${value}${suffix}`;
      },
    });

    return () => {
      controls.stop();
      node.textContent = `${value}${suffix}`;
    };
  }, [inView, reduceMotion, value, suffix, duration]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
}
