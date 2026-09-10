import type { Metadata } from "next";
import { PhotoHero } from "@/components/shared/photo-hero";
import { ChecklistSection } from "@/components/shared/checklist-section";
import { AdmissionsTeaser } from "@/components/shared/admissions-teaser";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ProgrammesSection } from "@/components/programmes/programmes-section";
import { Cta } from "@/components/home/cta";
import { seniorHighOverview } from "@/data/senior-high/overview";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "General Arts, Business, Home Economics, and Visual Arts at Obama College Senior High School, each with WASSCE-focused teaching and career guidance.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PhotoHero
        title="Academic Programmes"
        description={seniorHighOverview.intro}
        category="Classrooms"
      />
      <ProgrammesSection />

      <div className="bg-muted/30 py-16">
        <ChecklistSection
          eyebrow="Academic Excellence"
          title="Preparing for WASSCE and Beyond"
          items={seniorHighOverview.academicExcellence}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        />
      </div>

      <AdmissionsTeaser description="Ready to apply to Obama College Senior High School? See what you'll need to apply." />

      <div className="py-16">
        <FaqAccordion items={seniorHighOverview.faqs} />
      </div>

      <Cta />
    </>
  );
}
