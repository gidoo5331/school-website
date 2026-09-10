"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { homeContent } from "@/data/home";

interface StatProps {
  label: string;
  value: number;
  suffix: string;
}

function Stat({ label, value, suffix }: StatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: shouldReduceMotion ? 0 : 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div className="text-center">
      <p ref={ref} className="font-heading text-4xl font-semibold text-primary sm:text-5xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {homeContent.statistics.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
