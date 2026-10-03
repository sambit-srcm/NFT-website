"use client";

import { useState } from "react";

import { Avatar } from "@/components/ui/art";
import { Container } from "@/components/ui/container";
import { TabList, panelId, tabId } from "@/components/ui/tabs";
import { cn } from "@/lib/cn";
import { RANKING_PERIODS, RANKINGS } from "@/lib/data";
import type { RankedCreator, RankingPeriodId } from "@/lib/data";

/** Colors the change percentage green for a gain, red for a loss. */
function ChangeValue({ change }: { change: number }) {
  const positive = change >= 0;

  return (
    <span className={cn("font-mono", positive ? "text-positive" : "text-red-300")}>
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

        <TabList
          label="Ranking period"
          idPrefix="rankings"
          tabs={RANKING_PERIODS}
          active={period}
          onChange={setPeriod}
          className="mt-8"
          tabClassName="px-5 text-center"
          renderTab={(option) => (
            <>
              <span aria-hidden="true" className="sm:hidden">
                {option.shortLabel}
              </span>
              <span className="sr-only sm:not-sr-only">{option.label}</span>
            </>
          )}
        />

        {/* Looks like cards, but reads as a table. Hidden columns drop together. */}
        <div
          role="tabpanel"
          id={panelId("rankings", period)}
          aria-labelledby={tabId("rankings", period)}
        >
          <div role="table" aria-label="Creator rankings">
            <div role="rowgroup">
              <div
                role="row"
                className="text-ink-subtle mt-10 flex items-center justify-between rounded-[20px] border border-white/10 px-4 py-3 font-mono text-sm"
              >
                <span role="columnheader">Artist</span>
                <div role="none" className="flex items-center gap-8">
                  <span role="columnheader" className="hidden w-20 sm:block">
                    Change
                  </span>
                  <span role="columnheader" className="hidden w-20 text-right xl:block">
                    NFTs Sold
                  </span>
                  <span role="columnheader" className="w-24 text-right">
                    Volume
                  </span>
                </div>
              </div>
            </div>

            <div role="rowgroup" className="mt-4 space-y-4">
              {rows.map((row) => (
                <div
                  key={row.name}
                  role="row"
                  className="bg-surface flex items-center justify-between gap-4 rounded-[20px] p-4"
                >
                  <div role="cell" className="flex items-center gap-4">
                    <span className="text-ink-muted w-6 shrink-0 font-mono">
                      <span className="sr-only">Rank </span>
                      {row.rank}
                    </span>
                    <Avatar seed={row.name} className="size-10 shrink-0" />
                    <span className="font-semibold">{row.name}</span>
                  </div>
                  <div role="none" className="flex items-center gap-8">
                    <span role="cell" className="hidden w-20 sm:block">
                      <ChangeValue change={row.change} />
                    </span>
                    <span role="cell" className="hidden w-20 text-right font-mono xl:block">
                      {row.nftsSold}
                    </span>
                    <span role="cell" className="w-24 text-right font-mono text-sm">
                      {row.volume.toFixed(2)} ETH
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
