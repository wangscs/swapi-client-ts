import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetMockServiceService } from 'src/app/services/planet-mock-service.service';
import { PlanetService } from 'src/app/services/planet.service';

import { PlanetDetailsComponent } from './planet-details.component';

describe('PlanetComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailsComponent ],
      providers: [ { provide: PlanetService, useClass: PlanetMockServiceService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render the h1 as Planets in a Galexy far far away...', () => {
  //   expect(fixture.nativeElement.querySelector('#title').innerHTML).toMatch('Planets in a Galexy far far away...');
  // });
});
