import { siteConfig } from "@/config/site";
import type { EnrollmentFormValues } from "@/lib/validation/enrollment";

// Enrollment delivery, kept in one place. For now both channels hand off to
// the user's own WhatsApp / email app; nothing is sent from the browser and no
// credentials are involved. When a backend exists (e.g. a Supabase insert or a
// server action that emails admissions), replace `sendEnrollment` only — the
// form does not need to change.

export type EnrollmentChannel = "whatsapp" | "email";

export interface EnrollmentRequest extends EnrollmentFormValues {
  courseName: string;
}

export function buildEnrollmentMessage(request: EnrollmentRequest): string {
  const lines = [
    "Hello LeafClutch,",
    "",
    "I would like to enroll in:",
    "",
    `Course: ${request.courseName}`,
    "",
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Phone: ${request.phone}`,
    `Address: ${request.address}`,
  ];
  if (request.message) lines.push("", "Message:", request.message);
  return lines.join("\n");
}

export function buildWhatsAppUrl(number: string, text: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoUrl(to: string, subject: string, body: string): string {
  // encodeURIComponent (not URLSearchParams) so spaces become %20, which mail clients expect.
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Which channels are configured. A channel without contact details is hidden. */
export function getEnrollmentChannels() {
  return {
    whatsapp: siteConfig.contact.whatsapp,
    email: siteConfig.contact.email,
  };
}

/** The pre-filled WhatsApp or mailto URL, or null if the channel is not configured. */
export function getEnrollmentUrl(
  channel: EnrollmentChannel,
  request: EnrollmentRequest,
): string | null {
  const { whatsapp, email } = getEnrollmentChannels();
  const message = buildEnrollmentMessage(request);

  if (channel === "whatsapp") return whatsapp ? buildWhatsAppUrl(whatsapp, message) : null;
  return email ? buildMailtoUrl(email, `Enrollment request: ${request.courseName}`, message) : null;
}

/**
 * Hands the enrollment to the user's WhatsApp or mail app. This is the one
 * function to replace when enrollments are stored or emailed server-side.
 */
export function sendEnrollment(channel: EnrollmentChannel, url: string) {
  if (channel === "whatsapp") {
    // New tab keeps the form available. (A "noopener" feature string would make
    // window.open return null, so detach the opener manually instead.)
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url; // popup blocked
    return;
  }
  window.location.href = url;
}
