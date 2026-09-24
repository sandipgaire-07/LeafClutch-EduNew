import { homeStats } from "@/data/home";
import type { AboutContent, AboutValue, LearningStep } from "@/types/about";
import type { Feature, StatItem } from "@/types/content";

// PLACEHOLDER About page copy — review with LeafClutch before launch.

// Photo: CC0 via Openverse, by cuboulder. Replace with a real LeafClutch class.
//   https://www.flickr.com/photos/38587132@N02/23928923468
export const aboutData: AboutContent = {
  hero: {
    eyebrow: "About LeafClutch",
    title: "We teach technology the way it is practised at work",
    description:
      "LeafClutch Technologies is a training institute in Nepal. We run practical courses in web development, AI, data science, design and cloud, taught by mentors who build software for a living.",
    image: {
      src: "/images/about/about-coding-class.jpg",
      alt: "Students following a live programming lesson on their laptops",
    },
    cta: { label: "Explore courses", href: "/courses" },
  },
  whoWeAre: {
    eyebrow: "Who we are",
    title: "A training institute run by people who work in tech",
    paragraphs: [
      "LeafClutch started with a simple observation: many graduates know the theory but have never built and shipped a working project. Employers notice the gap.",
      "Our courses close it. Classes stay small, every module ends with something you build, and mentors review your work the way a senior colleague would.",
    ],
  },
  values: {
    eyebrow: "Our values",
    title: "What we stand for",
    description: "The principles behind how we teach, advise and support every learner.",
  },
  visionMission: {
    eyebrow: "Vision & mission",
    title: "Why LeafClutch exists",
    items: [
      {
        id: "vision",
        icon: "vision",
        title: "Our vision",
        statement:
          "A Nepal where anyone with the drive to learn can build a career in technology, whatever their background or degree.",
      },
      {
        id: "mission",
        icon: "mission",
        title: "Our mission",
        statement:
          "To give learners practical, industry-relevant skills through hands-on projects and close mentorship, so they leave ready to do the work.",
      },
    ],
  },
  features: {
    eyebrow: "Why learn with us",
    title: "Built to get you job-ready",
    description: "Everything in a LeafClutch course is there to help you do the work, not just pass a test.",
  },
  mentors: {
    eyebrow: "Our mentors",
    title: "Learn from working professionals",
    description: "Our mentors teach what they practise every day, and they review your work closely.",
  },
  learningExperience: {
    eyebrow: "How you learn",
    title: "From your first lesson to your next role",
    description: "Every course follows the same four stages, so you always know what comes next.",
  },
  cta: {
    title: "Ready to start learning?",
    description:
      "Browse our courses, or tell us what you want to build and we will help you choose the right one.",
  },
};

/** Same figures as the homepage, so the two pages can't disagree. */
export const aboutStats: StatItem[] = homeStats;

export const aboutValues: AboutValue[] = [
  {
    id: "honest-guidance",
    icon: "guidance",
    title: "Honest guidance",
    description:
      "We recommend the course that fits your goals, even when that means a shorter or cheaper one.",
  },
  {
    id: "open-to-all",
    icon: "inclusive",
    title: "Open to every learner",
    description: "No computer science degree needed. Courses start from the basics and build up.",
  },
  {
    id: "quality",
    icon: "quality",
    title: "Quality over shortcuts",
    description: "We teach the habits behind clean, working results, not tricks that fall apart.",
  },
  {
    id: "keep-learning",
    icon: "growth",
    title: "Always learning",
    description: "Our mentors keep up with their fields, and our courses change when the tools do.",
  },
];

export const aboutFeatures: Feature[] = [
  {
    id: "practical",
    icon: "practical",
    title: "Practical learning",
    description: "Every concept is practised in code or design the same week it is taught.",
  },
  {
    id: "mentors",
    icon: "mentor",
    title: "Expert mentors",
    description: "Small batches mean your mentor knows your progress and answers your questions.",
  },
  {
    id: "projects",
    icon: "projects",
    title: "Real projects",
    description: "Finish with portfolio projects you can show employers and explain in interviews.",
  },
  {
    id: "career",
    icon: "career",
    title: "Career focus",
    description: "CV reviews, interview practice and guidance on internships and first roles.",
  },
  {
    id: "curriculum",
    icon: "curriculum",
    title: "Industry-relevant curriculum",
    description: "Course content is reviewed regularly to match the tools teams use today.",
  },
  {
    id: "certificate",
    icon: "certificate",
    title: "Recognised certificate",
    description: "Earn a LeafClutch certificate backed by the projects you completed.",
  },
];

export const learningSteps: LearningStep[] = [
  {
    id: "learn",
    icon: "learn",
    title: "Learn",
    description: "Understand the core concepts in live, mentor-led classes.",
  },
  {
    id: "practice",
    icon: "practice",
    title: "Practice",
    description: "Work through guided exercises and get feedback on your work.",
  },
  {
    id: "build",
    icon: "build",
    title: "Build",
    description: "Build real projects from start to finish for your portfolio.",
  },
  {
    id: "grow",
    icon: "grow",
    title: "Grow",
    description: "Prepare for interviews, internships and your next role.",
  },
];
