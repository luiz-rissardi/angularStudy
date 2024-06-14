import { TestBed } from '@angular/core/testing';

import { ShoesService } from './shoes-service.service';

describe('ShoesServiceService', () => {
  let service: ShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
