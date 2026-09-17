import { SiteImage } from "@/components/shared/site-image";
import { homeContent } from "@/data/home";

export function Welcome() {
  const { eyebrow, title, body } = homeContent.welcome;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <SiteImage
            category="Students"
            alt=""
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="eyebrow flex items-center gap-2.5">
            <span aria-hidden className="h-px w-6 bg-secondary" />
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{body}</p>
        </div>
      </div>
    </section>
  );
}
