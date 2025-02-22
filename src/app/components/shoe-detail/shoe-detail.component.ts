import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { BtnStyleDirective } from '../../directives/btnStyle/btn-style.directive';

@Component({
    selector: 'app-shoe-detail',
    imports: [BtnStyleDirective],
    templateUrl: './shoe-detail.component.html',
    styleUrl: './shoe-detail.component.scss'
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
