import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Pessoa } from '../Pessao';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pessoas-detail',
  templateUrl: './pessoas-detail.component.html',
  styleUrls: ['./pessoas-detail.component.scss']
})
export class PessoasDetailComponent {
  router = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa(0,"",0);

  @Output() retorno = new EventEmitter<Pessoa>();
  constructor(){
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    //banco de dados... back
    this.retorno.emit(this.pessoa);

  }
}
