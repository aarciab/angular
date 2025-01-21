import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCasePipe'
})
export class FirstLetterCasePipePipe implements PipeTransform {

  transform(value: string, args: 'UPPER' | 'LOWER'): unknown {
    const i = value.charAt(0);
    const iTrasnformed = args === 'UPPER' ? i.toUpperCase() : i.toLowerCase(); 
    return iTrasnformed + value.slice(1);

  }

}
