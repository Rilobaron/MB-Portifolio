export type TechCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const technologies: TechCategory[] = [
  {
    id: "practical",
    title: "Experiência prática",
    description: "Tecnologias e competências aplicadas em estudos e projetos",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "GitHub",
      "APIs REST",
      "Webhooks",
      "JSON",
      "Supabase",
      "SQL",
      "Microsoft Excel",
      "Figma",
      "Bootstrap",
      "Bulma",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    id: "professional",
    title: "Competências profissionais",
    description: "Conhecimentos desenvolvidos na atuação profissional",
    items: [
      "Integração entre sistemas",
      "CRM e sistemas SaaS",
      "Automação de processos",
      "Análise e troubleshooting",
      "Integrações com APIs",
      "Modelagem de fluxos",
      "UI/UX",
      "Deploy de aplicações web",
      "Suporte técnico N1/N2",
      "Implantação e onboarding",
      "Priorização por SLA",
      "Postman",
      "Insomnia",
      "Olist",
      "Bling",
      "Meta Pixel/API",
    ],
  },
  {
    id: "studying",
    title: "Em aprofundamento",
    description: "Tecnologias que fazem parte dos meus estudos atuais",
    items: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Desenvolvimento Full Stack",
      "Arquitetura de Software",
      "Flutter",
      "Dart",
      "Docker",
    ],
  },
  {
    id: "languages",
    title: "Idiomas",
    description: "Idiomas e níveis de proficiência",
    items: ["Português - nativo", "Inglês - avançado", "Japonês - iniciante"],
  },
];
