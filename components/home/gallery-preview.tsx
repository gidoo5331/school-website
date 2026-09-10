import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { SiteImage } from "@/components/shared/site-image";
import { seniorHighGallery } from "@/data/senior-high/gallery";

const previewImages = seniorHighGallery.slice(0, 8);

export function GalleryPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle eyebrow="Campus Gallery" title="Life at Obama College" />
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View Full Gallery <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {previewImages.map((image) => (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
            <SiteImage
              src={image.image}
              alt={image.caption}
              category={image.imageCategory}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
