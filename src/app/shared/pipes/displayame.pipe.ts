import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayame'
})
export class DisplayamePipe implements PipeTransform {

  transform(value: any, args?: any) {
    return args.nombre+' '+args.apellido;
  }

}
