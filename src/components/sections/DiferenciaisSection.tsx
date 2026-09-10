import { DIFERENCIAIS } from "@/data/diferenciais";
import { SectionHeader } from "@/components/common/SectionHeader";

export const DiferenciaisSection = () => {
  return (
    <section className="py-14 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          label="Diferenciais"
          title={<>Por que a WCF é <span className="text-gradient-red">diferente?</span></>}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.title}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <d.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-2 text-foreground">
                {d.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
