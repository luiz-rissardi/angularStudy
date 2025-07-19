import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  private renderer = inject(Renderer2);
  private elRef = inject(ElementRef);
  private router = inject(Router)

  protected async scrollToProducts() {
    let element = this.elRef.nativeElement.closest('app-root').querySelector("app-shoes");
    if (element == undefined) {
      await this.router.navigate(["/home"])
      element = this.elRef.nativeElement.closest('app-root').querySelector("app-shoes");
    }
    const targetScroll = element.getBoundingClientRect().top + window.scrollY;
    const curretPosition = window.screenY;
    window.scrollTo(curretPosition, targetScroll);

    const startTime = performance.now();
    const duration = 500; // 1 segundo

    requestAnimationFrame(animateScroll);
    function animateScroll(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, curretPosition + progress * (targetScroll - curretPosition));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }
  }
}


