import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ContactInfo } from "@/components/contact/contact-info";
import { LocationMap } from "@/components/contact/location-map";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Obama College — address, phone, email, and a contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you."
        breadcrumb={[{ label: "Contact" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactInfo />
            <LocationMap />
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Send Us a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
