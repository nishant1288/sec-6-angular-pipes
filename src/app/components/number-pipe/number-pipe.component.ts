import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  templateUrl: './number-pipe.component.html',
  styleUrls: ['./number-pipe.component.css']
})
export class NumberPipeComponent {

  pi = 3.14159;

  weightInPounds : number = 0;
  weightInKilograms : number = 0;

  convertWeight() {
    this.weightInKilograms = this.weightInPounds * 0.4593;
  }

}
