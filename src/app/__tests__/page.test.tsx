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

    expect(screen.getByRole("link", { name: /get started/i })).toBeInTheDocument();
  });

  it("lists creators in ranked order", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 3, name: "Keepitreal" })).toBeInTheDocument();
    expect(screen.getByLabelText("Rank 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Rank 12")).toBeInTheDocument();
  });
});
