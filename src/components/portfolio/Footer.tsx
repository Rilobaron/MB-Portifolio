import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { site, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-graphite text-white">
      <div className="container-p py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display font-extrabold text-lg">Murilo Baron Pereira</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
            Desenvolvido com tecnologia, dedicação e aprendizado contínuo.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={site.social.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="E-mail" internal>
              <Mail className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Navegar</h4>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a className="hover:text-gold transition" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold transition"
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.whatsapp.number}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-p py-6 text-center text-xs text-white/60">
          © 2026 Murilo Baron Pereira. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
  internal = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  internal?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noopener noreferrer"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 hover:text-black hover:bg-gold hover:border-gold transition"
    >
      {children}
    </a>
  );
}
