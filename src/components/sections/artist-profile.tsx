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

export function ArtistProfile() {
  return (
    <section>
      {/* Cover is shorter on small screens so the profile is not pushed off-screen. */}
      <Art
        seed={`${ARTIST.handle}-cover`}
        rounded="rounded-none"
        className="h-40 w-full sm:h-64 lg:h-[25rem]"
      />

      <Container>
        {/* The avatar straddles the cover edge, as in the design. */}
        <div className="-mt-12 sm:-mt-16 lg:-mt-20">
          <Avatar
            seed={ARTIST.handle}
            className="border-canvas size-24 border-4 sm:size-32 lg:size-[10.5rem]"
          />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <Reveal>
            <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px] lg:text-[51px]">
              {ARTIST.name}
            </h1>

            <dl className="mt-6 flex flex-wrap gap-8">
              {/*
               * Reversed so the value reads above its label without
               * duplicating the label for screen readers.
               */}
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

          <Reveal delay={0.08} className="flex flex-wrap items-center gap-4 lg:justify-end">
            <CopyAddress address={ARTIST.address} />
            <Button href="#follow" icon={<PlusIcon />}>
              Follow
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
