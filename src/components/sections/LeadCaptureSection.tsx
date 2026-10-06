import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Flame } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { toast } from "sonner";
import { formatPhone } from "@/lib/formatters";

const MODALIDADE_OPCOES = [
  "Musculação & Condicionamento (05h às 00h)",
  "Jiu-Jitsu Kids (1ª Mensalidade FREE)",
  "Jiu-Jitsu Feminino (1ª Mensalidade FREE)",
  "Jiu-Jitsu Adulto (A partir de R$ 60/mês)",
  "WCF Studio Pilates & Solo",
  "Aulas Coletivas (Spinning, Step, Localizada, Muay Thai)",
];


export const LeadCaptureSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modalidade, setModalidade] = useState(MODALIDADE_OPCOES[0]);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawDigits = phone.replace(/\D/g, "");

    if (rawDigits.length < 10) {
      toast.error("Por favor, digite um telefone válido com DDD (Ex: 83 99999-9999).");
      return;
    }

    setLoading(true);
    toast.success("Tudo pronto! Redirecionando para o WhatsApp da WCF...");

    const msg = `Olá! Meu nome é ${name.trim()}, telefone ${phone}. Tenho interesse em ${modalidade} e gostaria de agendar uma aula experimental grátis na WCF Academia!`;
    const targetUrl = getWhatsAppUrl(msg);

    setTimeout(() => {
      // Safe redirect: works on iOS Safari and Android without popup blocker
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = targetUrl;
      } else {
        const opened = window.open(targetUrl, "_blank");
        if (!opened) {
          window.location.href = targetUrl;
        }
      }
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contato-form" className="py-16 md:py-24 bg-background relative overflow-hidden section-optimized">
      {/* High-Performance Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] glow-ambient-red rounded-full pointer-events-none" />


      <div className="container mx-auto max-w-lg px-4 relative z-10">
        <div className="glass-card rounded-3xl p-6 sm:p-10 text-center border border-white/10 shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-heading font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
            Vagas Limitadas para Aulas Experimentais
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-foreground">
            Ganhe uma <span className="text-gradient-red">Aula Experimental Grátis</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 leading-relaxed">
            Escolha sua modalidade de interesse e reserve seu horário no WhatsApp diretamente com a nossa equipe.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/90 mb-1.5 uppercase tracking-wider">
                Modalidade de Interesse
              </label>
              <select
                value={modalidade}
                onChange={(e) => setModalidade(e.target.value)}
                className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer shadow-inner"
              >
                {MODALIDADE_OPCOES.map((opt) => (
                  <option key={opt} value={opt} className="bg-background text-foreground">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/90 mb-1.5 uppercase tracking-wider">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: João Silva"
                className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
              />
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/90 mb-1.5 uppercase tracking-wider">
                Seu WhatsApp com DDD
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(83) 98765-4321"
                maxLength={15}
                className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary glow-red !w-full !rounded-xl !py-4 !text-xs sm:!text-sm font-heading font-bold flex items-center justify-center gap-2 mt-3 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Preparando WhatsApp..." : "Solicitar Aula Grátis no WhatsApp"}
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Gratuito e sem compromisso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Atendimento rápido</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;

