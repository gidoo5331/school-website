import Image from "next/image";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { SiteImage } from "@/components/shared/site-image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category="Campus" alt="" className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/55" />
        <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <Image
          src="/logo.jpeg"
          alt=""
          width={80}
          height={80}
          className="size-16 rounded-2xl bg-white p-1 shadow-lg ring-1 ring-white/25 sm:size-20"
          priority
        />
        <p className="mt-6 text-xs font-bold tracking-[0.22em] text-gold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {site.location}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-6xl lg:text-7xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
          A mixed Day &amp; Boarding Senior High School guided by one belief since 2009 —{" "}
          <span className="font-semibold text-white">&ldquo;{site.motto}&rdquo;</span>
        </p>
        <CtaButtons
          className="mt-9 justify-center"
          onDark
          primary={{ label: "Explore Programmes", href: "/programmes" }}
          secondary={{ label: "Admissions", href: "/admissions" }}
        />
      </div>
    </section>
  );
}
