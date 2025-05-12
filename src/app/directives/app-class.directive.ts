import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppClass]',
  standalone: true,
})
export class AppClassDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostBinding('style.backgroundColor') backgroundColor = 'red';
  @HostListener('mouseleave',['$event']) OnMouseOver(eventData: Event) {
    console.log(
      '🚀 ~ AppClassDirective ~ @HostListener ~ eventData:',
      eventData
    ); //undefined
    this.backgroundColor = 'blue';

    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'red'
    // );
  }
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   'blue'
    // );
  }
}
