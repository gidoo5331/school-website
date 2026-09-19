"use client";

import { useEffect } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DialogPortal, DialogOverlay, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/shared/site-image";
import type { GalleryImage } from "@/types/gallery";

interface GalleryLightboxProps {
  images: readonly GalleryImage[];
  index: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onIndexChange: (index: number) => void;
}

export function GalleryLightbox({ images, index, open, onOpenChange, onIndexChange }: GalleryLightboxProps) {
  const image = images[index];

  useEffect(() => {
    if (!open || images.length < 2) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onIndexChange((index + 1) % images.length);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, index, images.length, onIndexChange]);

  if (!image) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80" />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className="fixed top-1/2 left-1/2 z-50 flex w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col gap-3 p-4 outline-none data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted sm:aspect-video">
            <SiteImage
              src={image.image}
              alt={image.caption}
              category={image.imageCategory}
              className="object-contain"
              sizes="(min-width: 640px) 56rem, 100vw"
              priority
            />
          </div>
          <p className="text-center text-sm text-white">{image.caption}</p>

          <DialogClose
            data-slot="dialog-close"
            render={<Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white hover:bg-white/10 hover:text-white" />}
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close</span>
          </DialogClose>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white"
                onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
                aria-label="Previous photo"
              >
                <ChevronLeft aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white"
                onClick={() => onIndexChange((index + 1) % images.length)}
                aria-label="Next photo"
              >
                <ChevronRight aria-hidden="true" />
              </Button>
            </>
          )}
        </DialogPrimitive.Popup>
      </DialogPortal>
    </DialogPrimitive.Root>
  );
}
