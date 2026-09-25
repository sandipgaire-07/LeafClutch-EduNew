@AGENTS.md

You are the Senior Frontend Architect and UI Engineer working on the existing **LeafClutch Technologies** website.

The project is an existing **Next.js + TypeScript + Tailwind CSS + shadcn/ui** application.

Your task is to build three connected public-facing training pages:

1. `/corporate-training`
2. `/academic-training`
3. `/government-training`

These pages should feel like part of the same LeafClutch website, but each page must have **different content, imagery, partnerships, courses, and Why Choose Us messaging** based on its training type.

Use the general information architecture of professional training websites such as Broadway Infosys as inspiration, but **DO NOT copy their branding, text, layout exactly, assets, or content**. Create an original LeafClutch implementation.
# 1. IMPORTANT PROJECT RULES
Before making changes:
* Inspect the existing project structure.
* Inspect the existing course types and mock course data.
* Inspect existing components and styling.
* Reuse existing components where appropriate.
* Do not unnecessarily rewrite existing pages.
* Do not rebuild the project from scratch.
* Do not introduce unnecessary libraries.
* Do not over-engineer the solution.
* Keep the architecture component-driven.
* Keep the implementation maintainable and easy to connect to Supabase later.
* Use TypeScript properly.
* Use Next.js App Router conventions.
* Use Server Components by default.
* Use `"use client"` only where interaction is required.
* Do not make the entire page a client component just because one section is interactive.
* Use `next/image` for images.
* Use `next/link` for internal navigation.
* Use Lucide icons where appropriate.
* Use shadcn/ui where it genuinely improves the UI.
* Do not make the design look like default shadcn.
* Do not use Framer Motion.
* Use simple CSS/Tailwind transitions and Swiper for the gallery.
* Keep the design professional, modern, clean, and realistic.
* Avoid excessive gradients, glassmorphism, huge rounded cards, excessive shadows, and decorative effects.
* Avoid the "AI-generated website" look.
# 2. EXISTING LEAFCLUTCH DESIGN SYSTEM
Use the existing LeafClutch design system.
Do not silently invent replacement values.
If these values already exist in the project, preserve the existing valid implementation. If they are invalid CSS colors, identify the issue and use the project's existing semantic token instead of scattering replacement hex values throughout components.
Prefer semantic theme variables/classes rather than raw hex values throughout components.
Use:
* Navy for primary CTAs and important actions.
* Blue/cyan as supporting accent colors.
* Light blue/gray backgrounds for sections.
* Green only as a supporting accent, not as the dominant color.
* White backgrounds where appropriate.
* Avoid black borders.
* Use subtle borders and shadows.
---
# 3. THREE TRAINING TYPES
Create a reusable training system supporting:
```ts
type TrainingType = "corporate" | "academic" | "government";
```
The three pages are:
```text
/corporate-training
/academic-training
/government-training
``
Do NOT create three completely separate duplicated implementations.
Use shared components and training-specific configuration/data.
---
# 4. PAGE STRUCTURE
Each page should follow this structure:
```text
1. Hero
2. Partnership Logo/Icon Marquee
3. Relevant Courses
4. Why Choose Us
5. Training Process
6. Training Programs / Solutions
7. Testimonials
8. CTA / Inquiry Section
9. Footer
```
The exact final sections can reuse existing site components where available.
---
# 5. HERO SECTION
Create a reusable:
```text
components/training/TrainingHero.tsx
```
Desktop layout:
```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  LEFT CONTENT                     RIGHT GALLERY             │
│                                                             │
│  Corporate Training                                         │
│                                                             │
│  Empower Your Team With                                     │
│  Industry-Ready Technology Skills                           │
│                                                             │
│  Short professional description.                            │
│                                                             │
│  [Request Training]                                         │
│                                                             │
│                                  ┌───────────────┐           │
│                                  │               │           │
│                                  │ ACTIVE IMAGE  │           │
│                                  │               │           │
│                                  └───────────────┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
The right side must use **Swiper.js**.
---
# 6. SWIPER GALLERY REQUIREMENTS
Install/use:
```bash
npm install swiper
```
If Swiper is already installed, reuse it.
Create:
```text
components/training/TrainingGallery.tsx
```
The gallery must be:
* Automatic/autoplay.
* Looping.
* Responsive.
* Touch/swipe enabled.
* Keyboard accessible where appropriate.
* Smooth.
* Professional.
* Not overly animated.
Use:
```ts
Autoplay
EffectCoverflow
Pagination
Navigation
```
only where appropriate.
The main requirement is:
**THE SLIDER MUST AUTOMATICALLY CHANGE SLIDES.**
Use Swiper autoplay.
Recommended behavior:
```text
delay: 3000–4000ms
disableOnInteraction: false
pauseOnMouseEnter: true
loop: true
```
Use an appropriate modern expo/coverflow-style presentation so that the active image is prominent and adjacent slides are partially visible.
Do not create a fake CSS carousel.
Use real Swiper.
Example conceptual configuration:
```tsx
<Swiper
  modules={[Autoplay, EffectCoverflow, Pagination]}
  effect="coverflow"
  centeredSlides
  loop
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 1.25,
    },
  }}
>
```
Adjust the configuration based on the actual design.
Do not overdo the but include 3D effect.
The images should feel like a professional training/gallery showcase.
---
# 7. HERO CONTENT
## Corporate
Eyebrow:

