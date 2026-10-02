import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SubscribeForm } from "@/components/layout/subscribe-form";

describe("SubscribeForm", () => {
  it("shows no message if you submit without typing an email", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("status")).toHaveTextContent("");
  });

  it("says thanks and clears the box after you subscribe", async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    const input = screen.getByLabelText(/email address/i);
    await user.type(input, "satoshi@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(screen.getByRole("status")).toHaveTextContent("Thanks — you are on the list.");
    expect(input).toHaveValue("");
  });
});
