import type { Metadata } from "next";
import { PhotoHero } from "@/components/shared/photo-hero";
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
      <PhotoHero
        title="Contact Us"
        description="We'd love to hear from you."
        category="Campus"
        src="/images/campus-classroom-block.jpg"
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
      {/* Static duplicate so Netlify's build-time HTML crawler can detect the
          "contact" form even though the real one only renders client-side. */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>
    </>
  );
}
