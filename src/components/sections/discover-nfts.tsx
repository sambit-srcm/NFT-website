import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { Reveal } from "@/components/ui/reveal";
import { NFTS } from "@/lib/data";

export function DiscoverNfts() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading
            title="Discover More NFTs"
            description="Explore new trending NFTs"
            action={
              <span className="hidden sm:block">
                <Button href="/marketplace" variant="outline">
                  See All
                </Button>
              </span>
            }
          />
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {NFTS.map((nft, index) => (
            <Reveal
              as="li"
              key={nft.id}
              delay={index * 0.08}
              className={index === 2 ? "sm:hidden xl:block" : undefined}
            >
              <NftCard nft={nft} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 sm:hidden">
          <Button href="/marketplace" variant="outline" fullWidth>
            See All
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
