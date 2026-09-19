# Obama College, Mankessim — Website
## Technical Specification & Development Guide

**Project Name:** Obama College, Mankessim Website
**Framework:** Next.js 15+ (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS + shadcn/ui
**Deployment:** Netlify (static export via `netlify.toml`, Netlify Identity for `/admin` auth, Decap/Netlify CMS for content editing)
**Version:** 1.0 (Static Website)
**Architecture:** Static First → Database Ready

---

# Project Vision

Build a modern, responsive, high-performance website for **Obama College, Mankessim** — a Senior High School.

The first version will be completely static, but every component should be designed so that the content source can later be replaced with a database or CMS without changing the frontend.

The website should communicate:

- Academic Excellence
- Discipline
- Innovation
- Leadership
- Community
- Student Success

---

# Objectives

- Improve the school's online presence
- Make information easily accessible to parents and students
- Increase admissions enquiries
- Showcase facilities and student life
- Provide a scalable architecture for future expansion
- Prepare for a future student portal and online admissions system

---

# About Obama College, Mankessim

Obama College, Mankessim (abbreviated **OBACO**) is a mixed **Day & Boarding** Senior
High School in **Mankessim, Central Region, Ghana**.

Confirmed from the 2026/2027 prospectus:

- Founded **2009**; motto **"You Can"**
- Runs the **Free SHS** programme (uniforms, textbooks, tablet, tuition, one hot
  meal a day, house jersey, cardigan, final-year WASSCE registration)
- Optional paid boarding (GH₵500.00/semester) and campus feeding
- Phone: **0540 901303**
- Legal entity for banking: **Obaco Ghana Limited**

Programmes (five):

- General Arts
- General Science
- Business
- Home Economics
- Visual Arts

The school has a computer laboratory and issues one-to-one learner tablets as part
of ongoing ICT development.

Source material (logo, per-form prospectuses, campus/student photos) lives outside
the repo; the prospectus PDFs are served from `public/prospectus/` and the logo
from `public/logo.jpeg` / `app/icon.jpeg`.

---

# Design Inspiration

The website should have a premium educational feel similar to:

- Ashesi University
- Academic City University
- Lancaster University Ghana
- SOS-Hermann Gmeiner International College

Characteristics:

- Modern
- Professional
- Bright
- Clean
- Fast
- Mobile-first
- Large photography
- Accessible
- SEO-friendly

---

# Technology Stack

## Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Animation

- Framer Motion

## Forms

- React Hook Form
- Zod

## Icons

- Lucide React

---

# Future Stack

The architecture should make it easy to migrate to:

- Prisma
- PostgreSQL
- Cloudinary
- NextAuth
- Payload CMS / Strapi / Sanity
- AWS S3
- Resend
- Google Analytics

---

# Architecture Philosophy

## Static Today

```
Component
        ↓
Static Data
```

## Future

```
Component
        ↓
API
        ↓
Database
```

No component should directly contain hardcoded content.

---

# Project Structure

```
app/
│
├── page.tsx
├── about/
├── programmes/
│      ├── page.tsx
│      └── [slug]/
├── admissions/
├── student-life/
├── gallery/
├── news/
│      ├── page.tsx
│      └── [slug]/
└── contact/
│
components/
│
├── layout/
├── shared/
├── home/
├── programmes/
├── about/
├── admissions/
├── gallery/
├── news/
├── student-life/
└── ui/
│
data/
│
├── site.ts
├── navigation.ts
├── home.ts
├── about.ts
├── admissions.ts
├── student-life.ts
├── testimonials.ts
│
└── senior-high/
       ├── overview.ts
       ├── programs.ts
       ├── gallery.ts
       ├── staff.ts
       └── news.ts

lib/

types/

public/

styles/
```

---

# Data Layer

Never hardcode content inside components.

Instead use data files under `data/`.

Example:

```ts
export const seniorHighPrograms: Program[] = [
  {
    id: "general-arts",
    slug: "general-arts",
    title: "General Arts",
    overview: "…",
    subjects: ["…"],
    careers: ["…"],
    requirements: ["…"],
  },
];
```

Later these files can simply become database queries.

---

# Navigation

- Home
- About
- Programmes
- Admissions
- Student Life
- Gallery
- News
- Contact

---

# Homepage

Sections

1. Hero

- Full-width hero image
- Motto
- CTA buttons

2. Welcome Message

3. Programmes

4. Why Choose Obama College

5. Academic Highlights

6. Statistics

Examples:

- Students
- Teachers
- Years of Excellence
- Clubs

7. Campus Gallery

8. Testimonials

9. Latest News

10. Call To Action

11. Footer

---

# About Page

Sections

- History
- Vision
- Mission
- Core Values
- Leadership
- Facilities
- Achievements
- Why Choose Obama College

---

# Programmes

Sections

- Hero
- Programme cards (General Arts, General Science, Business, Home Economics, Visual Arts)
- Academic Excellence
- Admissions teaser
- FAQ
- CTA

## Programme Detail (`/programmes/[slug]`)

Each programme contains:

- Overview
- Subjects
- Career Opportunities
- Admission Requirements

---

# Admissions

Placement is through the **CSSPS** — there is no application form. Sections:

- Admission Process (check placement → accept → download prospectus → report)
- Requirements (BECE slip, birth certificate, Ghana Card, NHIS card, placement confirmation)
- Free SHS — what's covered + optional boarding/feeding fees
- Prospectus downloads (SHS 1 / SHS 2 / SHS 3, served from `public/prospectus/`)
- Key dates (reporting window, PTA meeting, SHS 3 fee balance)
- SHS 3 continuing-student fees + payment banks (from `site.banks`)
- FAQs
- Contact Admissions

Future

Online enquiry / self-service placement help

---

# Student Life

Sections

- Sports
- Clubs
- Library
- ICT
- Boarding
- Events
- Student Leadership
- Health
- Guidance & Counselling

---

# News

Static news cards.

Each article contains:

- Title
- Cover Image
- Date
- Summary
- Author
- Category

Future

Database driven.

---

# Gallery

Categories

Campus

Students

Events

Sports

Classrooms

Computer Lab

Graduation

Hostel

Future

Cloudinary

---

# Contact

Sections

School Address

Phone Numbers

Email

Google Map

Office Hours

Social Media

Contact Form

---

# Components

Layout

- Navbar
- Mobile Navigation
- Footer

Homepage

- Hero
- Welcome
- Programmes
- Statistics
- Features
- Testimonials
- News Cards
- Gallery Grid
- CTA

Shared

- Page Header
- Breadcrumb
- Card
- Badge
- Section Title
- Image Slider
- FAQ
- Buttons

---

# Images Required

- Campus
- Administration Block
- Classrooms
- Students
- Teachers
- Library
- Computer Lab
- Science Lab
- Hostel
- Sports
- Graduation
- School Bus
- Events

---

# Color Palette

Taken from the school crest. Defined as CSS variables in `app/globals.css`
(`:root` for light, `.dark` for dark). Use the semantic Tailwind tokens
(`bg-primary`, `text-secondary`, `text-gold`, `bg-muted`, …) — never hardcode
these hexes in components.

| Role | Token | Light | Use |
|---|---|---|---|
| Primary | `primary` | `#182f6e` navy | Headings, links, dark sections (hero, footer, testimonials), structure |
| Secondary / accent | `secondary` | `#c21b2c` red | Calls to action, section kickers, active nav underline, emphasis |
| Supporting | `gold` | `#d9a017` | Small accents **on navy only** (kickers, rules, footer marks) |
| Page surface | `background` | `#fafbfd` | Body |
| Section band | `muted` | `#eef1f8` | Alternating section backgrounds, page headers |
| Text | `foreground` | `#101a33` | Body copy (navy-black) |
| Muted text | `muted-foreground` | `#4d566e` | Secondary copy |
| Border | `border` | `#e0e4f0` | Card rings, dividers |
| Success | `success` | `#15803d` | Checklist ticks |
| Error | `destructive` | `#dc2626` | Form errors |

The header carries a thin navy → red → gold rule as a brand signature.
Section kickers use the `.eyebrow` / `.eyebrow-on-dark` component classes.

---

# Typography

Heading

Poppins

Body

Inter

---

# Icons

Lucide React

---

# Animations

Use Framer Motion.

Recommended:

- Fade In
- Slide Up
- Hover Cards
- Count Up Statistics
- Page Transition
- Hero Animation
- Scroll Reveal

Avoid excessive animations.

---

# SEO

Every page should include

- Metadata API
- Open Graph
- Twitter Card
- Canonical URL
- Sitemap
- robots.txt
- JSON-LD Schema
- Optimized Images

---

# Accessibility

- Semantic HTML
- ARIA Labels
- Keyboard Navigation
- Screen Reader Support
- Proper Heading Order
- Image Alt Text
- Focus Indicators

---

# Performance

Use

- Next Image
- Next Font
- Server Components
- Lazy Loading
- Dynamic Imports
- Metadata API

Target Lighthouse

Performance: 95+

Accessibility: 100

SEO: 100

Best Practices: 100

---

# Future Database Schema

## Programs

- id
- title
- slug
- description

---

## Staff

- id
- name
- position
- image
- bio

---

## News

- id
- title
- slug
- image
- body
- publishedAt

---

## Gallery

- id
- image
- category
- caption

---

## Events

- id
- title
- description
- venue
- startDate

---

## Testimonials

- id
- student
- message

---

## Downloads

- id
- title
- file

---

## Contact Messages

- id
- name
- email
- phone
- message

---

# Future Features

- Student Portal
- Parent Portal
- Teacher Portal
- Online Admissions
- Online Fee Payment
- Student Results Checker
- Attendance
- School Calendar
- Notice Board
- Alumni Portal
- Staff Directory
- Job Opportunities
- SMS Notifications
- Email Notifications
- Live Chat
- Newsletter
- Online Prospectus

---

# Future Admin Dashboard

Modules

- Dashboard
- Staff
- Programmes
- News
- Gallery
- Events
- Downloads
- Admissions
- Testimonials
- Contact Messages
- Users
- Roles
- Settings

---

# Development Roadmap

## Phase 1

- Static Website
- Responsive Design
- SEO
- Animations
- Deployment

---

## Phase 2

- Prisma
- PostgreSQL
- Admin Dashboard
- Authentication
- CMS Integration

---

## Phase 3

- Student Portal
- Parent Portal
- Teacher Portal
- Online Admissions
- Payments
- Notifications

---

# Coding Standards

- Use Server Components by default.
- Use Client Components only when required.
- Keep pages thin and move logic into reusable components.
- Use strict TypeScript types.
- Keep components reusable and composable.
- Follow feature-based organization.
- Do not hardcode content inside UI components.
- Centralize configuration in the `data/` directory.
- Write clean, maintainable, and well-documented code.

---

# Notes

Some institutional details available online are limited or inconsistent. During development, use placeholder content where necessary and replace it with official information, branding, photographs, contact details, and policies once they are provided by Obama College Senior High School.

The project architecture should prioritize long-term maintainability so that migrating from static data files to a database or headless CMS requires little to no changes to the frontend components.
