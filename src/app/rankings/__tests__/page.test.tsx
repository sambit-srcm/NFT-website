import { render, screen } from "@testing-library/react";
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
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("ranks twenty creators", () => {
    render(<RankingsPage />);

    expect(screen.getAllByRole("listitem")).toHaveLength(20);
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
});
