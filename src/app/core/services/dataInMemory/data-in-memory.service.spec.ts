import { TestBed } from '@angular/core/testing';

import { DataInMemoryService } from './data-in-memory.service';

describe('DataInMemoryService', () => {
  let service: DataInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
