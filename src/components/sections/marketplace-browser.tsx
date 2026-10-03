"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { SearchField } from "@/components/ui/search-field";
import { TabList, panelId, tabId } from "@/components/ui/tabs";
import { MARKETPLACE_NFTS, MARKETPLACE_TABS } from "@/lib/data";
import type { MarketplaceTabId } from "@/lib/data";

/** The marketplace page: searchable, tabbed grid of NFT listings. */
export function MarketplaceBrowser() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<MarketplaceTabId>("nfts");

  const listings = useMemo(() => {
    const term = query.trim().toLowerCase();

    return term
      ? MARKETPLACE_NFTS.filter(
          (nft) =>
            nft.name.toLowerCase().includes(term) || nft.creator.toLowerCase().includes(term),
        )
      : MARKETPLACE_NFTS;
  }, [query]);

  return (
    <section className="py-section">
      <Container>
        <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] lg:text-[51px]">
          Browse Marketplace
        </h1>
        <p className="text-ink-subtle mt-3 text-lg sm:text-xl">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        <div className="mt-8">
          <SearchField
            id="marketplace-search"
            label="Search NFTs and creators"
            placeholder="Search your favourite NFTs"
            value={query}
            onChange={setQuery}
          />
        </div>

        <TabList
          label="Marketplace categories"
          idPrefix="marketplace"
          tabs={MARKETPLACE_TABS}
          active={tab}
          onChange={setTab}
          className="mt-8"
          tabClassName="px-2 lg:flex-none"
          renderTab={(item) => (
            <>
              {item.label}
              <span className="text-ink-muted ml-2 font-mono text-sm">{item.count}</span>
            </>
          )}
        />

        <div
          role="tabpanel"
          id={panelId("marketplace", tab)}
          aria-labelledby={tabId("marketplace", tab)}
          className="mt-10"
        >
          {listings.length === 0 ? (
            <p className="text-ink-subtle py-16 text-center text-lg">
              No NFTs match “{query}”. Try a different search.
            </p>
          ) : (
            <motion.ul
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {listings.map((nft) => (
                <li key={nft.id}>
                  <NftCard nft={nft} />
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </Container>
    </section>
  );
}
