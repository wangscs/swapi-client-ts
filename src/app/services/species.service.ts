import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Species from '../models/Species';

<<<<<<< HEAD
import ApiResponse from "../shared/ApiResponse";
=======
export interface ApiResponse {
  count: string;
  next?: string;
  previous?: string;
  results: Species[];
}
>>>>>>> Fixed a typo with error

@Injectable({
  providedIn: 'root'
})

export class SpeciesService {

  species: Species[] = [];

  public apiURL = 'https://swapi.dev/api/species/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiURL);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.apiURL + id);
  }
}
