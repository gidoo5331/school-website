import { CtaButtons } from "@/components/shared/cta-buttons";
import { SiteImage } from "@/components/shared/site-image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category="Campus" alt="" className="object-cover brightness-[0.65]" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 sm:py-36 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-secondary uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          {site.location}
        </p>
        <h1 className="mt-2 font-heading text-5xl font-semibold sm:text-7xl lg:text-8xl">{site.name}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{site.motto}</p>
        <CtaButtons
          className="mt-8 justify-center"
          onDark
          primary={{ label: "Explore Programmes", href: "/programmes" }}
          secondary={{ label: "Admissions", href: "/admissions" }}
        />
      </div>
    </section>
  );
}
