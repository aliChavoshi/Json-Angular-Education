import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appPriorityColor]',
})
export class PriorityColorDirective implements OnChanges {
  @Input('appPriorityColor') priority!: number; //Output
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    let color = '';
    switch (this.priority) {
      case 1:
        color = 'red';
        break;
      case 2:
        color = 'orange';
        break;
      case 3:
        color = 'green';
        break;
      default:
        color = 'gray';
        break;
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  @HostBinding('style.border') border!: string; //1px black solid
  @HostListener('mouseenter') OnMouseEnter() {
    this.border = '2px dashed #666';
  }
  @HostListener('mouseleave') OnMouseLeave() {
    this.border = '';
  }
}
