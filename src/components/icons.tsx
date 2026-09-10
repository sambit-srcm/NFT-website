import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Thinner weight for the social/link icons, distinct from the rest of the set. */
const thin = { ...base, strokeWidth: 1.5 };

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
    <svg viewBox="0 0 24 24" width={24} height={24} fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
        fill="currentColor"
      />
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
        {...thin}
      />
      <path d="M9 13.5h.01M15 13.5h.01M8 5.5c2.5-.7 5.5-.7 8 0" {...thin} />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" {...thin} />
      <path d="m10.5 9.5 5 2.5-5 2.5z" {...thin} />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <path
        d="M21 6.5c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.8-2.5.9A3.6 3.6 0 0 0 12 8.6c0 .3 0 .6.1.8A10 10 0 0 1 4.5 5.5a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5 0 1.7 1.2 3.2 2.9 3.5-.6.2-1.1.2-1.7.1a3.6 3.6 0 0 0 3.4 2.5A7.2 7.2 0 0 1 3 17.4 10.2 10.2 0 0 0 18.7 8.8c.7-.5 1.7-1.3 2.3-2.3Z"
        {...thin}
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 4.125C5.80393 4.125 4.125 5.80393 4.125 7.875V16.125C4.125 18.1961 5.80393 19.875 7.875 19.875H16.125C18.1961 19.875 19.875 18.1961 19.875 16.125V7.875C19.875 5.80393 18.1961 4.125 16.125 4.125H7.875ZM2.625 7.875C2.625 4.97551 4.97551 2.625 7.875 2.625H16.125C19.0245 2.625 21.375 4.97551 21.375 7.875V16.125C21.375 19.0245 19.0245 21.375 16.125 21.375H7.875C4.97551 21.375 2.625 19.0245 2.625 16.125V7.875Z"
        fill="currentColor"
      />
      <path
        d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Category icons below are traced from the Figma source (Phosphor icon set), 100x100 viewBox. */
const categoryIconBase = { ...base, strokeWidth: 3 };

export function PaletteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M7.8125 84.375H35.9375C39.9549 84.375 43.8821 83.1837 47.2225 80.9517C50.5629 78.7198 53.1664 75.5474 54.7038 71.8358C56.2412 68.1241 56.6435 64.04 55.8597 60.0997C55.0759 56.1595 53.1414 52.5402 50.3006 49.6994C47.4598 46.8586 43.8405 44.9241 39.9003 44.1403C35.96 43.3565 31.8759 43.7588 28.1642 45.2962C24.4526 46.8336 21.2802 49.4371 19.0483 52.7775C16.8163 56.1179 15.625 60.0451 15.625 64.0625C15.625 78.125 7.8125 84.375 7.8125 84.375Z"
        {...categoryIconBase}
      />
      <path
        d="M43.9053 45.3906C51.4053 35.2734 70.4678 12.1094 87.8896 12.1094C87.8896 29.5312 64.7256 48.5938 54.6084 56.0938"
        {...categoryIconBase}
      />
      <path
        d="M51.9531 35.3906C57.246 38.3777 61.6223 42.754 64.6094 48.0469"
        {...categoryIconBase}
      />
    </svg>
  );
}

