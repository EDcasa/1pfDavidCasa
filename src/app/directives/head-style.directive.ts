import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadStyle]'
})
export class HeadStyleDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.fontSize = '20px';
   }

}
