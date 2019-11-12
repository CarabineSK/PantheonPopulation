import { TestBed } from '@angular/core/testing';

import { CalculationStorageService } from './calculation-storage.service';

describe('CalculationStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationStorageService = TestBed.get(CalculationStorageService);
    expect(service).toBeTruthy();
  });
});
