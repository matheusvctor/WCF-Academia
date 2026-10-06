import { Link } from "react-router-dom";
import { MessageCircle, Zap, Clock, ChevronRight } from "lucide-react";
import { getWhatsAppUrl, SITE_INFO } from "@/constants/site";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] glow-ambient-red rounded-full pointer-events-none" />


      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-xs font-heading font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
            Comece Hoje Mesmo • 1ª Aula Grátis
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 leading-[1.08] text-foreground">
            Sua transformação
            <br />
            <span className="text-gradient-red">começa agora.</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Musculação das 05h às 00h, Studio Pilates com aparelhos e tatame de Jiu-Jitsu no Jardim Paulistano. Escolha seu objetivo e venha treinar conosco.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Olá! Quero dar o primeiro passo e começar a treinar na WCF Academia!")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary glow-red !py-4 !px-8 text-sm sm:text-base font-heading font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/25 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Agendar no WhatsApp
            </a>
            <Link
              to="/horarios"
              className="btn-outline !py-4 !px-8 text-sm font-heading flex items-center justify-center gap-2 w-full sm:w-auto hover:border-primary/50"
            >
              <Clock className="w-4 h-4 text-primary" />
              Ver Horários & Planos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-muted-foreground flex items-center justify-center gap-2">
            <span>{SITE_INFO.address.short}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

