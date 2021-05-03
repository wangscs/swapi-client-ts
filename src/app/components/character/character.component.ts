import { Component, Input, OnInit } from '@angular/core';
import Character from '../../models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  @Input() character;

  constructor() {
  }

  ngOnInit(): void {
  }

}
