import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Flame, Sparkles, Clock, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";
import { toast } from "sonner";
import { formatPhone } from "@/lib/formatters";

const MODALIDADE_OPCOES = [
  "Musculação & Condicionamento (05h às 00h)",
  "Jiu-Jitsu Kids (1ª Mensalidade FREE)",
  "Jiu-Jitsu Feminino (A partir de R$ 60/mês)",
  "Jiu-Jitsu Adulto (A partir de R$ 60/mês)",
  "WCF Studio Pilates & Solo (Reformer & Aparelhos)",
  "Aulas Coletivas (Spinning, Step, Muay Thai, Localizada)",
];

const BENEFICIOS_EXPERIMENTAL = [
  "1ª aula 100% gratuita para conhecer o espaço",
  "Sem taxa de adesão ou fidelidade obrigatória",
  "Acompanhamento com personais qualificados",
  "Ambiente familiar, climatizado e seguro",
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
      // Redirecionamento seguro para iOS e Android
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
    }, 500);
  };

  return (
    <section id="contato-form" className="section-y bg-background relative overflow-hidden section-optimized">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-ambient-red rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="surface p-6 sm:p-10 lg:p-12 border-white/[0.08] shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coluna Esquerda: Proposta e Vantagens */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="section-label">
                <Flame className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                Vagas Limitadas · Aula Experimental
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
                Experimente a WCF <span className="text-gradient-red">sem custo</span> algum.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                Venha treinar com a gente, sentir a energia do espaço, conhecer nossos equipamentos e conversar com os personais de plantão.
              </p>

              <ul className="mt-8 space-y-3.5 text-sm sm:text-base text-foreground/90 w-full">
                {BENEFICIOS_EXPERIMENTAL.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Horário livre de treino: Segunda a Sexta das <strong>05h às 00h</strong></span>
              </div>
            </div>

            {/* Coluna Direita: Formulário de Alta Conversão */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-background/80 border border-white/[0.08] p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">Reserve sua vaga</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Leva menos de 1 minuto</p>
                  </div>
                  <span className="chip bg-primary/10 border-primary/25 text-red-400">
                    <Sparkles className="w-3 h-3" /> Grátis
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-foreground/90 mb-1.5 uppercase tracking-wider">
                      Modalidade de Interesse
                    </label>
                    <select
                      value={modalidade}
                      onChange={(e) => setModalidade(e.target.value)}
                      className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer shadow-inner"
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
                      className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
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
                      className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary !w-full !rounded-xl !py-4 text-sm font-heading font-bold flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Preparando WhatsApp..." : "Solicitar Aula Grátis no WhatsApp"}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>100% Gratuito</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>Atendimento humanizado</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
