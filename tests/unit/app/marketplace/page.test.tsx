import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import MarketplacePage from "@/app/marketplace/page";

describe("MarketplacePage", () => {
  it("renders the page heading", () => {
    render(<MarketplacePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /browse marketplace/i }),
    ).toBeInTheDocument();
  });

  it("lists every listing by default", () => {
    render(<MarketplacePage />);

    expect(screen.getAllByRole("listitem")).toHaveLength(9);
  });

  it("filters listings by name", async () => {
    const user = userEvent.setup();
    render(<MarketplacePage />);

    await user.type(screen.getByLabelText(/search nfts and creators/i), "robot");

    expect(screen.getByRole("heading", { level: 3, name: "Happy Robot 032" })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3, name: "Designer Bear" }),
    ).not.toBeInTheDocument();
  });

  it("filters listings by creator", async () => {
    const user = userEvent.setup();
    render(<MarketplacePage />);

    await user.type(screen.getByLabelText(/search nfts and creators/i), "shroomie");

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("reports when nothing matches", async () => {
    const user = userEvent.setup();
    render(<MarketplacePage />);

    await user.type(screen.getByLabelText(/search nfts and creators/i), "zzzz");

    expect(screen.getByText(/no nfts match/i)).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("switches category tabs", async () => {
    const user = userEvent.setup();
    render(<MarketplacePage />);

    await user.click(screen.getByRole("tab", { name: /collections/i }));

    expect(screen.getByRole("tab", { name: /collections/i })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
