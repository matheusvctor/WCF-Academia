import { DIFERENCIAIS } from "@/data/diferenciais";
import { SectionHeader } from "@/components/common/SectionHeader";

export const DiferenciaisSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background section-optimized">

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <SectionHeader
          label="Nossos Diferenciais"
          title={
            <>
              Por que a WCF é a Escolha <span className="text-gradient-red">Certa</span> para Você?
            </>
          }
          description="Pilares sólidos construídos ao longo de mais de uma década de dedicação ao esporte e à saúde em Campina Grande."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((d, index) => (
            <div
              key={d.title}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-primary duration-300 shadow-sm">
                  <d.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-heading font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold uppercase tracking-wider mb-2 text-foreground group-hover:text-primary transition-colors">
                {d.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;

