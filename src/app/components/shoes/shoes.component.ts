import { Component, OnInit } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { ShoesDataComponent } from '../shoes-data/shoes-data.component';


@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [ShoesDataComponent],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent implements OnInit {
  protected shoes!: Shoe[];

  ngOnInit() {
    const worker = new Worker(new URL('../../app.worker', import.meta.url))
    worker.onmessage = ({data}) => {
      this.shoes = data
    };
    worker.postMessage({type:"getAll"});

  }
}
