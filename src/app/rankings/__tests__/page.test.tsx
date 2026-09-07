import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import RankingsPage from "@/app/rankings/page";

describe("RankingsPage", () => {
  it("renders the page heading", () => {
    render(<RankingsPage />);

    expect(screen.getByRole("heading", { level: 1, name: /top creators/i })).toBeInTheDocument();
  });

  it("renders the table with all five columns", () => {
    render(<RankingsPage />);

    const table = within(screen.getByRole("table"));
    for (const header of ["#", "Artist", "Change", "NFTs Sold", "Volume"]) {
      expect(table.getByRole("columnheader", { name: header })).toBeInTheDocument();
    }
  });

  it("ranks twenty creators", () => {
    render(<RankingsPage />);

    // Header row plus twenty ranked rows.
    expect(within(screen.getByRole("table")).getAllByRole("row")).toHaveLength(21);
  });

  it("opens on Today", () => {
    render(<RankingsPage />);

    expect(screen.getByRole("tab", { name: "Today" })).toHaveAttribute("aria-selected", "true");
  });

  it("changes the figures when another period is selected", async () => {
    const user = userEvent.setup();
    render(<RankingsPage />);

    const table = within(screen.getByRole("table"));
    const before = table.getAllByRole("row")[1].textContent;

    await user.click(screen.getByRole("tab", { name: "All Time" }));

    expect(screen.getByRole("tab", { name: "All Time" })).toHaveAttribute("aria-selected", "true");
    expect(within(screen.getByRole("table")).getAllByRole("row")[1].textContent).not.toBe(before);
  });
});
