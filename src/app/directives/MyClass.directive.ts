import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
  standalone: true,
})
export class MyClassDirective {
  // {btn-danger : true} => key value
  // {btn-danger : false}
  @Input('appMyClass') set classNames(classObj: any) {
    for (let key in classObj) {
      // console.log(
      //   '🚀 ~ MyClassDirective ~ @Input ~ classObj[key]:',
      //   classObj[key]
      // ); => value
      if (classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.add('btn-dark');
      }
    }
  }
  constructor(private elementRef: ElementRef) {}
}
