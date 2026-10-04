import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import RankingsPage from "@/app/rankings/page";

describe("RankingsPage", () => {
  it("renders the page heading", () => {
    render(<RankingsPage />);

    expect(screen.getByRole("heading", { level: 1, name: /top creators/i })).toBeInTheDocument();
  });

  it("shows the header labels", () => {
    render(<RankingsPage />);

    for (const label of ["Artist", "Change", "NFTs Sold", "Volume"]) {
      expect(screen.getByRole("columnheader", { name: label })).toBeInTheDocument();
    }
  });

  it("ranks twenty creators", () => {
    render(<RankingsPage />);

    const table = screen.getByRole("table", { name: "Creator rankings" });

    // One header row plus twenty creators.
    expect(within(table).getAllByRole("row")).toHaveLength(21);
  });

  it("opens on Today", () => {
    render(<RankingsPage />);

    expect(screen.getByRole("tab", { name: "Today" })).toHaveAttribute("aria-selected", "true");
  });

  it("switches the selected period tab", async () => {
    const user = userEvent.setup();
    render(<RankingsPage />);

    await user.click(screen.getByRole("tab", { name: "All Time" }));

    expect(screen.getByRole("tab", { name: "All Time" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Today" })).toHaveAttribute("aria-selected", "false");
  });

  it("links every creator to the artist page", () => {
    render(<RankingsPage />);

    const table = screen.getByRole("table", { name: "Creator rankings" });
    const links = within(table).getAllByRole("link");

    expect(links).toHaveLength(20);
    for (const link of links) expect(link).toHaveAttribute("href", "/artist");
  });
});
