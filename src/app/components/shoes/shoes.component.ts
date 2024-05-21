import { Component, computed, effect, signal } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { ShoesDataComponent } from '../shoes-data/shoes-data.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [ShoesDataComponent, FormsModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent {
  protected shoes!: Shoe[];
  private cache!: Shoe[];

  query = signal("");

  filterShoes = computed(() => {
    return this.filterByQuery(this.query())
  })

  constructor() {

    if (this.shoes === undefined) {
      const worker = new Worker(new URL('../../app.worker', import.meta.url))
      worker.onmessage = ({ data }) => {
        this.shoes = data;
        this.cache = data;
      };
      worker.postMessage({ type: "getAll" });
    }
  }

  private filterByQuery(query: string) {
    if (this.shoes) {
      return this.cache.filter((shoe: Shoe) => shoe.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    }
    if (query == "") {
      return this.cache
    }
    return undefined;
  }
}
