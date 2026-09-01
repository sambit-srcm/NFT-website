import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/** Page gutter shared by every section, so content lines up across the page. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1250px] px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

/**
 * Section title plus optional supporting line, with an optional trailing slot
 * for a desktop action that collapses below the heading on small screens.
 */
export function SectionHeading({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}
    >
      <div className="max-w-2xl">
        <h2 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px]">
          {title}
        </h2>
        {description ? (
          <p className="text-ink-subtle mt-2 text-lg sm:text-xl">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
