import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { TabList } from "@/components/ui/tabs";

const TABS = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
  { id: "three", label: "Three" },
];

function Example() {
  const [active, setActive] = useState("one");

  return (
    <TabList
      label="Example"
      idPrefix="example"
      tabs={TABS}
      active={active}
      onChange={setActive}
      renderTab={(tab) => tab.label}
    />
  );
}

describe("TabList", () => {
  it("puts only the selected tab in the tab order", () => {
    render(<Example />);

    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute("tabindex", "-1");
  });

  it("links each tab to its panel", () => {
    render(<Example />);

    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
      "aria-controls",
      "example-panel-two",
    );
  });

  it("moves to the next tab with the right arrow key", async () => {
    const user = userEvent.setup();
    render(<Example />);

    await user.click(screen.getByRole("tab", { name: "One" }));
    await user.keyboard("{ArrowRight}");

    const two = screen.getByRole("tab", { name: "Two" });
    expect(two).toHaveFocus();
    expect(two).toHaveAttribute("aria-selected", "true");
  });

  it("wraps around to the last tab with the left arrow key", async () => {
    const user = userEvent.setup();
    render(<Example />);

    await user.click(screen.getByRole("tab", { name: "One" }));
    await user.keyboard("{ArrowLeft}");

    expect(screen.getByRole("tab", { name: "Three" })).toHaveFocus();
  });

  it("jumps to the first and last tab with Home and End", async () => {
    const user = userEvent.setup();
    render(<Example />);

    await user.click(screen.getByRole("tab", { name: "Two" }));
    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "Three" })).toHaveFocus();

    await user.keyboard("{Home}");
    expect(screen.getByRole("tab", { name: "One" })).toHaveFocus();
  });

  it("ignores other keys", async () => {
    const user = userEvent.setup();
    render(<Example />);

    await user.click(screen.getByRole("tab", { name: "One" }));
    await user.keyboard("a");

    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
  });
});
