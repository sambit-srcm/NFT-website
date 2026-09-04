"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { NftCard } from "@/components/ui/nft-card";
import { SearchField } from "@/components/ui/search-field";
import { MARKETPLACE_NFTS } from "@/lib/data";

export function MarketplaceBrowser() {
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const listings = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return MARKETPLACE_NFTS;

    return MARKETPLACE_NFTS.filter(
      (nft) => nft.name.toLowerCase().includes(term) || nft.creator.toLowerCase().includes(term),
    );
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

        <SearchField
          id="marketplace-search"
          label="Search NFTs and creators"
          placeholder="Search your favourite NFTs"
          value={query}
          onChange={setQuery}
          className="mt-8"
        />

        <motion.ul
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {listings.map((nft) => (
            <li key={nft.id}>
              <NftCard nft={nft} />
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
