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
      <path d="M12 2.5c2.8 2.2 4.2 5.1 4.2 8.6L12 15.5l-4.2-4.4c0-3.5 1.4-6.4 4.2-8.6Z" {...base} />
      <circle cx="12" cy="9" r="1.6" {...base} />
      <path
        d="m7.8 11.1-2.3 2.3 1 3.4 2.6-1.4M16.2 11.1l2.3 2.3-1 3.4-2.6-1.4M10.6 18.4h2.8"
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

export function PaletteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z"
        {...base}
      />
      <path d="M7.5 12h.01M9.5 8h.01M14.5 7.5h.01M17.5 11h.01" {...base} />
    </svg>
  );
}

export function CollectibleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z M4 7.5 12 12l8-4.5M12 12v9" {...base} />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path d="M9 18V6l11-2v12" {...base} />
      <circle cx="6.5" cy="18" r="2.5" {...base} />
      <circle cx="17.5" cy="16" r="2.5" {...base} />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path d="M3 8h3l2-3h8l2 3h3v11H3z" {...base} />
      <circle cx="12" cy="13" r="3.5" {...base} />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <rect x="3" y="6" width="12" height="12" rx="3" {...base} />
      <path d="m15 12 6-3.5v11L15 12Z" {...base} />
    </svg>
  );
}

export function UtilityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" {...base} />
    </svg>
  );
}

export function SportIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" {...base} />
      <path d="M3.5 9.5h17M3.5 14.5h17M12 3c-3 3-3 15 0 18M12 3c3 3 3 15 0 18" {...base} />
    </svg>
  );
}

export function VirtualWorldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="7" {...base} />
      <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-25 12 12)" {...base} />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18v3M3 7.5V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M3 7.5h16a2 2 0 0 1 2 2V11"
        {...base}
      />
      <path d="M17.5 13h3.5v3h-3.5a1.5 1.5 0 0 1 0-3Z" {...base} />
    </svg>
  );
}

export function CoinsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" {...props}>
      <ellipse cx="12" cy="6.5" rx="7" ry="3" {...base} />
      <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" {...base} />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" {...base} />
      <circle cx="12" cy="12" r="3" {...base} />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <rect x="4" y="10" width="16" height="10" rx="2.5" {...base} />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2.5" {...base} />
    </svg>
  );
}

export function MetamaskIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path d="m3 4 7.5 5.5h3L21 4l-2 7 2 6-4.5 3h-9L3 17l2-6L3 4Z" {...base} />
      <path d="M10.5 9.5 9 13h6l-1.5-3.5M9 13l-1.5 4M15 13l1.5 4" {...base} />
    </svg>
  );
}

export function WalletConnectIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path
        d="M5.5 9.8a9 9 0 0 1 13 0M8.2 12.6a5.2 5.2 0 0 1 7.6 0M10.9 15.4a1.6 1.6 0 0 1 2.2 0"
        {...base}
      />
    </svg>
  );
}

export function CoinbaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" {...base} />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" {...base} />
    </svg>
  );
}
