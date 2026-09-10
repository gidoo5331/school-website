import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  category: string;
  className?: string;
}

export function PlaceholderImage({ category, className }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${category}`}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/25",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,color-mix(in_oklch,var(--primary),transparent_92%)_10px,color-mix(in_oklch,var(--primary),transparent_92%)_11px)]"
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-primary/70">
        <ImageIcon className="size-8" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide uppercase">{category}</span>
      </div>
    </div>
  );
}
