"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { EnvelopeIcon, LockIcon, UserIcon } from "@/components/icons";
import {
  MAX_EMAIL_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  isValidEmail,
} from "@/constants/validation";

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

/** Remove extra spaces from the start and end of username and email. Passwords stay as typed. */
function clean(values: Values): Values {
  return { ...values, username: values.username.trim(), email: values.email.trim() };
}

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.username) {
    errors.username = "Username is required.";
  } else if (values.username.length > MAX_USERNAME_LENGTH) {
    errors.username = `Username must be ${MAX_USERNAME_LENGTH} characters or fewer.`;
  }

  if (!values.email) {
    errors.email = "Email address is required.";
  } else if (values.email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be ${MAX_EMAIL_LENGTH} characters or fewer.`;
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  } else if (values.password.length > MAX_PASSWORD_LENGTH) {
    errors.password = `Password must be ${MAX_PASSWORD_LENGTH} characters or fewer.`;
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

    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleaned = clean(values);
    setValues(cleaned);

    const found = validate(cleaned);
    setErrors(found);

    const firstInvalid = ORDER.find((key) => found[key]);
    if (firstInvalid) {
      setSubmitted(false);
      refs.current[firstInvalid]?.focus();
      return;
    }

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
        maxLength={MAX_USERNAME_LENGTH}
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
        maxLength={MAX_EMAIL_LENGTH}
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
        maxLength={MAX_PASSWORD_LENGTH}
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
        maxLength={MAX_PASSWORD_LENGTH}
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
