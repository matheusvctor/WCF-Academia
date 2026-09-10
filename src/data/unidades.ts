import fabio from "@/assets/unidades/fabio-jp.jpg.asset.json";
import logoJP from "@/assets/unidades/logo-wcf-jp.jpeg.asset.json";
import certMarrom from "@/assets/certificados/fabio-faixa-marrom.jpeg.asset.json";
import certPreta from "@/assets/certificados/fabio-faixa-preta.jpeg.asset.json";
import { Unidade } from "@/types";

export const UNIDADES: Unidade[] = [
  {
    cidade: "João Pessoa - PB",
    nome: "WCF Jiu-Jitsu João Pessoa",
    professor: "Fábio Lauriano Silva de Souza",
    foto: fabio.url,
    logo: logoJP.url,
    bio: "12 anos praticando Jiu-Jitsu, 4 anos como professor e 3 anos de faixa preta pela WCF Jiu-Jitsu.",
    faixa: "Faixa Preta",
    certificados: [
      { src: certPreta.url, titulo: "Diploma Faixa Preta — 2023" },
      { src: certMarrom.url, titulo: "Certificado Faixa Marrom — 2021" },
    ],
  },
];
