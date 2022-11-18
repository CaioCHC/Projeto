import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component } from "@angular/core";
import { GridApi, ICellRendererParams } from 'ag-grid-enterprise';
import { PublicacoesUsuarioFacade } from 'src/app/core/facade/publicacos-usuario/publicacoes-usuario.facade';


@Component({
  selector: 'app-lista-acoes-grid',
  templateUrl: './lista-acoes-grid.component.html',
  styleUrls: ['./lista-acoes-grid.component.scss']
})

export class ListaAcoesPublicacoesUsuarioCOmponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;
  public gridApi!: GridApi;

  constructor(
    private publicacoesUsuarioFacade: PublicacoesUsuarioFacade,
  ) { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.gridApi = params.api;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }

  excluirPublicacao(event: MouseEvent): void {
    event.stopPropagation();
    this.publicacoesUsuarioFacade.excluirPublicacao(this.params.data.id).subscribe(publicacoes => this.gridApi.setRowData(publicacoes));
  }

  editarPublicacao(event: MouseEvent): void {
    event.stopPropagation();
    //TODO
  }

  visualizarFeedbacks(event: MouseEvent): void {
    event.stopPropagation();
    //TODO
  }

  baixarArquivo(event: MouseEvent): void {
    event.stopPropagation();
    //TODO
  }

  visualizarArquivo(event: MouseEvent): void {
    event.stopPropagation();
    //TODO
  }
}
