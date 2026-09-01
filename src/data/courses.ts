export type CourseCategory =
  | "Desenvolvimento Web"
  | "Tecnologia e Infraestrutura"
  | "Ferramentas"
  | "Negócios e Carreira"
  | "Idiomas"
  | "Outros";

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
    title: "Robótica",
    institution: "USP EducaSP",
    hours: "40 horas",
    year: "2020",
    topics: [],
    certificateUrl: "/certificados/robotica.pdf",
    category: "Tecnologia e Infraestrutura",
  },
  {
    title: "Desvendando a Blockchain",
    institution: "SENAI-SP",
    hours: "20 horas",
    year: "2020",
    topics: [],
    certificateUrl: "/certificados/desvendando-a-blockchain.pdf",
    category: "Tecnologia e Infraestrutura",
  },
  {
    title: "Arquitetura de Redes",
    institution: "Udemy · Gabriel Torres",
    hours: "20,5 horas",
    year: "2022",
    topics: [],
    certificateUrl: "/certificados/arquitetura-de-redes.pdf",
    category: "Tecnologia e Infraestrutura",
  },
  {
    title: "Microsoft Excel — Excel from Beginner to Advanced",
    institution: "Udemy · Kyle Pew / Office Newb",
    hours: "22 horas",
    year: "2026",
    topics: [],
    certificateUrl: "/certificados/microsoft-excel.pdf",
    category: "Ferramentas",
  },
  {
    title: "The Complete Flutter Development Bootcamp with Dart",
    institution: "Udemy · Dr. Angela Yu",
    hours: "29 horas",
    year: "2023",
    topics: [],
    certificateUrl: "/certificados/flutter-dart.pdf",
    category: "Desenvolvimento Web",
  },
  {
    title: "EF SET English Certificate — B2 Upper Intermediate",
    institution: "EF SET",
    year: "2023",
    topics: ["Pontuação geral: 57/100", "Listening: C1 Advanced", "Reading: B1 Intermediate"],
    certificateUrl: "/certificados/ef-set-b2.pdf",
    category: "Idiomas",
  },
  {
    title: "TOEIC — Certificação internacional de inglês",
    institution: "TOEIC",
    topics: ["Proficiência em língua inglesa"],
    category: "Idiomas",
  },
  {
    title: "Gestão Comercial",
    institution: "ETEC",
    topics: [],
    category: "Negócios e Carreira",
  },
  {
    title: "Administração",
    institution: "Instituto Educacional Formação Profissional de Itu (IEFY)",
    hours: "100 horas",
    year: "2020",
    topics: [
      "Marketing",
      "Contabilidade",
      "Departamento Pessoal",
      "Teoria Geral da Administração",
      "TCC",
    ],
    certificateUrl: "/certificados/administracao-iefy.pdf",
    category: "Negócios e Carreira",
  },
  {
    title: "Marketing Digital",
    institution: "Digital House",
    hours: "5 horas",
    year: "2021",
    topics: [],
    certificateUrl: "/certificados/marketing-digital.pdf",
    category: "Negócios e Carreira",
  },
  {
    title: "Inteligência Emocional",
    institution: "Escola Conquer",
    hours: "10 horas",
    year: "2021",
    topics: [],
    certificateUrl: "/certificados/inteligencia-emocional.pdf",
    category: "Negócios e Carreira",
  },
];

export const courseCategories: CourseCategory[] = [
  "Desenvolvimento Web",
  "Tecnologia e Infraestrutura",
  "Ferramentas",
  "Negócios e Carreira",
  "Idiomas",
  "Outros",
];
