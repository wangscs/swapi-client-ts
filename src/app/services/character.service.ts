import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Character from "../models/Character";
import { tap, map } from 'rxjs/operators'; 
import ApiResponse from '../shared/ApiResponse';
import { convertCharacter, jsonCharacter } from '../shared/utilities';

  @Injectable({
    providedIn: 'root'
  })
export class CharacterService {

  apiUrl : string = "http://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  getCharacter(id : number = 1) : Observable<Character> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(tap( (data) => {
      return convertCharacter(data);
    }));
  }
  
  getCharacters(page: number = 1) : Observable<Character[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/?page=${page}`).pipe(map( (data : ApiResponse) : Character[] => {      
      return data.results.map((character : jsonCharacter) => {
        return convertCharacter(character);
      })
    }));
  }
}
