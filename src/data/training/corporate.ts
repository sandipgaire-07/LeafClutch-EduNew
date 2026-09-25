import { trainingProcessSteps } from "@/data/training/process";
import type { TrainingPageData } from "@/types/training";

// Photos: CC0 stock from StockSnap (via Openverse) — placeholders until real
// LeafClutch training photos are available.
export const corporateTrainingData: TrainingPageData = {
  type: "corporate",

  hero: {
    eyebrow: "Corporate Training",
    title: "Empower Your Team With Industry-Ready Technology Skills",
    description:
      "Equip your workforce with practical, industry-focused technology training designed around your organization's goals, challenges, and future needs.",
    ctaLabel: "Request Corporate Training",
    ctaHref: "/contact",
    gallery: [
      {
        src: "/training/corporate/trainer-flipchart.jpg",
        alt: "A trainer leads a planning session at a flipchart while colleagues listen",
      },
      {
        src: "/training/corporate/team-session.jpg",
        alt: "A team works through an exercise on laptops around a meeting table",
      },
      {
        src: "/training/corporate/whiteboard-workshop.jpg",
        alt: "A facilitator maps a workflow on a whiteboard during a workshop",
      },
      {
        src: "/training/corporate/team-laptops.jpg",
        alt: "Colleagues of different ages discuss a task together at a shared desk",
      },
    ],
  },

  partnership: {
    title: "Trusted by Businesses & Organizations",
  },

  courses: {
    title: "Corporate Courses",
    description:
      "Proven courses we adapt for teams, from AI and automation to cloud, security and analytics.",
  },

  whyChooseUs: {
    title: "Training that fits the way your team works",
    description:
      "We build programs around your tools, your projects and your schedule, so new skills show up in day-to-day work.",
    images: [
      {
        src: "/training/corporate/pair-review.jpg",
        alt: "Two colleagues review work on a laptop together",
      },
      {
        src: "/training/corporate/process-mapping.jpg",
        alt: "A participant sketches a process flowchart on a whiteboard",
      },
      {
        src: "/training/corporate/team-overhead.jpg",
        alt: "A team gathered around a table with laptops, seen from above",
      },
    ],
    features: [
      {
        id: "industry-focused",
        icon: "BriefcaseBusiness",
        title: "Industry-Focused Training",
        description:
          "Training designed around real workplace requirements and current technology trends.",
      },
      {
        id: "customized",
        icon: "Settings2",
        title: "Customized Learning Programs",
        description: "Programs adapted to your organizational goals, teams and skill gaps.",
      },
      {
        id: "project-based",
        icon: "FolderCode",
        title: "Practical Project-Based Learning",
        description: "Employees learn through practical tasks and real-world scenarios.",
      },
      {
        id: "flexible",
        icon: "CalendarClock",
        title: "Flexible Delivery",
        description: "On-site, online and hybrid options that fit around work schedules.",
      },
      {
        id: "trainers",
        icon: "UsersRound",
        title: "Experienced Trainers",
        description: "Learn from professionals with practical technology experience.",
      },
      {
        id: "measurable",
        icon: "ChartNoAxesCombined",
        title: "Measurable Skill Development",
        description: "A focus on practical capabilities employees can apply in their work.",
      },
    ],
  },

  process: {
    title: "How we run a corporate program",
    description: "A clear four-step process, from the first conversation to follow-up support.",
    steps: trainingProcessSteps,
  },

  programs: {
    title: "Programs built around your goals",
    description:
      "Beyond individual courses, we design complete programs for teams and departments.",
    items: [
      {
        id: "upskilling",
        icon: "Rocket",
        title: "Employee Upskilling",
        description: "Structured learning paths that close specific skill gaps across a team.",
      },
      {
        id: "transformation",
        icon: "Workflow",
        title: "Technology Transformation",
        description: "Prepare teams to adopt new platforms, tools and ways of working.",
      },
      {
        id: "ai-automation",
        icon: "Bot",
        title: "AI & Automation",
        description: "Practical use of AI assistants, agents and workflow automation at work.",
      },
      {
        id: "data-analytics",
        icon: "BarChart3",
        title: "Data & Analytics",
        description: "Turn business data into dashboards, reports and better decisions.",
      },
      {
        id: "cybersecurity",
        icon: "ShieldCheck",
        title: "Cybersecurity",
        description: "Security awareness for all staff and hands-on skills for technical teams.",
      },
      {
        id: "productivity",
        icon: "Laptop",
        title: "Digital Productivity",
        description: "Get more from everyday tools for documents, collaboration and planning.",
      },
    ],
  },

  testimonials: {
    title: "What our corporate clients say",
    description: "Feedback from teams who have trained with LeafClutch.",
  },

  cta: {
    title: "Ready to Upskill Your Team?",
    description: "Let's build a training program around your organization's goals.",
    label: "Request Corporate Training",
    href: "/contact",
  },
};
