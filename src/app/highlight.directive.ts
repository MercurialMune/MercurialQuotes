import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) { }

  @HostListener("click") onCicks() {
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onClicks() {
    this.textDeco("none")
  }

private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration = action;

  }
}
