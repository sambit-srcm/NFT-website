import { cn } from "@/lib/cn";

/**
 * Deterministic placeholder artwork.
 *
 * The kit ships with bitmap artwork we do not have, so each tile derives a
 * stable gradient from its seed instead. Same seed always renders the same
 * artwork, which keeps server and client markup identical and avoids a
 * hydration mismatch. Swap this for `next/image` once real assets exist.
 */

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function Art({
  seed,
  className,
  rounded = "rounded-[20px]",
}: {
  seed: string;
  className?: string;
  rounded?: string;
}) {
  const h = hash(seed);
  const hueA = h % 360;
  const hueB = (hueA + 40 + (h % 80)) % 360;
  const angle = h % 180;

  return (
    <div
      role="presentation"
      className={cn("relative overflow-hidden", rounded, className)}
      style={{
        backgroundImage: [
          `radial-gradient(circle at ${20 + (h % 40)}% ${25 + (h % 30)}%, hsl(${hueA} 85% 68% / 0.95), transparent 55%)`,
          `radial-gradient(circle at ${70 - (h % 30)}% ${75 - (h % 25)}%, hsl(${hueB} 80% 60% / 0.9), transparent 60%)`,
          `linear-gradient(${angle}deg, hsl(${hueA} 45% 22%), hsl(${hueB} 50% 30%))`,
        ].join(", "),
      }}
    />
  );
}

/** Circular variant used for creator and collection avatars. */
export function Avatar({ seed, className }: { seed: string; className?: string }) {
  return <Art seed={seed} rounded="rounded-full" className={className} />;
}
