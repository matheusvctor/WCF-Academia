import { ArrowUpRight } from "lucide-react";
import { MODALIDADES } from "@/data/modalidades";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";

export const ModalidadesSection = () => {
  return (
    <section id="modalidades" className="py-14 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          align="left"
          label="Modalidades"
          title={<>Encontre o treino <span className="text-gradient-red">perfeito</span> pra você.</>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODALIDADES.map((m) => (
            <a
              key={m.name}
              href={getWhatsAppUrl(`Olá! Quero conhecer a modalidade ${m.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={m.image}
                  alt={`${m.name} - WCF Academia Campina Grande`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full">
                    {m.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;
