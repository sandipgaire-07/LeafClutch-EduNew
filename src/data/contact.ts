import type { ContactInfo, ContactPageContent } from "@/types/contact";

// FAKE placeholder contact details for development — the real values will come
// from Supabase site settings. The phone and WhatsApp numbers are invalid and
// .example is a reserved domain, so nothing here is reachable. The address is
// a placeholder too. siteConfig.contact reads from this object, so the footer
// and the enrollment form stay in sync with the Contact page.
export const contactInfo: ContactInfo = {
  address: "Kathmandu, Nepal",
  phone: "+977 00-0000000",
  email: "admissions@leafclutch.example",
  whatsapp: "9770000000000",
  openingHours: [
    { id: "weekdays", days: "Sunday – Friday", hours: "9:00 AM – 6:00 PM" },
    { id: "saturday", days: "Saturday", hours: "Closed" },
  ],
};

export const contactPageContent: ContactPageContent = {
  title: "Contact Us",
  description:
    "Questions about a course, batch timings or payment? Send us a message on WhatsApp or by email and our team will get back to you.",
  formTitle: "Send us a message",
  infoTitle: "Get in touch",
  infoDescription: "Prefer to reach us directly? Use any of these.",
};
