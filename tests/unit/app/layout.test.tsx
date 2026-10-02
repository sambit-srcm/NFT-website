import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Work_Sans: () => ({ variable: "--font-work-sans" }),
  Space_Mono: () => ({ variable: "--font-space-mono" }),
}));

import RootLayout, { metadata } from "@/app/layout";

describe("RootLayout metadata", () => {
  it("has the right page title and description", () => {
    expect(metadata.title).toBe("NFT Marketplace — Discover, collect and sell digital art");
    expect(metadata.description).toMatch(/20k nft artists/i);
  });
});

describe("RootLayout", () => {
  it("shows the header, the page content and the footer", () => {
    render(
      <RootLayout params={Promise.resolve({})}>
        <main>Page content</main>
      </RootLayout>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
