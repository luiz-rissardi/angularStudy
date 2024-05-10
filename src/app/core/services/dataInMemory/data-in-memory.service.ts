import { Injectable } from '@angular/core';
import { BaseRepository, User } from '../../../models/user.protocol';

@Injectable({
  providedIn:"root"
})
export class DataInMemoryService implements BaseRepository{

  private data: User[] = [
    {
      userName: "luiz",
      age: 18
    },
    {
      userName: "nathalia",
      age: 17
    },
    {
      userName: "julia",
      age: 18
    },
  ]
  constructor() { 
    console.log("instanciando classe");
  }

  find(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        clearTimeout(timeoutId);
        resolve(this.data);
      }, 3000);
    })
  }

  insert(user: User): Promise<User> {
    this.data.push(user)
    return Promise.resolve(user);
  }
}
