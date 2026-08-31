import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const badges = ["Full Stack", "APIs REST", "Webhooks", "Integrações", "Automação"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-graphite text-white pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #CCAA4B 0%, transparent 70%)" }}
      />

      <div className="container-p relative grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Disponível para novos projetos
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Murilo Baron <span className="text-gold">Pereira</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85">
            {site.role} <span className="text-gold">|</span> Desenvolvimento web, integrações e
            automação
          </p>
          <p className="mt-5 max-w-xl text-base md:text-[17px] leading-relaxed text-white/70">
            Busco oportunidades como Desenvolvedor Júnior, aplicando minha experiência com
            desenvolvimento web, integrações, APIs e automação na criação de soluções que resolvam
            problemas reais.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-black px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_-12px_rgba(204,170,75,0.7)] hover:brightness-105 transition"
            >
              Conhecer meus projetos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              Entrar em contato
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              <Download className="h-4 w-4 text-gold" />
              Baixar currículo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Visual composition */}
        <div className="relative animate-fade-up">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-8 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl">
              <img
                src={site.photoUrl}
                alt="Murilo Baron Pereira"
                className="h-full w-full object-cover object-[center_24%]"
                width={720}
                height={960}
                fetchPriority="high"
              />
            </div>

            {/* Floating "code" chips */}
            <div className="absolute -top-2 left-2 rounded-xl border border-white/10 bg-graphite-2/90 backdrop-blur px-3 py-2 text-[11px] font-mono text-white/85 shadow-xl animate-float">
              <span className="text-gold">POST</span> /api/webhooks
            </div>
            <div className="absolute top-1/3 -right-4 rounded-xl border border-white/10 bg-graphite-2/90 backdrop-blur px-3 py-2 text-[11px] font-mono text-white/85 shadow-xl animate-float [animation-delay:1.5s]">
              200 <span className="text-gold">OK</span>
            </div>
            <div className="absolute -bottom-2 left-6 rounded-xl border border-white/10 bg-graphite-2/90 backdrop-blur px-3 py-2 text-[11px] font-mono text-white/85 shadow-xl animate-float [animation-delay:3s]">
              db.<span className="text-gold">query</span>()
            </div>
            <div className="absolute bottom-8 -right-2 rounded-xl border border-white/10 bg-graphite-2/90 backdrop-blur px-3 py-2 text-[11px] font-mono text-white/85 shadow-xl animate-float [animation-delay:2s]">
              <span className="text-gold">async</span> integrate()
            </div>

            {/* Connecting SVG lines */}
            <svg
              className="absolute inset-0 h-full w-full text-gold/40"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="200" cy="200" r="150" stroke="currentColor" strokeDasharray="2 6" />
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="currentColor"
                strokeDasharray="2 10"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
