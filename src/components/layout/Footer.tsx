import logo from "@/assets/logo-wcf-real.jpg";
import { Instagram, MapPin, Phone } from "lucide-react";
import { SITE_INFO } from "@/constants/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt={SITE_INFO.name} width={36} height={36} className="rounded-full" />
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-foreground">
              {SITE_INFO.name}
            </span>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 text-xs text-muted-foreground text-center">
            <span className="flex items-start gap-1.5 max-w-xs md:max-w-none">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>{SITE_INFO.address.short}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> {SITE_INFO.phone}
            </span>
            <a
              href={SITE_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" /> {SITE_INFO.instagram.handle}
            </a>
          </div>
        </div>

        <div className="text-center text-[11px] text-muted-foreground/60 mt-8">
          © {new Date().getFullYear()} {SITE_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
