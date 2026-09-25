import { academicTrainingData } from "@/data/training/academic";
import { corporateTrainingData } from "@/data/training/corporate";
import { governmentTrainingData } from "@/data/training/government";
import { partnerships } from "@/data/training/partnerships";
import { getFeaturedTestimonials } from "@/lib/content";
import { getCoursesForTraining } from "@/lib/courses";
import type { Course } from "@/types/course";
import type { Testimonial } from "@/types/content";
import type { Partnership, TrainingPageData, TrainingType } from "@/types/training";

// Training page data access. Same contract as lib/courses and lib/content:
// async, so the local data can later come from Supabase without touching pages.

const trainingPages: Record<TrainingType, TrainingPageData> = {
  corporate: corporateTrainingData,
  academic: academicTrainingData,
  government: governmentTrainingData,
};

export async function getTrainingPageContent(type: TrainingType): Promise<TrainingPageData> {
  return trainingPages[type];
}

/** Active partners for a training type, in display order. */
export async function getTrainingPartners(type: TrainingType): Promise<Partnership[]> {
  return partnerships
    .filter((partner) => partner.type === type && partner.is_active)
    .sort((a, b) => a.display_order - b.display_order);
}

export interface TrainingPage {
  content: TrainingPageData;
  partners: Partnership[];
  courses: Course[];
  testimonials: Testimonial[];
}

/** Everything a training page renders, fetched in parallel. */
export async function getTrainingPage(type: TrainingType): Promise<TrainingPage> {
  const [content, partners, courses, testimonials] = await Promise.all([
    getTrainingPageContent(type),
    getTrainingPartners(type),
    getCoursesForTraining(type),
    getFeaturedTestimonials(3, type),
  ]);
  return { content, partners, courses, testimonials };
}
