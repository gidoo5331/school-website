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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.jpeg" alt="" width={40} height={40} className="size-10 rounded-md" />
            <div>
              <p className="font-heading text-lg leading-tight font-semibold text-primary">
                {site.fullName}
              </p>
              <p className="text-xs text-muted-foreground">
                {site.shortName} &middot; Est. {site.established} &middot; &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{site.description}</p>

          {socialLinks.length > 0 && (
            <ul className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ key, href, label, Icon }) => (
                <li key={key}>
                  <Link
                    href={href!}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex size-8 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{site.contact.address}</span>
            </li>
            {site.contact.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-primary">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
