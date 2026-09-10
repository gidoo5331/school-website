import { ExternalLink } from "lucide-react";
import { site } from "@/data/site";

export function LocationMap() {
  const { lat, lng } = site.map.coordinates;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <div className="space-y-3">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl ring-1 ring-border">
        <iframe
          title={`${site.fullName} location map`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <a
        href={site.map.placeUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        View on Google Maps <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}
