import { BrowseCategories } from "@/components/sections/browse-categories";
import { DiscoverNfts } from "@/components/sections/discover-nfts";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TopCreators } from "@/components/sections/top-creators";
import { TrendingCollection } from "@/components/sections/trending-collection";
import { WeeklyDigest } from "@/components/sections/weekly-digest";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNfts />
      <HowItWorks />
      <WeeklyDigest />
    </main>
  );
}
