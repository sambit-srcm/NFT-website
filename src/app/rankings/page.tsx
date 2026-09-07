import type { Metadata } from "next";

import { RankingsBoard } from "@/components/sections/rankings-board";

export const metadata: Metadata = {
  title: "Top Creators — NFT Marketplace",
  description: "Check out top ranking NFT artists by volume, sales and change on the marketplace.",
};

export default function RankingsPage() {
  return (
    <main className="flex-1">
      <RankingsBoard />
    </main>
  );
}
