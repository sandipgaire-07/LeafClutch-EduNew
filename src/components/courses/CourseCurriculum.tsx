import { FileDown } from "lucide-react";

import { CourseCurriculumModules } from "@/components/courses/CourseCurriculumModules";
import { CourseDetailSection } from "@/components/courses/CourseDetailSection";
import { DownloadCourseCurriculumButton } from "@/components/courses/DownloadCourseCurriculumButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CourseModuleWithLessons } from "@/types/course";

interface CourseCurriculumProps {
  courseSlug: string;
  modules: CourseModuleWithLessons[];
  /** An uploaded PDF, offered only when there are no modules to generate one from. */
  pdfUrl: string | null;
}

export function CourseCurriculum({ courseSlug, modules, pdfUrl }: CourseCurriculumProps) {
  if (modules.length === 0 && !pdfUrl) return null;

  const lessonCount = modules.reduce((sum, m) => sum + m.lessons.length, 0);

  // The generated PDF is built from these same modules, so it always matches the page.
  const download = modules.length > 0 ? (
    <DownloadCourseCurriculumButton slug={courseSlug} />
  ) : pdfUrl ? (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: "outline", size: "lg" }), "self-start px-4 sm:self-auto")}
    >
      <FileDown data-icon="inline-start" aria-hidden />
      Download Course Curriculum
      <span className="sr-only">(PDF, opens in a new tab)</span>
    </a>
  ) : null;

  return (
    <CourseDetailSection
      id="curriculum"
      title="Course Curriculum"
      description={
        modules.length > 0
          ? `${modules.length} modules${lessonCount > 0 ? ` · ${lessonCount} lessons` : ""}`
          : "The detailed module breakdown is available as a PDF."
      }
      action={download}
    >
      {modules.length > 0 && <CourseCurriculumModules modules={modules} />}
    </CourseDetailSection>
  );
}
