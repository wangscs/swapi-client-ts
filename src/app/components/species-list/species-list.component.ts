import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Species from 'src/app/models/Species';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  species: Species[] = [];
  constructor(private service: SpeciesService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(species => {
      this.species = species.results;
    });
  }

}
