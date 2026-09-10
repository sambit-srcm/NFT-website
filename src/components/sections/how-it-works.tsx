import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HOW_IT_WORKS_ICONS } from "@/constants/icons";
import { STEPS } from "@/lib/data";

/** Homepage section walking through the 3 steps to start selling on the marketplace. */
export function HowItWorks() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading title="How it works" description="Find out how to get started" />
        </Reveal>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = HOW_IT_WORKS_ICONS[step.id];

            return (
              <Reveal as="li" key={step.id} delay={index * 0.1}>
                <article className="bg-surface flex h-full items-center justify-between gap-4 rounded-[20px] p-6 text-right sm:block sm:p-8 sm:text-center">
                  <Icon className="size-[100px] shrink-0 sm:mx-auto sm:size-[160px] lg:size-[250px]" />
                  <div className="sm:mt-6">
                    <h3 className="font-display text-xl font-semibold sm:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="text-ink-subtle mt-3">{step.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
