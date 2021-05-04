import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import Character from '../../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList : Character[];
  page : number;

  constructor(private characterService : CharacterService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.page = +this.activatedRoute.snapshot.paramMap.get('page');
    
    this.characterService.getCharacters(this.page).subscribe( (data) => {
      this.characterList = data;
    });
  }

}
