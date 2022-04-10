import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  }
}
