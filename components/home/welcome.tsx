import { homeContent } from "@/data/home";

export function Welcome() {
  const { eyebrow, title, body } = homeContent.welcome;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold tracking-wide text-secondary uppercase">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{body}</p>
    </section>
  );
}
