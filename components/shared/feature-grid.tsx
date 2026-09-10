import { SectionTitle } from "@/components/shared/section-title";
import { iconMap, type IconKey } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: IconKey;
  title: string;
  description: string;
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
            <div key={item.title} className="rounded-xl bg-background p-6 ring-1 ring-border">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
