import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
//import { resolve } from 'dns';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    numeroPaginas: 134,
    preco: 44.99,
    dataLacamento: new Date(2016,5,23),
    url:'https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Javascript-Habilidades/dp/8575225537/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1JCP1D9Y3BWDJ&dchild=1&keywords=loiane+groner&qid=1603804526&s=books&sprefix=loiane+%2Cstripbooks%2C338&sr=1-3'

  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === null ||
       this.filtro.trim() === ''){
      return this.livros;
    }    


  }

  valorAsync =  new Promise ((resolve,reject)=>{
    setTimeout(() =>resolve('Valor assíncrono'), 2000)
  });
/*
  valorAsync2 = Observable.interval(2000)
  .map(valor => 'Valor assíncrono 2');*/

  constructor() { }

  ngOnInit(): void {
  }

}
