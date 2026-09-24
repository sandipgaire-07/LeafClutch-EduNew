import type { CourseInstructor, Instructor } from "@/types/course";

// PLACEHOLDER instructors for layout only — replace with real LeafClutch staff.
export const instructors: Instructor[] = [
  {
    id: "ins-1",
    name: "Prakash Shrestha",
    image: null,
    designation: "AI Engineer",
    bio: "Builds LLM-powered products and has spent the last several years taking machine learning prototypes into production. Focuses on practical agent design and evaluation.",
  },
  {
    id: "ins-2",
    name: "Nisha Gurung",
    image: null,
    designation: "Senior Full-Stack Developer",
    bio: "Works across React, Node.js and cloud infrastructure, and mentors junior developers on writing maintainable, well-tested code.",
  },
  {
    id: "ins-3",
    name: "Suman Rai",
    image: null,
    designation: "Backend Developer",
    bio: "Designs APIs and data models for high-traffic applications, with a particular interest in security and performance.",
  },
  {
    id: "ins-4",
    name: "Anjali Maharjan",
    image: null,
    designation: "Data Scientist",
    bio: "Uses data to answer business and policy questions, and enjoys teaching statistics through real-world examples.",
  },
  {
    id: "ins-5",
    name: "Kiran Tamang",
    image: null,
    designation: "Product Designer",
    bio: "Designs digital products end to end, from user research to design systems, and has run design critiques for product teams.",
  },
];

export const courseInstructors: CourseInstructor[] = [
  { course_id: "course-agentic-ai", instructor_id: "ins-1", display_order: 1 },
  { course_id: "course-generative-ai", instructor_id: "ins-1", display_order: 1 },
  { course_id: "course-mern", instructor_id: "ins-2", display_order: 1 },
  { course_id: "course-mern", instructor_id: "ins-3", display_order: 2 },
  { course_id: "course-react-next", instructor_id: "ins-2", display_order: 1 },
  { course_id: "course-django", instructor_id: "ins-3", display_order: 1 },
  { course_id: "course-data-science", instructor_id: "ins-4", display_order: 1 },
  { course_id: "course-power-bi", instructor_id: "ins-4", display_order: 1 },
  { course_id: "course-uiux", instructor_id: "ins-5", display_order: 1 },
];
