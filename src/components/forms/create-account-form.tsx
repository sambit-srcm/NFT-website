"use client";

import { useState } from "react";
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

const EMPTY: Values = { username: "", email: "", password: "", confirmPassword: "" };

export function CreateAccountForm() {
  const [values, setValues] = useState<Values>(EMPTY);

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        onChange={(event) => update("confirmPassword", event.target.value)}
      />

      <Button type="submit" size="lg" fullWidth>
        Create account
      </Button>
    </form>
  );
}
