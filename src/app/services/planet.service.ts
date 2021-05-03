import { Injectable } from '@angular/core';
import { Planets } from '../models/planets';
import { HttpClient } from "@angular/common/http"

// API Response that is returned from the API Call
interface APIResponse {
  count?: number;
  next?: string;
  previous?: string;
  results: Planets[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  // Endpoint for all planets
  endpoint = "https://swapi.dev/api/planets/"
  
  // Planets array to hold the list of planets
  planets: Planets[];

  constructor(private http: HttpClient) { }

  // Returns a list of all the planets in the API as an observable
  getAll(){
    return this.http.get<APIResponse>(this.endpoint);
  }
}