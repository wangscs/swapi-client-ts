import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavComponent, 
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
