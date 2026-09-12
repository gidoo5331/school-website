import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "@/components/shared/social-icons";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

const footerLinks = navigation.flatMap((item) => item.children ?? [item]);

const socialLinks = [
  { key: "facebook", href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { key: "twitter", href: site.social.twitter, label: "Twitter / X", Icon: TwitterIcon },
  { key: "instagram", href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
].filter((link) => link.href);

const headingClass = "text-xs font-bold tracking-[0.16em] text-gold uppercase";
const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-lg bg-white p-0.5 ring-1 ring-white/20"
            />
            <div>
              <p className="font-heading text-lg leading-tight font-semibold text-white">
                {site.fullName}
              </p>
              <p className="text-xs text-white/60">
                {site.shortName} &middot; Est. {site.established} &middot; &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">{site.description}</p>

          {socialLinks.length > 0 && (
            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ key, href, label, Icon }) => (
                <li key={key}>
                  <Link
                    href={href!}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <p className={headingClass}>Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={headingClass}>Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.contact.address}</span>
            </li>
            {site.contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="px-4 text-center text-xs text-white/55 sm:px-6 lg:px-8">
          &copy; {year} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
