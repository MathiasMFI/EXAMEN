import { NewEspaciosComponent } from './components/new-espacios/new-espacios.component';
import { ListEspacioComponent } from './components/list-espacios/list-espacios.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'espacio', component: ListEspacioComponent},
  {path: 'new', component: NewEspaciosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
