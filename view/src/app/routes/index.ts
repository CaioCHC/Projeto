import { Routes } from '@angular/router';
import { PaginaErroComponent } from '../pages/pagina-erro/pagina-erro.component';
import { APP_ROUTES_PUBLICACOES_USUARIO } from './rotas-minhas-publicacoes';

export default [
  ...APP_ROUTES_PUBLICACOES_USUARIO,
  { path: '', pathMatch: 'full', component: PaginaErroComponent},
  { path: '**', pathMatch: 'full', component: PaginaErroComponent}
] as Routes
