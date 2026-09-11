import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow-on-dark flex items-center justify-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-gold" />
          Testimonials
          <span aria-hidden className="h-px w-6 bg-gold" />
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
          What our community says
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex flex-col rounded-xl bg-white/8 p-6 ring-1 ring-white/10"
          >
            <Quote className="size-7 text-gold" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
              &ldquo;{testimonial.message}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold">
              {testimonial.student}
              <span className="block font-normal text-white/60">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
