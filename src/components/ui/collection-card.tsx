import Link from "next/link";

import { Art, Avatar } from "@/components/ui/art";
import { squeezeEffect } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { Collection } from "@/lib/data";

/** Pictures open the NFT page. The creator name opens the artist page. */
export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div>
      <Link
        href="/nft"
        aria-label={`View ${collection.name} NFTs`}
        className={cn("block transition duration-200", squeezeEffect)}
      >
        <Art seed={collection.id} className="aspect-[330/330] w-full" />

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Art seed={`${collection.id}-a`} className="aspect-square w-full" />
          <Art seed={`${collection.id}-b`} className="aspect-square w-full" />
          <div className="bg-brand font-display grid aspect-square w-full place-items-center rounded-[20px] text-lg font-semibold sm:text-xl">
            {collection.more}+
          </div>
        </div>
      </Link>

      <h3 className="font-display mt-4 text-xl font-semibold sm:text-[22px]">{collection.name}</h3>
      <Link
        href="/artist"
        className="hover:text-brand mt-2 inline-flex items-center gap-3 transition-colors"
      >
        <Avatar seed={collection.creator} className="size-6" />
        <span className="text-ink-subtle">{collection.creator}</span>
      </Link>
    </div>
  );
}
