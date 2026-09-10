import { Art, Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";
import { EyeIcon } from "@/components/icons";
import { COLLECTIONS } from "@/lib/data";

const FEATURED = COLLECTIONS.find((collection) => collection.id === "magic-mushrooms")!;

/** Homepage banner for one featured NFT, with a live auction countdown. */
export function NftHighlight() {
  return (
    <section className="relative flex items-end overflow-hidden py-16 xl:min-h-[640px] xl:py-24">
      <div className="absolute inset-0 -z-20">
        <Art seed={FEATURED.id} rounded="rounded-none" className="h-full w-full" />
      </div>
      <div className="from-brand/0 to-brand absolute inset-0 -z-10 bg-gradient-to-b" />

      <Container>
        <Reveal className="grid gap-6 [grid-template-areas:'chip'_'heading'_'timer'_'button'] md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:[grid-template-areas:'chip_timer'_'heading_timer'_'button_timer']">
          <div className="bg-surface inline-flex w-fit items-center gap-3 rounded-full py-2 pr-5 pl-2 [grid-area:chip]">
            <Avatar seed={FEATURED.creator} className="size-6" />
            <span className="font-medium">{FEATURED.creator}</span>
          </div>

          <h2 className="font-display text-[32px] font-semibold [grid-area:heading] sm:text-[42px] xl:text-[51px]">
            {FEATURED.name}
          </h2>

          <div className="bg-surface/50 shrink-0 rounded-[20px] p-6 [grid-area:timer] sm:p-8">
            <p className="text-ink-subtle font-mono text-sm">Auction ends in:</p>
            <div className="mt-4">
              <Countdown />
            </div>
          </div>

          <Button
            href="/marketplace"
            variant="white"
            icon={<EyeIcon className="text-brand" />}
            className="w-fit [grid-area:button]"
          >
            See NFT
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
