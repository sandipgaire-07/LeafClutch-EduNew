import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// Trimmed copy of public/companyLogo/plainCompany logo.png (transparent padding removed).
import logoImage from "../../../public/companyLogo/leafclutch-logo.png";

const linkClass =
  "inline-flex shrink-0 items-center gap-2 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

/**
 * `dark` (default): the company logo image, for light backgrounds such as the navbar.
 * `light`: a text wordmark for dark backgrounds — the logo's navy lettering would
 * disappear on the navy footer.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  if (tone === "dark") {
    return (
      <Link href="/" className={cn(linkClass, className)}>
        <Image
          src={logoImage}
          alt={`${siteConfig.name} home`}
          loading="eager"
          sizes="160px"
          className="h-10 w-auto sm:h-11"
        />
      </Link>
    );
  }

  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn(linkClass, className)}>
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15"
      >
        <Leaf className="size-4 text-green" strokeWidth={2.25} />
      </span>
      <span aria-hidden className="text-lg font-semibold tracking-tight text-white">
        LeafClutch
      </span>
    </Link>
  );
}
