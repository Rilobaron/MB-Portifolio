export type Experience = {
  company: string;
  location?: string;
  role: string;
  period?: string;
  description: string;
  activities: string[];
};

export const experiences: Experience[] = [
  {
    company: "Bonistar",
    role: "Desenvolvedor Full Stack",
    period: "Atual",
    description:
      "Atuação atual no desenvolvimento e evolução de aplicações web, trabalhando nas diferentes camadas dos produtos.",
    activities: [
      "Desenvolvimento e manutenção de aplicações Full Stack",
      "Atuação em funcionalidades de frontend e backend",
    ],
  },
  {
    company: "J&T Express",
    location: "Itu, SP",
    role: "Operações e desenvolvimento de soluções internas",
    period: "Atual",
    description:
      "Acompanhamento operacional da base, análise de encomendas e criação de soluções para melhorar o controle de processos internos.",
    activities: [
      "Acompanhamento de encomendas retidas e sem movimentação",
      "Controle de tickets, ocorrências e indicadores",
      "Identificação de gargalos operacionais",
      "Desenvolvimento de uma aplicação para centralizar e automatizar processos",
    ],
  },
  {
    company: "SprintHub",
    location: "Sorocaba, SP",
    role: "Analista de Suporte II",
    period: "abr/2024 - out/2025",
    description:
      "Atuação com suporte técnico e análise de problemas relacionados a CRM, SAC, automações e integrações da plataforma.",
    activities: [
      "Atendimento técnico N1/N2 com priorização por SLA",
      "Criação de artigos, fluxos e checklists de troubleshooting",
      "Testes, homologações e validações com Postman e Insomnia",
      "Análise de APIs, payloads JSON, webhooks e integrações",
    ],
  },
  {
    company: "Atuação autônoma",
    location: "Remoto",
    role: "Implantação e Integrações de Sistemas",
    period: "jul/2020 - atual",
    description:
      "Implantação de fluxos, integrações e automações para conectar plataformas e apoiar rotinas de clientes.",
    activities: [
      "Configuração de SAC, funis e automações de marketing",
      "Integrações entre CRM, canais de atendimento, Olist e Bling",
      "Mapeamento de campos e validação de payloads JSON",
      "Documentação de processos e treinamento de clientes",
    ],
  },
  {
    company: "Novotel Itu Terras de São José Golf & Resorts",
    location: "Itu, SP",
    role: "Estagiário de TI",
    period: "out/2021 - set/2024",
    description:
      "Suporte técnico e apoio à infraestrutura de tecnologia do hotel e de eventos corporativos.",
    activities: [
      "Suporte a eventos com link dedicado e rede wireless segmentada",
      "Apoio em infraestrutura, inventário, compras e contratos",
      "Atendimento a demandas operacionais de tecnologia",
    ],
  },
  {
    company: "Cama Inbox",
    location: "Itu, SP",
    role: "Auxiliar Administrativo",
    period: "out/2023 - fev/2024",
    description: "Atendimento ao cliente e suporte às rotinas comerciais e administrativas.",
    activities: [
      "Registro de pedidos em PDV e emissão de notas fiscais",
      "Acompanhamento de pedidos até a entrega",
      "Controle de estoque, requisições e arquivos administrativos",
    ],
  },
];
