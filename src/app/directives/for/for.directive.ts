import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[for]'
})
export class ForDirective {

  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)

  constructor() { }

  @Input() set for(collection: Array<any>){
    this.viewContainerRef.clear();

    collection.forEach(content =>{
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
        $implicit: content
      })
    })

  }

}
