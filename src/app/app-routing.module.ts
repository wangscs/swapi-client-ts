import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';


export const routes: Routes = [
    {
      path: 'people',
      loadChildren: () => import('./modules/character.module').then(mod => mod.CharacterModule),
    },
    {
    path: 'species',
    component: SpeciesListComponent,
  },
  {
    path: 'planets',
    component: PlanetsListComponent,
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
