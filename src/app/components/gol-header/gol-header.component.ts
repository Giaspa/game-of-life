import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell.model';
import { CellService } from 'src/app/services/cell.service';
import { GridService } from 'src/app/services/grid.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'gol-header',
  templateUrl: './gol-header.component.html',
  styleUrls: ['./gol-header.component.scss']
})
export class GolHeaderComponent implements OnInit {
  iterations: number = 100;

  constructor(
    private readonly cellService: CellService,
    private readonly gridService: GridService,
    private readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.iterations = this.settingsService.getIterations();
  }

  startGame(): void {    
    const OLD_CELLS_SET: Cell[] = this.gridService.getCells();
    let newCellsSet: Cell[] = OLD_CELLS_SET.map(cell => {return {...cell} as Cell});
    
    newCellsSet.forEach(cell => {
      const PREV_CELL: Cell = this.gridService.getCell(cell.id)
      cell.isAlive = this.cellService.getCellSurvivalRules(PREV_CELL) === 'alive' ? true : false;
    });

    this.iterations--;
    console.count()

    setTimeout(() => {
     this.iterations > 0 && this.startGame();
     this.gridService.setCells(newCellsSet)
    }, this.settingsService.getDelay())
  }

  resetGame(): void {
    console.clear();
    this.iterations = this.settingsService.getIterations();
    this.gridService.resetCells();
  }
}
