import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnStyle]'
})
export class BtnStyleDirective {

  private boldPurple: string = '#330066';  // Cor roxa forte
  private lightPurple: string = '#4402ba'; // Cor roxa clara
  private middlePurple: string = '#9370DB'; // Cor roxa média
  private white: string = '#FFFFFF';       // Cor branca

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '0');
    this.renderer.setStyle(this.el.nativeElement, 'textDecoration', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundImage', `linear-gradient(to right, ${this.boldPurple}, ${this.lightPurple}, ${this.boldPurple} 70%)`);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '40px');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'paddingInline', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'textAlign', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'height', 'auto');
    this.renderer.setStyle(this.el.nativeElement, 'maxHeight', '45px');
    this.renderer.setStyle(this.el.nativeElement, 'color', this.white);
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '1.1rem');
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', '500');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '300ms linear');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.middlePurple);
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.middlePurple}`);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundClip', 'text');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '300ms linear');
  }


}
