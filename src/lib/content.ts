import { faqs } from "@/data/faqs";
import { homeStats, whyChooseUsFeatures, whyChooseUsImages } from "@/data/home";
import { testimonials } from "@/data/testimonials";
import type { Faq } from "@/types/content";

// Non-course content access. Same contract as lib/courses: async, so the
// local data can be replaced by an API later without changing callers.

const byDisplayOrder = (a: Faq, b: Faq) => a.display_order - b.display_order;

/** Active site-wide FAQs (not tied to a course). */
export async function getSiteFAQs(): Promise<Faq[]> {
  return faqs.filter((faq) => faq.is_active && faq.course_id === null).sort(byDisplayOrder);
}

export async function getCourseFAQs(courseId: string): Promise<Faq[]> {
  return faqs.filter((faq) => faq.is_active && faq.course_id === courseId).sort(byDisplayOrder);
}

export async function getFeaturedTestimonials(limit = 3) {
  return testimonials.filter((t) => t.is_active && t.is_featured).slice(0, limit);
}

export async function getHomeStats() {
  return homeStats;
}

export async function getWhyChooseUs() {
  return { features: whyChooseUsFeatures, images: whyChooseUsImages };
}
