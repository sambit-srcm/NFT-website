import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/layout/site-header";

/*
 * jsdom does not apply Tailwind's responsive classes, so the desktop nav is
 * always present in the DOM. These assertions therefore key off the menu
 * container and the duplicated link count rather than visibility.
 */

describe("SiteHeader", () => {
  it("keeps the mobile menu closed by default", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(document.getElementById("mobile-menu")).toBeNull();
    expect(screen.getAllByRole("link", { name: /^sign up$/i })).toHaveLength(1);
  });

  it("opens and closes the mobile menu on toggle", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));

    expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(document.getElementById("mobile-menu")).not.toBeNull();
    // The mobile drawer duplicates the desktop nav's call to action.
    expect(screen.getAllByRole("link", { name: /^sign up$/i })).toHaveLength(2);

    await user.click(screen.getByRole("button", { name: /close menu/i }));

    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("exposes the main navigation links", () => {
    render(<SiteHeader />);

    for (const label of ["Marketplace", "Rankings", "Connect a wallet"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });

  it("points the account links at their routes", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Connect a wallet" })).toHaveAttribute(
      "href",
      "/connect-wallet",
    );
    expect(screen.getByRole("link", { name: /^sign up$/i })).toHaveAttribute(
      "href",
      "/create-account",
    );
  });
});
