import { ColDef } from "ag-grid-enterprise";

export const columnDefs: ColDef[] = [
  {
    headerName: 'Titulo',
    field: 'titulo',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true }
  },
  {
    headerName: 'Gênero',
    field: 'genero',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRenderer: (params: any) => {
      return params?.value?.descricao;
    },
    filterParams: {
      valueGetter: (params: any) => {
        return params?.data?.genero?.descricao;
      },
    },
  },
  {
    headerName: 'Classificação',
    field: 'classificacao',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRenderer: (params: any) => {
      return params?.value?.descricao;
    },
    filterParams: {
      valueGetter: (params: any) => {
        return params?.data?.classificacao?.descricao;
      },
    },
    maxWidth: 200,
  },
  {
    headerName: 'Leitores',
    field: 'leitores',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    maxWidth: 150,
  },
  {

    headerName: 'Feedbacks',
    field: 'feedbacks',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    maxWidth: 120,
  },
  {
    headerComponentParams: {
      template:
        '<i class="material-icons" style="color: #3fb563">thumb_up</i>'
    },
    field: 'curtidas',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    maxWidth: 100,
  },
  {
    headerComponentParams: {
      template:
        '<i class="material-icons" style="color: #b53f3f">thumb_down</i>'
    },
    field: 'deslikes',
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    maxWidth: 100,
  },
  {
    headerName: '',
    field: 'listaAcoes',
    cellRenderer: 'listaAcoes',
    cellStyle: { textAlign: 'right' },
    maxWidth: 180,
  }
]
