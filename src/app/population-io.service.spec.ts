import { TestBed } from '@angular/core/testing';

import { PopulationIoService } from './population-io.service';

describe('PopulationIoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopulationIoService = TestBed.get(PopulationIoService);
    expect(service).toBeTruthy();
  });
});
