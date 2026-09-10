import Image from "next/image";

import { cn } from "@/lib/cn";
import { artSrc, avatarSrc } from "@/lib/images";

const PLACEHOLDER = "/images/placeholder.svg";

/** Artwork tile. Renders the matching image for a seed, or a placeholder if there isn't one. */

function Tile({
  seed,
  src,
  className,
  rounded,
  sizes,
}: {
  seed: string;
  src: string | undefined;
  className?: string;
  rounded: string;
  sizes: string;
}) {
  return (
    <div
      role="presentation"
      data-seed={seed}
      className={cn("relative overflow-hidden", rounded, className)}
    >
      <Image src={src ?? PLACEHOLDER} alt="" fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function Art({
  seed,
  className,
  rounded = "rounded-[20px]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  seed: string;
  className?: string;
  rounded?: string;
  sizes?: string;
}) {
  return (
    <Tile seed={seed} src={artSrc(seed)} className={className} rounded={rounded} sizes={sizes} />
  );
}

export function Avatar({ seed, className }: { seed: string; className?: string }) {
  return (
    <Tile
      seed={seed}
      src={avatarSrc(seed)}
      className={className}
      rounded="rounded-full"
      sizes="120px"
    />
  );
}
