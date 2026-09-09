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

export type Nft = {
  id: string;
  name: string;
  creator: string;
  price: number;
  highestBid: number;
};

export const NFTS: Nft[] = [
  {
    id: "distant-galaxy",
    name: "Distant Galaxy",
    creator: "MoonDancer",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    id: "life-on-edena",
    name: "Life On Edena",
    creator: "NebulaKid",
    price: 1.63,
    highestBid: 0.33,
  },
  { id: "astrofiction", name: "AstroFiction", creator: "Spaceone", price: 1.63, highestBid: 0.33 },
];

export const STEPS = [
  {
    id: "wallet",
    title: "Setup Your Wallet",
    body: "Set up your wallet of choice. Connect it to the marketplace by clicking the wallet icon in the top right corner.",
  },
  {
    id: "collection",
    title: "Create Collection",
    body: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    id: "earning",
    title: "Start Earning",
    body: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
] as const;

export type Wallet = { id: string; name: string };

export const WALLETS: Wallet[] = [
  { id: "metamask", name: "Metamask" },
  { id: "walletconnect", name: "WalletConnect" },
  { id: "coinbase", name: "Coinbase" },
];

export type Artist = {
  handle: string;
  name: string;
  bio: string;
  address: string;
  stats: Array<{ value: string; label: string }>;
};

export const ARTIST: Artist = {
  handle: "animakid",
  name: "Animakid",
  bio: "The Internet's Friendliest Designer Kid.",
  address: "0xc0E3F82CB9c1B79C7c8dB1E5b3F1B79C7c8dB79C",
  stats: [
    { value: "250k+", label: "Volume" },
    { value: "50+", label: "NFTs Sold" },
    { value: "3000+", label: "Followers" },
  ],
};

/** Portfolio tabs. Counts are the totals shown on the tab, not the page size. */
export const ARTIST_TABS = [
  { id: "created", label: "Created", count: 302 },
  { id: "owned", label: "Owned", count: 67 },
  { id: "collection", label: "Collection", count: 4 },
] as const;

export type ArtistTabId = (typeof ARTIST_TABS)[number]["id"];

/** Which NFTs appear under each tab. */
export const ARTIST_PORTFOLIO: Record<ArtistTabId, Nft[]> = {
  created: NFTS,
  owned: [
    {
      id: "magic-mushroom",
      name: "Magic Mushroom",
      creator: "Shroomie",
      price: 2.41,
      highestBid: 0.71,
    },
    { id: "dsgn-animal", name: "Dsgn Animal", creator: "MrFox", price: 1.98, highestBid: 0.42 },
  ],
  collection: [
    {
      id: "disco-machine",
      name: "Disco Machine",
      creator: "BeKind2Robots",
      price: 3.12,
      highestBid: 1.04,
    },
  ],
};

/** Listings shown on the marketplace browse page. */
export const MARKETPLACE_NFTS: Nft[] = [
  {
    id: "magic-mushroom-0325",
    name: "Magic Mushroom 0325",
    creator: "Shroomie",
    price: 1.63,
    highestBid: 0.33,
  },
  {
    id: "happy-robot-032",
    name: "Happy Robot 032",
    creator: "BeKind2Robots",
    price: 1.94,
    highestBid: 0.41,
  },
  { id: "designer-bear", name: "Designer Bear", creator: "MrFox", price: 2.12, highestBid: 0.55 },
  {
    id: "space-walking-02",
    name: "Space Walking",
    creator: "Animakid",
    price: 1.28,
    highestBid: 0.22,
  },
  { id: "iridescence", name: "Iridescence", creator: "Keepitreal", price: 3.04, highestBid: 0.98 },
  { id: "cyber-samurai", name: "Cyber Samurai", creator: "DigiLab", price: 2.47, highestBid: 0.61 },
  { id: "moon-dancer", name: "Moon Dancer", creator: "MoonDancer", price: 1.11, highestBid: 0.18 },
  { id: "nebula-kid", name: "Nebula Kid", creator: "NebulaKid", price: 2.85, highestBid: 0.74 },
  {
    id: "orbital-drift",
    name: "Orbital Drift",
    creator: "Orbitian",
    price: 1.72,
    highestBid: 0.36,
  },
];

export const MARKETPLACE_TABS = [
  { id: "nfts", label: "NFTs", count: 302 },
  { id: "collections", label: "Collections", count: 67 },
] as const;

export type MarketplaceTabId = (typeof MARKETPLACE_TABS)[number]["id"];

export const SORT_OPTIONS = [
  { id: "recent", label: "Recently added" },
  { id: "price-low", label: "Price: low to high" },
  { id: "price-high", label: "Price: high to low" },
  { id: "name", label: "Name: A to Z" },
] as const;

export type SortId = (typeof SORT_OPTIONS)[number]["id"];

export type RankedCreator = {
  rank: number;
  name: string;
  /** Percentage movement over the selected period. */
  change: number;
  nftsSold: number;
  volume: number;
};

export const RANKING_PERIODS = [
  { id: "today", label: "Today" },
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
  { id: "all", label: "All Time" },
] as const;

export type RankingPeriodId = (typeof RANKING_PERIODS)[number]["id"];

const RANKED_NAMES = [
  "Jaydon Ekstrom Bothman",
  "Ruben Carder",
  "Alfredo Septimus",
  "Davis Franci",
  "Maren Rosser",
  "Kaiya Vetrovs",
  "Gustavo Bergson",
  "Tiana Rosser",
  "Marley Bator",
  "Alfonso Septimus",
  "Angel Rosser",
  "Cristofer Vaccaro",
  "Terry Dorwart",
  "Jaylon Vaccaro",
  "Talan Bator",
  "Zaire Dorwart",
  "Kianna Vetrovs",
  "Cooper Levin",
  "Nolan Carder",
  "Adison Aminoff",
];

/**
 * Rankings are derived rather than hand-written so each period returns a
 * distinct, stable ordering without twenty rows repeated four times.
 */
function buildRankings(seed: number): RankedCreator[] {
  return RANKED_NAMES.map((name, index) => {
    const drift = ((index * 7 + seed * 13) % 19) - 6;

    return {
      rank: index + 1,
      name,
      change: Number((drift / 2 + 1.41).toFixed(2)),
      nftsSold: 602 - index * 17 - seed * 9,
      volume: Number((12.4 - index * 0.31 - seed * 0.4).toFixed(2)),
    };
  });
}

export const RANKINGS: Record<RankingPeriodId, RankedCreator[]> = {
  today: buildRankings(0),
  week: buildRankings(1),
  month: buildRankings(2),
  all: buildRankings(3),
};

export type NftDetail = {
  id: string;
  name: string;
  mintedOn: string;
  creator: string;
  collection: string;
  description: string[];
  tags: string[];
  price: number;
  highestBid: number;
  links: Array<{ label: string; href: string }>;
};

export const NFT_DETAIL: NftDetail = {
  id: "the-orbitians",
  name: "The Orbitians",
  mintedOn: "Sep 30, 2022",
  creator: "Orbitian",
  collection: "A collection of 10,000 unique NFTs on the Ethereum blockchain.",
  description: [
    "The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain.",
    "There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.",
    "They live in a metal space machines, high up in the sky and only have one foot on Earth.",
    "These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.",
  ],
  tags: ["ANIMATION", "ILLUSTRATION", "MOON"],
  price: 1.63,
  highestBid: 0.33,
  links: [
    { label: "View on Etherscan", href: "#etherscan" },
    { label: "View Original", href: "#original" },
  ],
};

/** Other work by the same creator, shown beneath the detail panel. */
export const MORE_FROM_ARTIST: Nft[] = [
  { id: "foxy-life", name: "Foxy Life", creator: "Orbitian", price: 1.63, highestBid: 0.33 },
  {
    id: "cat-from-future",
    name: "Cat From Future",
    creator: "Orbitian",
    price: 1.63,
    highestBid: 0.33,
  },
  { id: "psycho-dog", name: "Psycho Dog", creator: "Orbitian", price: 1.63, highestBid: 0.33 },
];
