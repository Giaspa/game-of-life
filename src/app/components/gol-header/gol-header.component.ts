import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private iterationsSubscription!: Subscription;

  constructor(
    private readonly cellService: CellService,
    private readonly gridService: GridService,
    readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.iterations = this.settingsService.getIterations();
    this.iterationsSubscription = this.settingsService.iterationsUpdated.subscribe(iterations => {
      this.iterations = this.settingsService.getIterations()
    })
  }

  startGame(): void {
    this.settingsService.setIsGameRunning(true);

    const OLD_CELLS_SET: Cell[] = this.gridService.getCells();
    let newCellsSet: Cell[] = OLD_CELLS_SET.map(cell => { return { ...cell } as Cell });

    newCellsSet.forEach(cell => {
      const PREV_CELL: Cell = this.gridService.getCell(cell.id)
      cell.isAlive = this.cellService.getCellSurvivalRules(PREV_CELL) === 'alive' ? true : false;
    });

    this.iterations--;
    console.log(`Round: ${100 - this.iterations}`)

    setTimeout(() => {
      const STABILITY: boolean = JSON.stringify(OLD_CELLS_SET) === JSON.stringify(newCellsSet);

      if (this.iterations > 0 && this.settingsService.getIsGameRunning() && !STABILITY) {
        this.startGame();
      } else if ((this.iterations === 0 && this.settingsService.getIsGameRunning()) || STABILITY) {
        this.iterations = this.settingsService.getIterations();
        this.pauseGame();
      }

      this.gridService.setCells(newCellsSet)
    }, this.settingsService.getDelay())
  }

  resetGame(): void {
    console.clear();
    this.iterations = this.settingsService.getIterations();
    this.gridService.resetCells();
  }

  pauseGame(): void {
    this.settingsService.setIsGameRunning(false);
  }

}
