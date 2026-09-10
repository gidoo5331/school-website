import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";

interface AdmissionsTeaserProps {
  description: string;
}

export function AdmissionsTeaser({ description }: AdmissionsTeaserProps) {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Admissions"
          title="Ready to Apply?"
          description={description}
          align="center"
          className="mx-auto"
        />
        <Link
          href="/admissions"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View Admissions Requirements <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
