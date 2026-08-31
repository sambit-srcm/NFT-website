import { Art } from "@/components/ui/art";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SubscribeForm } from "@/components/layout/subscribe-form";

export function WeeklyDigest() {
  return (
    <section id="signup" className="py-section scroll-mt-24 lg:scroll-mt-28">
      <Container>
        <Reveal>
          <div className="bg-surface grid gap-8 overflow-hidden rounded-[20px] p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <Art seed="weekly-digest" className="aspect-[4/3] w-full lg:aspect-[425/310]" />

            <div>
              <h2 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px]">
                Join our weekly digest
              </h2>
              <p className="text-ink-subtle mt-4 text-lg sm:text-xl">
                Get exclusive promotions &amp; updates straight to your inbox.
              </p>
              <SubscribeForm className="mt-6" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
