import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SpeciesService } from 'src/app/services/species.service';
import species from 'src/app/tests/data/Species.json';



describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeciesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all species', () => {
    httpClientSpy.get.and.returnValue(of(species));
    service.getAll().subscribe(data => {
      expect(data.results[1]).toEqual(species.results[1]);
      expect(data.results.length).toEqual(3);
    });
  });

  it('should get a species by id', () => {
    let index = 1;
    httpClientSpy.get.and.returnValue(of(species.results[index]));
    service.getById(getIndex(species.results[0].url)).subscribe(data => {
      expect(data).toEqual(species.results[index]);
    });
  });
});

function getIndex(url: string): number {
  let indexURL = url.slice(0, -1);
  let lastSlash: number = indexURL.lastIndexOf('/');
  return +indexURL.slice(lastSlash + 1);
}
