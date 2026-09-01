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

  it("renders the primary call to action", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /get started/i })).toBeInTheDocument();
  });
});
