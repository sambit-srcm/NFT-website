"use client";

import { useState } from "react";

import { Avatar } from "@/components/ui/art";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { RANKING_PERIODS, RANKINGS } from "@/lib/data";
import type { RankedCreator, RankingPeriodId } from "@/lib/data";

/** Colors the change percentage green for a gain, red for a loss. */
function ChangeValue({ change }: { change: number }) {
  const positive = change >= 0;

  return (
    <span className={cn("font-mono", positive ? "text-emerald-400" : "text-red-400")}>
      {positive ? "+" : ""}
      {change.toFixed(2)}%
    </span>
  );
}

/** The rankings page: top creators leaderboard with period tabs. */
export function RankingsBoard() {
  const [period, setPeriod] = useState<RankingPeriodId>("today");
  const rows: RankedCreator[] = RANKINGS[period];

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
          className="mt-8 flex border-b border-white/10"
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
                  "font-display flex-1 border-b-4 px-5 py-4 text-center text-base font-semibold transition-colors sm:text-lg lg:px-10",
                  selected
                    ? "border-brand text-ink"
                    : "text-ink-muted hover:text-ink border-transparent",
                )}
              >
                <span aria-hidden="true" className="sm:hidden">
                  {option.shortLabel}
                </span>
                <span className="sr-only sm:not-sr-only">{option.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-ink-subtle mt-10 flex items-center justify-between rounded-[20px] border border-white/10 px-4 py-3 font-mono text-sm">
          <span>Artist</span>
          <div className="flex items-center gap-8">
            <span className="hidden w-20 sm:block">Change</span>
            <span className="hidden w-20 text-right xl:block">NFTs Sold</span>
            <span className="w-24 text-right">Volume</span>
          </div>
        </div>

        <ul className="mt-4 space-y-4">
          {rows.map((row) => (
            <li
              key={row.name}
              className="bg-surface flex items-center justify-between gap-4 rounded-[20px] p-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-ink-muted w-6 shrink-0 font-mono">{row.rank}</span>
                <Avatar seed={row.name} className="size-10 shrink-0" />
                <span className="font-semibold">{row.name}</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="hidden w-20 sm:block">
                  <ChangeValue change={row.change} />
                </span>
                <span className="hidden w-20 text-right font-mono xl:block">{row.nftsSold}</span>
                <span className="w-24 text-right font-mono text-sm">
                  {row.volume.toFixed(2)} ETH
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
