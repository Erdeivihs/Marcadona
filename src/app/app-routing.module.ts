import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VerduraComponent } from './components/verdura/verdura.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { CarneComponent } from './components/carne/carne.component';
import { PescadoComponent } from './components/pescado/pescado.component';


const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'home', component : HomeComponent },
  { path : 'verdura', component : VerduraComponent },
  { path : 'fruta', component : FrutaComponent },
  { path : 'carne', component : CarneComponent },
  { path : 'pescado', component : PescadoComponent },
  

  { path : '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
