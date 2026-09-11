import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo-wcf-real.webp";
import { Menu, X, ArrowRight } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
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

  const whatsappUrl = getWhatsAppUrl();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/80 py-2.5 shadow-lg"
          : "bg-gradient-to-b from-background/90 via-background/60 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={SITE_INFO.name}
            width={42}
            height={42}
            className="rounded-full ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-foreground text-sm uppercase tracking-wider">
              {SITE_INFO.name}
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:block">
              Campina Grande • PB
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-xs font-heading font-bold shadow-md hover:shadow-primary/20"
          >
            Matricule-se
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-1.5 !px-3 !text-[11px] font-heading font-bold sm:hidden"
          >
            Matrícula
          </a>

          <button
            className="p-2.5 rounded-xl border border-border/80 bg-card/80 text-foreground hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-background/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="space-y-2">
            <div className="text-[11px] font-heading uppercase tracking-widest text-muted-foreground/70 px-4 py-2">
              Navegação
            </div>

            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm uppercase tracking-wider font-heading transition-all ${
                    isActive
                      ? "bg-primary/15 text-primary font-bold border border-primary/30"
                      : "text-foreground/90 hover:bg-card hover:text-foreground"
                  }`
                }
              >
                <span>{l.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-border/60 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !w-full !py-3.5 !text-xs font-heading font-bold text-center justify-center flex items-center gap-2"
            >
              Falar no WhatsApp / Matrícula
            </a>
            <p className="text-center text-xs text-muted-foreground">
              {SITE_INFO.address.short}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
