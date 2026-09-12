import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { StaffCard } from "@/components/shared/staff-card";
import { seniorHighStaff } from "@/data/senior-high/staff";

const leadership = seniorHighStaff;

export function Leadership() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Leadership" title="Meet Our Leadership" align="center" className="mx-auto" />
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {leadership.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
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
