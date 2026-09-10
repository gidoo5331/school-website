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
    </section>
  );
}
