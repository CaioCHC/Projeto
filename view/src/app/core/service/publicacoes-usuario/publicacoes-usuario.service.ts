
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ChaveDescricaoDTO } from "src/app/shared/models/chaveDescricaoDto";
import { PublicacaoModel } from './../../../shared/models/publicacao.model';

@Injectable({
  providedIn: 'root'
})



export class PublicacoesUsuarioService {

  publicacaoMock1 = {
    id: '123',
    titulo: 'Minha publicação Terror',
    genero: { descricao: 'Terror', chave: 2 },
    classificacao: { descricao: 'Maiores de 18 anos', chave: 3 },
    leitores: 0,
    feedbacks: 0,
    curtidas: 0,
    deslikes: 0,
  } as PublicacaoModel;

  publicacaoMock2 = {
    id: '321',
    titulo: 'Minha publicação Comédia',
    genero: { descricao: 'Comédia', chave: 1 },
    classificacao: { descricao: 'Livre', chave: 1 },
    leitores: 3,
    feedbacks: 1,
    curtidas: 2,
    deslikes: 1,
  } as PublicacaoModel;

  mockListaPublicacoes = [this.publicacaoMock1, this.publicacaoMock2] as PublicacaoModel[];

  mockListaGeneros = [
    {
      descricao: 'Comédia',
      chave: 1,
    },
    {
      descricao: 'Terror',
      chave: 2,
    },
    {
      descricao: 'Drama',
      chave: 3,
    },
  ] as ChaveDescricaoDTO[];

  mockListaClassificacao = [
    {
      descricao: 'Livre',
      chave: 1,
    },
    {
      descricao: 'Até 10 anos',
      chave: 2,
    },
    {
      descricao: 'Maiores de 18 anos',
      chave: 3,
    },
  ] as ChaveDescricaoDTO[];

  constructor(
  ) { }


  consultarDadosIniciais(): Observable<{ listaGeneros: ChaveDescricaoDTO[], listaClassificacoes: ChaveDescricaoDTO[] }> {
    return of({ listaGeneros: this.mockListaGeneros, listaClassificacoes: this.mockListaClassificacao });
  }

  consultarPublicacoesUsuario(idUsuario: string): Observable<PublicacaoModel[]> {
    return of(this.mockListaPublicacoes);
  }

  excluirPublicacao(idPublicacao: string): Observable<PublicacaoModel[]> {
    this.mockListaPublicacoes = this.mockListaPublicacoes.filter(publicacao => publicacao.id !== idPublicacao);
    return of(this.mockListaPublicacoes);
  }

  cadastrarPublicacao(publicacaoDTO: PublicacaoModel): Observable<PublicacaoModel[]> {
    let novaPublicacao = {
      id: new Date().getTime().toString(),
      titulo: publicacaoDTO.titulo,
      genero: publicacaoDTO.genero,
      classificacao: publicacaoDTO.classificacao,
      leitores: 0,
      feedbacks: 0,
      curtidas: 0,
      deslikes: 0,
    } as PublicacaoModel;
    this.mockListaPublicacoes.push(novaPublicacao);
    return of(this.mockListaPublicacoes)
  }
}
