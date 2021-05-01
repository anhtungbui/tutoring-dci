import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperator'
})
export class SeperatorPipe implements PipeTransform {

  transform(value: string, seperator: string = ''): string {
    const firstLetter = value[0]; 
    const numberPart = value.slice(1);

    return `${firstLetter}${seperator}${numberPart}`;
  }

}
