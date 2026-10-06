"use client";

import { useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CourseLesson, CourseModuleWithLessons } from "@/types/course";

// Lists are only cut when the button would hide a meaningful amount, not one or two items.
const VISIBLE_MODULES = 6;
const COLLAPSE_MODULES_OVER = 8;
const VISIBLE_LESSONS = 10;
const COLLAPSE_LESSONS_OVER = 15;

function ShowMoreButton({
  expanded,
  controls,
  onClick,
  moreLabel,
  lessLabel,
  className,
}: {
  expanded: boolean;
  controls: string;
  onClick: () => void;
  moreLabel: string;
  lessLabel: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
      className={cn(buttonVariants({ variant: "outline" }), "gap-1.5", className)}
    >
      {expanded ? lessLabel : moreLabel}
      <ChevronDown aria-hidden className={cn("size-4 transition-transform", expanded && "rotate-180")} />
    </button>
  );
}

function LessonList({ lessons }: { lessons: CourseLesson[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const collapsible = lessons.length > COLLAPSE_LESSONS_OVER;
  const shown = collapsible && !expanded ? lessons.slice(0, VISIBLE_LESSONS) : lessons;

  return (
    <>
      <ol id={listId} className="space-y-2.5">
        {shown.map((lesson, i) => (
          <li key={lesson.id} className="flex gap-3">
            <span className="w-5 shrink-0 text-right text-muted-foreground tabular-nums">{i + 1}.</span>
            <span>
              <span className="text-foreground">{lesson.title}</span>
              {lesson.description && (
                <span className="mt-0.5 block text-sm text-muted-foreground">{lesson.description}</span>
              )}
            </span>
          </li>
        ))}
      </ol>
      {collapsible && (
        <ShowMoreButton
          expanded={expanded}
          controls={listId}
          onClick={() => setExpanded((value) => !value)}
          moreLabel={`Show all ${lessons.length} lessons`}
          lessLabel="Show fewer lessons"
          className="mt-4 ml-8"
        />
      )}
    </>
  );
}

export function CourseCurriculumModules({ modules }: { modules: CourseModuleWithLessons[] }) {
  const [expanded, setExpanded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const collapsible = modules.length > COLLAPSE_MODULES_OVER;
  const shown = collapsible && !expanded ? modules.slice(0, VISIBLE_MODULES) : modules;

  function toggle() {
    if (expanded) {
      // Collapsing removes most of the list; bring the reader back to it instead of leaving them far below.
      const top = rootRef.current?.getBoundingClientRect().top ?? 0;
      if (top < 0) rootRef.current?.scrollIntoView({ block: "start" });
    }
    setExpanded(!expanded);
  }

  return (
    <div ref={rootRef} className="scroll-mt-24">
      <Accordion
        id={listId}
        multiple
        defaultValue={[modules[0].id]}
        className="rounded-xl border bg-white px-5 sm:px-6"
      >
        {shown.map((module, index) => (
          <AccordionItem key={module.id} value={module.id}>
            <AccordionTrigger className="gap-4 py-5 text-base hover:no-underline">
              <span className="flex flex-1 items-baseline gap-4">
                <span className="font-mono text-sm text-blue-text tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{module.title}</span>
                {module.lessons.length > 0 && (
                  <span className="hidden text-sm font-normal text-muted-foreground sm:inline">
                    {module.lessons.length} {module.lessons.length === 1 ? "lesson" : "lessons"}
                  </span>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 pl-9 text-[0.9375rem]">
              {module.description && <p className="text-muted-foreground">{module.description}</p>}
              {module.lessons.length > 0 && <LessonList lessons={module.lessons} />}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {collapsible && (
        <div className="mt-4 flex justify-center">
          <ShowMoreButton
            expanded={expanded}
            controls={listId}
            onClick={toggle}
            moreLabel={`Show all ${modules.length} modules`}
            lessLabel="Show fewer modules"
          />
        </div>
      )}
    </div>
  );
}
