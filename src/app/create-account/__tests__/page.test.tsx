import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CreateAccountPage from "@/app/create-account/page";

describe("CreateAccountPage", () => {
  it("renders the page heading", () => {
    render(<CreateAccountPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Create Account" })).toBeInTheDocument();
  });

  it("exposes every field through its label", () => {
    render(<CreateAccountPage />);

    for (const label of ["Username", "Email Address", "Password", "Confirm Password"]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }
  });

  it("renders the submit button", () => {
    render(<CreateAccountPage />);

    expect(screen.getByRole("button", { name: /create account/i })).toBeInTheDocument();
  });
});