export function CollectibleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M14.3355 67.5784L23.7887 14.0237C23.8547 13.6195 24.0006 13.2325 24.2178 12.8853C24.4349 12.538 24.719 12.2375 25.0535 12.0011C25.388 11.7648 25.7662 11.5974 26.166 11.5087C26.5659 11.4201 26.9794 11.4119 27.3824 11.4846L48.9449 15.2737C49.7596 15.426 50.482 15.8919 50.9568 16.5713C51.4316 17.2506 51.6209 18.0891 51.484 18.9065L41.9918 72.7737C41.3417 76.4009 39.2977 79.6295 36.2972 81.7685C33.2966 83.9076 29.578 84.7872 25.9371 84.219C18.1637 82.969 12.9684 75.3518 14.3355 67.5784Z"
        {...categoryIconBase}
      />
      <path
        d="M46.21 48.7501L74.6865 38.3985C75.0737 38.2556 75.4853 38.1907 75.8977 38.2077C76.31 38.2247 76.7149 38.3232 77.089 38.4976C77.4631 38.6719 77.7989 38.9186 78.0771 39.2234C78.3553 39.5282 78.5704 39.8851 78.71 40.2735L86.21 60.8204C86.4866 61.5976 86.4447 62.4526 86.0935 63.199C85.7422 63.9454 85.1101 64.5226 84.335 64.8048L32.9287 83.5157"
        {...categoryIconBase}
      />
      <path
        d="M85.9375 63.4766V81.25C85.9375 82.0788 85.6083 82.8737 85.0222 83.4597C84.4362 84.0458 83.6413 84.375 82.8125 84.375H28.125"
        {...categoryIconBase}
      />
      <circle cx="28.125" cy="70.3125" r="4.6875" fill="currentColor" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <circle cx="70.3125" cy="67.1875" r="10.9375" {...categoryIconBase} />
      <circle cx="20.3125" cy="79.6875" r="10.9375" {...categoryIconBase} />
      <path d="M81.25 31.25L31.25 43.75" {...categoryIconBase} />
      <path d="M31.25 79.6875V25L81.25 12.5V67.1875" {...categoryIconBase} />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M81.25 81.25H18.75C17.0924 81.25 15.5027 80.5915 14.3306 79.4194C13.1585 78.2473 12.5 76.6576 12.5 75V31.25C12.5 29.5924 13.1585 28.0027 14.3306 26.8306C15.5027 25.6585 17.0924 25 18.75 25H31.25L37.5 15.625H62.5L68.75 25H81.25C82.9076 25 84.4973 25.6585 85.6694 26.8306C86.8415 28.0027 87.5 29.5924 87.5 31.25V75C87.5 76.6576 86.8415 78.2473 85.6694 79.4194C84.4973 80.5915 82.9076 81.25 81.25 81.25Z"
        {...categoryIconBase}
      />
      <circle cx="50" cy="51.5625" r="14.0625" {...categoryIconBase} />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <path
        d="M9.375 23.4375H59.375C62.6902 23.4375 65.8696 24.7545 68.2138 27.0987C70.558 29.4429 71.875 32.6223 71.875 35.9375V73.4375C71.875 74.2663 71.5458 75.0612 70.9597 75.6472C70.3737 76.2333 69.5788 76.5625 68.75 76.5625H18.75C15.4348 76.5625 12.2554 75.2455 9.91117 72.9013C7.56696 70.5571 6.25 67.3777 6.25 64.0625V26.5625C6.25 25.7337 6.57924 24.9388 7.16529 24.3528C7.75134 23.7667 8.5462 23.4375 9.375 23.4375V23.4375Z"
        {...categoryIconBase}
      />
      <path d="M71.875 43.75L93.75 31.25V68.75L71.875 56.25" {...categoryIconBase} />
    </svg>
  );
}

export function UtilityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <path d="M84.375 50V68.75" {...categoryIconBase} />
      <path d="M75 59.375H93.75" {...categoryIconBase} />
      <path d="M32.8125 15.625V31.25" {...categoryIconBase} />
      <path d="M25 23.4375H40.625" {...categoryIconBase} />
      <path d="M65.625 71.875V84.375" {...categoryIconBase} />
      <path d="M59.375 78.125H71.875" {...categoryIconBase} />
      <path
        d="M72.8218 14.6987L14.7341 72.7864C13.5137 74.0068 13.5137 75.9854 14.7341 77.2058L22.8134 85.285C24.0338 86.5054 26.0124 86.5054 27.2328 85.285L85.3205 27.1973C86.5409 25.9769 86.5409 23.9983 85.3205 22.7779L77.2413 14.6987C76.0209 13.4783 74.0422 13.4783 72.8218 14.6987Z"
        {...categoryIconBase}
      />
      <path d="M56.25 31.25L68.75 43.75" {...categoryIconBase} />
    </svg>
  );
}

export function SportIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <circle cx="50" cy="50" r="37.5" {...categoryIconBase} />
      <path
        d="M23.4375 23.5176C30.449 30.5474 34.383 40.0732 34.375 50.002C34.383 59.9307 30.449 69.4565 23.4375 76.4863"
        {...categoryIconBase}
      />
      <path
        d="M76.5642 23.5176C69.5608 30.5526 65.6289 40.0752 65.6289 50.002C65.6289 59.9287 69.5608 69.4513 76.5642 76.4863"
        {...categoryIconBase}
      />
      <path d="M12.5 50H87.5" {...categoryIconBase} />
      <path d="M50 12.5V87.5" {...categoryIconBase} />
    </svg>
  );
}

