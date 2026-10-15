import { ArrowRight, CalendarCheck } from "lucide-react";
import { DIFERENCIAIS } from "@/data/diferenciais";
import { SectionHeader } from "@/components/common/SectionHeader";
import { getWhatsAppUrl } from "@/constants/site";

export const DiferenciaisSection = () => {
  return (
    <section className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Nossos diferenciais"
          title={
            <>
              Por que a WCF é a escolha <span className="text-gradient-red">certa</span> pra você?
            </>
          }
          description="Pilares construídos ao longo de mais de uma década de dedicação ao esporte e à saúde em Campina Grande."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DIFERENCIAIS.map((d, index) => (
            <div key={d.title} className="group surface surface-hover p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white">
                  <d.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="font-heading text-sm font-bold text-white/15 tabular" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}

          {/* Bloco de conversão: agendar visita */}
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agendar uma visita para conhecer a estrutura da WCF Academia!")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-primary/40 bg-gradient-to-br from-primary/20 via-primary/[0.06] to-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <CalendarCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-bold text-foreground">Venha conhecer pessoalmente</h3>
            <p className="mt-2 text-sm sm:text-base text-foreground/75 leading-relaxed">
              Agende uma visita guiada pela estrutura e tire suas dúvidas com a equipe.
            </p>
            <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-heading font-bold text-foreground">
              Agendar visita
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