```text
Corporate Training
```

Heading:

```text
Empower Your Team With Industry-Ready Technology Skills
```

Description:

```text
Equip your workforce with practical, industry-focused technology training designed around your organization's goals, challenges, and future needs.
```
CTA:

```text
Request Corporate Training
```
---

## Academic

Eyebrow:

```text
Academic Training
```

Heading:

```text
Prepare Students for the Skills and Careers of Tomorrow
```

Description:

```text
Help students bridge the gap between academic learning and industry expectations through practical, mentor-led technology training.
```

CTA:

```text
Partner With Us
```

---

## Government

Eyebrow:

```text
Government Training
```

Heading:

```text
Building Digital Skills for a Smarter Public Sector
```

Description:

```text
Support digital transformation with practical technology training designed for government teams, institutions, and public-sector initiatives.
```

CTA:

```text
Request Government Training
```

CTA destinations can initially point to:

```text
/contact
```

or an appropriate inquiry section.

Prefer `Link` rather than a `Button` when navigating.

---

# 8. HERO IMAGE DATA

Do not hardcode image URLs inside the component.

Training data should provide:

```ts
gallery: string[];
```

Example:

```ts
gallery: [
  "/training/corporate/corporate-1.jpg",
  "/training/corporate/corporate-2.jpg",
  "/training/corporate/corporate-3.jpg",
  "/training/corporate/corporate-4.jpg",
]
```

Use placeholder/mock assets only if actual project assets do not exist.

Do not invent external URLs.

Create a clear structure such as:

```text
public/
└── training/
    ├── corporate/
    ├── academic/
    └── government/
```

If suitable existing images already exist in the project, reuse them.

---

# 9. PARTNERSHIP MARQUEE

Create:

```text
components/training/PartnershipMarquee.tsx
```

The section appears immediately after Hero.

Corporate:

```text
Trusted by Businesses & Organizations
```

Academic:

```text
Our Academic Partners
```

Government:

```text
Supporting Public Sector & Government Initiatives
```

The marquee should display partner logos/names.

It should be:

* Continuous.
* Smooth.
* Responsive.
* Automatically moving.
* Pause on hover if appropriate.
* Accessible.
* Not visually overwhelming.

Use existing marquee implementation if one already exists in the project.

If no marquee library exists, a simple CSS animation is preferred over adding another dependency.

---

# 10. PARTNERSHIP DATA

Create/update:

```ts
export interface Partnership {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  type: TrainingType;
  display_order: number;
  is_active: boolean;
}
```

Mock data:

```text
data/training/partnerships.ts
```

Include different mock partners for:

```text
corporate
academic
government
```

Do not use real organization logos unless they already exist in the project or have been explicitly provided.

Use professional placeholder/mock organization names if necessary.

Clearly keep this data replaceable by Supabase later.

---

# 11. COURSE SECTION

Create:

```text
components/training/TrainingCourses.tsx
```

This section should display courses relevant to the current training type.

Example:

```text
Corporate Courses
```

```text
Academic Courses
```

```text
Government Courses
```

Use the existing `CourseCard` component if it already exists.

Do not create a second visually inconsistent course-card design unless necessary.

Courses should be filtered based on the training type.

For example:

```ts
course.training_types
```

or a relation in mock data.

Do not duplicate the entire course object for each training page.

Instead establish the relationship.

---

# 12. COURSE TYPE CHANGES

Update the existing course type to support training relationships.

Use something similar to:

```ts
export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description?: string;
  thumbnail?: string;

  category_id: string;

  category?: {
    id: string;
    name: string;
    slug: string;
  };

  actual_price: number;
  discount_price?: number | null;

  total_duration: string;

  training_types?: TrainingType[];

  status: "draft" | "published";
  is_featured?: boolean;

  created_at?: string;
  updated_at?: string;
}
```

Keep existing fields that are already used by the project.

