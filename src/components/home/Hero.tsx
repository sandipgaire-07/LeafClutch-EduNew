import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CourseSearch } from "@/components/courses/CourseSearch";
import { FeaturedCourse } from "@/components/home/FeaturedCourse";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { coursesHref } from "@/lib/course-display";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

const suggestedSearches = ["AI", "React", "Data", "Design"];

interface HeroProps {
  courses: Course[];
  featuredCourses: Course[];
}

export function Hero({ courses, featuredCourses }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative border-b bg-white">
      {/* Faint grid, fading out from the top right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(6_33_101/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(6_33_101/0.045)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_80%_at_85%_0%,black,transparent)] bg-size-[44px_44px]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm font-medium text-navy-soft">
            <span aria-hidden className="size-1.5 rounded-full bg-green" />
            Practical technology training
          </p>

          <h1
            id="hero-heading"
            className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            Learn <span className="text-sky font-bold">skills.</span>
            <br />
            Build projects.
            <br />
            <span className="text-navy font-extrabold">Shape your future.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hands-on courses in web development, AI, data science, design and more — taught by
            people who do this work every day, and built around projects you can show.
          </p>

          <CourseSearch courses={courses} className="mt-8 max-w-xl" />

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/courses" className={cn(buttonVariants({ size: "xl" }), "w-full sm:w-auto")}>
              Explore all courses
              <ArrowRight data-icon="inline-end" aria-hidden />
            </Link>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span>Popular:</span>
              {suggestedSearches.map((term) => (
                <Link
                  key={term}
                  href={coursesHref({ search: term })}
                  className="font-medium text-navy-soft underline decoration-border underline-offset-4 hover:text-navy hover:decoration-navy"
                >
                  {term}
                </Link>
              ))}
            </p>
          </div>
        </div>

        <FeaturedCourse courses={featuredCourses} />
      </Container>
    </section>
  );
}
