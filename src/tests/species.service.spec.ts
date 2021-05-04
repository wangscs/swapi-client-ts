import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SpeciesService } from 'src/app/services/species.service';
import species from 'src/app/tests/data/Species.json';



describe('SpeciesService', () => {
  let service: SpeciesService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HttpClient ],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SpeciesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all species objects', () => {
    httpClientSpy.get.and.returnValue(of(species));
    service.getAll().subscribe(data => {
      expect(data.results[0].name).toContain('Human');
      expect(data.results[1].name).toContain('Driod');
      expect(data.results[2].name).toContain('Wookie');
    });
  });

  it('should get a species by id', () => {
    httpClientSpy.get.and.returnValue(of(species[0]));
    service.getById(1).subscribe(data => {
      expect(data.name).toContain('Human');
      expect(data.classification).toContain('mammal');
      expect(data.designation).toContain('sentient');
    });
  });
});
