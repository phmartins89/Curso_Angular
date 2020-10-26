import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
   /* this._renderer.setStyle(
      this._elementref.nativeElement,
      'background-color','yellow'
    )*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementref.nativeElement,
      'background-color','white'
    )*/
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    // qualquer código extra
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    //private _elementref: ElementRef,
    //private _renderer: Renderer2
  ) { }

}
