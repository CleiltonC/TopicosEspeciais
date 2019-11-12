import { Component, OnInit } from "@angular/core";
import { IEstudante } from "./estudantes";
import { EstudanteService } from './estudantes.service';

@Component({
  selector: "jedi-estudantes",
  templateUrl: "./lista-estudantes.component.html"
})
export class ListaEstudantesComponent implements OnInit {
  tituloPagina: string = "Lista de Estudantes";
  larguraImagem: number = 50;
  margemImagem: number = 2;
  exibirImagem: boolean = false;
  _filtroLista: string;
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(valor: string) {
    this._filtroLista = valor;
    this.listaEstudantes = this.filtroLista
      ? this.executarFiltro(this.filtroLista)
      : this.estudantes;
  }
  alturaMaxima: number;
  alturasEstudantes: number[];
  listaEstudantes: IEstudante[];
  estudantes: IEstudante[] = [];

  ngOnInit(): void {
    this.estudantes = this.estudanteService.getEstudante();
    this.listaEstudantes = this.estudantes;
    // Cria um array contendo somente as alturas dos estudantes (number[])
    this.alturasEstudantes = this.estudantes.map(p => p.altura);
    // Obtém a maior altura do array criado na instrução anterior
    this.alturaMaxima = Math.max(...this.alturasEstudantes);
    this.filtroLista = "Leia";
  }

  alternarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  executarFiltro(filtrarPor: string): IEstudante[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.estudantes.filter(
      (produto: IEstudante) =>
        produto.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  // constructor() {
  //   this.listaEstudantes = this.estudantes;
  //   this.filtroLista = "Luke";
  // }
  constructor(private estudanteService: EstudanteService) {}
}

// export class ListaComponent {
//     filtroLista: string = 'estudante';
//     }