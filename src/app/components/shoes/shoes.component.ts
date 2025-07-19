import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnDestroy, OnInit, Signal, ViewChild, WritableSignal, computed, effect, inject, input, linkedSignal, signal } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { ShoesDataComponent } from '../shoes-data/shoes-data.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { takeUntil, fromEvent, debounceTime, Subject, map } from 'rxjs';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { ShoesService } from '../../core/services/shoesService/shoes-service.service';

@Component({
  selector: 'app-shoes',
  imports: [ShoesDataComponent, FormsModule, NgxSkeletonLoaderModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoesComponent implements OnInit {

  @ViewChild("inputSearch") private searchInput!: ElementRef;
  private shoesService = inject(ShoesService);

  protected query: WritableSignal<string> = signal("");
  protected shoes: WritableSignal<Shoe[]> = signal([]);
  protected shoeSearchList = linkedSignal(() => {
    if (this.query() != "") {
      const filtedShoes = this.shoes().filter((shoe: Shoe) => shoe.name.toLocaleLowerCase().includes(this.query().toLocaleLowerCase()))
      return filtedShoes
    }
    return this.shoes()
  });

  async ngOnInit() {
    const shoes = await this.shoesService.getAll();
    this.shoes.set(shoes)
  }

}