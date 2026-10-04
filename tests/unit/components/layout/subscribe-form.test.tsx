import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SubscribeForm } from "@/components/layout/subscribe-form";

describe("SubscribeForm", () => {
  it("reports an empty email on submit", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    const input = screen.getByLabelText(/email address/i);
    expect(screen.getByRole("alert")).toHaveTextContent("Email address is required.");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveFocus();
    expect(screen.getByRole("status")).toHaveTextContent("");
  });

  it("treats a whitespace-only email as empty", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    const input = screen.getByLabelText(/email address/i);
    await user.type(input, "   ");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Email address is required.");
    expect(input).toHaveValue("");
  });

  it("rejects an invalid email shape", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    const input = screen.getByLabelText(/email address/i);
    await user.type(input, "not-an-email");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email address.");
    expect(input).toHaveAccessibleDescription("Enter a valid email address.");
  });

  it("clears the error once the email is edited", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(screen.getByRole("alert")).toBeInTheDocument();

    await user.type(screen.getByLabelText(/email address/i), "a");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("says thanks and clears the box after you subscribe", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    const input = screen.getByLabelText(/email address/i);
    await user.type(input, "  satoshi@example.com  ");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("status")).toHaveTextContent("Thanks — you are on the list.");
    expect(input).toHaveValue("");
  });
});
