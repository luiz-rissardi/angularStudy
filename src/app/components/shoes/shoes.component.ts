import { Component, ElementRef, OnInit } from '@angular/core';
import { Shoe } from '../../models/user.protocol';
import { ShoesDataComponent } from '../shoes-data/shoes-data.component';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [ShoesDataComponent, ReactiveFormsModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.scss'
})
export class ShoesComponent {
  protected shoes!: Shoe[];
  private cache!:Shoe[];
  protected form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      query: []
    })
    if (this.shoes === undefined) {
      const worker = new Worker(new URL('../../app.worker', import.meta.url))
      worker.onmessage = ({ data }) => {
        this.shoes = data;
        this.cache = data;
      };
      worker.postMessage({ type: "getAll" });
    }
  }

  protected searchByQuery() {
    const query = this.form.get("query")?.value;
    this.filterByQuery(query)
  }

  private filterByQuery(query: string) {
    if (this.shoes) {
      this.shoes = this.shoes.filter((shoe: Shoe) => shoe.name.includes(query))
    }
    if(query == ""){
      this.shoes = this.cache
    }
  }
}