Do not break existing CourseCard or course-detail functionality.

---

# 13. MOCK COURSE DATA

Update the mock course data so different courses can appear on:

```text
Corporate
Academic
Government
```

Example:

```ts
training_types: ["corporate", "academic"]
```

or:

```ts
training_types: ["government"]
```

Make sure the existing courses page continues to work.

Do not remove existing courses unnecessarily.

---

# 14. WHY CHOOSE US

Create:

```text
components/training/TrainingWhyChooseUs.tsx
```

Desktop layout:

```text
┌───────────────────────────────┬─────────────────────────────┐
│                               │                             │
│       IMAGE COLLAGE           │       Why Choose Us         │
│                               │                             │
│   ┌──────────┐ ┌──────────┐   │   ┌─────────────────────┐   │
│   │ Image 0  │ │ Image 1  │   │   │ Icon  Feature       │   │
│   │          │ │          │   │   └─────────────────────┘   │
│   └──────────┘ └──────────┘   │                             │
│                               │   ┌─────────────────────┐   │
│        ┌─────────────┐        │   │ Icon  Feature       │   │
│        │   Image 2   │        │   └─────────────────────┘   │
│        └─────────────┘        │                             │
│                               │   ┌─────────────────────┐   │
│                               │   │ Icon  Feature       │   │
│                               │   └─────────────────────┘   │
└───────────────────────────────┴─────────────────────────────┘
```

The image area should feel like a **modern editorial collage**, not a simple 2x2 grid.

Use:

```ts
images: string[];
```

and position the first few images intentionally.

At minimum support:

```text
images[0]
images[1]
images[2]
```

If fewer images exist, gracefully fall back to a simpler layout.

---

# 15. WHY CHOOSE US — CORPORATE

Use these concepts:

### Industry-Focused Training

Training designed around real workplace requirements and current technology trends.

### Customized Learning Programs

Training programs adapted to organizational goals, teams, and skill gaps.

### Practical Project-Based Learning

Employees learn through practical tasks and real-world scenarios.

### Flexible Delivery

Offer on-site, online, and hybrid training options.

### Experienced Trainers

Learn from professionals with practical technology experience.

### Measurable Skill Development

Focus on practical capabilities that employees can apply in their work.

Use Lucide icons that make semantic sense.

---

# 16. WHY CHOOSE US — ACADEMIC

Use:

### Industry-Relevant Curriculum

Help students develop skills aligned with modern technology careers.

### Hands-On Projects

Students learn by building practical projects rather than relying only on theory.

### Experienced Mentors

Provide guidance from trainers with practical industry experience.

### Career & Internship Exposure

Help students understand professional environments and career expectations.

### Certification

Recognize students' learning and practical achievements.

### Institutional Collaboration

Work with academic institutions to develop relevant learning programs.

---

# 17. WHY CHOOSE US — GOVERNMENT

Use:

### Public-Sector Relevant Training

Programs designed around digital transformation and institutional requirements.

### Digital Skills Development

Build practical technology capabilities among government personnel.

### Customized Programs

Training can be adapted to departmental and organizational requirements.

### Flexible Delivery

Support on-site, online, and hybrid training.

### Experienced Trainers

Professional trainers with practical technology experience.

### Sustainable Capacity Building

Focus on skills that organizations can continue applying after training.

---

# 18. TRAINING PROCESS

Create:

```text
components/training/TrainingProcess.tsx
```

This should be shared across all three pages but use the same general process.

Display:

```text
01
Understand Your Requirements

02
Design the Training Program

03
Deliver Practical Training

04
Evaluate & Support
```

Use a clean horizontal layout on desktop and vertical timeline/card layout on mobile.

The design should not be overly decorative.

---

# 19. TRAINING PROGRAMS / SOLUTIONS

Create:

```text
components/training/TrainingPrograms.tsx
```

This section should communicate that LeafClutch can provide customized programs rather than only predefined courses.

Corporate examples:

```text
Employee Upskilling
Technology Transformation
AI & Automation
Data & Analytics
Cybersecurity
Digital Productivity
```

Academic:

```text
Student Skill Development
Industry-Oriented Workshops
Technology Bootcamps
Internship Preparation
Faculty Development
Career-Oriented Training
```

Government:

```text
Digital Transformation
Data & Analytics
Cybersecurity Awareness
AI & Emerging Technologies
Digital Productivity
Technical Capacity Building
```

Use reusable cards.

---

# 20. TESTIMONIALS

Reuse the existing testimonial component if available.

Filter or provide appropriate mock testimonials for:

```text
corporate
academic
government
```

Update the testimonial type if necessary:

