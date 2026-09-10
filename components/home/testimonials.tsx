import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-secondary uppercase">Testimonials</p>
        <h2 className="mt-1 font-heading text-3xl font-semibold sm:text-4xl">What our community says</h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.id} className="rounded-xl bg-primary-foreground/10 p-6">
            <Quote className="size-6 text-secondary" aria-hidden="true" />
            <blockquote className="mt-4 text-sm leading-relaxed">&ldquo;{testimonial.message}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">
              {testimonial.student}
              <span className="block font-normal text-primary-foreground/70">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
