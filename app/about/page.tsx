import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Overview } from "@/components/about/overview";
import { CoreValues } from "@/components/about/core-values";
import { Leadership } from "@/components/about/leadership";
import { Facilities } from "@/components/about/facilities";
import { Achievements } from "@/components/about/achievements";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Obama College, Mankessim — a Free SHS school founded in 2009 — its history, vision, mission, and the values guiding our work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Obama College"
        description="A mixed Day and Boarding Senior High School in Mankessim, serving the Central Region since 2009."
        breadcrumb={[{ label: "About" }]}
      />
      <Overview />
      <CoreValues />
      <Leadership />
      <Facilities />
      <Achievements />
      <WhyChooseUs />
    </>
  );
}
