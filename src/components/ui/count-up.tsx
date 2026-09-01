"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts from zero to `value` the first time it scrolls into view.
 *
 * The finished value is rendered in the markup, so it is correct before
 * hydration and for anyone with JavaScript disabled. The animation then writes
 * to the text node directly rather than through state, which avoids a re-render
 * on every frame. Under reduced motion nothing animates at all.
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
