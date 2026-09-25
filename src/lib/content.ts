import { aboutData, aboutFeatures, aboutStats, aboutValues, learningSteps } from "@/data/about";
import { contactInfo, contactPageContent } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { homeStats, whyChooseUsFeatures, whyChooseUsImages } from "@/data/home";
import { testimonials } from "@/data/testimonials";
import type { AboutPageData } from "@/types/about";
import type { ContactInfo, ContactPageContent } from "@/types/contact";
import type { Faq, TestimonialType } from "@/types/content";

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

export async function getFeaturedTestimonials(limit = 3, type: TestimonialType = "student") {
  return testimonials
    .filter((t) => t.is_active && t.is_featured && t.type === type)
    .slice(0, limit);
}

export async function getHomeStats() {
  return homeStats;
}

export async function getWhyChooseUs() {
  return { features: whyChooseUsFeatures, images: whyChooseUsImages };
}

export async function getAboutPageData(): Promise<AboutPageData> {
  return {
    content: aboutData,
    stats: aboutStats,
    values: aboutValues,
    features: aboutFeatures,
    learningSteps,
  };
}

/** Will become the site-settings row in Supabase. */
export async function getContactInfo(): Promise<ContactInfo> {
  return contactInfo;
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  return contactPageContent;
}
