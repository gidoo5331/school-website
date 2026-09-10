import { SectionTitle } from "@/components/shared/section-title";
import { about } from "@/data/about";

export function CoreValues() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What We Stand For"
          title="Our Core Values"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.coreValues.map((value) => (
            <div
              key={value.title}
              className="rounded-xl bg-background p-6 text-center ring-1 ring-border"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
