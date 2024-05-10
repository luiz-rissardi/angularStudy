import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';
import { DataInMemoryService } from '../../core/services/dataInMemory/data-in-memory.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TesteComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  private readonly datbaseService = inject(DataInMemoryService);

  async insert() {
    console.log("inserindo ...");
    const data = await this.datbaseService.insert({userName:"anne",age:14});
    console.log(data);
  }
}
