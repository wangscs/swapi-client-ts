import { Component, OnInit, Input } from '@angular/core';
import { Planets } from 'src/app/models/Planets';
import { PlanetService } from 'src/app/services/planet.service';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  
  @Input() planets: Planets[] = [];

  constructor(private PlanetService: PlanetService) { }

  ngOnInit(): void {
    this.PlanetService.getAll().subscribe(
      data => {
        this.planets = data.results;
      }
    );
  }
}
