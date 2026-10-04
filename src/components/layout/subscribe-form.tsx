"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { MAX_EMAIL_LENGTH, isValidEmail } from "@/constants/validation";
import { cn } from "@/lib/cn";

/** Newsletter signup. Pass to keep the email and button in one pill. */
export function SubscribeForm({
  className,
  merged = false,
}: {
  className?: string;
  merged?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const errorId = "subscribe-email-error";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleaned = email.trim();
    setEmail(cleaned);

    if (!cleaned) {
      setStatus("idle");
      setError("Email address is required.");
      inputRef.current?.focus();
      return;
    }

    if (cleaned.length > MAX_EMAIL_LENGTH) {
      setStatus("idle");
      setError(`Email address must be ${MAX_EMAIL_LENGTH} characters or fewer.`);
      inputRef.current?.focus();
      return;
    }

    if (!isValidEmail(cleaned)) {
      setStatus("idle");
      setError("Enter a valid email address.");
      inputRef.current?.focus();
      return;
    }

    setError(undefined);
    setStatus("done");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("w-full", className)}>
      <div
        className={cn(
          "flex flex-col gap-3",
          merged
            ? "bg-ink flex-row gap-0 overflow-hidden rounded-[20px]"
            : "sm:bg-ink sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-[20px]",
        )}
      >
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          ref={inputRef}
          type="email"
          maxLength={MAX_EMAIL_LENGTH}
          value={email}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(undefined);
            if (status === "done") setStatus("idle");
          }}
          placeholder="Enter your email here"
          className={cn(
            "text-canvas w-full rounded-[20px] px-5 py-3 outline-none placeholder:text-neutral-500",
            merged ? "rounded-none bg-transparent" : "bg-ink sm:rounded-none sm:bg-transparent",
            error && "ring-2 ring-red-400",
          )}
        />
        <Button
          type="submit"
          squeeze={false}
          className={cn(
            "shrink-0",
            merged ? "rounded-l-[20px] rounded-r-none" : "sm:rounded-l-[20px] sm:rounded-r-none",
          )}
        >
          Subscribe
        </Button>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-3 text-sm text-red-300">
          {error}
        </p>
      ) : null}
      <p
        role="status"
        aria-live="polite"
        className={cn("mt-3 text-sm", status === "done" ? "text-brand" : "sr-only")}
      >
        {status === "done" ? "Thanks — you are on the list." : ""}
      </p>
    </form>
  );
}
