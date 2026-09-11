import { useState } from "react";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name}, meu telefone é ${phone}. Tenho interesse em ${modalidade} e gostaria de agendar uma aula experimental grátis na WCF Academia!`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contato-form" className="py-14 md:py-24 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto max-w-lg px-4">
        <div className="glass rounded-3xl p-6 sm:p-10 text-center border border-border/80 shadow-2xl relative">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
            <Sparkles className="w-5 h-5" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-foreground">
            Ganhe uma <span className="text-gradient-red">Aula Experimental Grátis</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 leading-relaxed">
            Escolha sua modalidade de interesse e fale direto conosco no WhatsApp para reservar seu horário.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                Modalidade de Interesse
              </label>
              <select
                value={modalidade}
                onChange={(e) => setModalidade(e.target.value)}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
              >
                {MODALIDADE_OPCOES.map((opt) => (
                  <option key={opt} value={opt} className="bg-background text-foreground">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-heading font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                Seu WhatsApp com DDD
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(83) 90000-0000"
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <button
              type="submit"
              className="btn-primary glow-red !w-full !rounded-xl !py-3.5 !text-xs sm:!text-sm font-heading font-bold flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              Solicitar Aula Grátis no WhatsApp
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>Sem compromisso • Resposta rápida de atendimento</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
