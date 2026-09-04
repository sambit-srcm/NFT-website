"use client";

import type { ChangeEvent } from "react";

import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * Styled wrapper around a native select.
 *
 * A native control is used deliberately: it inherits keyboard behaviour and
 * the platform picker on touch devices, which a custom listbox would have to
 * reimplement.
 */
export function Select<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
  className,
}: {
  id: string;
  label: string;
  value: T;
  options: ReadonlyArray<{ id: T; label: string }>;
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value as T)}
        className="bg-surface text-ink focus-visible:ring-brand w-full appearance-none rounded-[20px] py-3 pr-12 pl-5 outline-none focus-visible:ring-2"
      >
        {options.map((option) => (
          <option key={option.id} value={option.id} className="bg-surface">
            {option.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className="text-ink-muted pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
      >
        <ChevronDownIcon />
      </span>
    </div>
  );
}
