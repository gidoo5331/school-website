import { CalendarDays } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";

export function KeyDates() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Key Dates"
        title="2026/2027 Academic Year"
        align="center"
        className="mx-auto"
      />
      <ul className="mt-10 space-y-3">
        {admissions.keyDates.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3 rounded-xl bg-muted/30 p-4 ring-1 ring-border"
          >
            <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
