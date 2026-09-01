"use client";

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type FieldProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
  icon?: ReactNode;
  error?: string;
};

/**
 * Text input with a visible, associated label.
 *
 * A placeholder is not a label: it disappears the moment the visitor types and
 * is not reliably announced, so every field gets a real label element. The
 * leading icon is decorative and hidden from assistive technology.
 */
export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { id, label, icon, error, className, ...props },
  ref,
) {
  const errorId = `${id}-error`;

  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      <div
        className={cn(
          "bg-surface flex items-center gap-3 rounded-[20px] px-5 py-3 transition-colors",
          "focus-within:ring-brand focus-within:ring-2",
          error && "ring-2 ring-red-400",
        )}
      >
        {icon ? (
          <span aria-hidden="true" className="text-ink-muted shrink-0">
            {icon}
          </span>
        ) : null}

        <input
          id={id}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="text-ink w-full bg-transparent outline-none placeholder:text-neutral-500"
          {...props}
        />
      </div>

      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
});
