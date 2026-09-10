import Link from "next/link";

import { Art } from "@/components/ui/art";
import { squeezeEffect } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CATEGORY_ICONS } from "@/constants/icons";
import { cn } from "@/lib/cn";
import { CATEGORIES } from "@/lib/data";

/** Homepage section listing the NFT genre tiles to browse by. */
export function BrowseCategories() {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <SectionHeading title="Browse Categories" />
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => {
            const Icon = CATEGORY_ICONS[category.id];

            return (
              <Reveal as="li" key={category.id} delay={Math.min(index, 7) * 0.05}>
                <Link
                  href={`#${category.id}`}
                  className={cn(
                    "bg-surface hover:bg-surface-raised block overflow-hidden rounded-[20px] transition duration-200",
                    squeezeEffect,
                  )}
                >
                  <div className="relative">
                    <Art
                      seed={`category-${category.id}`}
                      rounded="rounded-none"
                      className="aspect-square w-full opacity-70"
                    />
                    <span className="absolute inset-0 grid place-items-center backdrop-blur-[15px]">
                      <Icon className="size-14 text-white drop-shadow sm:size-20" />
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
