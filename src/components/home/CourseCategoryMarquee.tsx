import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { coursesHref } from "@/lib/course-display";
import type { CourseNavGroup } from "@/types/course";

function CourseCategoryItem({
  group,
  hidden = false,
}: {
  group: CourseNavGroup;
  hidden?: boolean;
}) {
  const { category, courses } = group;

  return (
    <li className="shrink-0">
      <Link
        href={coursesHref({ category: category.slug })}
        tabIndex={hidden ? -1 : undefined}
        aria-hidden={hidden}
        className="group/card block w-55 overflow-hidden rounded-2xl  bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-navy/30 sm:w-60"
      >
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={`/course-categories/${category.slug}.webp`}
            alt=""
            fill
            sizes="240px"
            className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
          {/* Category name on image */}
          <div className="absolute inset-x-4 bottom-3">
            <h3 className="text-base font-semibold text-white">
              {category.name}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function CourseCategoryMarquee({
  groups,
}: {
  groups: CourseNavGroup[];
}) {
  if (groups.length === 0) return null;

  return (
  <section
  aria-labelledby="categories-heading"
  className="course-category-section border-b border-border py-10 sm:py-12"
>
      <Container>
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="categories-heading"
            className="text-sm font-semibold text-leaf-text"
          >
            Explore by category
          </h2>

          <Link
            href="/courses"
            className="text-sm font-medium text-leaf-navy transition-colors hover:text-leaf-green-dark"
          >
            View all courses
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-leaf-soft to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-leaf-soft to-transparent" />
          <div className="group/marquee overflow-hidden">
            <div className="flex w-max animate-marquee group-hover/marquee:paused group-focus-within/marquee:paused motion-reduce:animate-none">
              <ul className="flex shrink-0 gap-4 pr-4">
                {groups.map((group) => (
                  <CourseCategoryItem
                    key={`first-${group.category.id}`}
                    group={group}
                  />
                ))}
              </ul>

              {/* Duplicate set for seamless loop */}
              <ul
                aria-hidden="true"
                className="flex shrink-0 gap-4 pr-4"
              >
                {groups.map((group) => (
                  <CourseCategoryItem
                    key={`second-${group.category.id}`}
                    group={group}
                    hidden
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}