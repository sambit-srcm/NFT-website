import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path
        d="M3 9.5 5 4h14l2 5.5M3 9.5h18M3 9.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9M8 9.5a4 4 0 0 0 8 0"
        {...base}
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" {...base} />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" {...props}>
      <path d="m6 6 12 12M18 6 6 18" {...base} />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20a8 8 0 0 1 16 0" {...base} />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path
        d="M14 4c3.5 0 6 2.5 6 6 0 4.5-4 8.5-8 10l-2-2-2-2C9.5 12 13.5 4 14 4Z M9.5 14.5 6 18M7 11H4l2-3h3"
        {...base}
      />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path d="M3 6h18v12H3z M3 7l9 6 9-6" {...base} />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path
        d="M8 5.5 6 6c-2 3-2.5 6.5-2 10.5 0 0 2 1.5 5 2l1-2m6-11 2 .5c2 3 2.5 6.5 2 10.5 0 0-2 1.5-5 2l-1-2"
        {...base}
      />
      <path d="M9 13.5h.01M15 13.5h.01M8 5.5c2.5-.7 5.5-.7 8 0" {...base} />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" {...base} />
      <path d="m10.5 9.5 5 2.5-5 2.5z" {...base} />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path
        d="M21 6.5c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.8-2.5.9A3.6 3.6 0 0 0 12 8.6c0 .3 0 .6.1.8A10 10 0 0 1 4.5 5.5a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5 0 1.7 1.2 3.2 2.9 3.5-.6.2-1.1.2-1.7.1a3.6 3.6 0 0 0 3.4 2.5A7.2 7.2 0 0 1 3 17.4 10.2 10.2 0 0 0 18.7 8.8c.7-.5 1.7-1.3 2.3-2.3Z"
        {...base}
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...base} />
      <circle cx="12" cy="12" r="3.8" {...base} />
      <path d="M17 7h.01" {...base} />
    </svg>
  );
}
