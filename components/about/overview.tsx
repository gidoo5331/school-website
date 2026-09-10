import { about } from "@/data/about";

export function Overview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground">Our History</h2>
          <p className="mt-3 text-sm text-muted-foreground">{about.history}</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground">Our Vision</h2>
          <p className="mt-3 text-sm text-muted-foreground">{about.vision}</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-3 text-sm text-muted-foreground">{about.mission}</p>
        </div>
      </div>
    </section>
  );
}
