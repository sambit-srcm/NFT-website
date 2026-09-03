import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import NftPage from "@/app/nft/page";

describe("NftPage", () => {
  it("renders the NFT name as the page heading", () => {
    render(<NftPage />);

    expect(screen.getByRole("heading", { level: 1, name: "The Orbitians" })).toBeInTheDocument();
  });

  it("shows the mint date and creator, linked to the artist page", () => {
    render(<NftPage />);

    expect(screen.getByText(/minted on sep 30, 2022/i)).toBeInTheDocument();
    // Exact name: the cards below also carry the creator inside their label.
    expect(screen.getByRole("link", { name: "Orbitian" })).toHaveAttribute("href", "/artist");
  });

  it("shows the auction figures and bid action", () => {
    render(<NftPage />);

    // Scoped to the auction panel: the same figures appear on the cards below.
    const auction = within(screen.getByRole("region", { name: /auction ends in/i }));

    expect(auction.getByText("1.63 ETH")).toBeInTheDocument();
    expect(auction.getByText("0.33 wETH")).toBeInTheDocument();
    expect(auction.getByRole("link", { name: /place bid/i })).toBeInTheDocument();
  });

  it("lists the tags and external links", () => {
    render(<NftPage />);

    for (const tag of ["ANIMATION", "ILLUSTRATION", "MOON"]) {
      expect(screen.getByText(tag)).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: /view on etherscan/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view original/i })).toBeInTheDocument();
  });

  it("renders more work from the same artist", () => {
    render(<NftPage />);

    expect(
      screen.getByRole("heading", { level: 2, name: /more from this artist/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Foxy Life" })).toBeInTheDocument();
  });
});
