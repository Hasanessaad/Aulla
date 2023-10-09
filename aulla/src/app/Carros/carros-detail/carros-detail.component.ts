import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../Carros';

@Component({
  selector: 'app-carros-detail',
  templateUrl: './carros-detail.component.html',
  styleUrls: ['./carros-detail.component.scss']
})
export class CarrosDetailComponent {
  roteador = inject(ActivatedRoute);
  carros: Carros = new Carros(0,"",0);

  @Output() retorno = new EventEmitter<Carros>();
  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
  salvar(){
    //banco de dados... back
    this.retorno.emit(this.carros);

  }
}
