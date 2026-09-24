import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import type { StatItem } from "@/types/content";

const statIcons = [Users, BookOpen, GraduationCap, Award];

export function HeroStats({ stats }: { stats: StatItem[] }) {
  if (stats.length === 0) return null;

  return (
    <section
      aria-label="LeafClutch in numbers"
      className="relative overflow-hidden bg-navy"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-sky/10 blur-3xl" />

      <Container className="relative">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];

            return (
              <div
                key={stat.id}
                className={[
                  "relative flex items-center gap-4 px-5 py-7 sm:px-8 sm:py-9",
                  "transition-colors duration-300 hover:bg-white/[0.04]",
                  i % 2 === 1
                    ? "border-l border-white/10 lg:border-l"
                    : "",
                  i >= 2
                    ? "border-t border-white/10 lg:border-t-0"
                    : "",
                  i === 2
                    ? "lg:border-l border-white/10"
                    : "",
                ].join(" ")}
              >
                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky ring-1 ring-white/10">
                  <Icon aria-hidden className="size-5" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <dd className="text-2xl font-bold tracking-tight text-white tabular-nums sm:text-3xl">
                    {stat.value}
                  </dd>

                  <dt className="mt-1 text-sm font-medium text-white/60">
                    {stat.label}
                  </dt>
                </div>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}