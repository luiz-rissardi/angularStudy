import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoesService } from '../core/services/shoesService/shoes-service.service';

export const testeResolver: ResolveFn<any> = (route, state) => {

  const lol = inject(ShoesService)

  return lol.teste()
};
