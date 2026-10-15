import { useMemo, useState } from "react";
import { HORARIOS_FUNCIONAMENTO, AGENDA_AULAS, HORARIOS_JIU_JITSU } from "@/data/horarios";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Clock, CalendarDays, MessageCircle, Sparkles, Info } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import { parseHour } from "@/lib/openStatus";

type Categoria = "coletiva" | "luta" | "pilates";

interface Slot {
  time: string;
  minutes: number;
  name: string;
  detail?: string;
  categoria: Categoria;
}

/** Ordem de exibição (Seg → Dom). `index` segue Date.getDay(). */
const DIAS = [
  { index: 1, short: "Seg", long: "Segunda" },
  { index: 2, short: "Ter", long: "Terça" },
  { index: 3, short: "Qua", long: "Quarta" },
  { index: 4, short: "Qui", long: "Quinta" },
  { index: 5, short: "Sex", long: "Sexta" },
  { index: 6, short: "Sáb", long: "Sábado" },
  { index: 0, short: "Dom", long: "Domingo" },
] as const;

const CATEGORIA_STYLE: Record<Categoria, { label: string; chip: string; dot: string }> = {
  coletiva: { label: "Coletiva", chip: "bg-white/[0.06] border-white/10 text-foreground/90", dot: "bg-foreground/70" },
  luta: { label: "Luta", chip: "bg-primary/10 border-primary/25 text-red-400", dot: "bg-primary" },
  pilates: { label: "Pilates", chip: "bg-gold/10 border-gold/25 text-gold", dot: "bg-gold" },
};

const baseDia = (dia: string) => dia.split("-")[0].trim();

const funcionamentoDoDia = (index: number) => {
  const alvo = index === 0 ? "Domingo" : index === 6 ? "Sábado" : "Segunda";
  return HORARIOS_FUNCIONAMENTO.find((f) => f.dia.startsWith(alvo))?.horario ?? "";
};

const slotsDoDia = (long: string): Slot[] => {
  const slots: Slot[] = [];

  AGENDA_AULAS.filter((a) => baseDia(a.dia) === long).forEach((a) => {
    a.aulas.split("·").forEach((raw) => {
      const [time, ...rest] = raw.split("–").map((s) => s.trim());
      const name = rest.join(" – ");
      if (!time || !name) return;
      const categoria: Categoria = name.includes("Pilates") ? "pilates" : name.includes("Muay") ? "luta" : "coletiva";
      slots.push({ time, minutes: parseHour(time), name, categoria });
    });
  });

  HORARIOS_JIU_JITSU.filter((j) => baseDia(j.dia) === long).forEach((j) => {
    j.horario.split(" e ").forEach((time) => {
      const t = time.trim();
      slots.push({ time: t, minutes: parseHour(t), name: "Jiu-Jitsu", detail: "Kids, Feminino e Adulto", categoria: "luta" });
    });
  });

  return slots.sort((a, b) => a.minutes - b.minutes);
};

