import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/faq";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MessageCircle, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const FAQSection = () => {
  return (
    <section id="faq" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Perguntas Frequentes"
          title={
            <>
              Tudo o que você precisa <span className="text-gradient-red">saber.</span>
            </>
          }
          description="Tire suas principais dúvidas sobre matrículas, horários de funcionamento, estrutura e metodologia de treino."
        />

        <Accordion type="single" collapsible className="space-y-3.5">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="surface overflow-hidden border-white/[0.08] hover:border-white/20 transition-all duration-200 shadow-md"
            >
              <AccordionTrigger className="font-heading text-sm sm:text-base font-semibold hover:no-underline text-foreground py-4 sm:py-5 px-5 sm:px-6 text-left gap-4">
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <span className="leading-snug">{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 px-5 sm:px-6 pt-1 border-t border-white/[0.04]">
                <p className="pl-10 text-pretty">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bloco de Suporte Rápido */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl surface border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-base sm:text-lg text-foreground">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Nossa equipe de recepção responde no WhatsApp em poucos minutos.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Estava lendo o FAQ no site e tenho uma dúvida sobre a WCF Academia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-3 !px-6 text-xs sm:text-sm font-heading font-bold shrink-0 flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Recepção</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
