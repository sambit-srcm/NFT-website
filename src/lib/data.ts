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
