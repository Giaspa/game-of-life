import { Component, OnInit } from '@angular/core';
import { Cell } from './models/cell.model';
import { SettingsService } from './services/settings.service';
import { GridService } from './services/grid.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-of-life';
  private rowsSubscription!: Subscription;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly gridService: GridService,
    ){}

  ngOnInit(): void {
    this.createCells();
    this.rowsSubscription = this.settingsService.rowsUpdated.subscribe(updatedRows => {
      this.createCells();
    })
  }

  createCells() {
    const ROWS = this.settingsService.getRows();
    const GRID_CELLS: number = ROWS*ROWS;
    const CELLS: Cell[] = [];

    for (let i = 0; i < GRID_CELLS; i++) {
      CELLS.push(new Cell(i+1, GRID_CELLS));
    }

    this.gridService.setCells(CELLS);
  }
}
