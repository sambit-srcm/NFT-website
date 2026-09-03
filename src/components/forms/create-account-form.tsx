"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { EnvelopeIcon, LockIcon, UserIcon } from "@/components/icons";

type Values = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { username: "", email: "", password: "", confirmPassword: "" };

/** Field order drives which error is focused first. */
const ORDER: Array<keyof Values> = ["username", "email", "password", "confirmPassword"];

const MIN_PASSWORD_LENGTH = 8;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function CreateAccountForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const refs = useRef<Partial<Record<keyof Values, HTMLInputElement | null>>>({});

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));

    // Clear a field's error as soon as it is edited, rather than leaving stale
    // text under a field the visitor is actively fixing.
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);

    const firstInvalid = ORDER.find((key) => found[key]);
    if (firstInvalid) {
      setSubmitted(false);
      refs.current[firstInvalid]?.focus();
      return;
    }

    // No backend exists yet, so success is reported without sending a request.
    setSubmitted(true);
    setValues(EMPTY);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        id="username"
        name="username"
        label="Username"
        placeholder="Enter your username"
        autoComplete="username"
        icon={<UserIcon />}
        value={values.username}
        error={errors.username}
        ref={(node) => {
          refs.current.username = node;
        }}
        onChange={(event) => update("username", event.target.value)}
      />

      <Field
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        autoComplete="email"
        icon={<EnvelopeIcon />}
        value={values.email}
        error={errors.email}
        ref={(node) => {
          refs.current.email = node;
        }}
        onChange={(event) => update("email", event.target.value)}
      />

      <Field
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        autoComplete="new-password"
        icon={<LockIcon />}
        value={values.password}
        error={errors.password}
        ref={(node) => {
          refs.current.password = node;
        }}
        onChange={(event) => update("password", event.target.value)}
      />

      <Field
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        autoComplete="new-password"
        icon={<LockIcon />}
        value={values.confirmPassword}
        error={errors.confirmPassword}
        ref={(node) => {
          refs.current.confirmPassword = node;
        }}
        onChange={(event) => update("confirmPassword", event.target.value)}
      />

      <Button type="submit" size="lg" fullWidth>
        Create account
      </Button>

      <p role="status" aria-live="polite" className={submitted ? "text-brand" : "sr-only"}>
        {submitted ? "Account details accepted." : ""}
      </p>
    </form>
  );
}
