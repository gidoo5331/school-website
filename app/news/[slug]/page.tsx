import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { SiteImage } from "@/components/shared/site-image";
import { ShareRow } from "@/components/news/share-row";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import { getArticleSchema, resolveArticleImage } from "@/lib/seo";
import { site } from "@/data/site";

export function generateStaticParams() {
  return getAllNews().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getNewsBySlug(slug);

  if (!article) return {};

  const image = resolveArticleImage(article);

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.publishedAt,
      images: [{ url: image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [image],
    },
  };
}

export default async function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema(article)) }}
      />
      <div className="relative aspect-21/9 w-full overflow-hidden">
        <SiteImage
          src={article.image}
          alt={article.title}
          category={article.imageCategory}
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to News
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-4" aria-hidden="true" />
            {new Date(article.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="size-4" aria-hidden="true" /> {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="size-4" aria-hidden="true" /> {article.author}
          </span>
        </div>

        <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{article.body}</p>

        <div className="mt-8 border-t border-border pt-6">
          <ShareRow url={`${site.url}/news/${article.slug}`} title={article.title} />
        </div>
      </div>
    </article>
  );
}
