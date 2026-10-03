"use client";

import { useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";

import { cn } from "@/lib/cn";

export const tabId = (prefix: string, id: string) => `${prefix}-tab-${id}`;
export const panelId = (prefix: string, id: string) => `${prefix}-panel-${id}`;

/** Tab row. Arrow keys, Home, and End move between tabs. */
export function TabList<Tab extends { id: string }>({
  label,
  idPrefix,
  tabs,
  active,
  onChange,
  renderTab,
  className,
  tabClassName,
}: {
  label: string;
  idPrefix: string;
  tabs: ReadonlyArray<Tab>;
  active: Tab["id"];
  onChange: (id: Tab["id"]) => void;
  renderTab: (tab: Tab) => ReactNode;
  className?: string;
  tabClassName?: string;
}) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const current = tabs.findIndex((tab) => tab.id === active);
    const last = tabs.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: current === last ? 0 : current + 1,
      ArrowLeft: current === 0 ? last : current - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];

    if (next === undefined) return;

    event.preventDefault();
    onChange(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
      className={cn("flex border-b border-white/10", className)}
    >
      {tabs.map((tab, index) => {
        const selected = tab.id === active;

        return (
          <button
            key={tab.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            role="tab"
            id={tabId(idPrefix, tab.id)}
            type="button"
            aria-selected={selected}
            aria-controls={panelId(idPrefix, tab.id)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              "font-display flex-1 border-b-4 py-4 text-base font-semibold transition-colors sm:text-lg lg:px-10",
              selected
                ? "border-brand text-ink"
                : "text-ink-muted hover:text-ink border-transparent",
              tabClassName,
            )}
          >
            {renderTab(tab)}
          </button>
        );
      })}
    </div>
  );
}
