import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Interests } from "@/components/portfolio/Interests";
import { Experience } from "@/components/portfolio/Experience";
import { Technologies } from "@/components/portfolio/Technologies";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.role,
          description:
            "Desenvolvedor focado em backend, APIs REST, webhooks, integrações de sistemas e automação de processos.",
          email: `mailto:${site.email}`,
          telephone: site.whatsapp.number,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Itu",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          knowsAbout: [
            "Backend Development",
            "APIs REST",
            "Webhooks",
            "Integrações de Sistemas",
            "Automação de Processos",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Interests />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
