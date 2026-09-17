import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/section-title";
import { SiteImage } from "@/components/shared/site-image";
import { seniorHighPrograms } from "@/data/senior-high/programs";

export function ProgrammesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Programmes"
        title="Five Academic Programmes"
        align="center"
        className="mx-auto"
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {seniorHighPrograms.map((program) => (
          <Card key={program.id} className="flex flex-col py-0">
            <div className="relative aspect-video">
              <SiteImage
                category={program.imageCategory}
                alt={program.title}
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <CardContent className="flex flex-1 flex-col py-5">
              <h3 className="font-heading text-lg font-semibold text-foreground">{program.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{program.overview}</p>
              <Link
                href={`/programmes/${program.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn More <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
