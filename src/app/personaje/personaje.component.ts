import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  id:any=0;
  character:any=null;

  constructor(private CharactersService:CharactersService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get("id");

    this.CharactersService.retornarUno(this.id)
    .subscribe(
      result =>{
        this.character = result;
        console.log(this.character);
      },
      error =>{
        console.log("Problemas");
      }
      );

  }

}
