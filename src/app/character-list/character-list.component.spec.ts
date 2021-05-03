import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let html;

  const character = {name : "Obi Wan"};

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
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display characters from a list", () =>{
    expect(html.querySelector('app-character')).toBeFalsy();
    component.characterList.push(character);
    fixture.detectChanges();
    expect(html.querySelector('app-character')).toBeTruthy();
  })

});
