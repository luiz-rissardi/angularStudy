import { Component, OnInit, inject } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent implements OnInit {
  protected shoes!: Shoe[];

  constructor() {
    const worker = new Worker(new URL('../../app.worker', import.meta.url))
    worker.onmessage = ({data}) => {
      this.shoes = data
    };
    worker.postMessage("");
  }

  async ngOnInit() {
  }
}
