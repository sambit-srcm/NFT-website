import type { ReactNode } from "react";

import { Art } from "@/components/ui/art";
import { Reveal } from "@/components/ui/reveal";

/** Shared shell for the account pages — create account and connect wallet only differ in panel content. */
export function AuthShell({
  title,
  description,
  artSeed,
  children,
}: {
  title: string;
  description: string;
  artSeed: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1">
      <div className="grid lg:grid-cols-2">
        <Art
          seed={artSeed}
          rounded="rounded-none"
          className="h-48 w-full sm:h-72 lg:h-full lg:min-h-[42rem]"
        />

        <div className="flex items-center px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <Reveal>
              <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] lg:text-[51px]">
                {title}
              </h1>
              <p className="text-ink-subtle mt-4 text-lg sm:text-xl">{description}</p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              {children}
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
