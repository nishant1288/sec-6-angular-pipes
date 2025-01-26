import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPipe',
  pure: false 
})
export class SumPipePipe implements PipeTransform {

  transform(value: number[]): number {
    let sum = 0;
    for(let singleVal of value)
    {
      sum = sum+singleVal;
    }
    return sum;
  }

}
