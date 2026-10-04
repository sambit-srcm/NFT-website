import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Countdown } from "@/components/ui/countdown";

describe("Countdown", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts at 59 hours, 59 minutes and 59 seconds", () => {
    render(<Countdown />);

    expect(screen.getByText("Hours").previousSibling).toHaveTextContent("59");
    expect(screen.getByText("Minutes").previousSibling).toHaveTextContent("59");
    expect(screen.getByText("Seconds").previousSibling).toHaveTextContent("59");
  });

  it("counts the seconds down once the page loads", () => {
    render(<Countdown />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("Seconds").previousSibling).toHaveTextContent("58");
  });

  it("moves to the next minute once the seconds hit zero", () => {
    render(<Countdown />);

    act(() => {
      vi.advanceTimersByTime(60_000);
    });

    expect(screen.getByText("Minutes").previousSibling).toHaveTextContent("58");
    expect(screen.getByText("Seconds").previousSibling).toHaveTextContent("59");
  });
});
