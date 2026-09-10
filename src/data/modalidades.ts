import jiuJitsuAsset from "@/assets/academia/img-1894.jpg.asset.json";
import musculacaoAsset from "@/assets/academia/img-1890.jpg.asset.json";
import musculacao2Asset from "@/assets/academia/img-1899.jpg.asset.json";
import pilatesAsset from "@/assets/pilates/pilates-01.jpg.asset.json";
import spinningAsset from "@/assets/academia/img-1892.jpg.asset.json";
import cardioAsset from "@/assets/academia/img-1901.jpg.asset.json";
import kidsAsset from "@/assets/academia/img-1903.jpg.asset.json";
import { Modalidade } from "@/types";

export const MODALIDADES: Modalidade[] = [
  { name: "Jiu-Jitsu", tag: "Luta", desc: "Técnica e disciplina no tatame oficial WCF. Para todos os níveis.", image: jiuJitsuAsset.url },
  { name: "Musculação", tag: "Força", desc: "Sala equipada com máquinas e pesos livres para hipertrofia e saúde.", image: musculacaoAsset.url },
  { name: "Pilates", tag: "Bem-estar", desc: "Estúdio WCF Pilates completo: reformer, cadillac, chair e barrel.", image: pilatesAsset.url },
  { name: "Spinning", tag: "Grupo", desc: "Aulas em grupo com bikes profissionais. Energia e queima de calorias.", image: spinningAsset.url },
  { name: "Cardio", tag: "Condicionamento", desc: "Esteiras e bikes ergométricas com vista. Condicionamento cardiovascular.", image: cardioAsset.url },
  { name: "Funcional", tag: "Treino", desc: "Treinamento funcional com acompanhamento de personal.", image: musculacao2Asset.url },
  { name: "Espaço Kids", tag: "Família", desc: "Espaço infantil para você treinar tranquilo enquanto as crianças se divertem.", image: kidsAsset.url },
];
