import type { CourseBenefit } from "@/types/course";

// TODO: review with LeafClutch — placeholder course detail content.
export const courseBenefits: CourseBenefit[] = [
  // Agentic AI
  { id: "b-agentic-1", course_id: "course-agentic-ai", title: "Live, mentor-led sessions", description: "Weekly live classes with time for questions, code reviews and debugging together.", display_order: 1 },
  { id: "b-agentic-2", course_id: "course-agentic-ai", title: "Five portfolio projects", description: "Build a research assistant, a RAG app, a tool-using agent, a multi-agent workflow and a capstone.", display_order: 2 },
  { id: "b-agentic-3", course_id: "course-agentic-ai", title: "Evaluation and guardrails", description: "Learn to measure agent quality and add safety checks — the part most tutorials skip.", display_order: 3 },
  { id: "b-agentic-4", course_id: "course-agentic-ai", title: "Recorded classes", description: "Every session is recorded so you can revisit difficult topics at your own pace.", display_order: 4 },
  { id: "b-agentic-5", course_id: "course-agentic-ai", title: "Internship pathway", description: "Top performers are considered for an internship on real LeafClutch AI projects.", display_order: 5 },
  { id: "b-agentic-6", course_id: "course-agentic-ai", title: "Certificate of completion", description: "Receive a LeafClutch certificate after completing the course and capstone.", display_order: 6 },

  // Generative AI
  { id: "b-genai-1", course_id: "course-generative-ai", title: "Hands-on labs", description: "Guided labs for prompting, embeddings and retrieval with real APIs.", display_order: 1 },
  { id: "b-genai-2", course_id: "course-generative-ai", title: "Two complete projects", description: "A document Q&A app and an image-generation workflow for your portfolio.", display_order: 2 },
  { id: "b-genai-3", course_id: "course-generative-ai", title: "Cost and safety practices", description: "Learn how to keep AI features affordable, reliable and responsible.", display_order: 3 },

  // MERN
  { id: "b-mern-1", course_id: "course-mern", title: "Three full-stack projects", description: "Build and deploy progressively larger applications, ending with a team project.", display_order: 1 },
  { id: "b-mern-2", course_id: "course-mern", title: "Code reviews", description: "Mentors review your pull requests the way a senior developer would at work.", display_order: 2 },
  { id: "b-mern-3", course_id: "course-mern", title: "Git and team workflow", description: "Branching, pull requests and issue tracking, practised on a shared codebase.", display_order: 3 },
  { id: "b-mern-4", course_id: "course-mern", title: "Interview preparation", description: "Mock interviews and portfolio feedback in the final weeks.", display_order: 4 },

  // Data Science
  { id: "b-ds-1", course_id: "course-data-science", title: "Real datasets", description: "Work with public datasets from Nepal and around the world, not toy examples.", display_order: 1 },
  { id: "b-ds-2", course_id: "course-data-science", title: "Portfolio of three analyses", description: "Finish with three written analyses you can share with employers.", display_order: 2 },
  { id: "b-ds-3", course_id: "course-data-science", title: "SQL to modelling", description: "Cover the whole workflow from querying data to predictive models.", display_order: 3 },
  { id: "b-ds-4", course_id: "course-data-science", title: "Presentation practice", description: "Learn to explain findings clearly to non-technical audiences.", display_order: 4 },

  // UI/UX
  { id: "b-uiux-1", course_id: "course-uiux", title: "Weekly design critiques", description: "Structured feedback on your work from mentors and peers.", display_order: 1 },
  { id: "b-uiux-2", course_id: "course-uiux", title: "Interview-ready case study", description: "A complete, documented case study from research to prototype.", display_order: 2 },
  { id: "b-uiux-3", course_id: "course-uiux", title: "Design systems basics", description: "Build reusable components and styles the way product teams do.", display_order: 3 },
  { id: "b-uiux-4", course_id: "course-uiux", title: "Developer hand-off", description: "Prepare specs and assets developers can actually build from.", display_order: 4 },
];
