import { element } from 'protractor';
import { Directive, ElementRef } from '@angular/core';
import { concat } from 'rxjs';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) {
    //console.log(this._elementRef);
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //this._renderer.setElementStyle(this._elementRef.nativeElement,
      //'background-color',
      //'yellow')
   }

}
