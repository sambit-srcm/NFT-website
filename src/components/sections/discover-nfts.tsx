import { Art, Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";
import { EyeIcon } from "@/components/icons";
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
              <Button href="#marketplace" variant="outline" className="hidden sm:inline-flex">
                See All
              </Button>
            }
          />
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {NFTS.map((nft, index) => (
            <Reveal as="li" key={nft.id} delay={index * 0.08}>
              <article className="bg-surface h-full overflow-hidden rounded-[20px]">
                <Art seed={nft.id} rounded="rounded-none" className="aspect-square w-full" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold sm:text-[22px]">{nft.name}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <Avatar seed={nft.creator} className="size-6" />
                    <span className="text-ink-subtle">{nft.creator}</span>
                  </div>
                  <dl className="mt-5 flex items-end justify-between">
                    <div>
                      <dt className="text-ink-subtle text-xs">Price</dt>
                      <dd className="mt-1 font-mono text-sm">{nft.price.toFixed(2)} ETH</dd>
                    </div>
                    <div className="text-right">
                      <dt className="text-ink-subtle text-xs">Highest Bid</dt>
                      <dd className="mt-1 font-mono text-sm">{nft.highestBid.toFixed(2)} wETH</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 sm:hidden">
          <Button href="#marketplace" variant="outline" fullWidth>
            See All
          </Button>
        </Reveal>

        <Reveal className="mt-16">
          <div className="bg-surface flex flex-col gap-8 overflow-hidden rounded-[20px] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <Art seed="magic-mushroom" className="size-20 shrink-0 sm:size-28" />
              <div>
                <p className="text-ink-subtle text-sm">Live auction ends in</p>
                <h3 className="font-display mt-1 text-xl font-semibold sm:text-2xl">
                  Magic Mushroom 0325
                </h3>
              </div>
            </div>

            <Countdown />

            <Button href="#wallet" icon={<EyeIcon />} className="lg:shrink-0">
              Place Bid
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
