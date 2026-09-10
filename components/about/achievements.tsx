import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { about } from "@/data/about";

export function Achievements() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones We're Proud Of"
        align="center"
        className="mx-auto"
      />
      <ul className="mt-10 space-y-4">
        {about.achievements.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
