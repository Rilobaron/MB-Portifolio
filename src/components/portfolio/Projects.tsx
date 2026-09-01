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
  const [page, setPage] = useState(1);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );
  const pageSize = 4;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleProjects = filtered.slice((page - 1) * pageSize, page * pageSize);

  function changePage(nextPage: number) {
    setPage(Math.min(Math.max(nextPage, 1), pageCount));
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="projetos" className="overflow-hidden bg-secondary/60 py-16 md:py-28">
      <div className="container-p">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos em destaque"
          description="Uma seleção de projetos que representam meu foco em backend, integrações e produtos completos."
        />

        <div className="-mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                filter === f
                  ? "bg-graphite text-white border-graphite"
                  : "bg-white text-graphite border-border hover:border-gold/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid items-start gap-5 md:mt-8 md:grid-cols-2 md:gap-6">
          {visibleProjects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_25px_50px_-30px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-32 overflow-hidden bg-graphite sm:h-40">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                  <div className="max-w-[calc(100%-2rem)] rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-center font-display text-base font-bold text-white backdrop-blur sm:px-5 sm:py-3 sm:text-lg">
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

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold text-graphite">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{p.description}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Funcionalidades
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1.5 text-sm text-graphite/85 sm:grid-cols-2">
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
                  <div className="mt-5 grid grid-cols-1 gap-2 border-t border-border pt-4 min-[390px]:flex min-[390px]:flex-wrap sm:mt-6">
                    {p.images?.length ? (
                      <button
                        type="button"
                        onClick={() => {
                          setGalleryProject(p);
                          setActiveImage(0);
                        }}
                        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-graphite px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                      >
                        <Images className="h-4 w-4 text-gold" />
                        Ver fotos ({p.images.length})
                      </button>
                    ) : null}
                    {p.liveUrl ? (
                      <ProjectLink
                        href={p.liveUrl}
                        icon={ExternalLink}
                        label="Ver projeto"
                        primary
                      />
                    ) : null}
                    {p.repoUrl ? (
                      <ProjectLink href={p.repoUrl} icon={Github} label="Ver código" />
                    ) : null}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {pageCount > 1 && (
          <nav
            className="mt-8 flex items-center justify-center gap-2"
            aria-label="Paginação dos projetos"
          >
            <PaginationButton
              label="Página anterior"
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
              icon={ChevronLeft}
            />
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  aria-label={`Ir para a página ${pageNumber}`}
                  aria-current={page === pageNumber ? "page" : undefined}
                  onClick={() => changePage(pageNumber)}
                  className={`flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-semibold transition ${
                    page === pageNumber
                      ? "border-graphite bg-graphite text-white"
                      : "border-border bg-white text-graphite hover:border-gold"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <PaginationButton
              label="Próxima página"
              disabled={page === pageCount}
              onClick={() => changePage(page + 1)}
              icon={ChevronRight}
            />
          </nav>
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
        <DialogContent className="flex max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-6xl flex-col overflow-hidden rounded-2xl border-white/10 bg-graphite p-0 text-white sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] sm:rounded-3xl">
          {galleryProject?.images?.length ? (
            <>
              <div className="shrink-0 border-b border-white/10 px-4 py-3 pr-12 sm:px-5 sm:py-4">
                <DialogTitle className="font-display text-lg sm:text-xl">
                  {galleryProject.name}
                </DialogTitle>
                <DialogDescription className="mt-1 text-white/60">
                  Imagens do sistema — {activeImage + 1} de {galleryProject.images.length}
                </DialogDescription>
              </div>

              <figure className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-black">
                <img
                  src={galleryProject.images[activeImage].src}
                  alt={galleryProject.images[activeImage].alt}
                  className="block max-h-[calc(100dvh-9.5rem)] w-full object-contain sm:max-h-[calc(100dvh-11rem)]"
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
              <p className="shrink-0 px-4 py-2.5 text-center text-xs text-white/70 sm:px-5 sm:py-3 sm:text-sm">
                {galleryProject.images[activeImage].alt}
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function PaginationButton({
  label,
  disabled,
  onClick,
  icon: Icon,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  icon: typeof ChevronLeft;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-graphite transition hover:border-gold disabled:cursor-not-allowed disabled:opacity-35"
    >
      <Icon className="h-5 w-5" />
    </button>
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
      className={`absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-11 sm:w-11 ${
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
    "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition";
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
