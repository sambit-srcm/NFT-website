import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import ArtistPage from "@/app/artist/page";

describe("ArtistPage", () => {
  it("renders the artist name as the page heading", () => {
    render(<ArtistPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Animakid" })).toBeInTheDocument();
  });

  it("renders the bio and stat labels", () => {
    render(<ArtistPage />);

    expect(screen.getByText("The Internet's Friendliest Designer Kid.")).toBeInTheDocument();
    for (const label of ["Volume", "NFTs Sold", "Followers"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("shows the wallet address shortened", () => {
    render(<ArtistPage />);

    expect(screen.getByRole("button", { name: /copy wallet address/i })).toBeInTheDocument();
    expect(screen.getByText("0xc0E3...B79C")).toBeInTheDocument();
  });

  it("opens on the Created tab", () => {
    render(<ArtistPage />);

    expect(screen.getByRole("tab", { name: /created/i })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("heading", { level: 3, name: "Distant Galaxy" })).toBeInTheDocument();
  });

  it("switches the grid when another tab is selected", async () => {
    const user = userEvent.setup();
    render(<ArtistPage />);

    await user.click(screen.getByRole("tab", { name: /owned/i }));

    expect(screen.getByRole("tab", { name: /owned/i })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("heading", { level: 3, name: "Magic Mushroom" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "Distant Galaxy" }),
    ).not.toBeInTheDocument();
  });
});
