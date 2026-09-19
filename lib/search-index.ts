import { navigation } from "@/data/navigation";
import { seniorHighPrograms } from "@/data/senior-high/programs";
import { admissions } from "@/data/admissions";
import { getAllNews } from "@/lib/news";

export interface SearchItem {
  id: string;
  label: string;
  description?: string;
  href: string;
  group: "Pages" | "Programmes" | "Admissions FAQ" | "News";
}

function buildPageItems(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const item of navigation) {
    items.push({ id: `page-${item.href}`, label: item.label, href: item.href, group: "Pages" });
    for (const child of item.children ?? []) {
      if (child.href === item.href) continue;
      items.push({ id: `page-${child.href}`, label: child.label, href: child.href, group: "Pages" });
    }
  }
  return items;
}

function buildProgrammeItems(): SearchItem[] {
  return seniorHighPrograms.map((program) => ({
    id: `programme-${program.slug}`,
    label: program.title,
    description: program.overview,
    href: `/programmes/${program.slug}`,
    group: "Programmes",
  }));
}

function buildFaqItems(): SearchItem[] {
  return admissions.faqs.map((faq, index) => ({
    id: `faq-${index}`,
    label: faq.question,
    description: faq.answer,
    href: "/admissions",
    group: "Admissions FAQ",
  }));
}

function buildNewsItems(): SearchItem[] {
  return getAllNews().map((article) => ({
    id: `news-${article.slug}`,
    label: article.title,
    description: article.summary,
    href: `/news/${article.slug}`,
    group: "News",
  }));
}

export const searchIndex: SearchItem[] = [
  ...buildPageItems(),
  ...buildProgrammeItems(),
  ...buildFaqItems(),
  ...buildNewsItems(),
];
