import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Reveal } from "@/components/ui/reveal";

const { useReducedMotion } = await vi.hoisted(async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return { useReducedMotion: vi.fn(actual.useReducedMotion) };
});

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return { ...actual, useReducedMotion: () => useReducedMotion() };
});

describe("Reveal", () => {
  it("shows the content inside the chosen tag when animation is allowed", () => {
    useReducedMotion.mockReturnValue(false);
    render(
      <Reveal as="section" className="stack">
        <p>Trending now</p>
      </Reveal>,
    );

    const section = screen.getByText("Trending now").closest("section");
    expect(section).toHaveClass("stack");
  });

  it("shows plain content with no animation when the visitor asked for reduced motion", () => {
    useReducedMotion.mockReturnValue(true);
    render(
      <Reveal as="article" className="stack">
        <p>Trending now</p>
      </Reveal>,
    );

    const article = screen.getByText("Trending now").closest("article");
    expect(article).toHaveClass("stack");
  });
});
