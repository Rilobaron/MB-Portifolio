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
  visualNote?: string;
  confidential?: boolean;
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "hiremind-ai",
    name: "HireMind AI",
    description:
      "Aplicação web para treinar entrevistas de emprego com IA, oferecendo sessões personalizadas, feedback estruturado e acompanhamento de desempenho.",
    features: [
      "Simulação de entrevistas com LLaMA 3",
      "Configuração por cargo, nível e área",
      "Entrevistas técnicas e comportamentais",
      "Feedback e pontuação estruturados",
      "Dashboard com evolução e habilidades",
      "Persistência local das estatísticas",
    ],
    tech: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Node.js",
      "Express",
      "Groq API",
      "LLaMA 3",
    ],
    categories: ["Full Stack", "APIs e Integrações"],
    repoUrl: "https://github.com/Rilobaron/HireMind-AI",
  },
  {
    id: "flowbridge",
    name: "FlowBridge API",
    description:
      "API backend para receber webhooks, transformar eventos e encaminhar dados a serviços externos com rastreabilidade e tentativas automáticas.",
    features: [
      "Recebimento e processamento de webhooks",
      "Transformação de payloads",
      "Persistência e consulta de eventos",
      "Logs detalhados por etapa",
      "Retries automáticos configuráveis",
      "Reprocessamento manual de falhas",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Axios", "APIs REST", "Webhooks"],
    categories: ["Backend", "APIs e Integrações", "Automação"],
    repoUrl: "https://github.com/Rilobaron/flowbridge-api",
    visualNote: "API backend - projeto sem interface gráfica",
  },
  {
    id: "logistics-ticket-generator",
    name: "Logistics Tool - Ticket Generator",
    description:
      "Ferramenta web que transforma informações logísticas desestruturadas em mensagens prontas para clientes e entregadores, com controle integrado em planilhas.",
    features: [
      "Extração automática de dados copiados",
      "Mensagens para clientes e entregadores",
      "Integração com Google Sheets",
      "Histórico temporário de tickets",
      "Controle de status e ações",
      "Dashboard de reclamações",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Google Apps Script", "Google Sheets"],
    categories: ["APIs e Integrações", "Automação"],
    repoUrl: "https://github.com/Rilobaron/Logistics-Tool-Ticket-Generator",
  },
  {
    id: "starcore",
    name: "StarCore",
    description:
      "Plataforma web modular desenvolvida para centralizar processos empresariais, integrações e automações. Informações sensíveis foram omitidas por confidencialidade.",
    features: [
      "Desenvolvimento de plataforma web modular",
      "Arquitetura de aplicação",
      "Integrações entre sistemas",
      "Automação de processos",
      "Gestão de dados",
      "Interface administrativa",
    ],
    tech: [],
    categories: ["Full Stack", "APIs e Integrações"],
    visualNote: "Projeto confidencial - imagens e código não disponíveis",
    confidential: true,
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
    images: [
      {
        src: "/projects/gestao-base/relatorios-operacionais.png",
        alt: "Painel de relatórios operacionais do Gestão de Base",
      },
      {
        src: "/projects/gestao-base/importacoes.png",
        alt: "Tela de importação de planilhas do Gestão de Base",
      },
      {
        src: "/projects/gestao-base/recebimento.png",
        alt: "Tela de conferência de recebimento do Gestão de Base",
      },
    ],
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
].sort((a, b) => Number(b.id === "jt-base") - Number(a.id === "jt-base"));

export const projectFilters: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Backend",
  "Full Stack",
  "APIs e Integrações",
  "Automação",
];
