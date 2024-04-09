import { NgModule } from "@angular/core";
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "../transloco-root.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PantallaPrincipalComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
        TranslocoRootModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class FitnessModule { }