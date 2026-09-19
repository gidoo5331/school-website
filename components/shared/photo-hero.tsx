import { Breadcrumb } from "@/components/shared/breadcrumb";
import { SiteImage } from "@/components/shared/site-image";
import { cn } from "@/lib/utils";

interface PhotoHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  category: string;
  src?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PhotoHero({ title, description, eyebrow, category, src, breadcrumb }: PhotoHeroProps) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category={category} src={src} alt="" className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        {breadcrumb && <Breadcrumb items={breadcrumb} onDark />}
        {eyebrow && (
          <p className={cn("text-xs font-bold tracking-[0.18em] text-gold uppercase", breadcrumb && "mt-4")}>
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-white/85">{description}</p>}
      </div>
    </section>
  );
}
