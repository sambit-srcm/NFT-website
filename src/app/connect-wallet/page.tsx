import { AuthShell } from "@/components/layout/auth-shell";
import { WalletOptions } from "@/components/sections/wallet-options";

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
