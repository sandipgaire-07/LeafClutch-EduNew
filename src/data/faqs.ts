import type { Faq } from "@/types/content";

// Site-wide FAQs (course_id = null). Course-specific FAQs use the same shape
// with course_id set. TODO: review wording with LeafClutch before launch.
export const faqs: Faq[] = [
  {
    id: "faq-experience",
    question: "Do I need prior experience to join a course?",
    answer:
      "Most beginner courses start from the fundamentals, so no prior experience is required. Advanced courses list their prerequisites on the course page — if you are unsure, contact us and we will help you pick the right starting point.",
    category: "general",
    course_id: null,
    is_active: true,
    display_order: 1,
  },
  {
    id: "faq-modes",
    question: "Are classes online or in person?",
    answer:
      "It depends on the course. Each course is offered online, in person or in a hybrid format, and the learning mode is shown on every course card and course page.",
    category: "general",
    course_id: null,
    is_active: true,
    display_order: 2,
  },
  {
    id: "faq-choose",
    question: "How do I choose the right course?",
    answer:
      "Start with the area you want to work in, then compare the curriculum, duration and projects on each course page. Our team is also happy to talk through your goals before you enroll.",
    category: "course",
    course_id: null,
    is_active: true,
    display_order: 3,
  },
  {
    id: "faq-projects",
    question: "Will I build real projects?",
    answer:
      "Yes. Every course is project-based, and you finish with work you can show in a portfolio or during interviews.",
    category: "course",
    course_id: null,
    is_active: true,
    display_order: 4,
  },
  {
    id: "faq-enroll",
    question: "How do I enroll?",
    answer:
      "Open the course you are interested in and select Enroll Now. Fill in the short form and send it to us by WhatsApp or email — our team will confirm your seat and share the next steps.",
    category: "enrollment",
    course_id: null,
    is_active: true,
    display_order: 5,
  },
  {
    id: "faq-payment",
    question: "Which payment methods do you accept?",
    answer:
      "We accept eSewa, Khalti, Fonepay and bank transfer. The methods available for each course, and any instalment plan, are listed on the course page.",
    category: "enrollment",
    course_id: null,
    is_active: true,
    display_order: 6,
  },
  {
    id: "faq-installments",
    question: "Can I pay in instalments?",
    answer:
      "Many courses can be paid in instalments. Where an instalment plan is available, the course page shows each instalment and when it is due.",
    category: "enrollment",
    course_id: null,
    is_active: true,
    display_order: 7,
  },
  {
    id: "faq-certificate",
    question: "Will I receive a certificate?",
    answer:
      "Courses that include a certificate say so on the course page. You receive a LeafClutch certificate of completion after successfully finishing the course and its projects.",
    category: "certificate",
    course_id: null,
    is_active: true,
    display_order: 8,
  },

  // Course-specific FAQs
  {
    id: "faq-agentic-prereq",
    question: "What do I need to know before joining Agentic AI?",
    answer:
      "You should be comfortable writing basic Python — functions, loops and working with lists and dictionaries. No prior machine learning experience is required.",
    category: "course",
    course_id: "course-agentic-ai",
    is_active: true,
    display_order: 1,
  },
  {
    id: "faq-agentic-api",
    question: "Do I need to pay for AI model APIs?",
    answer:
      "Most exercises can be completed with free tiers or open models. Where a paid API is useful, we show you how to keep costs very low and suggest free alternatives.",
    category: "course",
    course_id: "course-agentic-ai",
    is_active: true,
    display_order: 2,
  },
  {
    id: "faq-agentic-laptop",
    question: "What kind of laptop do I need?",
    answer:
      "Any laptop from the last five years with 8 GB of RAM is enough. Heavy computation runs in the cloud, not on your machine.",
    category: "course",
    course_id: "course-agentic-ai",
    is_active: true,
    display_order: 3,
  },
  {
    id: "faq-mern-beginner",
    question: "Is MERN Stack Development suitable for complete beginners?",
    answer:
      "It helps to know basic HTML and CSS. The course starts with modern JavaScript, so you do not need prior programming experience beyond that.",
    category: "course",
    course_id: "course-mern",
    is_active: true,
    display_order: 1,
  },
  {
    id: "faq-mern-inactive",
    question: "Draft question that should not appear",
    answer: "Inactive FAQs are hidden.",
    category: "course",
    course_id: "course-mern",
    is_active: false,
    display_order: 2,
  },
];
