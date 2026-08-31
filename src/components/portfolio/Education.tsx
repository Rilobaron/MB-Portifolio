import { GraduationCap, Award, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { education } from "@/data/education";
import { courses, courseCategories } from "@/data/courses";

export function Education() {
  return (
    <section id="formacao" className="py-20 md:py-28 bg-white">
      <div className="container-p">
        {education.length > 0 && (
          <>
            <SectionHeader
              eyebrow="Trajetória"
              title="Formação acadêmica"
              description="Base acadêmica que fundamenta a prática diária e a evolução técnica."
            />

            <div className="mt-10 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
              <div className="space-y-6">
                {education.map((e, i) => (
                  <div key={i} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10">
                    <div
                      className={`${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}`}
                    >
                      <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:border-gold/60 hover:shadow-md transition">
                        <div
                          className={`flex items-center gap-2 text-xs text-gold font-semibold uppercase tracking-widest ${i % 2 === 0 ? "md:justify-end" : ""}`}
                        >
                          <GraduationCap className="h-4 w-4" />
                          {e.status}
                        </div>
                        <h3 className="mt-2 font-display text-lg font-bold text-graphite">
                          {e.course}
                        </h3>
                        <p className="text-sm text-graphite/85">{e.institution}</p>
                        <p className="mt-1 text-xs text-ash">{e.period}</p>
                        {e.description && (
                          <p className="mt-3 text-sm text-ash leading-relaxed">{e.description}</p>
                        )}
                      </div>
                    </div>
                    <span
                      className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-white"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Courses */}
        <div className={education.length > 0 ? "mt-24" : ""}>
          <SectionHeader
            eyebrow="Aprendizado contínuo"
            title="Cursos e certificações"
            description="Estudos que ampliam a minha atuação em backend, integrações e ferramentas."
          />

          <div className="mt-10 space-y-10">
            {courseCategories.map((cat) => {
              const list = courses.filter((c) => c.category === cat);
              if (list.length === 0) return null;
              return (
                <div key={cat}>
                  <h3 className="flex items-center gap-3 font-display text-lg font-bold text-graphite">
                    <span className="gold-line" /> {cat}
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((c, i) => (
                      <article
                        key={i}
                        className="rounded-2xl border border-border bg-white p-5 hover:border-gold/60 hover:shadow-md transition"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                          <Award className="h-5 w-5" />
                        </div>
                        <h4 className="mt-3 font-semibold text-graphite">{c.title}</h4>
                        <p className="text-sm text-graphite/80">{c.institution}</p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-ash">
                          {c.hours && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" /> {c.hours}
                            </span>
                          )}
                          {c.year && <span>{c.year}</span>}
                        </div>
                        {c.topics.length > 0 && (
                          <ul className="mt-3 space-y-1 text-sm text-graphite/85">
                            {c.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        )}
                        {c.certificateUrl && (
                          <a
                            href={c.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex text-sm font-medium text-graphite hover:text-black underline-offset-4 hover:underline"
                          >
                            Ver certificado →
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
