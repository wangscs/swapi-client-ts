import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpeciesListComponent } from './species-list.component';

describe('SpeciesListComponent', () => {
  let component: SpeciesListComponent;
  let fixture: ComponentFixture<SpeciesListComponent>;
  let httpClientSpy: {get: jasmine.Spy};
  let html;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ SpeciesListComponent ]
    })
    
    .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to species list component', () => {
    
    expect(component).toBeTruthy();
  });
});
