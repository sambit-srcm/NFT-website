"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CoinbaseIcon, MetamaskIcon, WalletConnectIcon } from "@/components/icons";
import { WALLETS } from "@/lib/data";
import { stagger, fadeUp } from "@/lib/motion";

const ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  metamask: MetamaskIcon,
  walletconnect: WalletConnectIcon,
  coinbase: CoinbaseIcon,
};

export function WalletOptions() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="space-y-5"
      variants={stagger(0.1)}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      {WALLETS.map((wallet) => {
        const Icon = ICONS[wallet.id];

        return (
          <motion.li key={wallet.id} variants={reduceMotion ? undefined : fadeUp}>
            {/*
             * A link, not a button: choosing a provider hands off to that
             * wallet's own connection flow rather than acting on this page.
             */}
            <Link
              href={`#${wallet.id}`}
              className="bg-surface hover:bg-surface-raised hover:border-brand flex items-center gap-4 rounded-[20px] border-2 border-transparent px-6 py-5 transition-colors motion-safe:hover:-translate-y-0.5"
            >
              <span aria-hidden="true" className="text-brand shrink-0">
                <Icon />
              </span>
              <span className="font-display text-lg font-semibold sm:text-xl">{wallet.name}</span>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
