import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  @Input('appPermission') appPermissions: string[] = [];
  private currentRole = 'admin';

  constructor(
    private tempRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}
  //roleName : server => ['admin','agent']
  ngOnInit(): void {
    if (this.appPermissions.indexOf(this.currentRole) === -1) {
      this.vcr.clear();
    } else {
      this.vcr.createEmbeddedView(this.tempRef);
    }
  }
}
