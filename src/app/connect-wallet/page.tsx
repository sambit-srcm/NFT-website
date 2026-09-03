import type { Metadata } from "next";

import { AuthShell } from "@/components/layout/auth-shell";
import { WalletOptions } from "@/components/sections/wallet-options";

export const metadata: Metadata = {
  title: "Connect Wallet — NFT Marketplace",
  description:
    "Connect Metamask, WalletConnect or Coinbase to buy and sell NFTs on the marketplace.",
};

export default function ConnectWalletPage() {
  return (
    <AuthShell
      title="Connect Wallet"
      description="Choose a wallet you want to connect. There are several wallet providers."
      artSeed="connect-wallet"
    >
      <WalletOptions />
    </AuthShell>
  );
}
