import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const motionSetting = vi.hoisted(() => ({ reduce: false }));

vi.mock("framer-motion", async (importOriginal) => ({
  ...(await importOriginal<typeof import("framer-motion")>()),
  useReducedMotion: () => motionSetting.reduce,
}));

import { TiltCard } from "@/components/ui/tilt-card";

describe("TiltCard", () => {
  it("shows its content", () => {
    render(
      <TiltCard>
        <p>Card content</p>
      </TiltCard>,
    );

    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("only turns around the vertical axis", () => {
    render(
      <TiltCard>
        <p>Card content</p>
      </TiltCard>,
    );

    const transform = screen.getByTestId("tilt-card").style.transform;
    expect(transform).toMatch(/rotateY/);
    expect(transform).not.toMatch(/rotateX/);
  });

  it("settles flat when the user prefers reduced motion", async () => {
    motionSetting.reduce = true;
    render(
      <TiltCard>
        <p>Card content</p>
      </TiltCard>,
    );

    await waitFor(() => expect(screen.getByTestId("tilt-card").style.transform).toBe("none"));
    expect(screen.getByTestId("tilt-card-light").style.opacity).toBe("0");
    motionSetting.reduce = false;
  });
});
