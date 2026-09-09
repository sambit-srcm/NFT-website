/** Maps `Art`/`Avatar` seeds to artwork files. A seed with no match falls back to a placeholder image. */

/** Collection tiles double as NFT artwork, so some files are reused. */
export const ART_BY_SEED: Record<string, string> = {
  // Landing page.
  "space-walking": "/images/nfts/space-walking.png",
  "weekly-digest": "/images/pages/subscribe.png",

  // Trending collections: one primary tile plus two secondary.
  "dsgn-animals": "/images/collections/dsgn-animals-primary.png",
  "dsgn-animals-a": "/images/collections/dsgn-animals-2.png",
  "dsgn-animals-b": "/images/collections/dsgn-animals-3.png",
  "magic-mushrooms": "/images/collections/magic-mushrooms-primary.png",
  "magic-mushrooms-a": "/images/collections/magic-mushrooms-2.png",
  "magic-mushrooms-b": "/images/collections/magic-mushrooms-3.png",
  "disco-machines": "/images/collections/disco-machines-primary.png",
  "disco-machines-a": "/images/collections/disco-machines-2.png",
  "disco-machines-b": "/images/collections/disco-machines-3.png",

  // Browse categories.
  "category-art": "/images/categories/art.png",
  "category-collectibles": "/images/categories/collectibles.png",
  "category-music": "/images/categories/music.png",
  "category-photography": "/images/categories/photography.png",
  "category-video": "/images/categories/video.png",
  "category-utility": "/images/categories/utility.png",
  "category-sport": "/images/categories/sport.png",
  "category-virtual-worlds": "/images/categories/virtual-worlds.png",

  // Discover NFTs.
  "distant-galaxy": "/images/nfts/distant-galaxy.png",
  "life-on-edena": "/images/nfts/space-tales.png",
  astrofiction: "/images/nfts/astrofiction.png",

  // Create account page.
  "create-account": "/images/pages/create-account.png",

  // Connect wallet page.
  "connect-wallet": "/images/pages/connect-wallet.png",

  // Artist page: cover plus the created, owned and collection tabs.
  "animakid-cover": "/images/pages/artist-cover.png",
  "icecream-dreams": "/images/nfts/icecream-ape.png",
  "colorful-companion": "/images/nfts/colorful-dog-0524.png",
  "magic-mushroom": "/images/collections/magic-mushrooms-primary.png",
  "dsgn-animal": "/images/collections/dsgn-animals-primary.png",
  "disco-machine": "/images/collections/disco-machines-primary.png",

  // NFT detail page and the row of other work by the same creator.
  "the-orbitians": "/images/nfts/sunset-dimension.png",
  "foxy-life": "/images/nfts/dancing-robot-0024.png",
  "cat-from-future": "/images/collections/dsgn-animals-2.png",
  "psycho-dog": "/images/nfts/colorful-dog-0344.png",

  // Marketplace listings.
  "magic-mushroom-0325": "/images/collections/magic-mushrooms-2.png",
  "happy-robot-032": "/images/nfts/happy-robot-024.png",
  "designer-bear": "/images/collections/dsgn-animals-3.png",
  "space-walking-02": "/images/nfts/space-walking.png",
  iridescence: "/images/nfts/colorful-dog-0356.png",
  "cyber-samurai": "/images/nfts/cryptocity.png",
  "moon-dancer": "/images/nfts/cherry-blossom-girl-035.png",
  "nebula-kid": "/images/nfts/space-travel.png",
  "orbital-drift": "/images/nfts/dancing-robot-0375.png",
};

/** Avatars are keyed by creator name, matched case-insensitively. */
const AVATAR_BY_NAME: Record<string, string> = {
  keepitreal: "/images/avatars/keepitreal.png",
  digilab: "/images/avatars/digilab.png",
  gravityone: "/images/avatars/gravityone.png",
  juanie: "/images/avatars/juanie.png",
  bluewhale: "/images/avatars/bluewhale.png",
  mrfox: "/images/avatars/mrfox.png",
  shroomie: "/images/avatars/shroomie.png",
  robotica: "/images/avatars/robotica.png",
  rustyrobot: "/images/avatars/rustyrobot.png",
  animakid: "/images/avatars/animakid.png",
  dotgu: "/images/avatars/dotgu.png",
  ghiblier: "/images/avatars/ghiblier.png",
  bekind2robots: "/images/avatars/bekind2robots.png",
  moondancer: "/images/avatars/moondancer.png",
  nebulakid: "/images/avatars/nebulakid.png",
  // Reused for Spaceone, which has no avatar of its own.
  spaceone: "/images/avatars/dotgu.png",
  // Reused for Orbitian, which has no avatar of its own.
  orbitian: "/images/avatars/rustyrobot.png",
};

/** Ranked creators are stock names, so they all share one avatar. */
const RANKED_AVATAR = "/images/avatars/ranked-creator.png";

const RANKED_NAME = /^[A-Z][a-z]+ [A-Z]/;

export function artSrc(seed: string): string | undefined {
  return ART_BY_SEED[seed];
}

export function avatarSrc(seed: string): string | undefined {
  const key = seed.toLowerCase().replace(/[^a-z0-9]/g, "");
  return AVATAR_BY_NAME[key] ?? (RANKED_NAME.test(seed) ? RANKED_AVATAR : undefined);
}
