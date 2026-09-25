import { trainingProcessSteps } from "@/data/training/process";
import type { TrainingPageData } from "@/types/training";

// Photos: CC0 stock from StockSnap and rawpixel (via Openverse) — placeholders
// until real LeafClutch training photos are available.
export const academicTrainingData: TrainingPageData = {
  type: "academic",

  hero: {
    eyebrow: "Academic Training",
    title: "Prepare Students for the Skills and Careers of Tomorrow",
    description:
      "Help students bridge the gap between academic learning and industry expectations through practical, mentor-led technology training.",
    ctaLabel: "Partner With Us",
    ctaHref: "/contact",
    gallery: [
      {
        src: "/training/academic/lecture-hall.jpg",
        alt: "Students seated in a lecture hall during a session",
      },
      {
        src: "/training/academic/group-project.jpg",
        alt: "A group of students plan a project together around a table",
      },
      {
        src: "/training/academic/student-presentation.jpg",
        alt: "A student presents ideas on a board to classmates",
      },
      {
        src: "/training/academic/project-planning.jpg",
        alt: "Students sketch and annotate a project plan on large sheets of paper",
      },
    ],
  },

  partnership: {
    title: "Our Academic Partners",
  },

  courses: {
    title: "Academic Courses",
    description:
      "Career-focused courses we run for colleges and schools, from web development to data and design.",
  },

  whyChooseUs: {
    title: "Learning that connects the classroom to industry",
    description:
      "We work alongside your faculty to give students practical skills, real projects and a clear view of technology careers.",
    images: [
      {
        src: "/training/academic/study-notes.jpg",
        alt: "Students working through notes and diagrams with coloured markers",
      },
      {
        src: "/training/academic/code-laptop.jpg",
        alt: "Code open in an editor on a laptop",
      },
      {
        src: "/training/academic/student-laptop.jpg",
        alt: "A student takes notes beside a laptop",
      },
    ],
    features: [
      {
        id: "curriculum",
        icon: "BookOpenCheck",
        title: "Industry-Relevant Curriculum",
        description: "Help students develop skills aligned with modern technology careers.",
      },
      {
        id: "projects",
        icon: "FolderCode",
        title: "Hands-On Projects",
        description:
          "Students learn by building practical projects rather than relying only on theory.",
      },
      {
        id: "mentors",
        icon: "UsersRound",
        title: "Experienced Mentors",
        description: "Guidance from trainers with practical industry experience.",
      },
      {
        id: "career",
        icon: "BriefcaseBusiness",
        title: "Career & Internship Exposure",
        description: "Help students understand professional environments and career expectations.",
      },
      {
        id: "certification",
        icon: "Award",
        title: "Certification",
        description: "Recognize students' learning and practical achievements.",
      },
      {
        id: "collaboration",
        icon: "Handshake",
        title: "Institutional Collaboration",
        description: "We work with your institution to develop relevant learning programs.",
      },
    ],
  },

  process: {
    title: "How we work with your institution",
    description: "A clear four-step process, planned around your academic calendar.",
    steps: trainingProcessSteps,
  },

  programs: {
    title: "Programs for students and faculty",
    description:
      "From single workshops to semester-long programs, we plan the format with your institution.",
    items: [
      {
        id: "skill-development",
        icon: "Sprout",
        title: "Student Skill Development",
        description: "Structured tracks that build practical, job-ready technology skills.",
      },
      {
        id: "workshops",
        icon: "Presentation",
        title: "Industry-Oriented Workshops",
        description: "Short, focused sessions on tools and practices used in industry today.",
      },
      {
        id: "bootcamps",
        icon: "Rocket",
        title: "Technology Bootcamps",
        description: "Intensive, project-driven programs that run over a few weeks.",
      },
      {
        id: "internship-prep",
        icon: "BriefcaseBusiness",
        title: "Internship Preparation",
        description: "Portfolios, interview practice and team projects before placements.",
      },
      {
        id: "faculty",
        icon: "GraduationCap",
        title: "Faculty Development",
        description: "Help teaching staff stay current with new tools and technologies.",
      },
      {
        id: "career",
        icon: "Target",
        title: "Career-Oriented Training",
        description: "Courses mapped to specific roles such as developer, analyst or designer.",
      },
    ],
  },

  testimonials: {
    title: "What our academic partners say",
    description: "Feedback from institutions and faculty who have worked with LeafClutch.",
  },

  cta: {
    title: "Let's Prepare Students for the Future",
    description:
      "Partner with LeafClutch to bring industry-focused technology learning to your institution.",
    label: "Partner With Us",
    href: "/contact",
  },
};
