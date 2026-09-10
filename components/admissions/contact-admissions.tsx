import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function ContactAdmissions() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-secondary uppercase">Contact Admissions</p>
        <h2 className="mt-1 font-heading text-3xl font-semibold sm:text-4xl">
          Have questions about applying?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Reach out to the admissions office — we&apos;re happy to walk you through the process.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:underline">
            <Mail className="size-4" aria-hidden="true" /> {site.contact.email}
          </a>
          {site.contact.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="size-4" aria-hidden="true" /> {phone}
            </a>
          ))}
          <span className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" /> {site.location}
          </span>
        </div>
      </div>
    </section>
  );
}
