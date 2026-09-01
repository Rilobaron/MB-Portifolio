import { BriefcaseBusiness, MapPin, CheckCircle2, CalendarDays } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experiencia" className="bg-secondary/60 py-16 md:py-28">
      <div className="container-p">
        <SectionHeader
          eyebrow="Experiência"
          title="Tecnologia aplicada a problemas reais"
          description="Minha trajetória une suporte técnico, análise de sistemas, integrações, operações e desenvolvimento de soluções internas."
        />

        <div className="mt-8 grid items-start gap-5 md:mt-10 lg:grid-cols-2 lg:gap-6">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-border bg-white p-5 transition hover:border-gold/60 hover:shadow-md sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <h3 className="break-words font-display text-lg font-bold leading-tight text-graphite sm:text-xl">
                    {experience.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-graphite/85">{experience.role}</p>
                  {experience.location && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-ash">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </p>
                  )}
                  {experience.period && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-ash">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {experience.period}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ash">{experience.description}</p>
              <ul className="mt-5 space-y-2">
                {experience.activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-2 text-sm text-graphite/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {activity}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
