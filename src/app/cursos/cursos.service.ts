import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { 
    console.log('CursosService');
    }

  getCursos(){
    return ['Java','Ext JavaScript', 'Angular' ];
  }
}
