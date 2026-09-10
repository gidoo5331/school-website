import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SiteImage } from "@/components/shared/site-image";
import type { NewsArticle } from "@/types/news";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsGrid({ articles }: { articles: readonly NewsArticle[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.id} className="overflow-hidden py-0">
          <div className="relative aspect-video">
            <SiteImage
              src={article.image}
              alt={article.title}
              category={article.imageCategory}
              className="object-cover"
            />
          </div>
          <CardContent className="py-5">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" aria-hidden="true" />
              {formatDate(article.publishedAt)}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
              <Link href={`/news/${article.slug}`} className="hover:text-primary">
                {article.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{article.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
