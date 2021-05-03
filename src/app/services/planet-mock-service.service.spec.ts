import { TestBed } from '@angular/core/testing';

import { PlanetMockServiceService } from './planet-mock-service.service';

describe('PlanetMockServiceService', () => {
  let service: PlanetMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
