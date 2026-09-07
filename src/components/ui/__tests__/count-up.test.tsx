import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const { animate, useInView, useReducedMotion } = vi.hoisted(() => ({
  animate: vi.fn(),
  useInView: vi.fn(),
  useReducedMotion: vi.fn(),
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return { ...actual, animate, useInView, useReducedMotion };
});

import { CountUp } from "@/components/ui/count-up";

describe("CountUp", () => {
  it("shows the final number even before it starts counting", () => {
    useInView.mockReturnValue(false);
    useReducedMotion.mockReturnValue(false);

    render(<CountUp value={12000} suffix="+" />);

    expect(screen.getByText("12000+")).toBeInTheDocument();
  });

  it("does not count up when the visitor turned off animations", () => {
    useInView.mockReturnValue(true);
    useReducedMotion.mockReturnValue(true);

    render(<CountUp value={42} />);

    expect(animate).not.toHaveBeenCalled();
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("counts up to the final number once it scrolls into view", () => {
    useInView.mockReturnValue(true);
    useReducedMotion.mockReturnValue(false);
    animate.mockImplementation((_from, to, { onUpdate, onComplete }) => {
      onUpdate(to / 2);
      onComplete();
      return { stop: vi.fn() };
    });

    render(<CountUp value={200} suffix=" ETH" />);

    expect(screen.getByText("200 ETH")).toBeInTheDocument();
  });
});
