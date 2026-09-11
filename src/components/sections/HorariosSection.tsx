import { useState } from "react";
import { HORARIOS_FUNCIONAMENTO, AGENDA_AULAS, HORARIOS_JIU_JITSU } from "@/data/horarios";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Clock, Calendar, Dumbbell, Sparkles, MessageCircle, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const HorariosSection = () => {
  return (
    <section id="horarios" className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeader
          label="Horários & Grades"
          title={
            <>
              Encaixe o Treino na <span className="text-gradient-red">Sua Rotina.</span>
            </>
          }
          description="A WCF abre às 05h da manhã e fecha à meia-noite. Treine com tranquilidade no horário que melhor se adapta ao seu dia."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Bloco 1: Funcionamento */}
          <div className="glass rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/40 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-primary mb-4">
                <Clock className="w-4 h-4" /> Academia Aberta
              </div>
              <div className="space-y-3">
                {HORARIOS_FUNCIONAMENTO.map((f) => (
                  <div key={f.dia} className="border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
                    <div className="font-heading font-bold text-xs text-foreground uppercase tracking-wider">
                      {f.dia}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.horario}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
              ⚡ 5 personais cobrindo todos os turnos
            </div>
          </div>

          {/* Bloco 2: Aulas Coletivas */}
          <div className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-primary mb-4">
                <Calendar className="w-4 h-4" /> Aulas Coletivas
              </div>
              <div className="space-y-3">
                {AGENDA_AULAS.map((a) => (
                  <div key={a.dia} className="border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
                    <div className="font-heading font-bold text-xs text-foreground uppercase tracking-wider">
                      {a.dia}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{a.aulas}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
              🚴 Spinning, Step e Localizada inclusos
            </div>
          </div>

          {/* Bloco 3: Jiu-Jitsu & Kids */}
          <div className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-primary mb-4">
                <Dumbbell className="w-4 h-4" /> Tatame Jiu-Jitsu
              </div>
              <div className="space-y-3">
                {HORARIOS_JIU_JITSU.map((j) => (
                  <div key={j.dia} className="border-b border-border/50 pb-2.5 last:border-0 last:pb-0 flex items-baseline justify-between gap-2">
                    <div className="font-heading font-bold text-xs text-foreground uppercase tracking-wider">
                      {j.dia.replace("-feira", "")}
                    </div>
                    <div className="text-xs text-muted-foreground text-right">{j.horario}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
              🥋 Turmas Kids, Feminina e Adulto
            </div>
          </div>

          {/* Bloco 4: Studio Pilates */}
          <div className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-primary mb-4">
                <Sparkles className="w-4 h-4" /> WCF Studio Pilates
              </div>
              <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                <div className="border-b border-border/50 pb-2.5">
                  <div className="font-heading font-bold text-foreground uppercase tracking-wider mb-1">
                    Pilates Aparelhos
                  </div>
                  <p>Sessões personalizadas com horários agendados de manhã à noite.</p>
                </div>
                <div className="pb-1">
                  <div className="font-heading font-bold text-foreground uppercase tracking-wider mb-1">
                    Pilates Solo & Alongamento
                  </div>
                  <p className="text-primary/90 font-medium">Terça e Quinta às 18h40</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Instrutor Romero Mota</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de consultar os horários disponíveis para treino na WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2 !text-xs !w-full flex items-center justify-center gap-1.5 hover:border-primary/50 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Confirmar Vaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorariosSection;
