import Link from "next/link";

import { Art, Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Countdown } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";
import { EyeIcon, ExternalLinkIcon } from "@/components/icons";
import { NFT_DETAIL } from "@/lib/data";

export function NftDetail() {
  const nft = NFT_DETAIL;

  return (
    <section>
      <Art seed={nft.id} rounded="rounded-none" className="h-64 w-full sm:h-96 lg:h-[35rem]" />

      <Container className="py-section">
        <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:gap-12">
          <div>
            <Reveal>
              <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] lg:text-[51px]">
                {nft.name}
              </h1>
              <p className="text-ink-subtle mt-3">Minted on {nft.mintedOn}</p>
            </Reveal>

            <Reveal delay={0.06} className="mt-8">
              <h2 className="text-ink-subtle font-mono text-sm">Created By</h2>
              <Link
                href="/artist"
                className="hover:text-brand mt-3 inline-flex items-center gap-3 transition-colors"
              >
                <Avatar seed={nft.creator} className="size-6" />
                <span className="font-semibold">{nft.creator}</span>
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <h2 className="text-ink-subtle font-mono text-sm">Description</h2>
              <div className="mt-3 space-y-3 text-lg">
                {nft.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-8">
              <h2 className="text-ink-subtle font-mono text-sm">Details</h2>
              <ul className="mt-3 space-y-2">
                {nft.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-brand inline-flex items-center gap-3 transition-colors"
                    >
                      <span aria-hidden="true" className="text-ink-muted">
                        <ExternalLinkIcon />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="mt-8">
              <h2 className="text-ink-subtle font-mono text-sm">Tags</h2>
              <ul className="mt-3 flex flex-wrap gap-3">
                {nft.tags.map((tag) => (
                  <li key={tag} className="bg-surface rounded-[20px] px-6 py-3 font-semibold">
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/*
           * The auction panel leads on mobile, where it would otherwise sit
           * below a long description and be missed.
           */}
          <Reveal delay={0.08} className="order-first lg:order-none">
            <section aria-labelledby="auction-heading" className="bg-surface rounded-[20px] p-6">
              <h2 id="auction-heading" className="text-ink-subtle font-mono text-sm">
                Auction ends in
              </h2>
              <div className="mt-4">
                <Countdown />
              </div>

              <dl className="mt-6 flex items-end justify-between">
                <div>
                  <dt className="text-ink-subtle text-xs">Price</dt>
                  <dd className="mt-1 font-mono">{nft.price.toFixed(2)} ETH</dd>
                </div>
                <div className="text-right">
                  <dt className="text-ink-subtle text-xs">Highest Bid</dt>
                  <dd className="mt-1 font-mono">{nft.highestBid.toFixed(2)} wETH</dd>
                </div>
              </dl>

              <Button href="#bid" size="lg" fullWidth icon={<EyeIcon />} className="mt-6">
                Place Bid
              </Button>
            </section>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
