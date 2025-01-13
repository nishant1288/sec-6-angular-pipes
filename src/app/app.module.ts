import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PaginationSliceComponent } from './components/pagination-slice/pagination-slice.component';
import { NumberPipeComponent } from './components/number-pipe/number-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    PaginationSliceComponent,
    NumberPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
