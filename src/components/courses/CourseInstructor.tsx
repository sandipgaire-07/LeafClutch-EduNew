import { CourseDetailSection } from "@/components/courses/CourseDetailSection";
import { PersonAvatar } from "@/components/shared/PersonAvatar";
import type { Instructor } from "@/types/course";

export function CourseInstructor({ instructors }: { instructors: Instructor[] }) {
  if (instructors.length === 0) return null;

  return (
    <CourseDetailSection
      id="instructors"
      title={instructors.length === 1 ? "Meet Your Instructor" : "Meet Your Instructors"}
    >
      <ul className="space-y-4">
        {instructors.map((instructor) => (
          <li key={instructor.id} className="flex flex-col gap-5 rounded-xl border bg-white p-6 sm:flex-row">
            <PersonAvatar name={instructor.name} image={instructor.image} size="lg" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">{instructor.name}</h3>
              <p className="text-sm font-medium text-blue-text">{instructor.designation}</p>
              <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted-foreground">
                {instructor.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </CourseDetailSection>
  );
}
