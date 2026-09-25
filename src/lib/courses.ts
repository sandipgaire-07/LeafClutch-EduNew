import { categories } from "@/data/categories";
import { courseBenefits } from "@/data/course-benefits";
import { courses } from "@/data/courses";
import { courseLessons, courseModules } from "@/data/curriculum";
import { courseInstructors, instructors } from "@/data/instructors";
import { courseInstallments, coursePaymentMethods, paymentMethods } from "@/data/payments";
import type {
  Course,
  CourseBenefit,
  CourseCategory,
  CourseInstallment,
  CourseModuleWithLessons,
  CourseNavGroup,
  CourseRecord,
  Instructor,
  PaymentMethod,
} from "@/types/course";
import type { TrainingType } from "@/types/training";

const byDisplayOrder = (a: { display_order: number }, b: { display_order: number }) =>
  a.display_order - b.display_order;

// Course data access. Pages call these helpers and pass results to components
// as props. They are async so the local data can later be swapped for an API
// or database without touching any caller.

const categoriesById = new Map(categories.map((category) => [category.id, category]));

function withCategory(record: CourseRecord): Course | null {
  const category = categoriesById.get(record.category_id);
  return category ? { ...record, category } : null;
}

function publishedCourses(): Course[] {
  return courses
    .filter((record) => record.status === "published")
    .map(withCategory)
    .filter((course): course is Course => course !== null);
}

export async function getPublishedCourses(): Promise<Course[]> {
  return publishedCourses();
}

export async function getPublishedCourseBySlug(slug: string): Promise<Course | null> {
  return publishedCourses().find((course) => course.slug === slug) ?? null;
}

export async function getFeaturedCourses(): Promise<Course[]> {
  return publishedCourses().filter((course) => course.is_featured);
}

/** Published courses offered on a training page (corporate, academic, government). */
export async function getCoursesForTraining(type: TrainingType): Promise<Course[]> {
  return publishedCourses().filter((course) => course.training_types?.includes(type));
}

/** Categories that have at least one published course, in display order. */
export async function getCourseCategories(): Promise<CourseCategory[]> {
  const used = new Set(publishedCourses().map((course) => course.category_id));
  return categories.filter((category) => used.has(category.id)).sort(byDisplayOrder);
}

/** Published course slugs, for static generation of detail pages. */
export async function getPublishedCourseSlugs(): Promise<string[]> {
  return publishedCourses().map((course) => course.slug);
}

export async function getCourseBenefits(courseId: string): Promise<CourseBenefit[]> {
  return courseBenefits.filter((b) => b.course_id === courseId).sort(byDisplayOrder);
}

/** Modules in order, each with its lessons in order. */
export async function getCourseCurriculum(courseId: string): Promise<CourseModuleWithLessons[]> {
  return courseModules
    .filter((m) => m.course_id === courseId)
    .sort(byDisplayOrder)
    .map((module) => ({
      ...module,
      lessons: courseLessons.filter((l) => l.module_id === module.id).sort(byDisplayOrder),
    }));
}

/** All mentors, for the About page. */
export async function getInstructors(): Promise<Instructor[]> {
  return instructors;
}

export async function getCourseInstructors(courseId: string): Promise<Instructor[]> {
  return courseInstructors
    .filter((link) => link.course_id === courseId)
    .sort(byDisplayOrder)
    .map((link) => instructors.find((i) => i.id === link.instructor_id))
    .filter((instructor): instructor is Instructor => instructor !== undefined);
}

/** Active payment methods this course accepts. */
export async function getCoursePaymentMethods(courseId: string): Promise<PaymentMethod[]> {
  const accepted = new Set(
    coursePaymentMethods.filter((l) => l.course_id === courseId).map((l) => l.payment_method_id),
  );
  return paymentMethods.filter((m) => m.is_active && accepted.has(m.id)).sort(byDisplayOrder);
}

export async function getCourseInstallments(courseId: string): Promise<CourseInstallment[]> {
  return courseInstallments.filter((i) => i.course_id === courseId).sort(byDisplayOrder);
}

/** Categories with their published courses, for navigation menus. */
export async function getCourseNavigation(): Promise<CourseNavGroup[]> {
  const published = publishedCourses();
  return (await getCourseCategories()).map((category) => ({
    category,
    courses: published
      .filter((course) => course.category_id === category.id)
      .map(({ id, name, slug }) => ({ id, name, slug })),
  }));
}

export async function getRelatedCourses(
  courseId: string,
  categoryId: string,
  limit = 3,
): Promise<Course[]> {
  return publishedCourses()
    .filter((course) => course.category_id === categoryId && course.id !== courseId)
    .slice(0, limit);
}
