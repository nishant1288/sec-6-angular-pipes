import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationSliceComponent } from './components/pagination-slice/pagination-slice.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NumberPipeComponent } from './components/number-pipe/number-pipe.component';
import { JsonPipeComponent } from './components/json-pipe/json-pipe.component';

const routes: Routes = [
  { 
    path: '',
    component: PipesComponent
  },
  {
    path: 'pagination',
    component: PaginationSliceComponent
  },
  {
    path: 'number-pipe',
    component: NumberPipeComponent
  },
  {
    path: 'json-pipe',
    component: JsonPipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
