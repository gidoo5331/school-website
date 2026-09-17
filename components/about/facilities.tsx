import { SectionTitle } from "@/components/shared/section-title";
import { SiteImage } from "@/components/shared/site-image";
import { seniorHighOverview } from "@/data/senior-high/overview";

const facilities = seniorHighOverview.facilities;

export function Facilities() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Facilities" title="What's on Campus" align="center" className="mx-auto" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <li
              key={facility.name}
              className="group relative aspect-4/3 overflow-hidden rounded-xl ring-1 ring-border"
            >
              <SiteImage
                category={facility.imageCategory}
                alt={facility.name}
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
                {facility.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
