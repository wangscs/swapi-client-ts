import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../components/character/character.component';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { CharacterDetailsComponent } from '../components/character-details/character-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterRoutingModule } from './character-routing.module';


@NgModule({
  declarations: [  
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CharacterRoutingModule,
  ]
})
export class CharacterModule { }
