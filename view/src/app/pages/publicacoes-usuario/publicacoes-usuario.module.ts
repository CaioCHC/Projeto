import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PublicacoesUsuarioComponent } from "./publicacoes-usuario.component";
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaAcoesPublicacoesUsuarioCOmponent } from './components/lista-acoes-grid/lista-acoes-grid.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PublicacoesUsuarioComponent, ListaAcoesPublicacoesUsuarioCOmponent],
  imports: [
    SharedModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: PublicacoesUsuarioComponent }])
  ]
})
export class  PublicacoesUsuarioModule { };
