import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  "Suporte técnico e análise de sistemas",
  "APIs, webhooks e integrações entre plataformas",
  "Automação de processos operacionais",
  "Aplicações web criadas para problemas reais",
  "Aprendizado contínuo em desenvolvimento Full Stack",
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container-p grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeader eyebrow="Sobre mim" title="Tecnologia com propósito e método" />
          <div className="mt-8 space-y-5 text-[15px] md:text-base leading-relaxed text-graphite/85">
            <p>
              Olá, eu sou <strong className="text-graphite">Murilo Baron</strong>. Sou profissional
              de tecnologia com experiência em suporte técnico, análise de sistemas, integrações e
              automação de processos.
            </p>
            <p>
              Ao longo da minha experiência, tive contato direto com plataformas de CRM,
              atendimento, automações, APIs e webhooks. Também passei a criar ferramentas próprias
              para centralizar informações e automatizar tarefas que antes eram executadas
              manualmente.
            </p>
            <p>
              Atualmente direciono minha carreira para o desenvolvimento de software, aprofundando
              conhecimentos em aplicações Full Stack, arquitetura, bancos de dados e integração de
              sistemas.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 lg:mt-16">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:border-gold/60 hover:shadow-md transition"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-gold mt-0.5" />
              <span className="text-graphite">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
