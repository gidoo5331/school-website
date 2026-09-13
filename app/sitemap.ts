import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { seniorHighPrograms } from "@/data/senior-high/programs";
import { seniorHighNews } from "@/data/senior-high/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about/staff`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/programmes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/admissions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/student-life`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/news`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const programmeRoutes: MetadataRoute.Sitemap = seniorHighPrograms.map((program) => ({
    url: `${site.url}/programmes/${program.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newsRoutes: MetadataRoute.Sitemap = seniorHighNews.map((article) => ({
    url: `${site.url}/news/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...programmeRoutes, ...newsRoutes];
}
