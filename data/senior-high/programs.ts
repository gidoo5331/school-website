import type { Program } from "@/types/program";

export const seniorHighPrograms: Program[] = [
  {
    id: "general-arts",
    slug: "general-arts",
    title: "General Arts",
    imageCategory: "General Arts",
    overview:
      "A broad-based programme covering the humanities and social sciences, preparing students for careers in law, journalism, education, public service, and the arts.",
    subjects: [
      "Core Mathematics",
      "English Language",
      "Integrated Science",
      "Social Studies",
      "Government",
      "Literature in English",
      "History",
      "Geography",
      "Economics",
      "French / Ghanaian Language",
    ],
    careers: ["Law", "Journalism", "Education", "Public Administration", "Diplomacy"],
    requirements: [
      "Six (6) credits including English Language and Mathematics at BECE",
      "Interest in humanities and social sciences",
    ],
  },
  {
    id: "general-science",
    slug: "general-science",
    title: "General Science",
    imageCategory: "Science Lab",
    overview:
      "A rigorous programme in the physical and life sciences, preparing students for tertiary study and careers in medicine, engineering, technology, and research.",
    subjects: [
      "Core Mathematics",
      "English Language",
      "Social Studies",
      "Elective Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    careers: ["Medicine & Nursing", "Engineering", "Pharmacy", "Laboratory Science", "Agriculture"],
    requirements: [
      "Six (6) credits including English Language, Mathematics, and Integrated Science at BECE",
      "Strong results in mathematics and science",
    ],
  },
  {
    id: "business",
    slug: "business",
    title: "Business",
    imageCategory: "Business",
    overview:
      "Prepares students with foundational knowledge in accounting, management, and commerce for further study or entry into the business world.",
    subjects: [
      "Core Mathematics",
      "English Language",
      "Integrated Science",
      "Social Studies",
      "Financial Accounting",
      "Business Management",
      "Costing",
      "Economics",
    ],
    careers: ["Accounting", "Banking & Finance", "Entrepreneurship", "Business Administration"],
    requirements: [
      "Six (6) credits including English Language and Mathematics at BECE",
      "Interest in numeracy and commerce",
    ],
  },
  {
    id: "home-economics",
    slug: "home-economics",
    title: "Home Economics",
    imageCategory: "Home Economics",
    overview:
      "Combines nutrition, textiles, and management skills to prepare students for careers in hospitality, fashion, and related fields.",
    subjects: [
      "Core Mathematics",
      "English Language",
      "Integrated Science",
      "Social Studies",
      "Food & Nutrition",
      "Management in Living",
      "Clothing & Textiles",
    ],
    careers: ["Hospitality Management", "Fashion & Textiles", "Nutrition & Dietetics", "Catering"],
    requirements: [
      "Six (6) credits including English Language and Mathematics at BECE",
      "Interest in practical, hands-on subjects",
    ],
  },
  {
    id: "visual-arts",
    slug: "visual-arts",
    title: "Visual Arts",
    imageCategory: "Visual Arts",
    overview:
      "Develops creative and technical skills across drawing, graphic design, and picture-making for students pursuing careers in the creative industries.",
    subjects: [
      "Core Mathematics",
      "English Language",
      "Integrated Science",
      "Social Studies",
      "General Knowledge in Art",
      "Graphic Design",
      "Picture Making",
    ],
    careers: ["Graphic Design", "Fine Art", "Architecture", "Animation & Media"],
    requirements: [
      "Six (6) credits including English Language and Mathematics at BECE",
      "Portfolio or demonstrated interest in art encouraged",
    ],
  },
];
