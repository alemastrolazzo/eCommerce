import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  //{ path: 'clienti', component: ClientiComponent },
  //{ path: 'ordini', component: OrdiniComponent },
  //{ path: 'ristoranti', component: RistorantiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


