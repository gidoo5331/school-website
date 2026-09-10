import Image from "next/image";
import { getStockImage } from "@/lib/stock-images";
import { PlaceholderImage } from "./placeholder-image";

interface SiteImageProps {
  src?: string;
  alt: string;
  category: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a real photo via next/image, preferring an explicit `src` (i.e.
 * once a file exists under /public/images) and falling back to a stock
 * photo keyed by `category` (see lib/stock-images.ts). If neither is
 * available, falls back to a labeled placeholder block. Always fills its
 * positioned parent — wrap in a `relative` container with the desired
 * aspect ratio/size.
 */
export function SiteImage({ src, alt, category, className, sizes, priority }: SiteImageProps) {
  const resolvedSrc = src ?? getStockImage(category);

  if (!resolvedSrc) {
    return <PlaceholderImage category={category} className={className} />;
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={className}
    />
  );
}
