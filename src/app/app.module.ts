import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PaginationSliceComponent } from './components/pagination-slice/pagination-slice.component';
import { NumberPipeComponent } from './components/number-pipe/number-pipe.component';
import { FormsModule } from '@angular/forms';
import { JsonPipeComponent } from './components/json-pipe/json-pipe.component';
import { AppendTextPipe } from './pipes/append-text.pipe';
import { SortNumbersPipe } from './pipes/sort-numbers.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { IncrementCountPipe } from './pipes/increment-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    PaginationSliceComponent,
    NumberPipeComponent,
    JsonPipeComponent,
    AppendTextPipe,
    SortNumbersPipe,
    CustomPipeComponent,
    IncrementCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
