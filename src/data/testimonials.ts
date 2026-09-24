import type { Testimonial } from "@/types/content";

// PLACEHOLDER testimonials for layout only. Replace with real, consented
// student reviews before launch — do not publish these as genuine.
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Aarati Sharma",
    image: null,
    course_id: "course-mern",
    course_name: "MERN Stack Development",
    review:
      "The projects were the best part. By the end I had a full-stack app deployed and could explain every decision in it during my interviews.",
    rating: 5,
    is_active: true,
    is_featured: true,
  },
  {
    id: "t-2",
    name: "Bibek Thapa",
    image: null,
    course_id: "course-data-science",
    course_name: "Data Science with Python",
    review:
      "I came from a commerce background and was worried about the maths. The instructors explained concepts with real datasets, which made it click.",
    rating: 5,
    is_active: true,
    is_featured: true,
  },
  {
    id: "t-3",
    name: "Sneha Karki",
    image: null,
    course_id: "course-uiux",
    course_name: "UI/UX Design with Figma",
    review:
      "Weekly feedback on my designs helped me improve faster than learning alone. My final case study is now the centrepiece of my portfolio.",
    rating: 5,
    is_active: true,
    is_featured: true,
  },
  {
    id: "t-4",
    name: "Rohan Adhikari",
    image: null,
    course_id: "course-agentic-ai",
    course_name: "Agentic AI",
    review:
      "Practical and current. We built agents with real tools and evaluation, not just demos.",
    rating: 4,
    is_active: true,
    is_featured: false,
  },
];
