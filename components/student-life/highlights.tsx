import { FeatureGrid } from "@/components/shared/feature-grid";
import { studentLife } from "@/data/student-life";

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FeatureGrid
        eyebrow={studentLife.eyebrow}
        title={studentLife.title}
        items={studentLife.items}
        columns={3}
      />
    </section>
  );
}
