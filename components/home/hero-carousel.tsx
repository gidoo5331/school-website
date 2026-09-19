"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CtaButtons } from "@/components/shared/cta-buttons";
import { SiteImage } from "@/components/shared/site-image";
import { seniorHighFlyers } from "@/data/senior-high/flyers";
import { site } from "@/data/site";
import type { Flyer } from "@/types/flyer";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;
const SLIDE_HEIGHT = "min-h-[520px] sm:min-h-[600px] lg:min-h-[680px]";

type Slide = { kind: "hero" } | { kind: "flyer"; flyer: Flyer };

export function HeroCarousel() {
  const slides: Slide[] = [
    { kind: "hero" },
    ...seniorHighFlyers.map((flyer) => ({ kind: "flyer" as const, flyer })),
  ];
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (slides.length < 2 || isPaused || shouldReduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isPaused, shouldReduceMotion]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Obama College highlights and current announcements"
      className="relative isolate overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(index - 1);
        if (event.key === "ArrowRight") goTo(index + 1);
      }}
    >
      <motion.div
        className="flex"
        animate={{ x: `-${index * 100}%` }}
        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 35 }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.kind === "hero" ? "hero" : slide.flyer.id}
            className="w-full shrink-0"
            aria-hidden={i !== index}
            inert={i !== index}
          >
            {slide.kind === "hero" ? (
              <HeroSlide priority={i === 0} />
            ) : (
              <FlyerSlide flyer={slide.flyer} priority={i === 0} />
            )}
          </div>
        ))}
      </motion.div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous"
            className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next"
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:bottom-5">
            {slides.map((slide, i) => (
              <button
                key={slide.kind === "hero" ? "hero" : slide.flyer.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={cn("h-1.5 rounded-full transition-all", i === index ? "w-6 bg-white" : "w-1.5 bg-white/40")}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function HeroSlide({ priority }: { priority: boolean }) {
  return (
    <div className={cn("relative isolate flex items-center", SLIDE_HEIGHT)}>
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <SiteImage category="Campus" alt="" className="object-cover" priority={priority} />
        <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/55" />
        <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Image
          src="/logo.jpeg"
          alt=""
          width={80}
          height={80}
          className="size-16 rounded-2xl bg-white p-1 shadow-lg ring-1 ring-white/25 sm:size-20"
          priority={priority}
        />
        <p className="mt-6 text-xs font-bold tracking-[0.22em] text-gold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {site.location}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-6xl lg:text-7xl">{site.name}</h1>
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
    </div>
  );
}

function FlyerSlide({ flyer, priority }: { flyer: Flyer; priority: boolean }) {
  const content = (
    <div className={cn("flex flex-col", SLIDE_HEIGHT)}>
      <div className="relative flex-1 bg-primary">
        <SiteImage
          src={flyer.image}
          alt={flyer.title}
          category="Events"
          className="object-contain"
          sizes="100vw"
          priority={priority}
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-primary px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <p className="font-heading text-lg font-semibold text-white sm:text-xl">{flyer.title}</p>
        {flyer.link && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary">
            {flyer.linkLabel ?? "Learn More"}
            <ChevronRight className="size-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </div>
  );

  return flyer.link ? (
    <Link href={flyer.link} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
