import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, computed, signal } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { ShoesDataComponent } from '../shoes-data/shoes-data.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { takeUntil, fromEvent, debounceTime, Subject, map } from 'rxjs';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [ShoesDataComponent, FormsModule, NgxSkeletonLoaderModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShoesComponent implements AfterViewInit, OnDestroy {



  responsaveis = [
    {
      id: 323,
      nome: "luiz oliveira"
    },
    {
      id: 343,
      nome: "alan fabricio"
    },
    {
      id: 421,
      nome: "alana frazão"
    },
  ]

  selectedValue = null;
  usersSelects: any[] = [];

  selectOption(event: any) {
    const userId = event.target.value;
    const user = this.responsaveis.filter(user => user.id == userId)[0];
    this.usersSelects.push(user);
  }


  protected shoes!: Shoe[];
  private cache!: Shoe[];

  @ViewChild("inputSearch") private searchInput!: ElementRef;
  private detroy = new Subject<void>();

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

  ngOnDestroy(): void {
    this.detroy.next();
    this.detroy.complete();

  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, "input")
      .pipe(
        debounceTime(500),
        map((value: any) => {
          const queryValue = (value.target as HTMLInputElement).value;
          this.query.set(queryValue)
        }),
        takeUntil(this.detroy)
      ).subscribe()
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