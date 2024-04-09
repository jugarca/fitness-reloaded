import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaPrincipalComponent } from './components/pantalla-principal/pantalla-principal.component';


const routes: Routes = [
  { path: 'pantallaPrincipal', component: PantallaPrincipalComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
