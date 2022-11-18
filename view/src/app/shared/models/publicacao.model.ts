import { ChaveDescricaoDTO } from "./chaveDescricaoDto";

export interface PublicacaoModel {
  id: string;
  titulo: string;
  genero: ChaveDescricaoDTO;
  classificacao: ChaveDescricaoDTO;
  leitores: number,
  feedbacks: number,
  curtidas: number,
  deslikes: number,
}
