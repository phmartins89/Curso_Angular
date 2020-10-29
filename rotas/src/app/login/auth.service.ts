import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ususarioAutenticado: boolean = false;

  mostrarMenuEmitter =  new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com'&&
      usuario.senha === '123456'){
        this.ususarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/'])
      }else{
        this.ususarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
  }


}
