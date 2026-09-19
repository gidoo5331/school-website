import { SectionTitle } from "@/components/shared/section-title";
import { SiteImage } from "@/components/shared/site-image";
import { iconMap, type IconKey } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: IconKey;
  title: string;
  description: string;
  imageCategory?: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  items: readonly FeatureItem[];
  columns?: 3 | 4;
}

export function FeatureGrid({ eyebrow, title, items, columns = 4 }: FeatureGridProps) {
  return (
    <>
      <SectionTitle eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
      <div
        className={cn(
          "mt-10 grid gap-6 sm:grid-cols-2",
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl bg-background ring-1 ring-border transition-shadow duration-200 hover:shadow-[0_8px_30px_-12px] hover:shadow-primary/20"
            >
              {item.imageCategory && (
                <div className="relative aspect-video overflow-hidden">
                  <SiteImage
                    category={item.imageCategory}
                    alt={item.title}
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
