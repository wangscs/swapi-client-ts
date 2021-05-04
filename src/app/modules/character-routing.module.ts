import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../components/character-list/character-list.component';
import { CharacterDetailsComponent } from '../components/character-details/character-details.component';
import { RouterModule, Routes } from '@angular/router';

export const routes : Routes = [
  {
    path: 'page/:page',
    component: CharacterListComponent
  },

  { path: 'character/:id', component : CharacterDetailsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
