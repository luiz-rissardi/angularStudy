import { TestBed } from '@angular/core/testing';

import { DataBaseShoesService } from './data-base-shoes.service';

describe('DataBaseShoesService', () => {
  let service: DataBaseShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBaseShoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
