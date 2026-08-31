/**
 * Maps `Art` and `Avatar` seeds to the artwork exported from the Figma file.
 *
 * Seeds that are absent fall back to the placeholder image, so a missing
 * export degrades to a placeholder rather than a broken image.
 */

/** Collection tiles double as NFT artwork in the design, so some files are shared. */
export const ART_BY_SEED: Record<string, string> = {};

/** Avatars are keyed by creator name, matched case-insensitively. */
const AVATAR_BY_NAME: Record<string, string> = {};

export function artSrc(seed: string): string | undefined {
  return ART_BY_SEED[seed];
}

export function avatarSrc(seed: string): string | undefined {
  const key = seed.toLowerCase().replace(/[^a-z0-9]/g, "");
  return AVATAR_BY_NAME[key];
}
