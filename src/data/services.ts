export type Service = {
  title: string;
  description: string;
  items: string[];
  icon: "code" | "layout" | "api" | "automation" | "support" | "deploy";
};

export const services: Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Experiências digitais rápidas, acessíveis e adaptadas a qualquer tela.",
    items: [
      "Landing pages",
      "Sites institucionais",
      "Interfaces responsivas",
      "Desenvolvimento frontend",
    ],
    icon: "code",
  },
  {
    title: "Sistemas e Dashboards",
    description: "Ferramentas sob medida para organizar dados, decisões e rotinas empresariais.",
    items: [
      "Sistemas internos",
      "Painéis administrativos",
      "Dashboards",
      "Ferramentas para processos empresariais",
    ],
    icon: "layout",
  },
  {
    title: "Integrações e APIs",
    description: "Conexões confiáveis entre plataformas, serviços e fontes de dados.",
    items: [
      "APIs REST",
      "Webhooks",
      "Integração entre plataformas",
      "Integrações com serviços externos",
    ],
    icon: "api",
  },
  {
    title: "Automações",
    description: "Fluxos que reduzem trabalho manual e tornam a operação mais eficiente.",
    items: [
      "Automação de processos",
      "Eliminação de tarefas manuais",
      "Integração entre sistemas",
      "Fluxos automatizados",
      "Formulários e CRM",
    ],
    icon: "automation",
  },
  {
    title: "Manutenção e Suporte",
    description: "Acompanhamento técnico para manter sites e sistemas estáveis e evoluindo.",
    items: [
      "Correções",
      "Troubleshooting",
      "Melhorias",
      "Manutenção recorrente",
      "Suporte técnico",
    ],
    icon: "support",
  },
  {
    title: "Deploy e DevOps",
    description: "Publicação e configuração de aplicações com processos claros e reproduzíveis.",
    items: [
      "Docker",
      "Vercel",
      "Git/GitHub",
      "GitHub Actions",
      "Deploy de aplicações",
      "Configuração de ambientes",
    ],
    icon: "deploy",
  },
];
