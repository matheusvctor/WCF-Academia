import { useState, useEffect } from "react";
import logo from "@/assets/logo-wcf-real.jpg";
import { Menu, X } from "lucide-react";
import { SITE_INFO, NAV_LINKS, getWhatsAppUrl } from "@/constants/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt={SITE_INFO.name} width={44} height={44} className="rounded-full" />
          <span className="font-heading font-bold text-foreground text-sm uppercase tracking-wider hidden sm:block">
            {SITE_INFO.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-6 !text-xs"
          >
            Matricule-se
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Alternar menu de navegação"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !w-full !text-xs"
          >
            Matricule-se
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
