import { Injectable, inject } from '@angular/core';
import { DataBaseShoesService } from '../../../database/data-base-shoes.service';
import { Shoe } from '../../../models/user.protocol';
import { delay, Observable} from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class ShoesService {

  private dataBase = new DataBaseShoesService();

  async getAll(): Promise<Shoe[]> {
    const data = await this.dataBase.findMany();
    return data
  }
  async getOne(id:number): Promise<Shoe | null> {
    const data = await this.dataBase.findOne(id);
    return data
  }
  async insert(shoe:Shoe): Promise<Shoe> {
    const data = await this.dataBase.insertOne(shoe);
    return data
  }

  teste(){
    return new Observable(sub => {
      sub.next("olah o teste")
    })
  }

}
