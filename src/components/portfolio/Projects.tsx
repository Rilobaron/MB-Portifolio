import { useMemo, useState } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  LockKeyhole,
  Images,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects, projectFilters, type Project, type ProjectCategory } from "@/data/projects";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const [filter, setFilter] = useState<"Todos" | ProjectCategory>("Todos");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projetos" className="py-20 md:py-28 bg-secondary/60">
      <div className="container-p">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos em destaque"
          description="Uma seleção de projetos que representam meu foco em backend, integrações e produtos completos."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === f
                  ? "bg-graphite text-white border-graphite"
                  : "bg-white text-graphite border-border hover:border-gold/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((p, index) => (
            <article
              key={p.id}
              className={`group flex-col rounded-3xl border border-border bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.25)] hover:border-gold/60 ${
                index < 3 || showAllMobile ? "flex" : "hidden md:flex"
              }`}
            >
              <div className="relative h-40 bg-graphite overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                  <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-5 py-3 text-white font-display text-lg font-bold">
                    <span className="text-gold mr-2">/</span>
                    {p.name}
                  </div>
                  {p.visualNote && (
                    <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/65">
                      {p.visualNote}
                    </p>
                  )}
                </div>
                {p.confidential ? (
                  <LockKeyhole className="absolute bottom-3 right-3 h-5 w-5 text-gold/70" />
                ) : (
                  <Code2 className="absolute bottom-3 right-3 h-5 w-5 text-gold/70" />
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl font-bold text-graphite">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{p.description}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Funcionalidades
                  </p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-graphite/85">
                    {p.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {p.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs text-graphite/80 border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.confidential ? (
                  <p className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm text-ash">
                    <LockKeyhole className="h-4 w-4 text-gold" />
                    Materiais preservados por confidencialidade.
                  </p>
                ) : (
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
                    {p.images?.length ? (
                      <button
                        type="button"
                        onClick={() => {
                          setGalleryProject(p);
                          setActiveImage(0);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-graphite px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-black"
                      >
                        <Images className="h-4 w-4 text-gold" />
                        Ver fotos ({p.images.length})
                      </button>
                    ) : null}
                    <ProjectLink href={p.liveUrl} icon={ExternalLink} label="Ver projeto" primary />
                    <ProjectLink href={p.repoUrl} icon={Github} label="Ver código" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 3 && (
          <button
            type="button"
            onClick={() => setShowAllMobile((current) => !current)}
            className="mt-6 flex min-h-11 w-full items-center justify-center rounded-full border border-graphite bg-white px-5 py-2.5 text-sm font-semibold text-graphite md:hidden"
          >
            {showAllMobile ? "Mostrar menos projetos" : `Ver mais ${filtered.length - 3} projetos`}
          </button>
        )}
      </div>

      <Dialog
        open={Boolean(galleryProject)}
        onOpenChange={(open) => {
          if (!open) {
            setGalleryProject(null);
            setActiveImage(0);
          }
        }}
      >
        <DialogContent className="w-[calc(100%-1rem)] max-w-6xl overflow-hidden border-white/10 bg-graphite p-0 text-white sm:w-[calc(100%-2rem)]">
          {galleryProject?.images?.length ? (
            <>
              <div className="border-b border-white/10 px-5 py-4 pr-12">
                <DialogTitle className="font-display text-xl">{galleryProject.name}</DialogTitle>
                <DialogDescription className="mt-1 text-white/60">
                  Imagens do sistema — {activeImage + 1} de {galleryProject.images.length}
                </DialogDescription>
              </div>

              <figure className="relative flex h-[55vh] min-h-64 items-center justify-center bg-black md:h-[70vh]">
                <img
                  src={galleryProject.images[activeImage].src}
                  alt={galleryProject.images[activeImage].alt}
                  className="h-full w-full object-contain"
                />
                {galleryProject.images.length > 1 ? (
                  <>
                    <GalleryButton
                      label="Foto anterior"
                      side="left"
                      onClick={() =>
                        setActiveImage((current) =>
                          current === 0 ? galleryProject.images!.length - 1 : current - 1,
                        )
                      }
                      icon={ChevronLeft}
                    />
                    <GalleryButton
                      label="Próxima foto"
                      side="right"
                      onClick={() =>
                        setActiveImage((current) =>
                          current === galleryProject.images!.length - 1 ? 0 : current + 1,
                        )
                      }
                      icon={ChevronRight}
                    />
                  </>
                ) : null}
              </figure>
              <p className="px-5 py-3 text-center text-sm text-white/70">
                {galleryProject.images[activeImage].alt}
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function GalleryButton({
  label,
  side,
  onClick,
  icon: Icon,
}: {
  label: string;
  side: "left" | "right";
  onClick: () => void;
  icon: typeof ChevronLeft;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        side === "left" ? "left-2 md:left-4" : "right-2 md:right-4"
      }`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  label,
  primary = false,
}: {
  href?: string;
  icon: typeof ExternalLink;
  label: string;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition";
  const styles = primary
    ? "bg-graphite text-white hover:bg-black"
    : "border border-border text-graphite hover:border-gold/70 hover:text-black";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Em breve"
        className={`${base} border border-dashed border-border text-ash/70 cursor-not-allowed`}
      >
        <Icon className="h-4 w-4" />
        {label}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <Icon className={`h-4 w-4 ${primary ? "text-gold" : ""}`} />
      {label}
    </a>
  );
}
