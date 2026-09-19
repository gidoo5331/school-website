import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhotoHero } from "@/components/shared/photo-hero";
import { ChecklistSection } from "@/components/shared/checklist-section";
import { seniorHighPrograms } from "@/data/senior-high/programs";

export function generateStaticParams() {
  return seniorHighPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(
  props: PageProps<"/programmes/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = seniorHighPrograms.find((p) => p.slug === slug);

  if (!program) return {};

  return { title: program.title, description: program.overview };
}

export default async function ProgrammePage(props: PageProps<"/programmes/[slug]">) {
  const { slug } = await props.params;
  const program = seniorHighPrograms.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <PhotoHero
        title={program.title}
        description={program.overview}
        category={program.imageCategory}
        breadcrumb={[
          { label: "Programmes", href: "/programmes" },
          { label: program.title },
        ]}
      />

      <div className="py-16">
        <ChecklistSection
          eyebrow="Subjects"
          title="Core & Elective Subjects"
          items={program.subjects}
          columns={3}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        />
      </div>

      <div className="bg-muted/30 py-16">
        <ChecklistSection
          eyebrow="Careers"
          title="Career Opportunities"
          items={program.careers}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        />
      </div>

      <div className="py-16">
        <ChecklistSection
          eyebrow="Requirements"
          title="Admission Requirements"
          items={program.requirements}
          columns={1}
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        />
      </div>
    </>
  );
}
