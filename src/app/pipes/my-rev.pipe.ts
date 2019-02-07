import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.split('').reverse().join('');

  }

}
