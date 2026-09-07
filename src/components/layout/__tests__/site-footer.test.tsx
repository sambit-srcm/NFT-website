import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/layout/site-footer";

describe("SiteFooter", () => {
  it("takes you home when you click the logo", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: /nft marketplace/i })).toHaveAttribute("href", "/");
  });

  it("sends you to the right page from each explore link", () => {
    render(<SiteFooter />);

    const nav = screen.getByRole("navigation", { name: /explore/i });
    expect(within(nav).getByRole("link", { name: "Marketplace" })).toHaveAttribute(
      "href",
      "/marketplace",
    );
    expect(within(nav).getByRole("link", { name: "Rankings" })).toHaveAttribute(
      "href",
      "/rankings",
    );
    expect(within(nav).getByRole("link", { name: "Connect a wallet" })).toHaveAttribute(
      "href",
      "/connect-wallet",
    );
  });

  it("gives each social icon a readable name", () => {
    render(<SiteFooter />);

    for (const label of ["Discord", "YouTube", "Twitter", "Instagram"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("shows the newsletter heading and signup box", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("heading", { level: 2, name: /join our weekly digest/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  it("shows the copyright text", () => {
    render(<SiteFooter />);

    expect(screen.getByText(/nft market\. use this template freely\./i)).toBeInTheDocument();
  });
});
