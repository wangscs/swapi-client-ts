import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import Character from "../models/Character";

interface ApiResponse {
  count: number,
  next: string,
  previous: string,
  results: Character[],
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl : string = "http://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  getCharacter(id : number = 1) : Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

}