export const HorariosSection = () => {
  const status = useOpenStatus();
  const today = status.now.day;
  const [selected, setSelected] = useState<number>(today);

  const dia = DIAS.find((d) => d.index === selected) ?? DIAS[0];
  const slots = useMemo(() => slotsDoDia(dia.long), [dia.long]);
  const isToday = selected === today;
  const nextIdx = isToday ? slots.findIndex((s) => s.minutes >= status.now.minutes) : -1;

  return (
    <section id="horarios" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Horários & Grade"
          title={
            <>
              Encaixe o treino na <span className="text-gradient-red">sua rotina.</span>
            </>
          }
          description="Abrimos às 05h e fechamos à meia-noite. Escolha o dia e veja todas as aulas em segundos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* ===== Funcionamento ===== */}
          <aside className="lg:col-span-4 surface p-6 sm:p-7 flex flex-col">
            <div className="flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-foreground">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                Funcionamento
              </h3>
              <span
                className={`chip ${
                  status.isOpen
                    ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                    : "bg-white/[0.04] border-white/10 text-muted-foreground"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? "bg-emerald-400" : "bg-muted-foreground"}`} />
                {status.isOpen ? "Aberto" : "Fechado"}
              </span>
            </div>
            <p className="mt-1 text-[13px] text-muted-foreground">
              {status.title} · {status.detail}
            </p>

            <dl className="mt-6 divide-y divide-white/[0.08]">
              {HORARIOS_FUNCIONAMENTO.map((f) => {
                const ativo =
                  (f.dia.startsWith("Segunda") && today >= 1 && today <= 5) ||
                  (f.dia.startsWith("Sábado") && today === 6) ||
                  (f.dia.startsWith("Domingo") && today === 0);
                return (
                  <div key={f.dia} className="py-3.5 first:pt-0 last:pb-0 flex flex-col gap-0.5">
                    <dt className={`text-sm font-heading font-semibold ${ativo ? "text-foreground" : "text-muted-foreground"}`}>
                      {f.dia}
                      {ativo && <span className="ml-2 text-[11px] font-bold uppercase tracking-wider text-red-400">Hoje</span>}
                    </dt>
                    <dd className={`tabular text-base font-semibold ${ativo ? "text-foreground" : "text-foreground/80"}`}>
                      {f.horario}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-6 p-4 rounded-2xl bg-gold/[0.06] border border-gold/20">
              <div className="flex items-center gap-2 text-sm font-heading font-semibold text-gold">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Pilates Aparelhos
              </div>
              <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">
                Sessões com horário agendado, de manhã à noite. Reformer, Cadillac, Chair e Barrel.
              </p>
            </div>

            <p className="mt-auto pt-6 text-[13px] text-muted-foreground flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
              5 personais cobrindo todos os turnos no salão de musculação.
            </p>
          </aside>

          {/* ===== Grade semanal ===== */}
          <div className="lg:col-span-8 surface p-4 sm:p-6 lg:p-7 flex flex-col min-w-0">
            <div className="flex items-center justify-between gap-3 px-1 sm:px-0">
              <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-foreground">
                <CalendarDays className="w-5 h-5 text-primary" aria-hidden="true" />
                Grade de aulas
              </h3>
              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                {(Object.keys(CATEGORIA_STYLE) as Categoria[]).map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${CATEGORIA_STYLE[c].dot}`} aria-hidden="true" />
                    {CATEGORIA_STYLE[c].label}
                  </span>
                ))}
              </div>
            </div>

            {/* Seletor de dias */}
            <div className="mt-5 grid grid-cols-7 gap-1 p-1 rounded-2xl bg-background/60 border border-white/[0.06]" role="tablist" aria-label="Dia da semana">
              {DIAS.map((d) => {
                const active = d.index === selected;
                const total = slotsDoDia(d.long).length;
                return (
                  <button
                    key={d.index}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`${d.long}${d.index === today ? " (hoje)" : ""}`}
                    onClick={() => setSelected(d.index)}
                    className={`relative flex flex-col items-center justify-center gap-0.5 py-2.5 rounded-xl text-[13px] font-heading font-semibold transition-all duration-200 ${
                      active
                        ? "bg-white text-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    }`}
                  >
                    {d.short}
                    <span
                      className={`w-1 h-1 rounded-full ${
                        d.index === today ? (active ? "bg-red-600" : "bg-primary") : total ? (active ? "bg-background/30" : "bg-white/20") : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Resumo do dia */}
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2 px-1 sm:px-0">
              <p className="font-heading font-bold text-foreground text-base">
                {dia.long}
                {isToday && <span className="ml-2 text-xs font-bold uppercase tracking-wider text-red-400">Hoje</span>}
              </p>
              <p className="text-[13px] text-muted-foreground">
                Musculação: <span className="tabular text-foreground font-medium">{funcionamentoDoDia(dia.index)}</span>
              </p>
            </div>

            {/* Lista de aulas */}
            {slots.length > 0 ? (
              <ul className="mt-4 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] overflow-hidden" role="tabpanel">
                {slots.map((s, i) => {
                  const st = CATEGORIA_STYLE[s.categoria];
                  const isNext = i === nextIdx;
                  const isPast = isToday && s.minutes < status.now.minutes;
                  return (
                    <li
                      key={`${s.time}-${s.name}`}
                      className={`flex items-center gap-3 sm:gap-5 px-3 sm:px-5 py-3.5 transition-colors ${
                        isNext ? "bg-primary/[0.07]" : "hover:bg-white/[0.02]"
                      } ${isPast ? "opacity-50" : ""}`}
                    >
                      <span className="tabular font-heading font-bold text-base sm:text-lg text-foreground w-14 sm:w-16 shrink-0">
                        {s.time}
                      </span>
                      <span className={`w-1 self-stretch rounded-full ${st.dot}`} aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-sm sm:text-base text-foreground">{s.name}</span>
                          {isNext && (
                            <span className="chip bg-red-600 border-red-600 text-white !py-0.5">Próxima</span>
                          )}
                        </div>
                        <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                          <span className={`chip !py-0 !px-2 !text-[10px] ${st.chip}`}>{st.label}</span>
                          {s.detail && <span className="truncate">{s.detail}</span>}
                        </div>
                      </div>
                      <a
                        href={getWhatsAppUrl(
                          `Olá! Quero reservar uma vaga na aula de ${s.name} de ${dia.long.toLowerCase()} às ${s.time} na WCF Academia!`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Reservar ${s.name} às ${s.time}`}
                        className="shrink-0 inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-white/10 text-xs font-heading font-semibold text-foreground hover:bg-white hover:text-background hover:border-white transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="hidden sm:inline">Reservar</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="mt-4 flex-1 flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-white/10 px-6 py-10" role="tabpanel">
                <CalendarDays className="w-8 h-8 text-muted-foreground/60" aria-hidden="true" />
                <p className="mt-3 font-heading font-semibold text-foreground">Sem aulas coletivas neste dia</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Musculação liberada das <span className="tabular">{funcionamentoDoDia(dia.index)}</span>.
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.06]">
              <p className="text-[13px] text-muted-foreground">
                Spinning, Step e Localizada inclusos.
              </p>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de consultar os horários disponíveis para treino na WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-5 shrink-0"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Confirmar vaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorariosSection;
