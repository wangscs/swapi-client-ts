import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Species from '../models/Species';

export interface ApiResponse {
  count: string,
  next?: string,
  previous?: string,
  results: Species[];
}


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  species: Species[] = [];

  public apiURL = 'https://swapi.dev/api/species/';

  constructor(public http: HttpClient) { }

  getAll(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.apiURL);
  }
  
}


