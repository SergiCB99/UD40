import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  retornarTodos(){

    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,361,366")

  }

  retornarUno(id:number){

    return this.http.get("https://rickandmortyapi.com/api/character/" + id)

  }
}
