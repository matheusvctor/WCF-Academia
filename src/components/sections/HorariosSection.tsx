import { HORARIOS_FUNCIONAMENTO, AGENDA_AULAS, HORARIOS_JIU_JITSU } from "@/data/horarios";
import { SectionHeader } from "@/components/common/SectionHeader";

export const HorariosSection = () => {
  return (
    <section id="horarios" className="py-14 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="Horários"
          title={<>Encaixe o treino na <span className="text-gradient-gold">sua rotina.</span></>}
          description="A academia abre cedo e fecha tarde para você treinar quando puder."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Funcionamento */}
          <div className="glass rounded-2xl p-6 border border-border">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-4 font-semibold">
              Funcionamento da academia
            </div>
            <div className="space-y-3">
              {HORARIOS_FUNCIONAMENTO.map((f) => (
                <div key={f.dia} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">
                    {f.dia}
                  </div>
                  <div className="text-sm text-muted-foreground">{f.horario}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Agenda de aulas */}
          <div className="glass rounded-2xl p-6 border border-border">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-4 font-semibold">
              CRONOGRAMA DAS AULAS COLETIVAS
            </div>
            <div className="space-y-3">
              {AGENDA_AULAS.map((a) => (
                <div key={a.dia} className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">
                    {a.dia}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{a.aulas}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Jiu-Jitsu */}
          <div className="glass rounded-2xl p-6 border border-border">
            <div className="text-[10px] uppercase tracking-widest text-primary mb-4 font-semibold">
              HORÁRIOS DE TREINO JIU-JITSU
            </div>
            <div className="space-y-3">
              {HORARIOS_JIU_JITSU.map((j) => (
                <div key={j.dia} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">
                    {j.dia}
                  </div>
                  <div className="text-sm text-muted-foreground">{j.horario}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8">
          Pilates Solo e Alongamento: terça e quinta, 18h40 · Instrutor Romero Mota
        </p>
      </div>
    </section>
  );
};

export default HorariosSection;
