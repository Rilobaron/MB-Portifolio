import { useState, useRef } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSentRef = useRef(0);

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) errs.name = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "E-mail inválido.";
    if (subject.length < 3) errs.subject = "Descreva brevemente o assunto.";
    if (message.length < 10) errs.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    return errs;
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("website") || "").length > 0) return;

    // Bloqueio de envios consecutivos (15s)
    const now = Date.now();
    if (now - lastSentRef.current < 15000) {
      setStatus("error");
      return;
    }

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const name = String(data.get("name"));
      const email = String(data.get("email"));
      const phone = String(data.get("phone") || "");
      const subject = String(data.get("subject"));
      const message = String(data.get("message"));

      const whatsappMessage = [
        "Olá, Murilo! Encontrei seu contato pelo portfólio.",
        "",
        `*Nome:* ${name}`,
        `*E-mail:* ${email}`,
        phone ? `*Telefone:* ${phone}` : "",
        `*Assunto:* ${subject}`,
        "",
        "*Mensagem:*",
        message,
      ]
        .filter(Boolean)
        .join("\n");

      const whatsappUrl = `https://wa.me/${site.whatsapp.numberDigits}?text=${encodeURIComponent(whatsappMessage)}`;
      const whatsappWindow = window.open(whatsappUrl, "_blank");
      if (whatsappWindow) whatsappWindow.opener = null;
      else window.location.href = whatsappUrl;

      lastSentRef.current = Date.now();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-secondary/60">
      <div className="container-p">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Estou aberto a novas oportunidades, projetos, colaborações e conversas sobre tecnologia. Envie uma mensagem e entrarei em contato."
          align="center"
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Info card */}
          <div className="rounded-3xl bg-graphite text-white p-8 relative overflow-hidden">
            <div
              className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-3xl opacity-25"
              style={{ background: "radial-gradient(circle, #CCAA4B 0%, transparent 70%)" }}
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold">Fale diretamente</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Prefere um canal direto? Escolha o que for melhor para você.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-gold/60 hover:bg-white/[0.06] transition"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/60">
                      E-mail
                    </span>
                    <span className="block text-sm">{site.email}</span>
                  </span>
                </a>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-gold/60 hover:bg-white/[0.06] transition"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/60">
                      WhatsApp
                    </span>
                    <span className="block text-sm">{site.whatsapp.number}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-white p-6 md:p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)]"
          >
            {/* Honeypot (invisível) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome completo" name="name" error={errors.name} required />
              <Field label="E-mail" name="email" type="email" error={errors.email} required />
              <Field label="Telefone (opcional)" name="phone" type="tel" />
              <Field label="Assunto" name="subject" error={errors.subject} required />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-graphite">
                Mensagem <span className="text-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-graphite placeholder:text-ash/70 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                placeholder="Sobre o que você gostaria de conversar?"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-graphite text-white px-5 py-3 text-sm font-semibold hover:bg-black transition disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Abrindo...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-gold" /> Continuar no WhatsApp
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="inline-flex items-center gap-2 text-sm text-graphite">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  WhatsApp aberto. Revise a mensagem e toque em enviar.
                </p>
              )}
              {status === "error" && (
                <p className="inline-flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Não foi possível enviar agora. Tente novamente em instantes.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-graphite">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-graphite placeholder:text-ash/70 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
