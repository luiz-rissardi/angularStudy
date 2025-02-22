import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[not]'
})
export class NotDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }

  @Input() set not(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
