import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { Reveal } from "@/components/ui/reveal";
import { MORE_FROM_ARTIST } from "@/lib/data";

export function MoreFromArtist() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading title="More from this artist" />
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_FROM_ARTIST.map((nft, index) => (
            <Reveal as="li" key={nft.id} delay={index * 0.08}>
              <NftCard nft={nft} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <Button href="/artist" variant="outline" fullWidth className="sm:w-auto">
            Go To Artist Page
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
