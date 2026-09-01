import { Hero } from "@/components/sections/hero";
import { TrendingCollection } from "@/components/sections/trending-collection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrendingCollection />
    </main>
  );
}
