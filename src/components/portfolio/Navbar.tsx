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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-p flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="Início">
          <Logo />
          <span className="font-display font-extrabold tracking-tight text-graphite">
            Murilo Baron
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-graphite/80 hover:text-graphite transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-graphite text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black transition-colors group"
        >
          Fale comigo
          <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-graphite hover:bg-black/5"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${
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
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] bg-graphite text-white shadow-2xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-display font-extrabold">Murilo Baron</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-white/90 hover:bg-white/5 hover:text-white transition-colors"
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
