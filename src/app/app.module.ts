import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import{ HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AboutComponent,
    HomeComponent,
    PersonajeComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
