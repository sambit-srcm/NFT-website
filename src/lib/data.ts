/**
 * All the site's mock content, in one place until there's a real backend.
 * Swapping this for API/CMS calls later won't touch any component.
 */

// A themed group of NFTs by one creator. Used on the homepage's Trending
// Collection section and the artist page's Collection tab.
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

// The three stat counters under the homepage's hero banner.
export const STATS = [
  { value: 240, suffix: "k+", label: "Total Sale" },
  { value: 100, suffix: "k+", label: "Auctions" },
  { value: 240, suffix: "k+", label: "Artists" },
] as const;

// One row in the homepage's Top Creators leaderboard.
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

// The genre tiles in the homepage's Browse Categories section.
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

// The shape every NFT card uses, across every page.
export type Nft = {
  id: string;
  name: string;
  creator: string;
  price: number;
  highestBid: number;
};

// The homepage's Discover More NFTs section.
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

// The homepage's "How It Works" 3-step walkthrough.
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

// The wallet options on the Connect Wallet page.
export type Wallet = { id: string; name: string };

export const WALLETS: Wallet[] = [
  { id: "metamask", name: "Metamask" },
  { id: "walletconnect", name: "WalletConnect" },
  { id: "coinbase", name: "Coinbase" },
];

// The creator shown on the artist page.
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

// The artist page's three tabs. Counts are just display numbers.
export const ARTIST_TABS = [
  { id: "created", label: "Created", count: 302 },
  { id: "owned", label: "Owned", count: 67 },
  { id: "collection", label: "Collection", count: 4 },
] as const;

export type ArtistTabId = (typeof ARTIST_TABS)[number]["id"];

// NFTs under the artist page's Created and Owned tabs.
export const ARTIST_PORTFOLIO: Record<Exclude<ArtistTabId, "collection">, Nft[]> = {
  created: [
    {
      id: "space-walking-02",
      name: "Space Walking",
      creator: ARTIST.name,
      price: 1.28,
      highestBid: 0.22,
    },
    {
      id: "icecream-dreams",
      name: "Icecream Dreams",
      creator: ARTIST.name,
      price: 1.55,
      highestBid: 0.31,
    },
    {
      id: "colorful-companion",
      name: "Colorful Companion",
      creator: ARTIST.name,
      price: 1.79,
      highestBid: 0.44,
    },
  ],
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
};

// The artist page's Collection tab, reusing the homepage's collections.
export const ARTIST_COLLECTIONS: Collection[] = COLLECTIONS;

// The marketplace page's listings.
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

// The marketplace page's two tabs.
export const MARKETPLACE_TABS = [
  { id: "nfts", label: "NFTs", count: 302 },
  { id: "collections", label: "Collections", count: 67 },
] as const;

export type MarketplaceTabId = (typeof MARKETPLACE_TABS)[number]["id"];

// One row in the rankings page's leaderboard.
export type RankedCreator = {
  rank: number;
  name: string;
  /** Percentage movement over the selected period. */
  change: number;
  nftsSold: number;
  volume: number;
};

// The rankings page's period tabs. shortLabel shows on narrow screens.
export const RANKING_PERIODS = [
  { id: "today", label: "Today", shortLabel: "1D" },
  { id: "week", label: "This Week", shortLabel: "7D" },
  { id: "month", label: "This Month", shortLabel: "30D" },
  { id: "all", label: "All Time", shortLabel: "All" },
] as const;

export type RankingPeriodId = (typeof RANKING_PERIODS)[number]["id"];

// The 20 creators on the rankings page.
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

// Every creator and period uses the same fixed figures.
const RANKED_CREATORS: RankedCreator[] = RANKED_NAMES.map((name, index) => ({
  rank: index + 1,
  name,
  change: 1.41,
  nftsSold: 602,
  volume: 12.4,
}));

// Rows shown per period tab. All four periods share the same rows.
export const RANKINGS: Record<RankingPeriodId, RankedCreator[]> = {
  today: RANKED_CREATORS,
  week: RANKED_CREATORS,
  month: RANKED_CREATORS,
  all: RANKED_CREATORS,
};

// The NFT shown on the NFT detail page.
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

// The one NFT the detail page displays.
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
