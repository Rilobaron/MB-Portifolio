import { useState } from "react";
import { technologies } from "@/data/technologies";
import { SectionHeader } from "./SectionHeader";
import { Code2, BriefcaseBusiness, BookOpen, Languages } from "lucide-react";

const iconMap: Record<string, typeof Code2> = {
  practical: Code2,
  professional: BriefcaseBusiness,
  studying: BookOpen,
  languages: Languages,
};

export function Technologies() {
  const [active, setActive] = useState(technologies[0].id);
  const current = technologies.find((c) => c.id === active) ?? technologies[0];

  return (
    <section id="tecnologias" className="py-20 md:py-28 bg-white">
      <div className="container-p">
        <SectionHeader
          eyebrow="Stack"
          title="Tecnologias e habilidades"
          description="Ferramentas e linguagens que fazem parte da minha experiência e dos meus estudos."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {technologies.map((cat) => {
            const Icon = iconMap[cat.id] ?? Code2;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-graphite text-white border-graphite"
                    : "bg-white text-graphite border-border hover:border-gold/70"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-gold"}`} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.2)]">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-display text-xl font-bold text-graphite">{current.title}</h3>
            <p className="text-sm text-ash">{current.description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {current.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3.5 py-2 text-sm text-graphite hover:bg-white hover:border-gold/60 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
