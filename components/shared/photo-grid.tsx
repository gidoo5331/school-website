import { SiteImage } from "@/components/shared/site-image";
import type { GalleryImage } from "@/types/gallery";
import { cn } from "@/lib/utils";

interface PhotoGridProps {
  images: readonly GalleryImage[];
  className?: string;
  onImageClick?: (index: number) => void;
}

export function PhotoGrid({ images, className, onImageClick }: PhotoGridProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:grid-cols-4", className)}>
      {images.map((image, index) =>
        onImageClick ? (
          <button
            key={image.id}
            type="button"
            onClick={() => onImageClick(index)}
            className="relative aspect-square overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <SiteImage
              src={image.image}
              alt={image.caption}
              category={image.imageCategory}
              className="object-cover"
            />
          </button>
        ) : (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
            <SiteImage
              src={image.image}
              alt={image.caption}
              category={image.imageCategory}
              className="object-cover"
            />
          </div>
        ),
      )}
    </div>
  );
}
