import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { NewsGrid } from "@/components/news/news-grid";
import { getAllNews } from "@/lib/news";

const latestNews = getAllNews().slice(0, 3);

export function NewsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle eyebrow="News" title="Latest from Obama College" />
        <Link
          href="/news"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View All News <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8">
        <NewsGrid articles={latestNews} />
      </div>
    </section>
  );
}
