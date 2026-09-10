import { SectionTitle } from "@/components/shared/section-title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  title?: string;
  items: readonly FaqItem[];
}

export function FaqAccordion({
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  items,
}: FaqAccordionProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
      <Accordion className="mt-10">
        {items.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
