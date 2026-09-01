import Link from "next/link";

import { Art } from "@/components/ui/art";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import {
  CameraIcon,
  CollectibleIcon,
  MusicIcon,
  PaletteIcon,
  SportIcon,
  UtilityIcon,
  VideoIcon,
  VirtualWorldIcon,
} from "@/components/icons";
import { CATEGORIES } from "@/lib/data";

const ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  art: PaletteIcon,
  collectibles: CollectibleIcon,
  music: MusicIcon,
  photography: CameraIcon,
  video: VideoIcon,
  utility: UtilityIcon,
  sport: SportIcon,
  "virtual-worlds": VirtualWorldIcon,
};

export function BrowseCategories() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading title="Browse Categories" />
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => {
            const Icon = ICONS[category.id];

            return (
              <Reveal as="li" key={category.id} delay={Math.min(index, 7) * 0.05}>
                <Link
                  href={`#${category.id}`}
                  className="bg-surface hover:bg-surface-raised group block overflow-hidden rounded-[20px] transition-colors"
                >
                  <div className="relative">
                    <Art
                      seed={`category-${category.id}`}
                      rounded="rounded-none"
                      className="aspect-square w-full opacity-70"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <Icon className="size-10 text-white drop-shadow sm:size-14" />
                    </span>
                  </div>
                  <h3 className="font-display px-4 py-4 text-lg font-semibold sm:px-5 sm:text-xl">
                    {category.label}
                  </h3>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
