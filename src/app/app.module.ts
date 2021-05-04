import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesPageComponent } from './components/species-page/species-page.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { CharacterModule } from './modules/character.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent,
    PlanetDetailsComponent,
    SpeciesListComponent,
    SpeciesDetailsComponent,
    SpeciesPageComponent,
    PlanetsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CharacterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
