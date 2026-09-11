import { homeContent } from "@/data/home";

export function Welcome() {
  const { eyebrow, title, body } = homeContent.welcome;

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="eyebrow flex items-center justify-center gap-2.5">
        <span aria-hidden className="h-px w-6 bg-secondary" />
        {eyebrow}
        <span aria-hidden className="h-px w-6 bg-secondary" />
      </p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{body}</p>
    </section>
  );
}
