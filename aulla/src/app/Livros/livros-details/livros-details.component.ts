import { Component,EventEmitter,Output,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../Livros';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.scss']
})
export class LivrosDetailsComponent {
  roteador = inject(ActivatedRoute);
  livros: Livros = new Livros(1,"","");

  @Output() retorno = new EventEmitter<Livros>();
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    //banco de dados... back
    this.retorno.emit(this.livros);

  }
}
