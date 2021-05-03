import { HtmlParser } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import characterArray from '../../Character.json';
import Character from '../../models/Character';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let html;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    component.character = characterArray[0];
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render character name and image', () =>{
    expect(html.querySelector('#name')).toBeTruthy();
    expect(html.querySelector('#image')).toBeTruthy();
  })

  it('should render character name and image from character object', () => {
    expect(html.querySelector('#name').innerHTML).toEqual(characterArray[0].name);
  })

});
