import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-costumizadas',
  templateUrl: './diretivas-costumizadas.component.html',
  styleUrls: ['./diretivas-costumizadas.component.css']
})
export class DiretivasCostumizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }
}
