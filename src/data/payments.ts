import type { CourseInstallment, CoursePaymentMethod, PaymentMethod } from "@/types/course";

// Display only — no payment is processed on the website.
export const paymentMethods: PaymentMethod[] = [
  { id: "pm-esewa", name: "eSewa", type: "wallet", description: "Pay from your eSewa wallet.", is_active: true, display_order: 1 },
  { id: "pm-khalti", name: "Khalti", type: "wallet", description: "Pay from your Khalti wallet.", is_active: true, display_order: 2 },
  { id: "pm-fonepay", name: "Fonepay", type: "qr", description: "Scan a Fonepay QR with your banking app.", is_active: true, display_order: 3 },
  { id: "pm-bank", name: "Bank Transfer", type: "bank", description: "Transfer directly to our bank account.", is_active: true, display_order: 4 },
];

const allMethods = (course_id: string): CoursePaymentMethod[] =>
  paymentMethods.map((method) => ({ course_id, payment_method_id: method.id }));

export const coursePaymentMethods: CoursePaymentMethod[] = [
  ...allMethods("course-agentic-ai"),
  ...allMethods("course-generative-ai"),
  ...allMethods("course-mern"),
  ...allMethods("course-uiux"),
  ...allMethods("course-react-next"),
  { course_id: "course-data-science", payment_method_id: "pm-esewa" },
  { course_id: "course-data-science", payment_method_id: "pm-khalti" },
  { course_id: "course-data-science", payment_method_id: "pm-bank" },
];

// TODO: confirm instalment plans with LeafClutch.
export const courseInstallments: CourseInstallment[] = [
  { id: "i-agentic-1", course_id: "course-agentic-ai", title: "First Instalment", percentage: 50, description: "Payable at enrollment", display_order: 1 },
  { id: "i-agentic-2", course_id: "course-agentic-ai", title: "Second Instalment", percentage: 50, description: "Payable when promoted to internship", display_order: 2 },

  { id: "i-mern-1", course_id: "course-mern", title: "First Instalment", percentage: 40, description: "Payable at enrollment", display_order: 1 },
  { id: "i-mern-2", course_id: "course-mern", title: "Second Instalment", percentage: 30, description: "Payable at the start of month two", display_order: 2 },
  { id: "i-mern-3", course_id: "course-mern", title: "Third Instalment", percentage: 30, description: "Payable at the start of month three", display_order: 3 },

  { id: "i-ds-1", course_id: "course-data-science", title: "First Instalment", percentage: 50, description: "Payable at enrollment", display_order: 1 },
  { id: "i-ds-2", course_id: "course-data-science", title: "Second Instalment", percentage: 50, description: "Payable at the midpoint of the course", display_order: 2 },
];
