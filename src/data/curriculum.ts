import type { CourseLesson, CourseModule } from "@/types/course";

// TODO: review with LeafClutch — placeholder curriculum content.
export const courseModules: CourseModule[] = [
  // Agentic AI
  { id: "m-agentic-1", course_id: "course-agentic-ai", title: "Introduction to AI", description: "The foundations you need before building agents.", display_order: 1 },
  { id: "m-agentic-2", course_id: "course-agentic-ai", title: "LLM Fundamentals", description: "How large language models work in practice, and how to prompt them well.", display_order: 2 },
  { id: "m-agentic-3", course_id: "course-agentic-ai", title: "Building AI Agents", description: "Tool calling, retrieval and memory — the building blocks of an agent.", display_order: 3 },
  { id: "m-agentic-4", course_id: "course-agentic-ai", title: "Advanced Agent Architecture", description: "Planning loops, multi-agent systems, evaluation and guardrails.", display_order: 4 },
  { id: "m-agentic-5", course_id: "course-agentic-ai", title: "Capstone Project", description: null, display_order: 5 },

  // Generative AI
  { id: "m-genai-1", course_id: "course-generative-ai", title: "How Generative Models Work", description: null, display_order: 1 },
  { id: "m-genai-2", course_id: "course-generative-ai", title: "Embeddings and Retrieval", description: null, display_order: 2 },
  { id: "m-genai-3", course_id: "course-generative-ai", title: "Shipping Generative Features", description: null, display_order: 3 },

  // MERN
  { id: "m-mern-1", course_id: "course-mern", title: "Modern JavaScript", description: "The language features you will use every day.", display_order: 1 },
  { id: "m-mern-2", course_id: "course-mern", title: "React Fundamentals", description: "Components, state and data flow.", display_order: 2 },
  { id: "m-mern-3", course_id: "course-mern", title: "Node.js and Express APIs", description: "Designing and building REST APIs.", display_order: 3 },
  { id: "m-mern-4", course_id: "course-mern", title: "MongoDB and Data Modelling", description: null, display_order: 4 },
  { id: "m-mern-5", course_id: "course-mern", title: "Authentication, Testing and Deployment", description: null, display_order: 5 },

  // Data Science
  { id: "m-ds-1", course_id: "course-data-science", title: "Python for Data", description: null, display_order: 1 },
  { id: "m-ds-2", course_id: "course-data-science", title: "SQL and Data Wrangling", description: null, display_order: 2 },
  { id: "m-ds-3", course_id: "course-data-science", title: "Statistics and Visualisation", description: null, display_order: 3 },
  { id: "m-ds-4", course_id: "course-data-science", title: "Predictive Modelling", description: null, display_order: 4 },

  // UI/UX
  { id: "m-uiux-1", course_id: "course-uiux", title: "Design Thinking and Research", description: null, display_order: 1 },
  { id: "m-uiux-2", course_id: "course-uiux", title: "Wireframing and Information Architecture", description: null, display_order: 2 },
  { id: "m-uiux-3", course_id: "course-uiux", title: "Visual Design in Figma", description: null, display_order: 3 },
  { id: "m-uiux-4", course_id: "course-uiux", title: "Prototyping, Testing and Hand-off", description: null, display_order: 4 },
];

const lesson = (module_id: string, display_order: number, title: string): CourseLesson => ({
  id: `${module_id}-l${display_order}`,
  module_id,
  title,
  description: null,
  display_order,
});

export const courseLessons: CourseLesson[] = [
  lesson("m-agentic-1", 1, "What is Artificial Intelligence?"),
  lesson("m-agentic-1", 2, "Understanding AI Agents"),
  lesson("m-agentic-1", 3, "Agent Architecture"),
  lesson("m-agentic-2", 1, "How LLMs Generate Text"),
  lesson("m-agentic-2", 2, "Prompt Design Patterns"),
  lesson("m-agentic-2", 3, "Structured Outputs"),
  lesson("m-agentic-2", 4, "Working with LLM APIs"),
  lesson("m-agentic-3", 1, "Tool Calling"),
  lesson("m-agentic-3", 2, "Retrieval-Augmented Generation"),
  lesson("m-agentic-3", 3, "Memory and State"),
  lesson("m-agentic-3", 4, "Building Your First Agent"),
  lesson("m-agentic-4", 1, "Planning and Reflection Loops"),
  lesson("m-agentic-4", 2, "Multi-Agent Systems"),
  lesson("m-agentic-4", 3, "Evaluating Agents"),
  lesson("m-agentic-4", 4, "Guardrails and Safety"),
  lesson("m-agentic-5", 1, "Choosing a Problem"),
  lesson("m-agentic-5", 2, "Build, Evaluate and Deploy"),
  lesson("m-agentic-5", 3, "Demo Day"),

  lesson("m-genai-1", 1, "Text and Image Models Explained"),
  lesson("m-genai-1", 2, "Prompt Engineering"),
  lesson("m-genai-2", 1, "Embeddings"),
  lesson("m-genai-2", 2, "Vector Search"),
  lesson("m-genai-2", 3, "Building a Document Q&A App"),
  lesson("m-genai-3", 1, "Fine-tuning Trade-offs"),
  lesson("m-genai-3", 2, "Cost, Latency and Safety"),

  lesson("m-mern-1", 1, "ES6+ Essentials"),
  lesson("m-mern-1", 2, "Asynchronous JavaScript"),
  lesson("m-mern-1", 3, "Modules and Tooling"),
  lesson("m-mern-2", 1, "Components and Props"),
  lesson("m-mern-2", 2, "State and Effects"),
  lesson("m-mern-2", 3, "Routing and Forms"),
  lesson("m-mern-3", 1, "HTTP and REST Design"),
  lesson("m-mern-3", 2, "Express Middleware"),
  lesson("m-mern-3", 3, "Validation and Error Handling"),
  lesson("m-mern-4", 1, "Documents and Collections"),
  lesson("m-mern-4", 2, "Mongoose Schemas"),
  lesson("m-mern-5", 1, "JWT Authentication"),
  lesson("m-mern-5", 2, "Testing APIs"),
  lesson("m-mern-5", 3, "Deploying to the Cloud"),

  lesson("m-ds-1", 1, "NumPy and pandas"),
  lesson("m-ds-1", 2, "Cleaning Messy Data"),
  lesson("m-ds-2", 1, "SQL Queries and Joins"),
  lesson("m-ds-2", 2, "Reshaping and Aggregation"),
  lesson("m-ds-3", 1, "Descriptive Statistics"),
  lesson("m-ds-3", 2, "Visualising with Matplotlib and Seaborn"),
  lesson("m-ds-3", 3, "Hypothesis Testing"),
  lesson("m-ds-4", 1, "Regression and Classification"),
  lesson("m-ds-4", 2, "Model Evaluation"),

  lesson("m-uiux-1", 1, "User Interviews"),
  lesson("m-uiux-1", 2, "Personas and Journey Maps"),
  lesson("m-uiux-2", 1, "Sitemaps and User Flows"),
  lesson("m-uiux-2", 2, "Low-fidelity Wireframes"),
  lesson("m-uiux-3", 1, "Typography, Colour and Layout"),
  lesson("m-uiux-3", 2, "Components and Auto Layout"),
  lesson("m-uiux-4", 1, "Interactive Prototypes"),
  lesson("m-uiux-4", 2, "Usability Testing"),
  lesson("m-uiux-4", 3, "Developer Hand-off"),
];
