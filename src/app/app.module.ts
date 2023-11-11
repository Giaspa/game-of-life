import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GolGridComponent } from './components/gol-grid/gol-grid.component';
import { GolCellComponent } from './components/gol-cell/gol-cell.component';
import { GolHeaderComponent } from './components/gol-header/gol-header.component';
import { FormsModule } from '@angular/forms';
import { GolModalComponent } from './components/gol-modal/gol-modal.component';
import { GolButtonComponent } from './components/gol-button/gol-button.component';
import { GolSettingsComponent } from './components/gol-settings/gol-settings.component';
import { GolPatternComponent } from './components/gol-pattern/gol-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    GolGridComponent,
    GolCellComponent,
    GolHeaderComponent,
    GolModalComponent,
    GolButtonComponent,
    GolSettingsComponent,
    GolPatternComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
