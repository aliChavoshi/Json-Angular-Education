import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppClass]',
  standalone: true,
})
export class AppClassDirective implements OnInit {
  @Input('appAppClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
}
