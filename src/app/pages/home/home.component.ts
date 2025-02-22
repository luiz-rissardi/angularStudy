import { Component } from '@angular/core';
import { ShoesPresentationComponent } from '../../components/shoes-presentation/shoes-presentation.component';
import { ShoesComponent } from '../../components/shoes/shoes.component';
import { NotDirective } from '../../directives/not/not.directive';

@Component({
    selector: 'app-home',
    imports: [ShoesPresentationComponent, ShoesComponent,NotDirective],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    protected teste = false
}
