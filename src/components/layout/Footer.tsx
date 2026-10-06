import { Link } from "react-router-dom";
import logo from "@/assets/logo-wcf-real.webp";
import { Instagram, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-card/90 md:backdrop-blur-md py-12 md:py-16 relative overflow-hidden">
      {/* High-Performance subtle radial ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 glow-ambient-red rounded-full pointer-events-none opacity-40" />


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          {/* Coluna 1: Marca & Resumo */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt={SITE_INFO.name}
                width={44}
                height={44}
                className="rounded-full ring-2 ring-primary/30 group-hover:ring-primary transition-all object-cover"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-base uppercase tracking-wider text-foreground">
                  {SITE_INFO.name}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  Desde {SITE_INFO.since} • Campina Grande
                </span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Mais de 10 anos transformando vidas com musculação ininterrupta das 05h às 00h (5 personais no salão), Studio Pilates Reformer clássico e tatame oficial de Jiu-Jitsu.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da WCF Academia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Fale Conosco
              </a>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Matrículas Abertas
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Páginas & Treinos
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Endereço & Horários */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Localização & Horários
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{SITE_INFO.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{SITE_INFO.phone}</span>
              </p>
              <p>
                <a
                  href={SITE_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary shrink-0" />
                  <span>{SITE_INFO.instagram.handle}</span>
                </a>
              </p>
              <div className="p-2.5 rounded-xl bg-card border border-white/10 text-[11px] text-foreground/90 space-y-1 mt-2">
                <div className="font-semibold text-primary">Horário Oficial de Treino:</div>
                <div>{SITE_INFO.workingHours.summary}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-muted-foreground/80">
          <div>
            © {new Date().getFullYear()} {SITE_INFO.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Jardim Paulistano • Campina Grande – PB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

