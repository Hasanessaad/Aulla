import { Component, inject } from '@angular/core';
import { Livros } from '../Livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss']
})
export class LivrosListComponent {
  lista: Livros[] = [];

  modalService = inject(NgbModal);

  constructor() {

    this.lista.push(new Livros(1, "monica", "mauricio"));
    this.lista.push(new Livros(2, "One piece", "ODA"));
    this.lista.push(new Livros(3, "manifesto comuna", "karl marx"));

  }
  abrirModal(liv1: any) {
    this.modalService.open(liv1, { size: 'lg' });
  }

  addNaLista(livros: Livros) {

    this.lista.push(livros);
    this.modalService.dismissAll();
  }
  editNaLista(livros: Livros) {

    // Update the person object in the lista array.
    this.lista = this.lista.map(p => {
      if (p.id === livros.id) {
        return livros;
      }
      return p;
    });
  }

}
function editById(id: any, number: any) {
  throw new Error('EditPersonModalComponent');
}