```ts
type TestimonialType =
  | "student"
  | "corporate"
  | "academic"
  | "government";
```

Do not duplicate the testimonial component for each page.

---

# 21. CTA / INQUIRY SECTION

At the bottom, create a strong CTA.

Corporate:

```text
Ready to Upskill Your Team?

Let's build a training program around your organization's goals.

[Request Corporate Training]
```

Academic:

```text
Let's Prepare Students for the Future

Partner with LeafClutch to bring industry-focused technology learning to your institution.

[Partner With Us]
```

Government:

```text
Build Digital Capacity for the Future

Let's design practical technology training around your institution's needs.

[Request Government Training]
```

Use `Link` for navigation to the contact/inquiry page.

---

# 22. OPTIONAL INQUIRY DATA PREPARATION

Prepare the types/mock structure for future backend integration.

Create:

```ts
export interface TrainingInquiry {
  id: string;
  training_type: TrainingType;

  organization_name: string;
  contact_person: string;

  email: string;
  phone?: string;

  participants?: number;
  preferred_duration?: string;

  preferred_mode?: "online" | "on_site" | "hybrid";

  message: string;

  status: "new" | "contacted" | "in_progress" | "completed" | "closed";

  created_at?: string;
}
```

Do not necessarily implement the complete Supabase form/backend yet unless an existing contact/inquiry system can be reused cleanly.

For now, the CTA can navigate to `/contact`.

---

# 23. TRAINING DATA ARCHITECTURE

Create a reusable data model.

Suggested:

```text
src/
├── app/
│   ├── corporate-training/
│   │   └── page.tsx
│   ├── academic-training/
│   │   └── page.tsx
│   └── government-training/
│       └── page.tsx
│
├── components/
│   └── training/
│       ├── TrainingHero.tsx
│       ├── TrainingGallery.tsx
│       ├── PartnershipMarquee.tsx
│       ├── TrainingCourses.tsx
│       ├── TrainingWhyChooseUs.tsx
│       ├── TrainingFeatureCard.tsx
│       ├── TrainingProcess.tsx
│       ├── TrainingPrograms.tsx
│       ├── TrainingTestimonials.tsx
│       └── TrainingCTA.tsx
│
├── data/
│   └── training/
│       ├── corporate.ts
│       ├── academic.ts
│       ├── government.ts
│       └── partnerships.ts
│
└── types/
    └── training.ts
```

Adapt this to the project's existing architecture instead of blindly creating duplicate folders.

---

# 24. TRAINING PAGE TYPE

Create:

```ts
export interface TrainingFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrainingPageData {
  type: TrainingType;

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    gallery: string[];
  };

  partnership: {
    title: string;
  };

  courses: {
    title: string;
    description: string;
  };

  whyChooseUs: {
    title: string;
    description: string;
    images: string[];
    features: TrainingFeature[];
  };

  process: {
    title: string;
    description?: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  programs: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };

  cta: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
}
```

Keep the data structure backend-friendly.

---

# 25. ICON HANDLING

Do not put React icon components directly into database-style mock data.

Prefer:

```ts
icon: "Building2"
```

Then map the name to Lucide icons in the UI.

Example:

```ts
const iconMap = {
  Building2,
  GraduationCap,
  ShieldCheck,
  Users,
  Laptop,
  Briefcase,
};
```

This will make future Supabase integration easier.

---

# 26. RESPONSIVE REQUIREMENTS

The pages must work properly on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop:

```text
Hero → two columns
Why Choose Us → image collage + feature cards
Training Process → horizontal
Courses → multi-column grid
```

Mobile:

```text
Hero
  ↓
Gallery
  ↓
CTA
  ↓
Partnership marquee
  ↓
Courses
  ↓
Why Choose Us
  ↓
Process
  ↓
Programs
  ↓
Testimonials
  ↓
CTA
```

Do not allow horizontal overflow.

The Swiper gallery must remain usable on small screens.

#

---

# . IMPORTANT COURSE RELATIONSHIP

Do not create three copies of the same course.

Use:

```ts
training_types: TrainingType[]
```

in mock data for now.

Example:

```ts
{
  id: "course-1",
  name: "Data Analytics",
  ...
  training_types: ["corporate", "academic", "government"]
}
```

Another:

```ts
{
  id: "course-2",
  name: "Full Stack Web Development",
  ...
  training_types: ["academic", "corporate"]
}
```

The page filters the existing course collection:

```ts
courses.filter((course) =>
  course.training_types?.includes(trainingType)
);
```

Only display:

```text
status === "published"
```

---

# 30. DO NOT BREAK THE EXISTING COURSES PAGE

