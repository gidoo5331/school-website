import { FileText, Download } from "lucide-react";
import { SectionTitle } from "@/components/shared/section-title";
import { admissions } from "@/data/admissions";

export function Downloads() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Downloads"
        title="Prospectus by Year Group"
        description="2026/2027 academic year. Each prospectus lists the documents, uniforms, and boarding items to bring."
        align="center"
        className="mx-auto"
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {admissions.downloads.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-xl bg-muted/30 p-5 ring-1 ring-border"
          >
            <FileText className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-heading text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.description}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <Download className="size-4" aria-hidden="true" /> Download PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
