import { MessageCircle, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const CTASection = () => {
  return (
    <section className="py-14 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-heading uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Zap className="w-3.5 h-3.5" />
          Vagas limitadas
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">
          Sua transformação
          <br />
          <span className="text-gradient-red">começa agora.</span>
        </h2>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-10 px-2">
          Agende sua aula experimental gratuita e descubra por que +1.000 alunos
          já escolheram a WCF.
        </p>

        <a
          href={getWhatsAppUrl("Olá! Quero começar a treinar na WCF Academia!")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary glow-red text-sm md:text-base"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
