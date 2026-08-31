import { Server, Cable, Webhook, Workflow, Cpu, GitBranch, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    title: "Desenvolvimento Backend",
    icon: Server,
    desc: "Serviços, regras de negócio e persistência.",
  },
  { title: "APIs REST", icon: Cable, desc: "Design, versionamento e boas práticas." },
  { title: "Webhooks", icon: Webhook, desc: "Eventos, entrega confiável e retries." },
  { title: "Integração entre Sistemas", icon: Layers, desc: "Conectando plataformas e dados." },
  { title: "Automação de Processos", icon: Workflow, desc: "Reduzindo trabalho manual e erros." },
  { title: "Arquitetura de Software", icon: Cpu, desc: "Estruturas claras e escaláveis." },
  { title: "Open Source", icon: GitBranch, desc: "Aprendizado e contribuição em comunidade." },
];

export function Interests() {
  return (
    <section className="py-20 md:py-24 bg-secondary/60">
      <div className="container-p">
        <SectionHeader
          eyebrow="Áreas de interesse"
          title="No que eu foco no dia a dia"
          description="Temas que orientam meus estudos, decisões técnicas e projetos pessoais."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-graphite">{title}</h3>
              <p className="mt-1 text-sm text-ash leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
