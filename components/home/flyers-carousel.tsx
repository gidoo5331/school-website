"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteImage } from "@/components/shared/site-image";
import { seniorHighFlyers } from "@/data/senior-high/flyers";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 2500;

export function FlyersCarousel() {
  const flyers = seniorHighFlyers;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % flyers.length) + flyers.length) % flyers.length);
    },
    [flyers.length],
  );

  useEffect(() => {
    if (flyers.length < 2 || isPaused || shouldReduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % flyers.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [flyers.length, isPaused, shouldReduceMotion]);

  if (flyers.length === 0) return null;

  return (
    <section
      aria-label="Current activities and announcements"
      aria-roledescription="carousel"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchCancel={() => setIsPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(index - 1);
        if (event.key === "ArrowRight") goTo(index + 1);
      }}
    >
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-border">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 35 }}
        >
          {flyers.map((flyer, i) => {
            const slide = (
              <div className="bg-background">
                <div className="relative aspect-video w-full bg-primary sm:aspect-21/9">
                  <SiteImage
                    src={flyer.image}
                    alt={flyer.title}
                    category="Events"
                    className={flyer.fit === "cover" ? "object-cover" : "object-contain"}
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/40 px-5 py-4">
                  <p className="font-heading text-base font-semibold text-foreground sm:text-lg">{flyer.title}</p>
                  {flyer.link && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                      {flyer.linkLabel ?? "Learn More"}
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <div key={flyer.id} className="w-full shrink-0" aria-hidden={i !== index}>
                {flyer.link ? (
                  <Link href={flyer.link} className="block" tabIndex={i === index ? 0 : -1}>
                    {slide}
                  </Link>
                ) : (
                  slide
                )}
              </div>
            );
          })}
        </motion.div>

        {flyers.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous"
              className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground ring-1 ring-border backdrop-blur transition hover:bg-background"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next"
              className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground ring-1 ring-border backdrop-blur transition hover:bg-background"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {flyers.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {flyers.map((flyer, i) => (
            <button
              key={flyer.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn("h-1.5 rounded-full transition-all", i === index ? "w-6 bg-primary" : "w-1.5 bg-border")}
            />
          ))}
        </div>
      )}
    </section>
  );
}
