import type { Metadata } from "next";

import { MoreFromArtist } from "@/components/sections/more-from-artist";
import { NftDetail } from "@/components/sections/nft-detail";
import { NFT_DETAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: `${NFT_DETAIL.name} — NFT Marketplace`,
  description: NFT_DETAIL.collection,
};

export default function NftPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <NftDetail />
      <MoreFromArtist />
    </main>
  );
}
