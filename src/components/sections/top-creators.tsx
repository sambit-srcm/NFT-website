import { Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CREATORS } from "@/lib/data";

export function TopCreators() {
  return (
    <section id="rankings" className="py-section scroll-mt-24 lg:scroll-mt-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Top creators"
            description="Checkout Top Rated Creators on the NFT Marketplace"
            action={
              <Button href="#rankings" variant="outline" className="hidden sm:inline-flex">
                View Rankings
              </Button>
            }
          />
        </Reveal>

        <ol className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {CREATORS.map((creator, index) => (
            <Reveal as="li" key={creator.name} delay={Math.min(index, 7) * 0.05}>
              <article className="bg-surface relative flex flex-col items-center rounded-[20px] p-4 sm:p-5">
                <span
                  className="bg-canvas text-ink-muted absolute top-4 left-4 grid size-8 place-items-center rounded-full font-mono text-sm"
                  aria-label={`Rank ${creator.rank}`}
                >
                  {creator.rank}
                </span>
                <Avatar seed={creator.name} className="size-16 sm:size-[110px]" />
                <h3 className="font-display mt-4 text-center text-lg font-semibold sm:text-xl">
                  {creator.name}
                </h3>
                <p className="mt-2 text-center text-sm sm:text-base">
                  <span className="text-ink-muted">Total Sales: </span>
                  <span className="font-mono">{creator.sales.toFixed(2)} ETH</span>
                </p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 sm:hidden">
          <Button href="#rankings" variant="outline" fullWidth>
            View Rankings
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
