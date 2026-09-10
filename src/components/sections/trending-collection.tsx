import { CollectionCard } from "@/components/ui/collection-card";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { COLLECTIONS } from "@/lib/data";

/** Homepage section showcasing the site's trending NFT collections. */
export function TrendingCollection() {
  return (
    <section id="marketplace" className="py-section scroll-mt-24 lg:scroll-mt-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Trending Collection"
            description="Checkout our weekly updated trending collection."
          />
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <Reveal as="li" key={collection.id} delay={index * 0.08}>
              <CollectionCard collection={collection} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
