import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PlanetComponent } from './components/planet/planet.component';

import { SpeciesListComponent } from './components/species-list/species-list.component';
import { CharacterComponent } from "./components/character/character.component";
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent,
    PlanetComponent,
    SpeciesListComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    SpeciesDetailsComponent,
    SpeciesPageComponent,
    PlanetsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
