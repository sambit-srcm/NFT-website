"use client";

import type { ChangeEvent } from "react";

import { SearchIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/**
 * Search input with a visible label.
 *
 * The label is visually hidden rather than omitted, so the field still has an
 * accessible name once the placeholder disappears.
 */
export function SearchField({
  id,
  label,
  placeholder,
  value,
  onChange,
  className,
}: {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="bg-surface focus-within:ring-brand flex items-center gap-3 rounded-[20px] px-5 py-3 focus-within:ring-2">
        <span aria-hidden="true" className="text-ink-muted shrink-0">
          <SearchIcon />
        </span>
        <input
          id={id}
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
          className="text-ink w-full bg-transparent outline-none placeholder:text-neutral-500"
        />
      </div>
    </div>
  );
}
