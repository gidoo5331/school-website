import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { StaffCard } from "@/components/shared/staff-card";
import { seniorHighStaff } from "@/data/senior-high/staff";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the leadership and staff of Obama College, Mankessim — the team guiding our Senior High School.",
  // Uncomment the following line to prevent search engines from indexing this page if desired.
    robots: { index: false, follow: false },
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {seniorHighStaff.map((staff) => (
            <div
              key={staff.id}
              className="rounded-2xl bg-background p-6 ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <StaffCard staff={staff} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
