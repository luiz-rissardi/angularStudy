import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoesService } from './core/services/shoesService/shoes-service.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'angularStudy';
  // dessa forma deixa o codigo mais limpo mas aumenta o acomplamento porem
  private router = inject(Router);

  constructor() {
    this.router.navigate(["/home"])

  }
  ngOnInit(): void {
  }

}

