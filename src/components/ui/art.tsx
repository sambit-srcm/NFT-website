import { cn } from "@/lib/cn";

/**
 * Placeholder artwork.
 *
 * The kit ships without bitmap artwork, so every tile renders the same
 * placeholder image until real assets exist.
 */

const PLACEHOLDER = "/images/placeholder.svg";

export function Art({
  seed,
  className,
  rounded = "rounded-[20px]",
}: {
  seed: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      role="presentation"
      data-seed={seed}
      className={cn("relative overflow-hidden", rounded, className)}
      style={{
        backgroundImage: `url(${PLACEHOLDER})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

/** Circular variant used for creator and collection avatars. */
export function Avatar({ seed, className }: { seed: string; className?: string }) {
  return <Art seed={seed} rounded="rounded-full" className={className} />;
}
