import type { Metadata } from "next";
import { PhotoHero } from "@/components/shared/photo-hero";
import { Highlights } from "@/components/student-life/highlights";
import { ChecklistSection } from "@/components/shared/checklist-section";
import { seniorHighOverview } from "@/data/senior-high/overview";

export const metadata: Metadata = {
  title: "Student Life",
  description: "Sports, clubs, boarding, and student leadership opportunities at Obama College.",
};

export default function StudentLifePage() {
  return (
    <>
      <PhotoHero
        title="Student Life"
        description="Life at Obama College extends well beyond the classroom."
        category="Sports"
        src="/images/sports-football-trophy.jpg"
        breadcrumb={[{ label: "Student Life" }]}
      />
      <Highlights />

      <div className="bg-muted/30 py-16">
        <ChecklistSection
          eyebrow="Boarding"
          title="Day & Boarding"
          description={seniorHighOverview.boarding.description}
          items={seniorHighOverview.boarding.facilities}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        />
      </div>

      <div className="py-16">
        <ChecklistSection
          eyebrow="Student Leadership"
          title="Leadership Opportunities"
          items={seniorHighOverview.studentLeadership}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        />
      </div>
    </>
  );
}
