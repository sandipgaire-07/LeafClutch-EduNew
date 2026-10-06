import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { LoginForm } from "@/components/admin/LoginForm";
import { Logo } from "@/components/layout/Logo";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false } };

export default async function AdminLoginPage() {
  const settings = await getSiteSettings();

  return (
    <main
      id="main"
      className="relative flex flex-1 items-center justify-center overflow-hidden bg-surface-blue/50 px-4 py-16"
    >
      {/* Soft brand glows behind the card. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-80 rounded-full bg-blue/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border bg-white p-8 shadow-card sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Logo logoUrl={settings.logo_url} siteName={settings.site_name} />
            <h1 className="mt-6 text-2xl font-semibold text-foreground">Admin sign in</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Welcome back. Sign in to manage your LeafClutch content.
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <ShieldCheck aria-hidden className="size-3.5 text-navy" />
          Protected area — admin access only.
        </p>
      </div>
    </main>
  );
}
