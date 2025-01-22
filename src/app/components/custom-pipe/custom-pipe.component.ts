import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  numbers = [3, 5, 3, 7, 9, 5];
  sortOrder = 'asc';

  get sortedNumbers() {
    const sortedArr = [...this.numbers].sort((a, b) => {
      if (this.sortOrder == 'asc') {
        return a - b;
      }
      else {
        return b - a;
      }
    });
    return sortedArr;
  }

  counterValue : number = 0;
  increment() {
    this.counterValue++;
  }
}
