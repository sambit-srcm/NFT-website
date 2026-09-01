import type { Metadata } from "next";

import { AuthShell } from "@/components/layout/auth-shell";
import { CreateAccountForm } from "@/components/forms/create-account-form";

export const metadata: Metadata = {
  title: "Create Account — NFT Marketplace",
  description:
    "Create an account to start creating, collecting and selling NFTs on the marketplace.",
};

export default function CreateAccountPage() {
  return (
    <AuthShell
      title="Create Account"
      description="Welcome! Enter your details and start creating, collecting and selling NFTs."
      artSeed="create-account"
    >
      <CreateAccountForm />
    </AuthShell>
  );
}
