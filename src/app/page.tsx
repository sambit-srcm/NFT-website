import { BrowseCategories } from "@/components/sections/browse-categories";
import { Hero } from "@/components/sections/hero";
import { TopCreators } from "@/components/sections/top-creators";
import { TrendingCollection } from "@/components/sections/trending-collection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
    </main>
  );
}