export function VirtualWorldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 100 100" width={28} height={28} aria-hidden="true" {...props}>
      <circle cx="50" cy="50" r="34.375" {...categoryIconBase} />
      <path
        d="M71.9529 23.5547C82.7732 20.586 90.8982 20.8594 93.3201 25C97.617 32.461 81.7186 49.7266 57.8123 63.5157C33.9061 77.3047 11.0154 82.461 6.6795 75C4.29669 70.8594 8.12481 63.6719 16.0936 55.7813"
        {...categoryIconBase}
      />
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
    <svg viewBox="0 0 40 40" width={40} height={40} fill="none" aria-hidden="true" {...props}>
      <g clipPath="url(#metamask-clip)">
        <path
          d="M38.0082 1.5625L22.4004 13.1547L25.2867 6.31544L38.0082 1.5625Z"
          fill="#E2761B"
          stroke="#E2761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.97656 1.5625L17.4589 13.2645L14.7138 6.31544L1.97656 1.5625Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.3932 28.4336L28.2363 34.8022L37.1304 37.2493L39.6873 28.5748L32.3932 28.4336Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.330078 28.5748L2.87125 37.2493L11.7654 34.8022L7.60851 28.4336L0.330078 28.5748Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2636 17.6732L8.78516 21.4223L17.6165 21.8144L17.3028 12.3242L11.2636 17.6732Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.722 17.6717L22.6043 12.2129L22.4004 21.8129L31.2161 21.4207L28.722 17.6717Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7656 34.8014L17.0676 32.2132L12.4872 28.6367L11.7656 34.8014Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.918 32.2132L28.2356 34.8014L27.4984 28.6367L22.918 32.2132Z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.2356 34.8011L22.918 32.2129L23.3415 35.6796L23.2944 37.1384L28.2356 34.8011Z"
          fill="#D7C1B3"
          stroke="#D7C1B3"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7656 34.8011L16.7068 37.1384L16.6754 35.6796L17.0676 32.2129L11.7656 34.8011Z"
          fill="#D7C1B3"
          stroke="#D7C1B3"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.7849 26.3466L12.3613 25.0446L15.4829 23.6172L16.7849 26.3466Z"
          fill="#233447"
          stroke="#233447"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.1992 26.3466L24.5012 23.6172L27.6384 25.0446L23.1992 26.3466Z"
          fill="#233447"
          stroke="#233447"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.7643 34.8022L12.5172 28.4336L7.60742 28.5748L11.7643 34.8022Z"
          fill="#CD6116"
          stroke="#CD6116"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.4824 28.4336L28.2354 34.8022L32.3922 28.5748L27.4824 28.4336Z"
          fill="#CD6116"
          stroke="#CD6116"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.2161 21.4219L22.4004 21.814L23.2161 26.3474L24.518 23.618L27.6553 25.0454L31.2161 21.4219Z"
          fill="#CD6116"
          stroke="#CD6116"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3597 25.0454L15.4969 23.618L16.7832 26.3474L17.6146 21.814L8.7832 21.4219L12.3597 25.0454Z"
          fill="#CD6116"
          stroke="#CD6116"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.78516 21.4219L12.4871 28.6376L12.3616 25.0454L8.78516 21.4219Z"
          fill="#E4751F"
          stroke="#E4751F"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.6549 25.0454L27.498 28.6376L31.2157 21.4219L27.6549 25.0454Z"
          fill="#E4751F"
          stroke="#E4751F"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.6165 21.8145L16.7852 26.3478L17.8204 31.6968L18.0557 24.6537L17.6165 21.8145Z"
          fill="#E4751F"
          stroke="#E4751F"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4001 21.8145L21.9766 24.638L22.1648 31.6968L23.2158 26.3478L22.4001 21.8145Z"
          fill="#E4751F"
          stroke="#E4751F"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.215 26.3469L22.1641 31.6959L22.917 32.2135L27.4974 28.6371L27.6543 25.0449L23.215 26.3469Z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3613 25.0449L12.4868 28.6371L17.0672 32.2135L17.8202 31.6959L16.7849 26.3469L12.3613 25.0449Z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.295 37.138L23.3421 35.6792L22.9499 35.3341H17.0362L16.6754 35.6792L16.7068 37.138L11.7656 34.8008L13.4911 36.2125L16.9892 38.6439H22.997L26.5107 36.2125L28.2362 34.8008L23.295 37.138Z"
          fill="#C0AD9E"
          stroke="#C0AD9E"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.917 32.213L22.164 31.6953H17.8189L17.066 32.213L16.6738 35.6796L17.0346 35.3345H22.9483L23.3405 35.6796L22.917 32.213Z"
          fill="#161616"
          stroke="#161616"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.667 13.9076L40.0003 7.5076L38.0082 1.5625L22.918 12.7625L28.7219 17.6723L36.9258 20.0723L38.7454 17.9547L37.9611 17.39L39.216 16.2449L38.2435 15.4919L39.4984 14.5351L38.667 13.9076Z"
          fill="#763D16"
          stroke="#763D16"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 7.5076L1.33333 13.9076L0.486275 14.5351L1.74118 15.4919L0.784314 16.2449L2.03922 17.39L1.2549 17.9547L3.05882 20.0723L11.2627 17.6723L17.0667 12.7625L1.97647 1.5625L0 7.5076Z"
          fill="#763D16"
          stroke="#763D16"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36.9255 20.0719L28.7216 17.6719L31.2157 21.4209L27.498 28.6366L32.3922 28.5738H39.6863L36.9255 20.0719Z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2634 17.6719L3.05949 20.0719L0.330078 28.5738H7.60851L12.4869 28.6366L8.78498 21.4209L11.2634 17.6719Z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3992 21.8144L22.9168 12.7635L25.3011 6.31641H14.7129L17.0658 12.7635L17.6149 21.8144L17.8031 24.6693L17.8188 31.6968H22.1639L22.1952 24.6693L22.3992 21.8144Z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth="0.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="metamask-clip">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function WalletConnectIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" width={40} height={40} fill="none" aria-hidden="true" {...props}>
      <g clipPath="url(#walletconnect-clip)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="url(#walletconnect-gradient)"
        />
        <path
          d="M12.5586 15.4473C16.582 11.5176 23.1133 11.5176 27.1367 15.4473L27.6211 15.9238C27.8242 16.1191 27.8242 16.4395 27.6211 16.6348L25.9648 18.252C25.8633 18.3535 25.6992 18.3535 25.5977 18.252L24.9336 17.6035C22.1211 14.8613 17.5742 14.8613 14.7617 17.6035L14.0508 18.2988C13.9492 18.4004 13.7852 18.4004 13.6836 18.2988L12.0273 16.6816C11.8242 16.4863 11.8242 16.166 12.0273 15.9707L12.5586 15.4473ZM30.5664 18.791L32.043 20.2285C32.2461 20.4238 32.2461 20.7441 32.043 20.9395L25.3945 27.4316C25.1914 27.627 24.8633 27.627 24.668 27.4316L19.9492 22.8223C19.9023 22.7754 19.8164 22.7754 19.7695 22.8223L15.0508 27.4316C14.8477 27.627 14.5195 27.627 14.3242 27.4316L7.65234 20.9395C7.44922 20.7441 7.44922 20.4238 7.65234 20.2285L9.12891 18.791C9.33203 18.5957 9.66016 18.5957 9.85547 18.791L14.5742 23.4004C14.6211 23.4473 14.707 23.4473 14.7539 23.4004L19.4727 18.791C19.6758 18.5957 20.0039 18.5957 20.1992 18.791L24.918 23.4004C24.9648 23.4473 25.0508 23.4473 25.0977 23.4004L29.8164 18.791C30.0352 18.5957 30.3633 18.5957 30.5664 18.791Z"
          fill="white"
        />
      </g>
      <defs>
        <radialGradient
          id="walletconnect-gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.000123978 20.0006) scale(40)"
        >
          <stop stopColor="#5D9DF6" />
          <stop offset="1" stopColor="#006FFF" />
        </radialGradient>
        <clipPath id="walletconnect-clip">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CoinbaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" width={40} height={40} fill="none" aria-hidden="true" {...props}>
      <g clipPath="url(#coinbase-clip)">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#0052FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.9375 20C5.9375 27.7665 12.2335 34.0625 20 34.0625C27.7665 34.0625 34.0625 27.7665 34.0625 20C34.0625 12.2335 27.7665 5.9375 20 5.9375C12.2335 5.9375 5.9375 12.2335 5.9375 20ZM16.4062 15.4688C15.8885 15.4688 15.4688 15.8885 15.4688 16.4062V23.5938C15.4688 24.1115 15.8885 24.5312 16.4062 24.5312H23.5938C24.1115 24.5312 24.5312 24.1115 24.5312 23.5938V16.4062C24.5312 15.8885 24.1115 15.4688 23.5938 15.4688H16.4062Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="coinbase-clip">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" {...base} />
      <path
        d="M15 6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15"
        {...base}
      />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path d="M12 5v14M5 12h14" {...base} />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={32} height={32} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" {...thin} />
      <path d="M3.5 12h17M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" {...thin} />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" {...base} />
      <path d="m16 16 4 4" {...base} />
    </svg>
  );
}
export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path d="m6 9.5 6 6 6-6" {...base} />
    </svg>
  );
}
export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path
        d="M14 4h6v6M20 4l-8.5 8.5M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"
        {...base}
      />
    </svg>
  );
}
