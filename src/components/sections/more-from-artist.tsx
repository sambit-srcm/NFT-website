import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { Reveal } from "@/components/ui/reveal";
import { MORE_FROM_ARTIST } from "@/lib/data";

/** NFT detail page section showing other work by the same creator. */
export function MoreFromArtist() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading
            title="More from this artist"
            action={
              <span className="hidden sm:block">
                <Button href="/artist" variant="outline">
                  Go To Artist Page
                </Button>
              </span>
            }
          />
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_FROM_ARTIST.map((nft, index) => (
            <Reveal as="li" key={nft.id} delay={index * 0.08}>
              <NftCard nft={nft} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 sm:hidden">
          <Button href="/artist" variant="outline" fullWidth>
            Go To Artist Page
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
