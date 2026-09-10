import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "@/components/shared/social-icons";
import { site } from "@/data/site";

const socialLinks = [
  { key: "facebook", href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { key: "twitter", href: site.social.twitter, label: "Twitter / X", Icon: TwitterIcon },
  { key: "instagram", href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
].filter((link) => link.href);

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">Address</p>
          <a
            href={site.map.placeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            {site.contact.address}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">Phone</p>
          {site.contact.phones.map((phone) => (
            <p key={phone} className="text-sm text-muted-foreground">
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                {phone}
              </a>
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">Email</p>
          <a href={`mailto:${site.contact.email}`} className="text-sm text-muted-foreground hover:text-primary">
            {site.contact.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold text-foreground">Office Hours</p>
          <p className="text-sm text-muted-foreground">{site.contact.officeHours}</p>
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-foreground">Follow Us</p>
          <ul className="mt-2 flex items-center gap-3">
            {socialLinks.map(({ key, href, label, Icon }) => (
              <li key={key}>
                <a
                  href={href!}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
