import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  title : string = 'Pipes Title';

  showDt : Date = new Date();

  employee = [
    {
      name: "alice johnson",
      salary: 50000,
      state: "California"
    },
    {
      name: "bob smith",
      salary: 60000,
      state: "New York"
    },
    {
      name: "charlie brown",
      salary: 55000,
      state: "Texas"
    }
  ];

}
