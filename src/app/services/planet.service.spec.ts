import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PlanetMockServiceService } from './planet-mock-service.service';

import { PlanetService } from './planet.service';

// API Response that is returned from the API Call

// A test API Response used for testing
const APIResponse1: {} = {
  climate: "Arid",
  created: "2014-12-09T13:50:49.641000Z",
  diameter: "10465",
  edited: "2014-12-15T13:48:16.167217Z",
  films: [
      "https://swapi.dev/api/films/1/",
  ],
  gravity: "1",
  name: "Tatooine",
  orbital_period: "304",
  population: "120000",
  residents: [
    "https://swapi.dev/api/people/1/"
  ],
  rotation_period: "23",
  surface_water: "1",
  terrain: "Dessert",
  url: "https://swapi.dev/api/planets/1/"
};

describe('PlanetService', () => {
  let service: PlanetService;
  let httpServiceSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: PlanetService, useClass: PlanetMockServiceService}]
    });
    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the information of the planet', () => {
    // let planets: Planets = new Planets();
    httpServiceSpy.get.and.returnValue(of(APIResponse1));
    service.getAll().subscribe(data => {
      expect(data.results).toEqual(service.planets);
    });
  });
});

