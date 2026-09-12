import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { StaffCard } from "@/components/shared/staff-card";
import { seniorHighStaff } from "@/data/senior-high/staff";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the leadership and staff of Obama College, Mankessim — the team guiding our Senior High School.",
};

export default function StaffPage() {
  return (
    <>
      <PageHeader
        title="Our Staff"
        description="The leadership and staff guiding Obama College, Mankessim."
        breadcrumb={[{ label: "About", href: "/about" }, { label: "Staff" }]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {seniorHighStaff.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>
    </>
  );
}
