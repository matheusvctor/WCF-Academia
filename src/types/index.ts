import { LucideIcon } from "lucide-react";

export interface Modalidade {
  name: string;
  tag: string;
  desc: string;
  image: string;
}

export interface Professor {
  nome: string;
  horario: string;
  src: string;
}

export interface UnidadeCertificado {
  src: string;
  titulo: string;
}

export interface Unidade {
  cidade: string;
  nome: string;
  professor: string;
  foto: string;
  logo?: string;
  bio: string;
  faixa: string;
  certificados?: UnidadeCertificado[];
}

export interface HorarioFuncionamento {
  dia: string;
  horario: string;
}

export interface AulaColetiva {
  dia: string;
  aulas: string;
}

export interface HorarioJiuJitsu {
  dia: string;
  horario: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Pilar {
  titulo: string;
  texto: string;
}

export interface Credencial {
  icon: LucideIcon;
  text: string;
}

export interface DiferencialItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ImageGalleryItem {
  src: string;
  alt: string;
}

export interface BannerItem {
  src: string;
  alt: string;
}
