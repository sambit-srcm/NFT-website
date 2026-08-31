import { Art, Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { RocketIcon } from "@/components/icons";
import { STATS } from "@/lib/data";

export function Hero() {
  return (
    <section className="py-section lg:py-section-lg">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <h1 className="font-display text-[36px] leading-[1.15] font-semibold sm:text-[51px] lg:text-[67px]">
              Discover digital art &amp; collect NFTs
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-ink-subtle mt-5 max-w-xl text-lg sm:text-xl lg:text-[22px]">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
              than 20k NFT artists.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <Button href="#signup" size="lg" icon={<RocketIcon />} className="mt-8">
              Get Started
            </Button>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mt-12 grid grid-cols-3 gap-4 sm:max-w-md">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display block text-[22px] font-bold sm:text-[28px] lg:text-[38px]">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-ink-subtle font-mono text-sm sm:text-base">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="w-full">
          <div className="bg-surface overflow-hidden rounded-[20px]">
            <Art seed="space-walking" rounded="rounded-none" className="aspect-[4/3] w-full" />
            <div className="p-5">
              <p className="font-display text-[22px] font-semibold">Space Walking</p>
              <div className="mt-3 flex items-center gap-3">
                <Avatar seed="animakid" className="size-6" />
                <span className="text-ink-subtle">Animakid</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
