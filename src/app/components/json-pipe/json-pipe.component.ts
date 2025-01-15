import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent {
  userDetails = {
    name: 'Nishant Krishna Ghadigaonkar',
    age: 25,
    address: {
      area: 'Navapada, Ganesh Nagar',
      stret: 'Subhash road'
    }
  }

  students = [
    {
      name : 'Nishant',
      age : 25,
      gender : 'Male',
      major : 'IT'
    },
    {
      name : 'Veda',
      age : 23,
      gender : 'Female',
      major : 'IT'
    },
    {
      name : 'Bhargav',
      age : 28,
      gender : 'Male',
      major : 'Drone Programming'
    },
    {
      name : 'Vedadnya',
      age : 26,
      gender : 'Female',
      major : 'Pharmacys'
    }
  ]

  showJson : boolean = false;

  showJsonFunc() {
    this.showJson = !this.showJson;
  }
}
