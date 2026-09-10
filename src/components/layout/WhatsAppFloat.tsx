import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const WhatsAppFloat = () => {
  return (
    <a
      href={getWhatsAppUrl("Olá! Quero saber mais sobre a WCF Academia!")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground shadow-xl transition-all hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
