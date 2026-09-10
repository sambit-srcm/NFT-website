import type { ReactElement } from "react";

import {
  CameraIcon,
  CoinsIcon,
  CollectibleIcon,
  CollectionIcon,
  MusicIcon,
  PaletteIcon,
  SportIcon,
  UtilityIcon,
  VideoIcon,
  VirtualWorldIcon,
  WalletIcon,
} from "@/components/icons";

/** Icon for each "How it works" step, keyed by STEPS[].id. */
export const HOW_IT_WORKS_ICONS = {
  wallet: WalletIcon,
  collection: CollectionIcon,
  earning: CoinsIcon,
} as const;

/** Icon for each browse category, keyed by CATEGORIES[].id. */
export const CATEGORY_ICONS: Record<string, (props: { className?: string }) => ReactElement> = {
  art: PaletteIcon,
  collectibles: CollectibleIcon,
  music: MusicIcon,
  photography: CameraIcon,
  video: VideoIcon,
  utility: UtilityIcon,
  sport: SportIcon,
  "virtual-worlds": VirtualWorldIcon,
};
