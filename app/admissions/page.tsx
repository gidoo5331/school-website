import type { Metadata } from "next";
import { PhotoHero } from "@/components/shared/photo-hero";
import { Process } from "@/components/admissions/process";
import { Requirements } from "@/components/admissions/requirements";
import { FreeShs } from "@/components/admissions/free-shs";
import { Downloads } from "@/components/admissions/downloads";
import { KeyDates } from "@/components/admissions/key-dates";
import { Fees } from "@/components/admissions/fees";
import { Faq } from "@/components/admissions/faq";
import { ContactAdmissions } from "@/components/admissions/contact-admissions";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to gain admission to Obama College, Mankessim through the CSSPS, what Free SHS covers, prospectus downloads, key dates, and fees.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PhotoHero
        title="Admissions"
        description="Everything you need to know to join Obama College, Mankessim for the 2026/2027 academic year."
        category="Graduation"
        src="/images/students-in-uniform.jpg"
        breadcrumb={[{ label: "Admissions" }]}
      />
      <Process />
      <Requirements />
      <FreeShs />
      <Downloads />
      <KeyDates />
      {/* <Fees /> */}
      <Faq />
      <ContactAdmissions />
    </>
  );
}
