import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";

export function Requirements() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Requirements" title="What You'll Need" align="center" className="mx-auto" />
        <ul className="mt-10 space-y-3 rounded-xl bg-background p-6 ring-1 ring-border">
          {admissions.requirements.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
