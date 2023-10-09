import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoasListComponent } from './Pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailComponent } from './Pessoas/pessoas-detail/pessoas-detail.component';
import { CarrosListComponent } from './Carros/carros-list/carros-list.component';
import { CarrosDetailComponent } from './Carros/carros-detail/carros-detail.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { IndexComponent } from './Layout/index/index.component';
import { LivrosListComponent } from './Livros/livros-list/livros-list.component';
import { LivrosDetailsComponent } from './Livros/livros-details/livros-details.component';
import { LoginComponent } from './Systema/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    PessoasDetailComponent,
    CarrosListComponent,
    CarrosDetailComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    LivrosListComponent,
    LivrosDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
