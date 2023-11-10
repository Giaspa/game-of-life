import { Component, OnInit } from '@angular/core';
import { Cell } from './models/cell.model';
import { SettingsService } from './services/settings.service';
import { GridService } from './services/grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-of-life';

  constructor(
    private readonly settingsService: SettingsService,
    private readonly gridService: GridService,
    ){}

  ngOnInit(): void {
    this.createCells(this.settingsService.getRowsPerColumns());
  }

  createCells(cellsNumber: number) {
    const CELLS: Cell[] = [];

    for (let i = 0; i < cellsNumber; i++) {
      CELLS.push(new Cell(i+1, cellsNumber));
    }

    this.gridService.setCells(CELLS);
  }
}
