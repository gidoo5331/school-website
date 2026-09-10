import { FeatureGrid } from "@/components/shared/feature-grid";
import { homeContent } from "@/data/home";

export function WhyChooseUs() {
  const { eyebrow, title, items } = homeContent.whyChooseUs;

  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FeatureGrid eyebrow={eyebrow} title={title} items={items} />
      </div>
    </section>
  );
}
