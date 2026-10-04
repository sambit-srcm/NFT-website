import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import ErrorPage from "@/app/error";
import NotFound from "@/app/not-found";

describe("ErrorPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows a message and tries again when asked", async () => {
    const user = userEvent.setup();
    const retry = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<ErrorPage error={new Error("boom")} retry={retry} />);

    expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
    expect(consoleError).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(retry).toHaveBeenCalledOnce();
  });

  it("links back to the homepage", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(<ErrorPage error={new Error("boom")} retry={() => {}} />);

    expect(screen.getByRole("link", { name: /go home/i })).toHaveAttribute("href", "/");
  });
});

describe("NotFound", () => {
  it("says the page was not found and links home", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 1, name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /go home/i })).toHaveAttribute("href", "/");
  });
});
