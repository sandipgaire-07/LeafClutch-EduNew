export type FaqCategory = "general" | "course" | "enrollment" | "certificate";

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
  /** null for site-wide FAQs; set for course-specific ones. */
  course_id: string | null;
  is_active: boolean;
  display_order: number;
}

export type TestimonialType = "student" | "corporate" | "academic" | "government";

export interface Testimonial {
  id: string;
  type: TestimonialType;
  name: string;
  image: string | null;
  /** Set for student reviews of a course; null for organisation testimonials. */
  course_id: string | null;
  course_name: string | null;
  /** Role and organisation, shown instead of the course, e.g. "HR Manager, Summit Logistics". */
  designation: string | null;
  review: string;
  rating: number | null;
  is_active: boolean;
  is_featured: boolean;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export type FeatureIcon =
  | "practical"
  | "mentor"
  | "projects"
  | "certificate"
  | "flexible"
  | "curriculum"
  | "career";

export interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}
