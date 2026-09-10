import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="How to Apply" title="Admission Process" align="center" className="mx-auto" />
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {admissions.process.map((item) => (
          <li key={item.step} className="rounded-xl p-6 ring-1 ring-border">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {item.step}
            </span>
            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
