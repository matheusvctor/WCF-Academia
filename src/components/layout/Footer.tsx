import { Link } from "react-router-dom";
import logo from "@/assets/logo-wcf-real.webp";
import { Instagram, MapPin, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";
import { HORARIOS_FUNCIONAMENTO } from "@/data/horarios";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-card/60">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 glow-ambient-red rounded-full pointer-events-none opacity-50" aria-hidden="true" />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt={SITE_INFO.name}
                width={48}
                height={48}
                loading="lazy"
                className="rounded-full ring-2 ring-primary/30 group-hover:ring-primary transition-all object-cover"
              />
              <span className="flex flex-col">
                <span className="font-heading font-bold text-lg text-foreground">{SITE_INFO.name}</span>
                <span className="text-xs text-muted-foreground">Desde {SITE_INFO.since} · Campina Grande</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Mais de 10 anos transformando vidas com musculação das 05h às 00h, Studio Pilates Reformer e tatame
              oficial de Jiu-Jitsu.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !px-4"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Fale conosco
              </a>
              <a
                href={SITE_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SITE_INFO.instagram.handle}`}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/25 transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <nav className="lg:col-span-2" aria-label="Rodapé">
            <h4 className="font-heading text-sm font-bold text-foreground">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Horários */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-foreground">Horário de treino</h4>
            <dl className="mt-4 space-y-3 text-sm">
              {HORARIOS_FUNCIONAMENTO.map((f) => (
                <div key={f.dia}>
                  <dt className="text-muted-foreground">{f.dia}</dt>
                  <dd className="tabular text-foreground font-medium">{f.horario}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-bold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={SITE_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{SITE_INFO.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${SITE_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.instagram.handle}</span>
                </a>
              </li>
            </ul>
            <span className="mt-5 inline-flex items-center gap-2 chip bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Matrículas abertas
            </span>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE_INFO.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Jardim Paulistano · Campina Grande – PB</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Voltar ao topo"
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:text-foreground hover:border-white/25 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
