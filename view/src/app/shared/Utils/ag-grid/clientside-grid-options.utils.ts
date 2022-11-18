import { GridOptions } from "ag-grid-enterprise";

export const clientSideGridOptions: GridOptions = {
  domLayout: 'autoHeight',
  headerHeight: 35,
  rowHeight: 35,
  suppressColumnVirtualisation: true,
  suppressCellFocus: true,
  suppressRowDeselection: true,
  rowMultiSelectWithClick: true,
  pagination: false,
  popupParent: document.querySelector('body'),
  defaultColDef: {
    flex: 1,
    suppressMovable: true,
    editable: false,
    suppressMenu: true,
    resizable: true,
    tooltipValueGetter: () => null,
  },
  animateRows: true,
  localeText: {
    page: 'Página',
    of: 'de',
    to: 'até',
    more: 'mais',
    loadingOoo: 'Carregando...',
    noRowsToShow: 'Nenhum Registro foi Encontrado.',
    copy: 'Copiar',
    copyWithHeaders: 'Copiar com cabeçalho',
    parte: 'Colar',
    export: 'Exportar',
    csvExport: 'Exportar em CSV',
    exelExport: 'Exportar em Excel',
    searchOoo: 'Filtrar Colunas',
    pinColumn: 'Fixar Colunas',
    autosizeThiscolumn: 'Redimensionar essa coluna',
    autosizeAllColumns: 'Redimensionar todas as colunas',
  },

  getRowStyle: (params) =>
    !!params.node.rowIndex && params.node.rowIndex % 2 === 0
      ? { background: '#F3F3F5' }
      : { background: '#fff' },
  rowModelType: 'clientSide'
}
