import { Component, inject } from '@angular/core';
import { Pessoa } from '../Pessao';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent {
  lista: Pessoa[] = [];

  modalService = inject(NgbModal);
  
  constructor(){

    this.lista.push(new Pessoa(1,"Wellington", 33));
    this.lista.push(new Pessoa(2,"Wellington", 29));
    this.lista.push(new Pessoa(3,"Wellington", 35));

}
abrirModal(abc: any){
  this.modalService.open(abc, { size: 'lg' });
}

addNaLista(pessoa: Pessoa){
  
  this.lista.push(pessoa);
  this.modalService.dismissAll();
}
editNaLista(pessoa: Pessoa) {
  
  // Update the person object in the lista array.
  this.lista = this.lista.map(p => {
    if (p.id === pessoa.id) {
      return pessoa;
    }
    return p;
  });
}

}
function editById(id: any, number: any) {
  throw new Error('EditPersonModalComponent');
}