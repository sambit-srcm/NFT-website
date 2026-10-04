"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { SWAY } from "@/lib/motion";

/** Horizontal streaks, like brushed metal. No image file. */
const BRUSHED_METAL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.002 0.6' numOctaves='2' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 -0.05'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Soft patch of light that slides across the card. */
const LIGHT_PATCH = "linear-gradient(90deg, transparent, #000 45%, #000 55%, transparent)";

/** Card that slowly turns left and right. The light moves with it. Stays still if reduced motion is on. */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const rotateY = useMotionValue(SWAY.angle);
  const lightOpacity = useMotionValue(1);
  const range = [SWAY.angle, 0, -SWAY.angle];

  // Light starts on the left and slides right as the card turns.
  const lightPosition = useTransform(rotateY, range, ["-200% 0", "85% 0", "350% 0"]);
  // Left edge lights up facing you. Top edge lights up when turned away.
  // Both are fully faded at 0°, so a still card (reduced motion) shows neither.
  const leftEdge = useTransform(rotateY, [0, SWAY.angle], [0, 1]);
  const topEdge = useTransform(rotateY, [-SWAY.angle, 0], [0.8, 0]);

  useEffect(() => {
    if (reduceMotion) {
      rotateY.set(0);
      lightOpacity.set(0);
      return;
    }

    lightOpacity.set(1);
    const controls = animate(rotateY, -SWAY.angle, SWAY.transition);
    return () => controls.stop();
  }, [lightOpacity, reduceMotion, rotateY]);

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        data-testid="tilt-card"
        style={{ rotateY }}
        className="bg-surface relative overflow-hidden rounded-[20px] border border-white/5 shadow-2xl shadow-black/40"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <motion.div
            data-testid="tilt-card-light"
            className="absolute inset-0"
            style={{
              opacity: lightOpacity,
              backgroundImage: `${BRUSHED_METAL}, linear-gradient(rgb(255 255 255 / 0.05), rgb(255 255 255 / 0.05))`,
              // Stretch the streaks so the tile edges don't show.
              backgroundSize: "100% 100%",
              maskImage: LIGHT_PATCH,
              WebkitMaskImage: LIGHT_PATCH,
              maskSize: "70% 100%",
              WebkitMaskSize: "70% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: lightPosition,
              WebkitMaskPosition: lightPosition,
            }}
          />
          <motion.div
            className="absolute inset-y-4 left-0 w-0.5 bg-linear-to-b from-white/0 via-white/60 to-white/0"
            style={{ opacity: leftEdge }}
          />
          <motion.div
            className="absolute inset-x-4 top-0 h-0.5 bg-linear-to-r from-white/0 via-white/60 to-white/0"
            style={{ opacity: topEdge }}
          />
        </div>

        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
}
