import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CoinsIcon, CollectibleIcon, WalletIcon } from "@/components/icons";
import { STEPS } from "@/lib/data";

const ICONS = {
  wallet: WalletIcon,
  collection: CollectibleIcon,
  earning: CoinsIcon,
} as const;

export function HowItWorks() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading title="How it works" description="Find out how to get started" />
        </Reveal>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = ICONS[step.id];

            return (
              <Reveal as="li" key={step.id} delay={index * 0.1}>
                <article className="bg-surface h-full rounded-[20px] p-6 text-center sm:p-8">
                  <span className="bg-canvas text-brand mx-auto grid size-16 place-items-center rounded-2xl sm:size-20">
                    <Icon className="size-8 sm:size-10" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold sm:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="text-ink-subtle mt-3">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
