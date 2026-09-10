import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { NewsGrid } from "@/components/news/news-grid";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from Obama College Senior High School.",
};

export default function NewsPage() {
  const articles = getAllNews();

  return (
    <>
      <PageHeader
        title="News"
        description="Stay up to date with what's happening at Obama College."
        breadcrumb={[{ label: "News" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <NewsGrid articles={articles} />
      </div>
    </>
  );
}
