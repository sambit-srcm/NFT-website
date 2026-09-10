import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-3 rounded-[20px] font-semibold " +
  "transition duration-200 focus-visible:outline-2 disabled:opacity-60";

/**
 * Hover squeeze. Shared by every clickable surface on the site, so cards, nav
 * links and buttons all respond the same way. Opted out of by buttons sitting
 * flush inside another shape, where shrinking would open a gap.
 */
export const squeezeEffect = "motion-safe:hover:scale-95 motion-safe:active:scale-[0.92]";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-strong",
  secondary: "bg-surface text-ink hover:bg-surface-raised",
  outline: "border-2 border-brand text-ink hover:bg-brand",
  white: "bg-white text-canvas hover:bg-white/90",
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
  /** Set false where shrinking would open a gap against a neighbouring element. */
  squeeze?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & { href: string };
type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };

/** Renders an anchor when given `href`, a button otherwise — one component, correct semantics either way. */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    icon,
    fullWidth,
    squeeze = true,
    children,
    className,
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    squeeze && squeezeEffect,
    className,
  );

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

  const {
    variant: _v,
    size: _s,
    icon: _i,
    fullWidth: _f,
    squeeze: _sq,
    className: _c,
    ...rest
  } = props;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
