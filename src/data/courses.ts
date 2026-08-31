// TODO: Substituir os cursos abaixo pelos cursos reais realizados por Murilo.
// Não inventar certificados. Os dados abaixo servem apenas como estrutura
// visual e devem ser trocados por informações verdadeiras.

export type CourseCategory =
  "Desenvolvimento Web" | "Backend" | "Banco de Dados" | "DevOps" | "APIs e Integrações" | "Outros";

export type Course = {
  title: string;
  institution: string;
  hours?: string;
  year?: string;
  topics: string[];
  certificateUrl?: string;
  category: CourseCategory;
};

export const courses: Course[] = [
  {
    title: "Programação do Zero",
    institution: "DIO / iFood",
    topics: ["HTML", "CSS", "JavaScript"],
    category: "Desenvolvimento Web",
  },
  {
    title: "Arquitetura de Redes",
    institution: "Udemy · Gabriel Torres",
    hours: "20,5 horas",
    year: "2022",
    topics: [],
    category: "Outros",
  },
  {
    title: "Microsoft Excel — Excel from Beginner to Advanced",
    institution: "Udemy · Kyle Pew / Office Newb",
    hours: "22 horas",
    year: "2026",
    topics: [],
    category: "Outros",
  },
  {
    title: "The Complete Flutter Development Bootcamp with Dart",
    institution: "Udemy · Dr. Angela Yu",
    hours: "29 horas",
    year: "2023",
    topics: [],
    category: "Desenvolvimento Web",
  },
  {
    title: "EF SET English Certificate — B2 Upper Intermediate",
    institution: "EF SET",
    year: "2023",
    topics: ["Pontuação geral: 57/100", "Listening: C1 Advanced", "Reading: B1 Intermediate"],
    category: "Outros",
  },
  {
    title: "TOEIC — Certificação internacional de inglês",
    institution: "TOEIC",
    topics: ["Proficiência em língua inglesa"],
    category: "Outros",
  },
  {
    title: "Gestão Comercial",
    institution: "ETEC",
    topics: [],
    category: "Outros",
  },
  {
    title: "Curso de Administração",
    institution: "IEFY",
    topics: [],
    category: "Outros",
  },
];

export const courseCategories: CourseCategory[] = [
  "Desenvolvimento Web",
  "Backend",
  "Banco de Dados",
  "DevOps",
  "APIs e Integrações",
  "Outros",
];
