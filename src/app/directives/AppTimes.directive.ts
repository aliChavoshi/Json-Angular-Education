import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppTimes]',
})
export class AppTimesDirective {
  @Input('appAppTimes') set render(time: number) {
    this.vcr.clear(); //clear
    for (let i = 0; i < time; i++) {
      this.vcr.createEmbeddedView(this.templateRef, {
        index: i,
        color: 'red',
        name: 'ali',
      });
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
    console.log('🚀 ~ AppTimesDirective ~ templateRef:', templateRef);
  }
}
