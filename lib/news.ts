import { seniorHighNews } from "@/data/senior-high/news";
import type { NewsArticle } from "@/types/news";

export function getAllNews(): NewsArticle[] {
  return [...seniorHighNews].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return getAllNews().find((article) => article.slug === slug);
}
