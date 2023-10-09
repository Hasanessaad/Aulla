import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Systema/login/login.component';
import { IndexComponent } from './Layout/index/index.component';
import { PessoasListComponent } from './Pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailComponent } from './Pessoas/pessoas-detail/pessoas-detail.component';
import { CarrosListComponent } from './Carros/carros-list/carros-list.component';
import { CarrosDetailComponent } from './Carros/carros-detail/carros-detail.component';
import { LivrosListComponent } from './Livros/livros-list/livros-list.component';
import { LivrosDetailsComponent } from './Livros/livros-details/livros-details.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "pessoas", component: PessoasListComponent },
      { path: "pessoas/novo", component: PessoasDetailComponent },
      { path: "pessoas/editar/:id", component: PessoasDetailComponent },
      { path: "carros", component: CarrosListComponent },
      { path: "carros/novo", component: CarrosDetailComponent },
      { path: "carros/editar/:id", component: CarrosDetailComponent },
      { path: "livros", component: LivrosListComponent },
      { path: "livros/novo", component: LivrosDetailsComponent },
      { path: "livros/editar/:id", component: LivrosDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
