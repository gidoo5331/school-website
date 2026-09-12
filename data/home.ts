// `icon` values are keys into lib/icon-map.ts, kept as strings so this file
// stays database-friendly (a future CMS/DB row wouldn't store a component).
import { site } from "./site";

const yearsOfExcellence = new Date().getFullYear() - site.established;

export const homeContent = {
  welcome: {
    eyebrow: "Welcome",
    title: "A Senior High School built on discipline and academic focus",
    body: "Founded in 2009, Obama College, Mankessim educates students in the Central Region with a shared commitment to academic excellence, discipline, and leadership. Every student is known, challenged, and supported from their first day with us.",
  },

  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Why families choose Obama College",
    items: [
      {
        icon: "shield-check",
        title: "Discipline & Structure",
        description:
          "A structured, well-supervised environment where students are held to clear academic and behavioural standards.",
      },
      {
        icon: "graduation-cap",
        title: "Academic Excellence",
        description:
          "Focused WASSCE preparation, subject clinics, and dedicated staff invested in every student's results.",
      },
      {
        icon: "users",
        title: "Community",
        description:
          "A close-knit school community where students are known by name, not by number.",
      },
      {
        icon: "trophy",
        title: "Leadership Development",
        description:
          "Student leadership structures, clubs, and competitions that build confidence well beyond the classroom.",
      },
    ],
  },

  academicHighlights: {
    eyebrow: "Academic Highlights",
    title: "Preparing students for WASSCE and beyond",
    items: [
      {
        icon: "target",
        title: "Five SHS Programmes",
        description:
          "General Arts, General Science, Business, Home Economics, and Visual Arts, each with WASSCE-focused teaching and career guidance.",
      },
      {
        icon: "building-2",
        title: "Day & Boarding",
        description:
          "Flexible Day and Boarding options supervised by resident homemaster and homemistress.",
      },
      {
        icon: "graduation-cap",
        title: "Free SHS",
        description:
          "Uniforms, textbooks, a tablet, tuition, a daily hot meal, and WASSCE registration are covered for every learner.",
      },
      {
        icon: "sparkles",
        title: "ICT-Enabled Learning",
        description:
          "A computer laboratory and one-to-one tablets supporting digital literacy alongside the core curriculum.",
      },
    ],
  },

  statistics: [
    { label: "Students", value: 800, suffix: "+" },
    { label: "Teaching Staff", value: 45, suffix: "+" },
    { label: "Years of Excellence", value: yearsOfExcellence, suffix: "" },
    { label: "SHS Programmes", value: 5, suffix: "" },
  ],

  cta: {
    title: "Ready to join Obama College?",
    description:
      "Placement to Obama College is through the CSSPS. Get in touch to learn what fresh learners need for the 2026/2027 academic year.",
    primary: { label: "Start Admissions", href: "/admissions" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
} as const;
