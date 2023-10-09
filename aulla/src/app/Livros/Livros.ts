export class Livros {
    id!: number;
    nome!: string;
    titulo!: string;


    constructor(id: number,nome: string, titulo: string){
        this.id = id;
        this.nome = nome;
        this.titulo = titulo;
    }

}