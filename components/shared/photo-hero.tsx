import { SiteImage } from "@/components/shared/site-image";

interface PhotoHeroProps {
  title: string;
  description?: string;
  category: string;
}

export function PhotoHero({ title, description, category }: PhotoHeroProps) {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category={category} alt="" className="object-cover brightness-[0.65]" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h1 className="font-heading text-4xl font-semibold sm:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-lg text-white/85">{description}</p>}
      </div>
    </section>
  );
}
