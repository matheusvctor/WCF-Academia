import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/faq";
import { SectionHeader } from "@/components/common/SectionHeader";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-14 md:py-24">
      <div className="container mx-auto max-w-2xl">
        <SectionHeader
          label="FAQ"
          title={<>Dúvidas <span className="text-gradient-gold">frequentes.</span></>}
        />

        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-xl px-5 border-0"
            >
              <AccordionTrigger className="font-heading text-sm hover:no-underline text-foreground py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
