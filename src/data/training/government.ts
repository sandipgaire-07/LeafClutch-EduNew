import { trainingProcessSteps } from "@/data/training/process";
import type { TrainingPageData } from "@/types/training";

// Photos: CC0 stock from StockSnap (via Openverse) — placeholders until real
// LeafClutch training photos are available.
export const governmentTrainingData: TrainingPageData = {
  type: "government",

  hero: {
    eyebrow: "Government Training",
    title: "Building Digital Skills for a Smarter Public Sector",
    description:
      "Support digital transformation with practical technology training designed for government teams, institutions, and public-sector initiatives.",
    ctaLabel: "Request Government Training",
    ctaHref: "/contact",
    gallery: [
      {
        src: "/training/government/facilitated-workshop.jpg",
        alt: "A facilitator leads a workshop discussion beside a planning board",
      },
      {
        src: "/training/government/conference-hall.jpg",
        alt: "Participants seated in a large conference hall",
      },
      {
        src: "/training/government/workshop-discussion.jpg",
        alt: "A trainer explains a topic to a seated group of participants",
      },
      {
        src: "/training/government/seminar.jpg",
        alt: "A participant takes notes during a seminar",
      },
    ],
  },

  partnership: {
    title: "Supporting Public Sector & Government Initiatives",
  },

  courses: {
    title: "Government Courses",
    description:
      "Courses we adapt for public institutions, covering data, security, cloud and emerging technology.",
  },

  whyChooseUs: {
    title: "Capacity building that lasts beyond the training room",
    description:
      "We design training around institutional needs and public-sector realities, so teams keep applying what they learn.",
    images: [
      {
        src: "/training/government/data-dashboard.jpg",
        alt: "A data dashboard with charts open on a tablet",
      },
      {
        src: "/training/government/network-infrastructure.jpg",
        alt: "A technician connects network cables in a server rack",
      },
      {
        src: "/training/government/digital-skills.jpg",
        alt: "An experienced professional works on a laptop",
      },
    ],
    features: [
      {
        id: "public-sector",
        icon: "Landmark",
        title: "Public-Sector Relevant Training",
        description:
          "Programs designed around digital transformation and institutional requirements.",
      },
      {
        id: "digital-skills",
        icon: "Laptop",
        title: "Digital Skills Development",
        description: "Build practical technology capabilities among government personnel.",
      },
      {
        id: "customized",
        icon: "Settings2",
        title: "Customized Programs",
        description: "Training adapted to departmental and organizational requirements.",
      },
      {
        id: "flexible",
        icon: "CalendarClock",
        title: "Flexible Delivery",
        description: "Support for on-site, online and hybrid training.",
      },
      {
        id: "trainers",
        icon: "UsersRound",
        title: "Experienced Trainers",
        description: "Professional trainers with practical technology experience.",
      },
      {
        id: "capacity",
        icon: "Sprout",
        title: "Sustainable Capacity Building",
        description: "A focus on skills teams can keep applying after the training ends.",
      },
    ],
  },

  process: {
    title: "How we run a public-sector program",
    description: "A clear four-step process that fits institutional planning and reporting.",
    steps: trainingProcessSteps,
  },

  programs: {
    title: "Programs for public institutions",
    description:
      "We plan programs with your department, from awareness sessions to in-depth technical training.",
    items: [
      {
        id: "digital-transformation",
        icon: "Building2",
        title: "Digital Transformation",
        description: "Prepare teams to plan, adopt and run digital public services.",
      },
      {
        id: "data-analytics",
        icon: "BarChart3",
        title: "Data & Analytics",
        description: "Use data for reporting, planning and evidence-based decisions.",
      },
      {
        id: "cybersecurity",
        icon: "ShieldCheck",
        title: "Cybersecurity Awareness",
        description: "Protect public data and systems through safe everyday practice.",
      },
      {
        id: "emerging-tech",
        icon: "Bot",
        title: "AI & Emerging Technologies",
        description: "Understand where AI and automation can responsibly support public work.",
      },
      {
        id: "productivity",
        icon: "Laptop",
        title: "Digital Productivity",
        description: "Confident use of office, collaboration and document-management tools.",
      },
      {
        id: "technical-capacity",
        icon: "Wrench",
        title: "Technical Capacity Building",
        description: "Deeper skills for IT officers in systems, networks and development.",
      },
    ],
  },

  testimonials: {
    title: "What public-sector teams say",
    description: "Feedback from government teams and programs we have trained.",
  },

  cta: {
    title: "Build Digital Capacity for the Future",
    description: "Let's design practical technology training around your institution's needs.",
    label: "Request Government Training",
    href: "/contact",
  },
};
