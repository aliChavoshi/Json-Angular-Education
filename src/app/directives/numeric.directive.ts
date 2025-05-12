import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]',
  standalone: true,
})
export class NumericDirective {
  constructor() {
    console.log('logged');
  }
  @HostBinding('class') currentClass = '';
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    console.log('🚀 ~ NumericDirective ~ @HostListener ~ event:', event);
    const charCode = event.key.charCodeAt(0);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      //not number
      this.currentClass = 'invalid';
      event.preventDefault();
    } else {
      //number
      this.currentClass = 'valid';
    }
  }
}
