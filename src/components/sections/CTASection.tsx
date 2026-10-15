import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight, Check, MapPin } from "lucide-react";
import { getWhatsAppUrl, SITE_INFO } from "@/constants/site";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card px-6 py-14 sm:px-12 sm:py-20 text-center">
          {/* Atmosfera */}
          <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[420px] glow-ambient-red rounded-full pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" aria-hidden="true" />

          <div className="relative">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              Comece hoje · 1ª aula grátis
            </span>

            <h2 className="mx-auto max-w-3xl font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-foreground text-balance">
              Sua transformação <span className="text-gradient-red">começa agora.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              Musculação das 05h às 00h, Studio Pilates com aparelhos e tatame de Jiu-Jitsu no Jardim Paulistano.
              Escolha seu objetivo e venha treinar com a gente.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Quero dar o primeiro passo e começar a treinar na WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-4 !px-8 !text-[15px] w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                Agendar no WhatsApp
              </a>
              <Link to="/horarios" className="btn-outline !py-4 !px-8 !text-[15px] w-full sm:w-auto group">
                Ver horários e planos
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
              {["Sem compromisso", "Atendimento rápido", "Personais no salão"].map((i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>

            <p className="mt-10 pt-6 border-t border-white/[0.08] text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              {SITE_INFO.address.short}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
