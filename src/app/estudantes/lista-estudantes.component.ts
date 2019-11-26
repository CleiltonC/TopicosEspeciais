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
  listaEstudantes: IEstudante[];
  _filtroLista: string= "Luke";
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
  estudantes: IEstudante[] = [];
  mensagemErro: string;

  constructor(private estudanteService: EstudanteService) {}

  ngOnInit(): void {
    this.getEstudantes();
    this.filtroLista = "Leia";
  }
  getEstudantes(): void {
    this.estudanteService.getEstudantes().subscribe(
      estudantes => {
        this.estudantes = estudantes;
        this.listaEstudantes = this.estudantes;
        this.alturasEstudantes = this.estudantes.map(e => e.altura);
        this.alturaMaxima = Math.max(...this.alturasEstudantes);
      },
      error => (this.mensagemErro = <any>error)
    );
    }
  alternarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }


  executarFiltro(filtrarPor: string): IEstudante[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.estudantes.filter(
      (estudante: IEstudante) =>
        estudante.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  
}

// export class ListaComponent {
//     filtroLista: string = 'estudante';
//     }