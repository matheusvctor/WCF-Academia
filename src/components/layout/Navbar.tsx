import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo-wcf-real.webp";
import { Menu, X, ArrowRight, MessageCircle, Clock, MapPin } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";
import { useOpenStatus } from "@/hooks/useOpenStatus";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const status = useOpenStatus();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu móvel ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Bloqueia scroll do body quando o menu móvel está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const whatsappUrl = getWhatsAppUrl("Olá! Gostaria de agendar uma aula experimental grátis na WCF Academia!");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-xl shadow-black/40"
          : "bg-gradient-to-b from-background/95 via-background/80 to-transparent py-3.5 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-4">
        {/* Marca & Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="WCF Academia - Página inicial">
          <div className="relative shrink-0">
            <img
              src={logo}
              alt={SITE_INFO.name}
              width={42}
              height={42}
              className="rounded-full ring-2 ring-primary/40 group-hover:ring-primary group-hover:scale-105 transition-all duration-200 shadow-md shadow-primary/20 object-cover"
              loading="eager"
              decoding="async"
            />
            <span
              className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-background ${
                status.isOpen ? "bg-emerald-400" : "bg-muted-foreground"
              }`}
              title={status.isOpen ? "Academia aberta agora" : "Academia fechada agora"}
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-heading font-black text-foreground text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
              {SITE_INFO.name}
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest font-medium">
              Campina Grande · PB
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5" aria-label="Navegação principal">
          <div className="flex items-center gap-1 bg-card/85 border border-white/[0.08] rounded-full p-1.5 shadow-inner backdrop-blur-md shrink-0">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                end={l.href === "/"}
                className={({ isActive }) =>
                  `inline-flex items-center justify-center h-8 px-3.5 xl:px-4 rounded-full text-xs font-heading font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 select-none ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-primary/30 font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.06]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Principal Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !h-9 sm:!h-10 !py-0 !px-4 xl:!px-5 !text-xs font-heading font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2 shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Matricule-se</span>
          </a>
        </nav>

        {/* CTA Rápido Mobile + Botão Hambúrguer */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !h-9 !py-0 !px-3.5 !text-[11px] font-heading font-bold flex items-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Matrícula</span>
          </a>

          <button
            type="button"
            className="p-2 rounded-xl border border-white/10 bg-card/85 text-foreground hover:bg-card hover:border-primary/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Drawer Móvel */}
      {open && (
        <div className="fixed inset-x-0 top-[60px] h-[calc(100dvh-60px)] z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-3 duration-200 overflow-y-auto overscroll-contain border-t border-white/10">
          <div className="space-y-4">
            {/* Status no Topo do Menu Móvel */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-card border border-white/[0.08]">
              <span className="text-[11px] font-heading uppercase tracking-widest text-muted-foreground font-semibold">
                Status WCF
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                  status.isOpen
                    ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
                    : "bg-white/[0.04] border-white/10 text-muted-foreground"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground"}`}
                />
                {status.title} ({status.detail})
              </span>
            </div>

            {/* Links Móveis */}
            <div className="space-y-1.5">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  end={l.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-heading transition-all ${
                      isActive
                        ? "bg-red-600 text-white font-bold shadow-md shadow-primary/25 border border-red-600"
                        : "text-foreground/90 hover:bg-card/80 hover:text-white border border-transparent"
                    }`
                  }
                >
                  <span className="whitespace-nowrap">{l.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </NavLink>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !w-full !py-3.5 !text-xs font-heading font-bold text-center justify-center flex items-center gap-2 shadow-xl shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Falar no WhatsApp / Matrícula</span>
            </a>
            <div className="text-center text-[11px] text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{SITE_INFO.workingHours.summary}</span>
            </div>
            <p className="text-center text-[11px] text-muted-foreground/80 flex items-center justify-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary shrink-0" />
              {SITE_INFO.address.short}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
