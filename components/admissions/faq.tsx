import { FaqAccordion } from "@/components/shared/faq-accordion";
import { admissions } from "@/data/admissions";

export function Faq() {
  return (
    <section className="bg-muted/30 py-16">
      <FaqAccordion items={admissions.faqs} />
    </section>
  );
}
