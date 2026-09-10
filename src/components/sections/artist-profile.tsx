import Link from "next/link";

import { Art, Avatar } from "@/components/ui/art";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CopyAddress } from "@/components/ui/copy-address";
import { Reveal } from "@/components/ui/reveal";
import {
  DiscordIcon,
  GlobeIcon,
  InstagramIcon,
  PlusIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import { ARTIST } from "@/lib/data";

const SOCIALS = [
  { label: "Website", href: "#website", Icon: GlobeIcon },
  { label: "Discord", href: "#discord", Icon: DiscordIcon },
  { label: "YouTube", href: "#youtube", Icon: YoutubeIcon },
  { label: "Twitter", href: "#twitter", Icon: TwitterIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
];

/** Artist page's header: cover image, avatar, bio, stats, and follow button. */
export function ArtistProfile() {
  return (
    <section>
      <Art
        seed={`${ARTIST.handle}-cover`}
        rounded="rounded-none"
        className="h-40 w-full sm:h-64 xl:h-[25rem]"
      />

      <Container>
        <div className="-mt-12 sm:-mt-16 xl:-mt-20">
          <Avatar
            seed={ARTIST.handle}
            className="border-canvas size-24 border-4 sm:size-32 xl:size-[10.5rem]"
          />
        </div>

        <div className="mt-6 grid gap-6 [grid-template-areas:'name'_'copy'_'details'] xl:grid-cols-[1fr_auto] xl:items-start xl:gap-8 xl:[grid-template-areas:'name_copy'_'details_copy']">
          <Reveal className="[grid-area:name]">
            <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] xl:text-[51px]">
              {ARTIST.name}
            </h1>
          </Reveal>

          <Reveal
            delay={0.04}
            className="flex flex-wrap items-center gap-4 [grid-area:copy] xl:justify-end"
          >
            <CopyAddress address={ARTIST.address} />
            <Button href="#follow" variant="outline" icon={<PlusIcon />}>
              Follow
            </Button>
          </Reveal>

          <Reveal delay={0.08} className="[grid-area:details]">
            <dl className="flex flex-wrap gap-8">
              {ARTIST.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-ink-subtle font-mono text-sm">{stat.label}</dt>
                  <dd className="font-display text-xl font-bold sm:text-[22px]">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-ink-subtle mt-8 font-mono text-sm">Bio</h2>
            <p className="mt-2 max-w-xl text-lg">{ARTIST.bio}</p>

            <h2 className="text-ink-subtle mt-8 font-mono text-sm">Links</h2>
            <ul className="mt-2 flex flex-wrap items-center gap-4">
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
