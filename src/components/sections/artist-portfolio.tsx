"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { CollectionCard } from "@/components/ui/collection-card";
import { Container } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { TabList, panelId, tabId } from "@/components/ui/tabs";
import { ARTIST_COLLECTIONS, ARTIST_PORTFOLIO, ARTIST_TABS } from "@/lib/data";
import type { ArtistTabId } from "@/lib/data";

/** Artist page's Created/Owned/Collection tabs and the grid underneath them. */
export function ArtistPortfolio() {
  const [active, setActive] = useState<ArtistTabId>("created");

  return (
    <section className="py-section">
      <Container>
        <TabList
          label="Artist portfolio"
          idPrefix="artist"
          tabs={ARTIST_TABS}
          active={active}
          onChange={setActive}
          tabClassName="px-2 lg:flex-none"
          renderTab={(tab) => (
            <>
              {tab.label}
              <span className="text-ink-muted ml-2 font-mono text-sm">{tab.count}</span>
            </>
          )}
        />

        <div
          role="tabpanel"
          id={panelId("artist", active)}
          aria-labelledby={tabId("artist", active)}
          className="mt-10"
        >
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {active === "collection"
              ? ARTIST_COLLECTIONS.map((collection) => (
                  <li key={collection.id}>
                    <CollectionCard collection={collection} />
                  </li>
                ))
              : ARTIST_PORTFOLIO[active].map((nft) => (
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
