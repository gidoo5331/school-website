import { Building2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { seniorHighOverview } from "@/data/senior-high/overview";

const facilities = seniorHighOverview.facilities;

export function Facilities() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Facilities" title="What's on Campus" align="center" className="mx-auto" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <li
              key={facility}
              className="flex items-center gap-3 rounded-xl bg-background p-4 ring-1 ring-border"
            >
              <Building2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">{facility}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
