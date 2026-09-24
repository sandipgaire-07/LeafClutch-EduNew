import type { CourseCategory } from "@/types/course";

export const categories: CourseCategory[] = [
  {
    id: "cat-web",
    name: "Web Development",
    short_name: "Web Development",
    slug: "web-development",
    description:
      "Build modern, production-ready websites and web applications.",
    display_order: 1,
    image_url: null,
  },
  {
    id: "cat-ai",
    name: "AI & Machine Learning",
    short_name: "AI & ML",
    slug: "ai-ml",
    description:
      "Train models, work with LLMs and build intelligent agents.",
    display_order: 2,
    image_url: null,
  },
  {
    id: "cat-data",
    name: "Data Science",
    short_name: "Data Science",
    slug: "data-science",
    description:
      "Turn raw data into analysis, dashboards and decisions.",
    display_order: 3,
    image_url: null,
  },
  {
    id: "cat-uiux",
    name: "UI/UX Design",
    short_name: "UI/UX",
    slug: "ui-ux",
    description:
      "Research, design and prototype digital products people enjoy using.",
    display_order: 4,
    image_url: null,
  },
  {
    id: "cat-cyber",
    name: "Cybersecurity",
    short_name: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Understand attacks, secure systems and test defences ethically.",
    display_order: 5,
    image_url: null,
  },
  {
    id: "cat-graphic",
    name: "Graphic Design",
    short_name: "Graphic Design",
    slug: "graphic-design",
    description:
      "Visual communication, branding and layout for print and screen.",
    display_order: 6,
    image_url: null,
  },
  {
    id: "cat-cloud",
    name: "Cloud Computing",
    short_name: "Cloud",
    slug: "cloud-computing",
    description:
      "Deploy, scale and automate infrastructure on the cloud.",
    display_order: 7,
    image_url: null,
  },
];