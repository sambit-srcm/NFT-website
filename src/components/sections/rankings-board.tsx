"use client";

import { useState } from "react";

import { Avatar } from "@/components/ui/art";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { RANKING_PERIODS, RANKINGS } from "@/lib/data";
import type { RankedCreator, RankingPeriodId } from "@/lib/data";

function ChangeValue({ change }: { change: number }) {
  const positive = change >= 0;

  return (
    <span className={cn("font-mono", positive ? "text-emerald-400" : "text-red-400")}>
      {positive ? "+" : ""}
      {change.toFixed(2)}%
    </span>
  );
}

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

        <table className="mt-10 hidden w-full text-left lg:table">
          <caption className="sr-only">
            Top creators, {RANKING_PERIODS.find((p) => p.id === period)?.label}
          </caption>
          <thead className="text-ink-subtle border-b border-white/10 font-mono text-sm">
            <tr>
              <th scope="col" className="pb-4 font-normal">
                #
              </th>
              <th scope="col" className="pb-4 font-normal">
                Artist
              </th>
              <th scope="col" className="pb-4 font-normal">
                Change
              </th>
              <th scope="col" className="pb-4 text-right font-normal">
                NFTs Sold
              </th>
              <th scope="col" className="pb-4 text-right font-normal">
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-white/5">
                <td className="text-ink-muted py-5 font-mono">{row.rank}</td>
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <Avatar seed={row.name} className="size-10" />
                    <span className="font-semibold">{row.name}</span>
                  </div>
                </td>
                <td className="py-5">
                  <ChangeValue change={row.change} />
                </td>
                <td className="py-5 text-right font-mono">{row.nftsSold}</td>
                <td className="py-5 text-right font-mono">{row.volume.toFixed(2)} ETH</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
