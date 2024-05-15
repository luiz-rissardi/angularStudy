import { Component } from '@angular/core';
import { ShoesPresentationComponent } from '../../components/shoes-presentation/shoes-presentation.component';
import { ShoesComponent } from '../../components/shoes/shoes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShoesPresentationComponent,ShoesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
