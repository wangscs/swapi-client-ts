import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import species from '../Species.json';
import { SpeciesService } from './species.service';

describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeciesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a species by id', () => {
    httpClientSpy.get.and.returnValue(of(species.results[0]));
    service.getById(0).subscribe(data => {
      expect(data).toEqual(species.results[0]);
    });
  });
});
