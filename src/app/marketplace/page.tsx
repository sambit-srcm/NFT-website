import type { Metadata } from "next";

import { MarketplaceBrowser } from "@/components/sections/marketplace-browser";

export const metadata: Metadata = {
  title: "Browse Marketplace — NFT Marketplace",
  description: "Browse through more than 50k NFTs from over 20k artists on the marketplace.",
};

export default function MarketplacePage() {
  return (
    <main className="flex-1">
      <MarketplaceBrowser />
    </main>
  );
}
