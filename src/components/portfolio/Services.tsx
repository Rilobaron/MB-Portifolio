import {
  ArrowRight,
  Braces,
  Check,
  Code2,
  LayoutDashboard,
  Rocket,
  Wrench,
  Workflow,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

const icons: Record<Service["icon"], typeof Code2> = {
  code: Code2,
  layout: LayoutDashboard,
  api: Braces,
  automation: Workflow,
  support: Wrench,
  deploy: Rocket,
};

export function Services() {
  return (
    <section id="servicos" className="bg-secondary/60 py-16 md:py-28">
      <div className="container-p">
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções digitais para tirar ideias do papel"
          description="Transformo necessidades de negócio em soluções digitais, trabalhando desde desenvolvimento web até sistemas, integrações, automações e suporte técnico."
          align="center"
        />

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-32px_rgba(0,0,0,0.28)] sm:rounded-3xl sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition group-hover:bg-gold group-hover:text-black">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-graphite">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-graphite/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-graphite px-5 py-8 text-center text-white sm:px-8 md:mt-14 md:px-12 md:py-11">
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #CCAA4B 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              Tem um projeto em mente?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Vamos conversar sobre sua ideia e encontrar a melhor forma de colocá-la em prática.
            </p>
            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:justify-center">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:brightness-105"
              >
                Falar comigo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#projetos"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Ver projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
