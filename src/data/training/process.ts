import type { TrainingProcessStep } from "@/types/training";

/** The same engagement process is used for every training type. */
export const trainingProcessSteps: TrainingProcessStep[] = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:
      "We meet your team to understand goals, current skill levels, participant numbers and constraints.",
  },
  {
    number: "02",
    title: "Design the Training Program",
    description:
      "We shape the curriculum, schedule, delivery mode and practical exercises around what you need.",
  },
  {
    number: "03",
    title: "Deliver Practical Training",
    description:
      "Experienced trainers run hands-on sessions on-site, online or hybrid, built around real tasks.",
  },
  {
    number: "04",
    title: "Evaluate & Support",
    description:
      "We assess progress, share a completion report and stay available for follow-up questions.",
  },
];
