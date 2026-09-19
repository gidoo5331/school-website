import { site } from "@/data/site";
import { getStockImage } from "@/lib/stock-images";
import type { NewsArticle } from "@/types/news";

export function resolveArticleImage(article: NewsArticle) {
  return article.image ?? getStockImage(article.imageCategory) ?? `${site.url}/logo.jpeg`;
}

export function getArticleSchema(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    image: resolveArticleImage(article),
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: site.fullName,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.jpeg` },
    },
    mainEntityOfPage: `${site.url}/news/${article.slug}`,
  };
}

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
