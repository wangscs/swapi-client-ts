import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CharacterService } from './character.service';

import { of } from "rxjs";

import Character from '../models/Character';
import characters from "../Character.json";

describe('CharacterService', () => {
  let service: CharacterService;
  let httpClientSpy: {get: jasmine.Spy};
  let httpTestingController: HttpClientTestingModule;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CharacterService);
    httpTestingController = TestBed.get(HttpClientTestingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacter should be definied and return the characters', () => {
    const OneCharacter: Character = characters[0];

    httpClientSpy.get.and.returnValue(of(OneCharacter));
    expect(service.getCharacter()).toBeDefined();

    service.getCharacter(1).subscribe((data)=>{
      expect(data).toEqual(OneCharacter);
    })

  });

  it('getCharacters should be defined and return the list of characters', () => {
    const listOfCharacters: Character[] = characters;

    httpClientSpy.get.and.returnValue(of(listOfCharacters));
    expect(service.getCharacters()).toBeDefined();

    service.getCharacters(1).subscribe((data)=>{
      expect(data.results).toEqual(listOfCharacters);
    });
  });
  

});
