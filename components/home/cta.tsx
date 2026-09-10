import { CtaButtons } from "@/components/shared/cta-buttons";
import { homeContent } from "@/data/home";

export function Cta() {
  const { title, description, primary, secondary } = homeContent.cta;

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{description}</p>
      <CtaButtons className="mt-8 justify-center" primary={primary} secondary={secondary} />
    </section>
  );
}
