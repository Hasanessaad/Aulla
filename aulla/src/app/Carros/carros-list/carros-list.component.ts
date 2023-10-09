import { Component, inject } from '@angular/core';
import { Carros } from '../Carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent {
  lista: Carros[] = [];
    
  modalService = inject(NgbModal);

  constructor(){

    this.lista.push(new Carros(1,"honda", 2000));
    this.lista.push(new Carros(2,"mk3", 1993));
    this.lista.push(new Carros(3,"r32", 1998));

}
abrirModal(car1: any){
  this.modalService.open(car1,{size: 'lg'});
}

addNaLista(carros: Carros){
  this.lista.push(carros);
  this.modalService.dismissAll();
}
editNaLista(carros: Carros) {
  
  // Update the person object in the lista array.
  this.lista = this.lista.map(p => {
    if (p.id === carros.id) {
      return carros;
    }
    return p;
  });
}

}
function editById(id: any, number: any) {
  throw new Error('EditPersonModalComponent');
}
