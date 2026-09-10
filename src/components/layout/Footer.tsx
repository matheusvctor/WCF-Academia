import { Link } from "react-router-dom";
import logo from "@/assets/logo-wcf-real.jpg";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border/80 bg-background/80 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          {/* Coluna 1: Marca & Resumo */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt={SITE_INFO.name} width={42} height={42} className="rounded-full ring-1 ring-border" />
              <span className="font-heading font-bold text-base uppercase tracking-wider text-foreground">
                {SITE_INFO.name}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Mais de 10 anos de tradição em Campina Grande. Musculação de ponta, Studio Pilates, Jiu-Jitsu Kids, Lutas e turmas coletivas com atendimento profissional das 05h às 00h.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading font-bold text-primary hover:underline"
              >
                <MessageCircle className="w-4 h-4" /> Fale no WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">
              Páginas & Modalidades
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors py-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Endereço & Horários */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">
              Localização & Contato
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
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-muted-foreground/70">
          <div>
            © {new Date().getFullYear()} {SITE_INFO.name}. Todos os direitos reservados.
          </div>
          <div>
            Seg a Sex: 05h–00h • Sáb: 08h–18h • Dom: 08h–14h
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
