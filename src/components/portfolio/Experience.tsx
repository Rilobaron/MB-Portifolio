import { BriefcaseBusiness, MapPin, CheckCircle2, CalendarDays } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-secondary/60">
      <div className="container-p">
        <SectionHeader
          eyebrow="Experiência"
          title="Tecnologia aplicada a problemas reais"
          description="Minha trajetória une suporte técnico, análise de sistemas, integrações, operações e desenvolvimento de soluções internas."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-3xl border border-border bg-white p-6 md:p-8 hover:border-gold/60 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <BriefcaseBusiness className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-graphite">
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
