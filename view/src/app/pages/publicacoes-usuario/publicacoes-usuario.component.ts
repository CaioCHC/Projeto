import { PublicacaoModel } from './../../shared/models/publicacao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridOptions } from 'ag-grid-enterprise';
import { PublicacoesUsuarioFacade } from 'src/app/core/facade/publicacos-usuario/publicacoes-usuario.facade';
import { clientSideGridOptions } from 'src/app/shared/Utils/ag-grid/clientside-grid-options.utils';
import { columnDefs } from './columnDefs';
import { ListaAcoesPublicacoesUsuarioCOmponent } from './components/lista-acoes-grid/lista-acoes-grid.component';
import { ChaveDescricaoDTO } from 'src/app/shared/models/chaveDescricaoDto';

@Component({
  selector: 'app-publicacoes-usuario',
  templateUrl: './publicacoes-usuario.component.html',
  styleUrls: ['./publicacoes-usuario.component.scss']
})
export class PublicacoesUsuarioComponent implements OnInit {

  cadastroPublicacaoForm!: FormGroup;
  gridOptions!: Partial<GridOptions>;
  listaGeneros: ChaveDescricaoDTO[] = [];
  listaClassificacoes: ChaveDescricaoDTO[] = [];


  constructor(
    private readonly fb: FormBuilder,
    private publicacoesUsuarioFacade: PublicacoesUsuarioFacade,
  ) { };

  ngOnInit(): void {
    this.publicacoesUsuarioFacade.consultarDadosIniciais().subscribe(dados => {
      this.listaGeneros = dados.listaGeneros;
      this.listaClassificacoes = dados.listaClassificacoes;
    });
    this.criarForm();
    this.inicializarGrid();
  }

  criarForm(): void {
    this.cadastroPublicacaoForm = this.fb.group({
      tituloCtrl: ['', Validators.required],
      generoCtrl: ['', Validators.required],
      classificacaoCtrl: ['', Validators.required],
    })
  }

  inicializarGrid(): void {
    this.gridOptions = {
      ...clientSideGridOptions,
      pagination: false,
      columnDefs,
      rowData: [],
      frameworkComponents: {
        listaAcoes: ListaAcoesPublicacoesUsuarioCOmponent,
      }
    }
  }

  onGridReady() {
    this.consultarPublicacoesUsuario();
  }

  consultarPublicacoesUsuario() {
    let idMock = '112';
    this.publicacoesUsuarioFacade.consultarPublicacoesUsuario(idMock).subscribe(publicacoes => {
      this.gridOptions.api?.setRowData(publicacoes);
    })
  }

  cadastrarPublicacao(): void {
    this.cadastroPublicacaoForm.markAllAsTouched();
    if (this.cadastroPublicacaoForm.valid) {
      this.publicacoesUsuarioFacade.cadastrarPublicacao(this.montarPublicacaoDTO()).subscribe(publicacoes => {
        this.gridOptions.api?.setRowData(publicacoes);
      })
    }
  }

  montarPublicacaoDTO(): PublicacaoModel {
    const { value } = this.cadastroPublicacaoForm;
    return {
      titulo: value.tituloCtrl,
      genero: value.generoCtrl,
      classificacao: value.classificacaoCtrl,
    } as PublicacaoModel;
  }
}
