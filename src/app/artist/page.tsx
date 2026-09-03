import type { Metadata } from "next";

import { ArtistPortfolio } from "@/components/sections/artist-portfolio";
import { ArtistProfile } from "@/components/sections/artist-profile";
import { ARTIST } from "@/lib/data";

export const metadata: Metadata = {
  title: `${ARTIST.name} — NFT Marketplace`,
  description: `${ARTIST.bio} Browse NFTs created, owned and collected by ${ARTIST.name}.`,
};

export default function ArtistPage() {
  return (
    <main className="flex-1">
      <ArtistProfile />
      <ArtistPortfolio />
    </main>
  );
}
