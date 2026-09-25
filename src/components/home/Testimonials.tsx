import { Star } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PersonAvatar } from "@/components/shared/PersonAvatar";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";

function Rating({ value }: { value: number }) {
  return (
    <div role="img" aria-label={`Rated ${value} out of 5`} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < value ? "fill-window-yellow text-window-yellow" : "fill-surface-gray text-surface-gray",
          )}
        />
      ))}
    </div>
  );
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Testimonials({
  testimonials,
  eyebrow = "Student stories",
  title = "Learners who built something real",
  description = "Hear from students about their projects, their mentors and what came next.",
}: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col rounded-xl border bg-card p-6 shadow-card">
                {testimonial.rating != null && <Rating value={testimonial.rating} />}
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-foreground/90">
                  <p>{testimonial.review}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                  <PersonAvatar name={testimonial.name} image={testimonial.image} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.designation ?? testimonial.course_name}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
