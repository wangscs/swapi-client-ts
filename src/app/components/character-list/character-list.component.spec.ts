import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import  Character  from '../../models/Character';
import characterArray from '../../Character.json';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    component.characterList = characterArray as Character[];
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display characters from a list", () =>{
    expect(html.querySelector('app-character')).toBeTruthy();
  })

});
