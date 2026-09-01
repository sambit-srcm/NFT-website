import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AuthShell } from "@/components/layout/auth-shell";

describe("AuthShell", () => {
  it("renders the title as the page heading", () => {
    render(
      <AuthShell title="Create Account" description="Welcome!" artSeed="seed">
        <p>panel content</p>
      </AuthShell>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "Create Account" })).toBeInTheDocument();
  });

  it("renders its children inside the content panel", () => {
    render(
      <AuthShell title="Connect Wallet" description="Choose a wallet." artSeed="seed">
        <p>panel content</p>
      </AuthShell>,
    );

    expect(screen.getByText("panel content")).toBeInTheDocument();
    expect(screen.getByText("Choose a wallet.")).toBeInTheDocument();
  });
});
