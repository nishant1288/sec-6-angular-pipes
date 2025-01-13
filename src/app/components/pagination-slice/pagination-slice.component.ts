import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-slice',
  templateUrl: './pagination-slice.component.html',
  styleUrls: ['./pagination-slice.component.css']
})
export class PaginationSliceComponent {

  pages : { name : string, description : string }[] = [
    {
      name : 'Product 1',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 2',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 3',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 4',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 5',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 6',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 7',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    },
    {
      name : 'Product 8',
      description : 'To be or not to be that is the question, when we talk about something in real that is not actually in real but is hypothetical but we assume it as real to make it a proof'
    }
  ]

  startIndex : number = 0;
  endIndex : number = 4;

  previous() {
    this.startIndex = this.startIndex - 4;
    this.endIndex = this.endIndex - 4;
  }

  next() {
    this.startIndex = this.startIndex + 4;
    this.endIndex = this.endIndex + 4;
  }



}
