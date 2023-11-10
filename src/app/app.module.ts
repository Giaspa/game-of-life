import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GolGridComponent } from '../components/gol-grid/gol-grid.component';
import { GolCellComponent } from '../components/gol-cell/gol-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    GolGridComponent,
    GolCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
