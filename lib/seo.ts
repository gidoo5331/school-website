import { site } from "@/data/site";

export function getSchoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: site.fullName,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/logo.jpeg`,
    image: `${site.url}/logo.jpeg`,
    description: site.description,
    foundingDate: String(site.established),
    slogan: site.motto,
    email: site.contact.email,
    telephone: site.contact.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: "Mankessim",
      addressRegion: "Central Region",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.map.coordinates.lat,
      longitude: site.map.coordinates.lng,
    },
  };
}
