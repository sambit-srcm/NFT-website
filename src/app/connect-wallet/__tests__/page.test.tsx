import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ConnectWalletPage from "@/app/connect-wallet/page";

describe("ConnectWalletPage", () => {
  it("renders the page heading", () => {
    render(<ConnectWalletPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Connect Wallet" })).toBeInTheDocument();
  });

  it("offers every wallet provider as a link", () => {
    render(<ConnectWalletPage />);

    for (const name of ["Metamask", "WalletConnect", "Coinbase"]) {
      expect(screen.getByRole("link", { name })).toBeInTheDocument();
    }
  });
});
