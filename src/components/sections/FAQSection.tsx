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
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background section-optimized">

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        <SectionHeader
          label="Perguntas Frequentes"
          title={
            <>
              Tudo o que Você Precisa <span className="text-gradient-red">Saber.</span>
            </>
          }
          description="Tire suas dúvidas sobre matrículas, horários de funcionamento, estrutura e metodologia."
          className="mb-10"
        />

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-5 sm:px-6 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-md"
            >
              <AccordionTrigger className="font-heading text-sm sm:text-base font-semibold hover:no-underline text-foreground py-4 text-left gap-3">
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-5 pl-6 border-t border-white/5 pt-3">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 p-6 rounded-2xl glass border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-sm sm:text-base text-foreground">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-muted-foreground">
              Nossa equipe da recepção responde no WhatsApp em poucos minutos.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Estava lendo o FAQ no site e tenho uma dúvida sobre a WCF Academia.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-xs font-heading font-bold shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

