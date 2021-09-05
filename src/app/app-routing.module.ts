import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { PersonajeComponent } from './personaje/personaje.component';


const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{
  path:'characters',
  component:CharactersComponent
},
{
  path:'character/:id',
  component:PersonajeComponent
},
{
  path:'about',
  component:AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
