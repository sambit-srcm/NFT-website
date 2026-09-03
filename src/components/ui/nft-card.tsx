import Link from "next/link";

import { Art, Avatar } from "@/components/ui/art";
import type { Nft } from "@/lib/data";

/**
 * Single NFT tile.
 *
 * Extracted so the discover section and the artist portfolio render the same
 * card rather than each maintaining its own copy of the markup.
 */
export function NftCard({ nft }: { nft: Nft }) {
  return (
    <Link
      href="/nft"
      className="bg-surface hover:bg-surface-raised block h-full overflow-hidden rounded-[20px] transition-colors"
    >
      <Art seed={nft.id} rounded="rounded-none" className="aspect-square w-full" />
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold sm:text-[22px]">{nft.name}</h3>
        <div className="mt-2 flex items-center gap-3">
          <Avatar seed={nft.creator} className="size-6" />
          <span className="text-ink-subtle">{nft.creator}</span>
        </div>
        <dl className="mt-5 flex items-end justify-between">
          <div>
            <dt className="text-ink-subtle text-xs">Price</dt>
            <dd className="mt-1 font-mono text-sm">{nft.price.toFixed(2)} ETH</dd>
          </div>
          <div className="text-right">
            <dt className="text-ink-subtle text-xs">Highest Bid</dt>
            <dd className="mt-1 font-mono text-sm">{nft.highestBid.toFixed(2)} wETH</dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
