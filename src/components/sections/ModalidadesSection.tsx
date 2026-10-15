import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, MessageCircle } from "lucide-react";
import { MODALIDADES } from "@/data/modalidades";
import { getWhatsAppUrl } from "@/constants/site";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { Modalidade } from "@/types";

const CATEGORIAS = [
  "Todas",
  "Força & Saúde",
  "Lutas & Kids",
  "Bem-estar & Pilates",
  "Aulas Coletivas",
] as const;

type Categoria = (typeof CATEGORIAS)[number];

const matchCategoria = (m: Modalidade, cat: Categoria): boolean => {
  if (cat === "Todas") return true;
  if (cat === "Força & Saúde") return m.tag.includes("Força") || m.name.includes("Musculação");
  if (cat === "Lutas & Kids") return m.name.includes("Jiu-Jitsu") || m.name.includes("Muay") || m.name.includes("Kids");
  if (cat === "Bem-estar & Pilates") return m.name.includes("Pilates");
  if (cat === "Aulas Coletivas") return m.name.includes("Spinning") || m.name.includes("Step") || m.name.includes("Localizada");
  return true;
};

export const ModalidadesSection = () => {
  const [activeCat, setActiveCat] = useState<Categoria>("Todas");

  const counts = useMemo(
    () => Object.fromEntries(CATEGORIAS.map((c) => [c, MODALIDADES.filter((m) => matchCategoria(m, c)).length])),
    []
  );

  const filtered = MODALIDADES.filter((m) => matchCategoria(m, activeCat));

  return (
    <section id="modalidades" className="section-y relative overflow-hidden bg-background section-optimized">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 md:mb-12">
          <SectionHeader
            align="left"
            label="Modalidades & Treinos"
            title={
              <>
                Encontre o treino <span className="text-gradient-red">perfeito</span> pra você.
              </>
            }
            description="Do salão de musculação ao tatame: opções para todos os objetivos, idades e ritmos."
            className="mb-0"
          />

          {/* Filtros: rolagem horizontal no mobile, quebra de linha no desktop */}
          <div
            className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto no-scrollbar lg:flex-wrap lg:justify-end lg:max-w-md shrink-0"
            role="group"
            aria-label="Filtrar modalidades por categoria"
          >
            {CATEGORIAS.map((cat) => {
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  aria-pressed={isActive}
                  className={`shrink-0 inline-flex items-center gap-2 h-9 px-3.5 rounded-full text-[13px] font-heading font-semibold whitespace-nowrap border transition-all duration-200 ${
                    isActive
                      ? "bg-white text-background border-white"
                      : "bg-white/[0.03] border-white/10 text-muted-foreground hover:text-foreground hover:border-white/25"
                  }`}
                >
                  {cat}
                  <span
                    className={`tabular text-[11px] px-1.5 rounded-full ${
                      isActive ? "bg-background/10 text-background" : "bg-white/[0.06] text-muted-foreground"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" aria-live="polite">
          {filtered.map((m) => {
            // Jiu-Jitsu e Pilates têm páginas dedicadas
            const internalRoute = m.name.includes("Jiu-Jitsu")
              ? "/jiu-jitsu"
              : m.name.includes("Pilates")
              ? "/pilates"
              : null;

            const externalUrl = internalRoute
              ? null
              : m.name === "Musculação"
              ? "#musculacao"
              : getWhatsAppUrl(`Olá! Quero conhecer mais sobre as aulas de ${m.name} na WCF Academia!`);

            const isWhatsApp = !!externalUrl?.startsWith("http");
            const actionLabel = internalRoute ? "Ver detalhes" : isWhatsApp ? "Agendar aula grátis" : "Conhecer estrutura";
            const ActionIcon = isWhatsApp ? MessageCircle : ArrowRight;

            const CardContent = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img
                    src={m.image}
                    alt={`${m.name} - WCF Academia Campina Grande`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" aria-hidden="true" />

                  <span className="absolute top-3 left-3 chip bg-black/65 border-white/15 text-white backdrop-blur-md">
                    {m.tag}
                  </span>

                  <span
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6 pt-1 sm:pt-2">
                  <h3 className="font-heading text-xl font-bold text-foreground leading-tight">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{m.desc}</p>

                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-heading font-semibold text-foreground group-hover:text-red-400 transition-colors">
                    <ActionIcon className="w-4 h-4" aria-hidden="true" />
                    {actionLabel}
                  </span>
                </div>
              </>
            );

            const cardClasses =
              "group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-card transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50";

            if (internalRoute) {
              return (
                <Link key={m.name} to={internalRoute} className={cardClasses}>
                  {CardContent}
                </Link>
              );
            }

            return (
              <a
                key={m.name}
                href={externalUrl || "#"}
                {...(isWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cardClasses}
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;
