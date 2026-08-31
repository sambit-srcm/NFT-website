import { Art, Avatar } from "@/components/ui/art";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { COLLECTIONS } from "@/lib/data";

export function TrendingCollection() {
  return (
    <section id="marketplace" className="py-section">
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
              <Art seed={collection.id} className="aspect-[330/330] w-full" />

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Art seed={`${collection.id}-a`} className="aspect-square w-full" />
                <Art seed={`${collection.id}-b`} className="aspect-square w-full" />
                <div className="bg-brand font-display grid aspect-square w-full place-items-center rounded-[20px] text-lg font-semibold sm:text-xl">
                  {collection.more}+
                </div>
              </div>

              <h3 className="font-display mt-4 text-xl font-semibold sm:text-[22px]">
                {collection.name}
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <Avatar seed={collection.creator} className="size-6" />
                <span className="text-ink-subtle">{collection.creator}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
