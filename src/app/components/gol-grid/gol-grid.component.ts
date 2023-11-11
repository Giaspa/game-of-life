import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GridService } from 'src/app/services/grid.service';
import { SettingsService } from 'src/app/services/settings.service';
import { Utilities } from 'src/app/utilities';

@Component({
  selector: 'gol-grid',
  templateUrl: './gol-grid.component.html',
  styleUrls: ['./gol-grid.component.scss']
})
export class GolGridComponent implements OnInit {
  cells: any[] = [];
  private cellsSubscription!: Subscription;

  constructor(
    private readonly gridService: GridService,
    private readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.cells = this.gridService.getCells();
    this.cellsSubscription = this.gridService.cellsUpdated.subscribe(updatedCells => {
      this.cells = updatedCells;
    })
  }

  setStyleGrid() {
    const ROWS = this.settingsService.getRows();

    return {
      gridTemplateColumns: `repeat(${ROWS}, 1fr)`,
      gap: `${Utilities.setGap(ROWS)}px`
    }
  }

}
