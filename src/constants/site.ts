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
  { label: "Studio Pilates", href: "/pilates" },
  { label: "Jiu-Jitsu Kids", href: "/jiu-jitsu" },
  { label: "Equipe", href: "/equipe" },
  { label: "Horários", href: "/horarios" },
  { label: "Contato", href: "/contato" },
] as const;

export function getWhatsAppUrl(message = "Olá! Quero agendar uma aula grátis na WCF Academia!"): string {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${SITE_INFO.phoneRaw}&text=${encoded}`;
}
