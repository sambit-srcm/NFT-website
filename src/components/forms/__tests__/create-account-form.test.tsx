import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { CreateAccountForm } from "@/components/forms/create-account-form";

const VALID = {
  Username: "satoshi",
  "Email Address": "satoshi@example.com",
  Password: "correct-horse",
  "Confirm Password": "correct-horse",
};

async function fill(
  user: ReturnType<typeof userEvent.setup>,
  overrides: Record<string, string> = {},
) {
  const values = { ...VALID, ...overrides };
  for (const [label, value] of Object.entries(values)) {
    if (!value) continue;
    await user.type(screen.getByLabelText(label), value);
  }
}

describe("CreateAccountForm", () => {
  it("reports every empty field on submit", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByText("Username is required.")).toBeInTheDocument();
    expect(screen.getByText("Email address is required.")).toBeInTheDocument();
    expect(screen.getByText("Password is required.")).toBeInTheDocument();
    expect(screen.getByText("Confirm your password.")).toBeInTheDocument();
  });

  it("focuses the first invalid field", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByLabelText("Username")).toHaveFocus();
  });

  it("marks an invalid field for assistive technology", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await fill(user, { "Email Address": "not-an-email" });
    await user.click(screen.getByRole("button", { name: /create account/i }));

    const email = screen.getByLabelText("Email Address");
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveAccessibleDescription("Enter a valid email address.");
  });

  it("rejects a password shorter than the minimum", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await fill(user, { Password: "short", "Confirm Password": "short" });
    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByText("Password must be at least 8 characters.")).toBeInTheDocument();
  });

  it("rejects a confirmation that does not match", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await fill(user, { "Confirm Password": "something-else" });
    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByText("Passwords do not match.")).toBeInTheDocument();
  });

  it("clears a field error once that field is edited", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await user.click(screen.getByRole("button", { name: /create account/i }));
    expect(screen.getByText("Username is required.")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Username"), "a");
    expect(screen.queryByText("Username is required.")).not.toBeInTheDocument();
  });

  it("accepts a valid submission", async () => {
    const user = userEvent.setup();
    render(<CreateAccountForm />);

    await fill(user);
    await user.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByRole("status")).toHaveTextContent("Account details accepted.");
    expect(screen.getByLabelText("Username")).toHaveValue("");
  });
});
