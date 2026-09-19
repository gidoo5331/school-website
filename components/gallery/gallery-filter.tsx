"use client";

import { useMemo, useState } from "react";
import { PhotoGrid } from "@/components/shared/photo-grid";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { cn } from "@/lib/utils";
import type { GalleryImage, GalleryCategory } from "@/types/gallery";

const categories: GalleryCategory[] = [
  "Campus",
  "Students",
  "Events",
  "Sports",
  "Classrooms",
  "Computer Lab",
  "Graduation",
  "Hostel",
];

export function GalleryFilter({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const availableCategories = useMemo(
    () => categories.filter((category) => images.some((image) => image.imageCategory === category)),
    [images],
  );

  const filtered = useMemo(
    () => (active === "All" ? images : images.filter((image) => image.imageCategory === active)),
    [images, active],
  );

  function selectCategory(category: GalleryCategory | "All") {
    setActive(category);
    setLightboxIndex(null);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => selectCategory("All")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            active === "All"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
        >
          All
        </button>
        {availableCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => selectCategory(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <PhotoGrid
        images={filtered}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        onImageClick={setLightboxIndex}
      />

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">No photos in this category yet.</p>
      )}

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
}
