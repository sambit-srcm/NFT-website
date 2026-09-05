"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { RANKING_PERIODS } from "@/lib/data";
import type { RankingPeriodId } from "@/lib/data";

export function RankingsBoard() {
  const [period, setPeriod] = useState<RankingPeriodId>("today");

  return (
    <section className="py-section">
      <Container>
        <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] lg:text-[51px]">
          Top Creators
        </h1>
        <p className="text-ink-subtle mt-3 text-lg sm:text-xl">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>

        <div
          role="tablist"
          aria-label="Ranking period"
          className="mt-8 flex overflow-x-auto border-b border-white/10"
        >
          {RANKING_PERIODS.map((option) => {
            const selected = option.id === period;

            return (
              <button
                key={option.id}
                role="tab"
                type="button"
                aria-selected={selected}
                onClick={() => setPeriod(option.id)}
                className={cn(
                  "font-display shrink-0 border-b-4 px-5 py-4 text-base font-semibold transition-colors sm:text-lg lg:px-10",
                  selected
                    ? "border-brand text-ink"
                    : "text-ink-muted hover:text-ink border-transparent",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
