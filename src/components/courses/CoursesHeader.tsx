import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function CoursesHeader({ children }: { children?: React.ReactNode }) {
  return (
    <section aria-labelledby="courses-heading" className="border-b bg-surface-blue/50">
      <Container className="py-10 sm:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-navy">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-foreground">
              Courses
            </li>
          </ol>
        </nav>
        <h1
          id="courses-heading"
          className="mt-4 text-3xl leading-tight font-semibold text-foreground sm:text-4xl"
        >
          Explore Our Courses
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Discover practical courses designed to help you build real-world technology skills.
        </p>
        {children && <div className="mt-8 max-w-2xl">{children}</div>}
      </Container>
    </section>
  );
}
