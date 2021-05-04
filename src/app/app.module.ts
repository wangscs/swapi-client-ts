import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PlanetComponent } from './components/planet/planet.component';
import { CharacterModule } from './modules/character.module';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent,
    PlanetComponent,
    SpeciesListComponent,
    SpeciesDetailsComponent,
    SpeciesPageComponent,
    PlanetsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CharacterModule,
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
