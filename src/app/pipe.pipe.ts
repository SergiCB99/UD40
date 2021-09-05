import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any): any {

    if(value == "Male"){
      return "Hombre";
    }else if(value == "Female"){
      return "Mujer";
    }else if(value == "Alive"){
      return "Vivo";
    }else if(value == "Dead"){
      return "Muerto";
    }

  }

}
