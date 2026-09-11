import { SiteImage } from "@/components/shared/site-image";

interface PhotoHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
  category: string;
}

export function PhotoHero({ title, description, eyebrow, category }: PhotoHeroProps) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category={category} alt="" className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/85 to-primary/60" />
        <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-white/85">{description}</p>}
      </div>
    </section>
  );
}
