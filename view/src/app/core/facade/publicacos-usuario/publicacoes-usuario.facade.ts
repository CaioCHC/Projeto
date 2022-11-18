import { PublicacaoModel } from './../../../shared/models/publicacao.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PublicacoesUsuarioService } from '../../service/publicacoes-usuario/publicacoes-usuario.service';
import { ChaveDescricaoDTO } from 'src/app/shared/models/chaveDescricaoDto';

@Injectable({
  providedIn: 'root'
})

export class PublicacoesUsuarioFacade {

  constructor(
    private publicacoesUsuarioService: PublicacoesUsuarioService,
  ) { }

  consultarDadosIniciais(): Observable<{ listaGeneros: ChaveDescricaoDTO[], listaClassificacoes: ChaveDescricaoDTO[] }> {
    return this.publicacoesUsuarioService.consultarDadosIniciais();
  }

  consultarPublicacoesUsuario(idUsuario: string): Observable<PublicacaoModel[]> {
    return this.publicacoesUsuarioService.consultarPublicacoesUsuario(idUsuario);
  }

  excluirPublicacao(idPublicacao: string): Observable<PublicacaoModel[]> {
    return this.publicacoesUsuarioService.excluirPublicacao(idPublicacao);
  }

  cadastrarPublicacao(publicacaoDTO: PublicacaoModel): Observable<PublicacaoModel[]> {
    return this.publicacoesUsuarioService.cadastrarPublicacao(publicacaoDTO);
  }
}
