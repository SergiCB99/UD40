import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title='Characters';

  characters:any=null;

  constructor(private CharactersService:CharactersService) { }

  ngOnInit(): void {

    this.CharactersService.retornarTodos()
    .subscribe(
      result =>{
        this.characters = result;
        console.log(this.characters);
      },
      error =>{
        console.log("Problemas");
      }
      );
    console.log(this.characters[0].name);

  }



}
