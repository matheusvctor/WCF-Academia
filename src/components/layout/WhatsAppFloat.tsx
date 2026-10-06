import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex items-center gap-2.5 group">
      {/* Floating text pill for desktop and mobile */}
      <a
        href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental grátis na WCF Academia!")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a WCF Academia"
        className="flex items-center gap-2 bg-card/90 hover:bg-card text-foreground px-3.5 py-2 rounded-full border border-white/10 shadow-xl backdrop-blur-md text-xs font-heading font-semibold transition-all group-hover:border-emerald-500/50"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="hidden sm:inline">Dúvidas? Fale no WhatsApp</span>
        <span className="sm:hidden">Aula Grátis</span>
      </a>

      {/* Main floating circle button with pulse */}
      <a
        href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental grátis na WCF Academia!")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-2xl shadow-emerald-900/50 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-6"
      >
        <MessageCircle className="w-7 h-7 fill-white/15" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-background animate-pulse">
          1
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;

