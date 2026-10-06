import Image from "next/image";
import { Award } from "lucide-react";

import { getSiteSettings } from "@/lib/content";
import type { Course } from "@/types/course";
import certificateImage from "../../../public/certificate.jpeg";

export async function CourseCertificate({
  course,
}: {
  course: Pick<Course, "name" | "certificate_available">;
}) {
  // Never imply a certificate the course does not offer.
  if (!course.certificate_available) return null;

  const settings = await getSiteSettings();
  const companyName = settings.site_name || "LeafClutch";

  return (
    <section
      id="certificate"
      aria-labelledby="certificate-heading"
      className="grid scroll-mt-24 items-center gap-8 rounded-2xl border bg-surface-blue/60 p-6 sm:p-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
    >
      <div>
        <span className="flex size-11 items-center justify-center rounded-lg border bg-white">
          <Award aria-hidden className="size-5 text-navy" />
        </span>
        <h2 id="certificate-heading" className="mt-5 text-2xl font-semibold text-foreground">
          Certificate of Completion
        </h2>
        <p className="mt-2 max-w-md text-muted-foreground">
          Successfully complete the course and receive a {companyName} certificate.
        </p>
      </div>

      <Image
        src={certificateImage}
        alt={`Sample ${companyName} certificate of completion`}
        placeholder="blur"
        sizes="(min-width: 1024px) 460px, (min-width: 768px) 55vw, 100vw"
        className="h-auto w-full rounded-lg border bg-white shadow-card-hover"
      />
    </section>
  );
}
