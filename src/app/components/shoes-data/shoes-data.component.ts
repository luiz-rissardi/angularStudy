import { Component, Input } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shoes-data',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shoes-data.component.html',
  styleUrl: './shoes-data.component.scss'
})
export class ShoesDataComponent {
  @Input()shoes!: Shoe[];

}
