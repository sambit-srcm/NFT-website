import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 rounded-[20px] font-semibold " +
  "transition-colors duration-200 focus-visible:outline-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-strong",
  secondary: "bg-surface text-ink hover:bg-surface-raised",
  outline: "border-2 border-brand text-ink hover:bg-brand",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & { href: string };
type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };

/**
 * Renders an anchor when given `href`, otherwise a button, so calls to action
 * stay semantically correct without a second component.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", icon, fullWidth, children, className } = props;

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  const content = (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, icon: _i, fullWidth: _f, className: _c, ...rest } = props;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
