import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppClass]',
  standalone: true,
})
export class AppClassDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log('🚀 ~ AppClassDirective ~ constructor ~ el:', el);
    // this.el.nativeElement.style.backgroundColor = 'red';
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'red';
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'blue';
    // this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
