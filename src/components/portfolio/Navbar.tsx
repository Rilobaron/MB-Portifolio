import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-p flex h-16 items-center justify-between gap-3">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5" aria-label="Início">
          <Logo />
          <span
            className={`truncate font-display text-sm font-extrabold tracking-tight transition-colors min-[360px]:text-base ${
              scrolled ? "text-graphite" : "text-white"
            }`}
          >
            Murilo Baron
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`relative rounded-sm text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                scrolled ? "text-graphite/80 hover:text-graphite" : "text-white/80 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black xl:inline-flex"
        >
          Fale comigo
          <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors xl:hidden ${
            scrolled ? "text-graphite hover:bg-black/5" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-dvh w-80 max-w-[88%] bg-graphite pb-[env(safe-area-inset-bottom)] text-white shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex min-h-16 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 min-[360px]:px-5">
            <div className="flex min-w-0 items-center gap-2">
              <Logo />
              <span className="truncate font-display font-extrabold">Murilo Baron</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex max-h-[calc(100dvh-4rem-env(safe-area-inset-bottom))] flex-col gap-0.5 overflow-y-auto p-4 min-[360px]:p-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base text-white/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-black font-semibold px-4 py-3 hover:brightness-105 transition"
            >
              Fale comigo <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
