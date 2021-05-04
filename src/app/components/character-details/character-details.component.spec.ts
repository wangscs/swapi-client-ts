import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockCharacterService } from '../../services/character-service-abstract';
import { CharacterService } from '../../services/character.service';
import { CharacterDetailsComponent } from './character-details.component';
import { routes } from "../../app-routing.module";

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let charService: CharacterService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ CharacterDetailsComponent ],
      providers: [
        {
          provide: CharacterService, useClass: MockCharacterService
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    charService = TestBed.inject(CharacterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads an id from the activated route', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    const routeID : string = "2";

    spyRoute.and.returnValue(routeID);

    component.ngOnInit();

    expect(component.id).toEqual(routeID);
  });

  it('loads data for a character based on ID', () => {
    spyOn(route.snapshot.paramMap, 'get').and.returnValue("1");

    expect(component.character).toBeDefined();
  })

});
