import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CopyAddress } from "@/components/ui/copy-address";

const ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";

function mockClipboard(writeText: ReturnType<typeof vi.fn>) {
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });
}

describe("CopyAddress", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows a shortened version of the wallet address", () => {
    render(<CopyAddress address={ADDRESS} />);

    expect(screen.getByText("0x1234...5678")).toBeInTheDocument();
  });

  it("copies the address and says 'Copied' when you click it", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    mockClipboard(writeText);

    render(<CopyAddress address={ADDRESS} />);
    fireEvent.click(screen.getByRole("button"));

    expect(writeText).toHaveBeenCalledWith(ADDRESS);
    await waitFor(() => expect(screen.getByText("Wallet address copied")).toBeInTheDocument());
    expect(screen.getByText("Copied")).toBeInTheDocument();
  });

  it("stops saying 'Copied' after a few seconds", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    mockClipboard(writeText);
    vi.useFakeTimers();

    render(<CopyAddress address={ADDRESS} />);
    await act(async () => {
      fireEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByText("Copied")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.queryByText("Copied")).not.toBeInTheDocument();
  });

  it("does not say 'Copied' if copying fails", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    mockClipboard(writeText);

    render(<CopyAddress address={ADDRESS} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(writeText).toHaveBeenCalled());
    expect(screen.queryByText("Copied")).not.toBeInTheDocument();
    expect(screen.getByText(`Copy wallet address ${ADDRESS}`)).toBeInTheDocument();
  });
});
