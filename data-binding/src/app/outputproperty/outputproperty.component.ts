import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './outputproperty.component.html',
  styleUrls: ['./outputproperty.component.css']
})
export class OutputpropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorinput: ElementRef;

  incrementa(){
    this.campoValorinput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorinput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