The existing:

```text
/courses
/courses/[slug]
```

must continue working.

If you change the Course type:

* preserve existing fields
* preserve existing CourseCard props
* preserve course-detail functionality
* update mock data consistently
* do not introduce unnecessary breaking changes

---

# 31. COMPONENT RESPONSIBILITY

Keep responsibilities clean.

### TrainingHero

Only hero layout.

### TrainingGallery

Only Swiper gallery.

### PartnershipMarquee

Only partner presentation/marquee.

### TrainingCourses

Only course section/filtering.

### TrainingWhyChooseUs

Only section composition.

### TrainingFeatureCard

Only feature presentation.

### TrainingProcess

Only process presentation.

### TrainingPrograms

Only program cards.

### TrainingTestimonials

Only testimonial presentation.

### TrainingCTA

Only final CTA.

Do not put all page logic into one giant component.

---

# 32. PAGE IMPLEMENTATION

Each page should be very small.

Conceptually:

```tsx
export default function CorporateTrainingPage() {
  const data = corporateTrainingData;

  return (
    <>
      <TrainingHero data={data.hero} />

      <PartnershipMarquee
        type={data.type}
        title={data.partnership.title}
      />

      <TrainingCourses
        type={data.type}
        {...data.courses}
      />

      <TrainingWhyChooseUs data={data.whyChooseUs} />

      <TrainingProcess data={data.process} />

      <TrainingPrograms data={data.programs} />

      <TrainingTestimonials type={data.type} />

      <TrainingCTA data={data.cta} />
    </>
  );
}
```

Academic and Government should follow the same architecture.

---

# 33. VISUAL DESIGN DIRECTION

The pages should feel:

* Professional
* Technology-focused
* Trustworthy
* Modern
* Institutional
* Clean
* Premium but not flashy

Avoid:

* Huge gradients
* Excessive rounded cards
* Excessive glass effects
* Random floating blobs
* Excessive animations
* Neon colors
* Too many colors
* Giant text that consumes the entire viewport
* Generic AI landing-page aesthetics

Use:

* Strong typography
* Clean spacing
* Navy headings
* White/light backgrounds
* Blue accents
* Subtle borders
* Moderate shadows
* Editorial image layouts
* Clean cards
* Strong visual hierarchy

---

# 34. SWIPER SPECIFIC REQUIREMENT — VERY IMPORTANT

The Hero gallery **must automatically slide without the user doing anything**.

Do not leave it as manual-only navigation.

Required:

```ts
autoplay={{
  delay: 3500,
  disableOnInteraction: false,
}}
loop
```

Also make sure that:

* autoplay works after user swipes
* autoplay works after pagination clicks
* autoplay works when the component remounts
* images don't cause layout shift
* gallery works on mobile
* the slider doesn't overflow its container

Use a client component only for the Swiper gallery:

```tsx
"use client";
```

Do NOT make the entire page client-side because of Swiper.

---

# 35. MOCK DATA QUALITY

Create realistic mock data.

Do not use:

```text
Lorem ipsum
Test Company
ABC Organization
Image 1
Image 2
```

Use realistic but fictional LeafClutch-style organizations if real partner information is not available.

Examples:

```text
Himalayan Digital Solutions
TechBridge Nepal
Future Skills Academy
Digital Innovation Center
```

Clearly keep them as mock data.

Create different gallery images and content for:

```text
Corporate
Academic
Government
```

so the three pages do not look like clones.

---

#

---

# 37. IMPLEMENTATION APPROACH

Do NOT dump a huge amount of code without inspecting the project.

First:

1. Inspect the existing course types.
2. Inspect mock course data.
3. Inspect existing CourseCard.
4. Inspect existing theme/global CSS.
5. Inspect existing Navbar/Footer.
6. Inspect whether Swiper is already installed.
7. Inspect existing testimonial/marquee components.
8. Identify what can be reused.

Then implement in this order:

```text
1. Training types
2. Training mock data
3. Update Course type
4. Update Course mock data
5. TrainingHero
6. TrainingGallery with Swiper Autoplay
7. PartnershipMarquee
8. TrainingCourses
9. TrainingWhyChooseUs + image collage
10. TrainingProcess
11. TrainingPrograms
12. TrainingTestimonials
13. TrainingCTA
14. Three page routes
15. Responsive refinement
16. Accessibility
17. SEO metadata
18. Final TypeScript/build check
```

Keep the implementation simple and production-oriented.

If an existing component already solves part of the problem, reuse it rather than creating another duplicate component.

The final result should look like **one coherent LeafClutch training platform with three specialized experiences**, not three copied pages.
