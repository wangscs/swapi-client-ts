import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Species from '../models/Species';

import ApiResponse from "../shared/ApiResponse";

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
  
  getById(id: number): Observable<any>{
    return this.http.get(this.apiURL + id);
  }

  getNextPage(){
    
  }
  
  getPrevPage(){
    
  }
  
}


