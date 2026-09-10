import { CERTIFICACOES_OFICIAIS } from "@/data/certificados";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CertificadosSection = () => {
  return (
    <section id="certificados" className="py-14 md:py-24 border-t border-border/50 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Credenciais Oficiais"
          title={
            <>
              Certificações & Habilitações <span className="text-gradient-gold">Reais.</span>
            </>
          }
          description="Formação acadêmica e reconhecimento máximo pelas maiores entidades esportivas nacionais e internacionais."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CERTIFICACOES_OFICIAIS.map((c, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl glass border border-border/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {c.sigla}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {c.anoOuGrau}
                  </span>
                </div>

                <h4 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {c.titulo}
                </h4>
                <p className="text-xs font-medium text-muted-foreground mb-3">
                  {c.entidade}
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  {c.descricao}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-border/40 flex items-center gap-1.5 text-[11px] text-primary/90 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Registro & Habilitação Ativa</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificadosSection;
