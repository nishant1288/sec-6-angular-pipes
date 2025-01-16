import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumbers'
})
export class SortNumbersPipe implements PipeTransform {

  transform(numArr: number[], sortType: 'asc' | 'dsc'): number[] {
    if (sortType === 'asc') {
      return numArr.sort((a, b) => a - b);
    }
    else {
      return numArr.sort((a, b) => b - a)
    }
  }

}
