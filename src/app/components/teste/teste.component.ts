import { ChangeDetectionStrategy, Component, Input, input, signal } from '@angular/core';
import EventEmitter from 'events';
import { Subject, delay, of } from 'rxjs';

@Component({
    selector: 'app-teste',
    imports: [],
    templateUrl: './teste.component.html',
    styleUrl: './teste.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TesteComponent {

  sub = new EventEmitter();
  data = '';

  constructor() {

  }

  click() {
    this.sub.on("teste",(data)=>{
      
    })
    this.sub.emit("teste","dados")
  }
}
