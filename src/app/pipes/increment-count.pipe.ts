import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementCount',
  // pure: false
})
export class IncrementCountPipe implements PipeTransform {

  transform(value: number): number {
    console.log('Counter Incremented to', value)
    return value;
  }

}
