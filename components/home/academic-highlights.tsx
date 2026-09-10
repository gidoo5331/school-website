import { FeatureGrid } from "@/components/shared/feature-grid";
import { homeContent } from "@/data/home";

export function AcademicHighlights() {
  const { eyebrow, title, items } = homeContent.academicHighlights;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FeatureGrid eyebrow={eyebrow} title={title} items={items} />
    </section>
  );
}
