import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Shoe } from '../../models/user.protocol';

@Component({
  selector: 'app-shoe-detail',
  standalone: true,
  imports: [],
  templateUrl: './shoe-detail.component.html',
  styleUrl: './shoe-detail.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeDetailComponent implements OnInit {

  protected shoe!: Shoe;
  @Input() id: any;

  ngOnInit(): void {
    const worker = new Worker(new URL('../../app.worker', import.meta.url))
    worker.onmessage = ({ data }) => {
      this.shoe = data
    };
    worker.postMessage({ type: "getOne", id: this.id });
  }

}
