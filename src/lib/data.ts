/**
 * Landing page content.
 *
 * Kept in one module so copy can be edited without touching layout, and so it
 * can later be swapped for a CMS query with no change to the sections.
 */

export type Collection = {
  id: string;
  name: string;
  creator: string;
  /** Extra items beyond the three tiles shown. */
  more: number;
};

export const COLLECTIONS: Collection[] = [
  { id: "dsgn-animals", name: "Dsgn Animals", creator: "MrFox", more: 1025 },
  { id: "magic-mushrooms", name: "Magic Mushrooms", creator: "Shroomie", more: 1025 },
  { id: "disco-machines", name: "Disco Machines", creator: "BeKind2Robots", more: 1025 },
];

export const STATS = [
  { value: 240, suffix: "k+", label: "Total Sale" },
  { value: 100, suffix: "k+", label: "Auctions" },
  { value: 240, suffix: "k+", label: "Artists" },
] as const;

export type Creator = {
  rank: number;
  name: string;
  /** Total sales in ETH. */
  sales: number;
};

export const CREATORS: Creator[] = [
  { rank: 1, name: "Keepitreal", sales: 34.53 },
  { rank: 2, name: "DigiLab", sales: 32.13 },
  { rank: 3, name: "GravityOne", sales: 28.93 },
  { rank: 4, name: "Juanie", sales: 25.32 },
  { rank: 5, name: "BlueWhale", sales: 22.19 },
  { rank: 6, name: "MrFox", sales: 20.14 },
  { rank: 7, name: "Shroomie", sales: 18.63 },
  { rank: 8, name: "Robotica", sales: 15.32 },
  { rank: 9, name: "RustyRobot", sales: 12.34 },
  { rank: 10, name: "Animakid", sales: 10.34 },
  { rank: 11, name: "Dotgu", sales: 8.72 },
  { rank: 12, name: "Ghiblier", sales: 6.32 },
];

export type Category = { id: string; label: string };

export const CATEGORIES: Category[] = [
  { id: "art", label: "Art" },
  { id: "collectibles", label: "Collectibles" },
  { id: "music", label: "Music" },
  { id: "photography", label: "Photography" },
  { id: "video", label: "Video" },
  { id: "utility", label: "Utility" },
  { id: "sport", label: "Sport" },
  { id: "virtual-worlds", label: "Virtual Worlds" },
];
