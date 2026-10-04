import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the page heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: /discover digital art/i }),
    ).toBeInTheDocument();
  });

  it("renders every landing page section", () => {
    render(<Home />);

    const sections = [
      /trending collection/i,
      /top creators/i,
      /browse categories/i,
      /discover more nfts/i,
      /how it works/i,
      /join our weekly digest/i,
    ];

    for (const name of sections) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  it("renders the primary call to action", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /get started/i })).toHaveAttribute(
      "href",
      "/create-account",
    );
  });

  it("lists creators in ranked order", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 3, name: "Keepitreal" })).toBeInTheDocument();
    expect(screen.getByLabelText("Rank 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Rank 12")).toBeInTheDocument();
  });

  it("shows the hero card linking to the artist", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Space Walking by Animakid" })).toHaveAttribute(
      "href",
      "/artist",
    );
  });

  it("shows the creator's total sales on the hero card", () => {
    render(<Home />);

    const card = screen.getByRole("link", { name: "Space Walking by Animakid" });
    expect(card).toHaveTextContent("Total Sales: 34.53 ETH");
  });

  it("sends trending collection pictures to the NFT page and creators to the artist page", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "View Dsgn Animals NFTs" })).toHaveAttribute(
      "href",
      "/nft",
    );
    expect(screen.getByRole("link", { name: "MrFox" })).toHaveAttribute("href", "/artist");
  });

  it("sends every category to the marketplace", () => {
    render(<Home />);

    for (const name of ["Art", "Music", "Virtual Worlds"]) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", "/marketplace");
    }
  });

  it("links the highlight to its creator and its NFT", () => {
    render(<Home />);

    // Shroomie also owns a trending collection, so there is more than one link.
    for (const link of screen.getAllByRole("link", { name: "Shroomie" })) {
      expect(link).toHaveAttribute("href", "/artist");
    }
    expect(screen.getByRole("link", { name: /see nft/i })).toHaveAttribute("href", "/nft");
  });
});
