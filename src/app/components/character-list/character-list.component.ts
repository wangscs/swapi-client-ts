import { Component, OnInit } from '@angular/core';
import Character from '../../models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList : Character[];

  constructor() {
    this.characterList = [];
   }

  ngOnInit(): void {

  }

}
