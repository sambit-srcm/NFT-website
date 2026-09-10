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

  it("changes the figures when another period is selected", async () => {
    const user = userEvent.setup();
    render(<RankingsPage />);

    const before = screen.getAllByRole("listitem")[0].textContent;

    await user.click(screen.getByRole("tab", { name: "All Time" }));

    expect(screen.getByRole("tab", { name: "All Time" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getAllByRole("listitem")[0].textContent).not.toBe(before);
  });
});
