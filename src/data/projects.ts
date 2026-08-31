export type ProjectCategory = "Backend" | "Full Stack" | "APIs e Integrações" | "Automação";

export type Project = {
  id: string;
  name: string;
  description: string;
  features: string[];
  tech: string[];
  categories: ProjectCategory[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "starcore",
    name: "StarCore",
    description:
      "Plataforma web modular voltada à centralização de processos empresariais, gestão de leads, integrações, comunicação e automação.",
    features: [
      "Gestão de usuários e permissões",
      "Gestão de leads",
      "Webhooks ativos e passivos",
      "Mapeamento de campos JSON",
      "Gestão de e-mails",
      "Integrações externas",
    ],
    tech: [],
    categories: ["Full Stack", "APIs e Integrações"],
  },
  {
    id: "jt-base",
    name: "Gestão de Base",
    description:
      "Sistema web criado a partir de problemas reais da rotina logística para centralizar informações e automatizar o acompanhamento operacional.",
    features: [
      "Monitoramento de encomendas retidas",
      "Controle de pacotes sem movimentação",
      "Importação e acompanhamento de tickets",
      "Gerador de mensagens para atendimento",
      "Regras configuráveis de monitoramento",
      "Indicadores e métricas operacionais",
    ],
    tech: [],
    categories: ["Full Stack", "Automação"],
  },
  {
    id: "portfolio",
    name: "Portfólio Pessoal",
    description:
      "Website desenvolvido para apresentar minha trajetória profissional, projetos, conhecimentos técnicos e certificações.",
    features: [
      "Apresentação profissional",
      "Projetos e experiências",
      "Tecnologias e certificações",
      "Formulário de contato",
      "Layout responsivo",
      "Links profissionais",
    ],
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Vite"],
    categories: ["Full Stack"],
    repoUrl: "https://github.com/Rilobaron",
  },
];

export const projectFilters: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Backend",
  "Full Stack",
  "APIs e Integrações",
  "Automação",
];
