import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { StaffCard } from "@/components/shared/staff-card";
import { seniorHighStaff } from "@/data/senior-high/staff";

const leadership = seniorHighStaff.filter((staff) => staff.id.startsWith("shs-headmaster") || staff.id.startsWith("shs-assistant-head"));

export function Leadership() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Leadership" title="Meet Our Leadership" align="center" className="mx-auto" />
      <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
        {leadership.map((staff) => (
          <div
            key={staff.id}
            className="w-64 rounded-2xl bg-background p-8 ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <StaffCard staff={staff} size="lg" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/about/staff"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Meet the full staff
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
