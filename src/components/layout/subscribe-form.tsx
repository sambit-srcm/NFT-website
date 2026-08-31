"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/**
 * Newsletter capture. There is no backend yet, so the form validates locally
 * and reports success without pretending a request was sent.
 */
export function SubscribeForm({ className }: { className?: string }) {
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
      <div className="bg-ink flex flex-col gap-2 rounded-[20px] p-2 sm:flex-row">
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
          className="text-canvas w-full rounded-[20px] bg-transparent px-5 py-3 outline-none placeholder:text-neutral-500"
        />
        <Button type="submit" className="shrink-0">
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
