export const SITE_INFO = {
  name: "WCF Academia",
  shortName: "WCF",
  tagline: "Sua melhor versão começa aqui.",
  since: 2015,
  phone: "(83) 8138-6488",
  phoneRaw: "558381386488",
  instagram: {
    handle: "@wcf.academia",
    url: "https://instagram.com/wcf.academia",
  },
  workingHours: {
    weekdays: "05h00 – 00h00",
    saturday: "08h00 – 12h00 · 14h00 – 17h00",
    sunday: "08h00 – 14h00",
    summary: "Seg a Sex: 05h–00h • Sáb: 08h–12h / 14h–17h • Dom: 08h–14h",
  },
  address: {
    street: "Rua Isaac Catão, 530",
    neighborhood: "Jardim Paulistano",
    city: "Campina Grande",
    state: "PB",
    cep: "58415-240",
    full: "Rua Isaac Catão, 530 – Jardim Paulistano, Campina Grande – PB, CEP 58415-240",
    short: "Rua Isaac Catão, 530 – Jardim Paulistano, Campina Grande – PB",
  },
  maps: {
    embedUrl:
      "https://maps.google.com/maps?q=Rua+Isaac+Catao,+530,+Jardim+Paulistano,+Campina+Grande,+PB,+58415-240&hl=pt-BR&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir//Rua+Isaac+Cat%C3%A3o,+530,+Jardim+Paulistano,+Campina+Grande+-+PB,+58415-240",
  },
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Modalidades", href: "/modalidades" },
  { label: "Pilates", href: "/pilates" },
  { label: "Jiu-Jitsu", href: "/jiu-jitsu" },
  { label: "Equipe", href: "/equipe" },
  { label: "Planos", href: "/horarios" },
  { label: "Contato", href: "/contato" },
] as const;


export function getWhatsAppUrl(message = "Olá! Quero agendar uma aula grátis na WCF Academia!"): string {
  const cleanPhone = SITE_INFO.phoneRaw.replace(/\D/g, "");
  const encoded = encodeURIComponent(message.trim());
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`;
}
