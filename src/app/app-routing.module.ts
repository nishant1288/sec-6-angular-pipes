import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationSliceComponent } from './components/pagination-slice/pagination-slice.component';
import { PipesComponent } from './components/pipes/pipes.component';

const routes: Routes = [
  { 
    path: '',
    component: PipesComponent
  },
  {
    path: 'pagination',
    component: PaginationSliceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
