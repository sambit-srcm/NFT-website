import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SubscribeForm } from "@/components/layout/subscribe-form";
import { DiscordIcon, InstagramIcon, LogoMark, TwitterIcon, YoutubeIcon } from "@/components/icons";

const EXPLORE_LINKS = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Rankings", href: "#rankings" },
  { label: "Connect a wallet", href: "/connect-wallet" },
];

const SOCIALS = [
  { label: "Discord", href: "#discord", Icon: DiscordIcon },
  { label: "YouTube", href: "#youtube", Icon: YoutubeIcon },
  { label: "Twitter", href: "#twitter", Icon: TwitterIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface mt-auto">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="font-display flex items-center gap-3 text-[22px] font-bold">
              <LogoMark className="text-brand" />
              <span>NFT Marketplace</span>
            </Link>
            <p className="text-ink-subtle mt-6 max-w-xs">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-ink-subtle mt-6">Join our community</p>
            <ul className="mt-3 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="hover:text-brand block transition-colors"
                  >
                    <Icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore">
            <h2 className="font-display text-[22px] font-bold">Explore</h2>
            <ul className="mt-6 space-y-5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-subtle hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[22px] font-bold">Join our weekly digest</h2>
            <p className="text-ink-subtle mt-6">
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>
            <SubscribeForm className="mt-4" />
          </div>
        </div>

        <p className="text-ink-subtle pt-6 text-sm">Ⓒ NFT Market. Use this template freely.</p>
      </Container>
    </footer>
  );
}
