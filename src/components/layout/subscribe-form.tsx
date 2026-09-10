"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/**
 * Newsletter capture with local-only validation (no backend yet).
 *
 * The email field and button split on mobile and merge into one pill from
 * `sm:` up by default. Pass `merged` to keep the pill at every size — used
 * in the footer, which has no room for stacked fields.
 */
export function SubscribeForm({
  className,
  merged = false,
}: {
  className?: string;
  merged?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("done");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
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
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email here"
          className={cn(
            "text-canvas w-full rounded-[20px] px-5 py-3 outline-none placeholder:text-neutral-500",
            merged ? "rounded-none bg-transparent" : "bg-ink sm:rounded-none sm:bg-transparent",
          )}
        />
        <Button
          type="submit"
          className={cn(
            "shrink-0",
            merged ? "rounded-l-[20px] rounded-r-none" : "sm:rounded-l-[20px] sm:rounded-r-none",
          )}
        >
          Subscribe
        </Button>
      </div>
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
