import { CommonModule } from "@angular/common";
import { Injector, ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { AgGridModule } from "ag-grid-angular";


export let InjectorInstance: Injector;

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatCardModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    AgGridModule,
    MatTooltipModule,
  ]
})

export class SharedModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    }
  }
}
