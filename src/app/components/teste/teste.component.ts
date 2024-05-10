import { Component, Inject } from '@angular/core';
import { DataInMemoryService } from '../../core/services/dataInMemory/data-in-memory.service';
import { BaseRepository } from '../../models/user.protocol';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent {
  // private readonly databaseService: BaseRepository = inject(DataInMemoryService);
  private databaseService: BaseRepository;

  constructor(baseService: DataInMemoryService) { 
    this.databaseService = baseService;
  }

  async find(){
    const data = await this.databaseService.find();
    console.log(data, "ola ");
  }
}
