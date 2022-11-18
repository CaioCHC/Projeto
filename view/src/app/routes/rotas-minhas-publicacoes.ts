import { WrapperComponent } from '../pages/wrapper/wrapper.component';

export const APP_ROUTES_PUBLICACOES_USUARIO = [
  {
    path: 'minhas-publicacoes',
    component: WrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/publicacoes-usuario/publicacoes-usuario.module')
          .then((module) => module.PublicacoesUsuarioModule),
        data: {
          tituloPainel: 'Minhas Publicações',
          widthPainel: 94,
        },
      },
    ],
  }
];
