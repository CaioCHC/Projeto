import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import ROUTES from './routes';

export const APP_ROUTES: Routes = ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
