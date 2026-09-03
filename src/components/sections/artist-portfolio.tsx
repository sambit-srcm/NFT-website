"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { cn } from "@/lib/cn";
import { ARTIST_PORTFOLIO, ARTIST_TABS } from "@/lib/data";
import type { ArtistTabId } from "@/lib/data";

export function ArtistPortfolio() {
  const [active, setActive] = useState<ArtistTabId>("created");
  const reduceMotion = useReducedMotion();

  const items = ARTIST_PORTFOLIO[active];

  return (
    <section className="py-section">
      <Container>
        {/*
         * A tablist rather than links: switching tabs filters in place and does
         * not navigate, so arrow-key semantics are what visitors expect.
         */}
        <div role="tablist" aria-label="Artist portfolio" className="flex border-b border-white/10">
          {ARTIST_TABS.map((tab) => {
            const selected = tab.id === active;

            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "font-display flex-1 border-b-4 px-2 py-4 text-base font-semibold transition-colors sm:text-lg lg:flex-none lg:px-10",
                  selected
                    ? "border-brand text-ink"
                    : "text-ink-muted hover:text-ink border-transparent",
                )}
              >
                {tab.label}
                <span className="text-ink-muted ml-2 font-mono text-sm">{tab.count}</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="mt-10"
        >
          {/*
           * Keyed on the active tab so React swaps the list outright and the
           * new grid animates in. An exit animation was tried first, but a
           * grid that has to empty before it refills reads as a flash of
           * nothing, and leaves the panel blank if the exit never completes.
           */}
          <motion.ul
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((nft) => (
              <li key={nft.id}>
                <NftCard nft={nft} />
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
