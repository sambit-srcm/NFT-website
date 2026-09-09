import { Art, Avatar } from "@/components/ui/art";
import type { Collection } from "@/lib/data";

/**
 * Collection tile with a primary image plus two secondary thumbnails and a
 * "+N" count, matching the multi-image treatment in Figma.
 *
 * Extracted so Trending Collection and the artist's Collection tab render
 * the same card rather than each maintaining its own copy of the markup.
 */
export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <>
      <Art seed={collection.id} className="aspect-[330/330] w-full" />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Art seed={`${collection.id}-a`} className="aspect-square w-full" />
        <Art seed={`${collection.id}-b`} className="aspect-square w-full" />
        <div className="bg-brand font-display grid aspect-square w-full place-items-center rounded-[20px] text-lg font-semibold sm:text-xl">
          {collection.more}+
        </div>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold sm:text-[22px]">{collection.name}</h3>
      <div className="mt-2 flex items-center gap-3">
        <Avatar seed={collection.creator} className="size-6" />
        <span className="text-ink-subtle">{collection.creator}</span>
      </div>
    </>
  );
}
