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

export interface Testimonial {
  id: string;
  name: string;
  image: string | null;
  course_id: string;
  course_name: string;
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
