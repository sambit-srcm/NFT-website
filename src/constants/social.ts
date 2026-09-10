import {
  DiscordIcon,
  GlobeIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";

/** Site-wide social links, shown in the footer. */
export const SITE_SOCIALS = [
  { label: "Discord", href: "#discord", Icon: DiscordIcon },
  { label: "YouTube", href: "#youtube", Icon: YoutubeIcon },
  { label: "Twitter", href: "#twitter", Icon: TwitterIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
];

/** An artist's own social links, shown on their profile page. */
export const ARTIST_SOCIALS = [
  { label: "Website", href: "#website", Icon: GlobeIcon },
  { label: "Discord", href: "#discord", Icon: DiscordIcon },
  { label: "YouTube", href: "#youtube", Icon: YoutubeIcon },
  { label: "Twitter", href: "#twitter", Icon: TwitterIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
];
