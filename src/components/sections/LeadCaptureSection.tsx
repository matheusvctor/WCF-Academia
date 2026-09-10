import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/constants/site";

export const LeadCaptureSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name}, meu WhatsApp é ${phone}. Quero ganhar uma aula grátis na WCF Academia!`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contato" className="py-14 md:py-24">
      <div className="container mx-auto max-w-md">
        <div className="glass rounded-3xl p-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight mb-2 text-foreground">
            Ganhe uma aula grátis
          </h2>
          <p className="text-muted-foreground text-xs mb-8">
            Preencha e fale direto conosco pelo WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 00000-0000"
              className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <button type="submit" className="btn-primary !w-full !rounded-xl">
              <Send className="w-4 h-4" />
              Quero minha aula grátis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
