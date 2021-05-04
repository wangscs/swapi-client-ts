import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';


export const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'people',
    loadChildren: () => import('./modules/character.module').then(mod => mod.CharacterModule),
=======
    path: 'people/:id',
    component: CharacterListComponent
>>>>>>> c9e521d (tested new route species/id)
  },
  {
    path: 'species',
    component: SpeciesListComponent
  },
  {
    path: 'species/:id',
    component: SpeciesListComponent
  },
<<<<<<< HEAD
=======
  {
    path: 'species/:id',
    component: SpeciesListComponent
  },
  {
    path: 'character/:id',
    component : CharacterDetailsComponent
  },
>>>>>>> c9e521d (tested new route species/id)
  {
    path: 'planets',
    component: PlanetsListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
