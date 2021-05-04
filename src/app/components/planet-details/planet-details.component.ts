import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/models/Planets';

@Component({
  selector: 'app-planet',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})

export class PlanetDetailsComponent implements OnInit {

  planets: Planets[];

  constructor() { }

  ngOnInit(): void {
    
  }
}
