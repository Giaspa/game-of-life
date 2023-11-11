import { Component, ViewChild } from '@angular/core';
import { GolModalComponent } from '../gol-modal/gol-modal.component';
import { GridService } from 'src/app/services/grid.service';
import { SettingsService } from 'src/app/services/settings.service';
import { Cell } from 'src/app/models/cell.model';
import { Utilities } from 'src/app/utilities';

type PatternType = 'heart' | 'cat' | 'tree'
type DirectionType = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SO' | 'O' | 'NO';

@Component({
  selector: 'gol-pattern',
  templateUrl: './gol-pattern.component.html',
  styleUrls: ['./gol-pattern.component.scss']
})
export class GolPatternComponent {
  @ViewChild(GolModalComponent) modal!: GolModalComponent;

  constructor(
    readonly gridService: GridService,
    private readonly settingsService: SettingsService
  ) { }

  openPattern(pattern: PatternType) {
    console.log("OPEN PATTERN", pattern)
    const ROWS: number = this.settingsService.getRows()
    const MATRIX_NxN: number[][] = Utilities.getMatrixNxN(ROWS)
    const CENTER_CELL: Cell = this.gridService.getCell(MATRIX_NxN[ROWS / 2][ROWS / 2]);

    let aliveArray: number[] = [];

    const getIdByDirection = (centralCellId: number, direction: DirectionType): number => {
      switch (direction) {
        case 'NO':
          return this.gridService.getCell(centralCellId).siblings[0];
        case 'N':
          return this.gridService.getCell(centralCellId).siblings[1];
        case 'NE':
          return this.gridService.getCell(centralCellId).siblings[2];
        case 'O':
          return this.gridService.getCell(centralCellId).siblings[3];
        case 'E':
          return this.gridService.getCell(centralCellId).siblings[4];
        case 'SO':
          return this.gridService.getCell(centralCellId).siblings[5];
        case 'S':
          return this.gridService.getCell(centralCellId).siblings[6];
        case 'SE':
          return this.gridService.getCell(centralCellId).siblings[7];
      }
    }

    let x1y4, x1y5, x1y6, x1y7, x1y8;
    let x2y3, x2y4, x2y5, x2y6, x2y7, x2y8;
    let x3y1, x3y2, x3y5, x3y6, x3y7, x3y8, x3y9;
    let x4y1, x4y2, x4y3, x4y4, x4y5, x4y6, x4y9;
    let x5y1, x5y2, x5y5, x5y6, x5y7, x5y9;
    let x6y2, x6y3, x6y4, x6y5, x6y7, x6y9;
    let x7y1, x7y4, x7y5, x7y6, x7y8, x7y9;
    let x8y4, x8y5, x8y6, x8y7, x8y8;

    switch (pattern) {
      case 'heart':
        x4y1 = getIdByDirection(getIdByDirection(getIdByDirection(CENTER_CELL.id, 'S'), 'S'), 'S');
        x3y2 = getIdByDirection(x4y1, 'NO');
        x2y3 = getIdByDirection(x3y2, 'NO');
        x1y4 = getIdByDirection(x2y3, 'NO');
        x1y5 = getIdByDirection(x1y4, 'N');
        x1y6 = getIdByDirection(x1y5, 'N');
        x2y7 = getIdByDirection(x1y6, 'NE');
        x3y7 = getIdByDirection(x2y7, 'E');
        x4y6 = getIdByDirection(x3y7, 'SE');
        x5y7 = getIdByDirection(x4y6, 'NE');
        x6y7 = getIdByDirection(x5y7, 'E');
        x7y6 = getIdByDirection(x6y7, 'SE');
        x7y5 = getIdByDirection(x7y6, 'S');
        x7y4 = getIdByDirection(x7y5, 'S');
        x6y3 = getIdByDirection(x7y4, 'SO');
        x5y2 = getIdByDirection(x6y3, 'SO');

        aliveArray = [x4y1, x3y2, x2y3, x1y4, x1y5, x1y6, x2y7, x3y7, x4y6, x5y7, x6y7, x7y6, x7y5, x7y4, x6y3, x5y2]
        break;

      case 'cat':
        x4y5 = CENTER_CELL.id;
        x3y5 = getIdByDirection(x4y5, 'O');
        x3y6 = getIdByDirection(x3y5, 'N');
        x3y7 = getIdByDirection(x3y6, 'N');
        x3y8 = getIdByDirection(x3y7, 'N');
        x2y7 = getIdByDirection(x3y8, 'SO');
        x1y8 = getIdByDirection(x2y7, 'NO');
        x1y7 = getIdByDirection(x2y7, 'O');
        x1y6 = getIdByDirection(x2y7, 'SO');
        x2y6 = getIdByDirection(x2y7, 'S');
        x2y5 = getIdByDirection(x2y6, 'S');
        x2y4 = getIdByDirection(x2y5, 'S');
        x2y3 = getIdByDirection(x2y4, 'S');
        x3y1 = getIdByDirection(x2y3, 'SE');
        x4y3 = getIdByDirection(x3y1, 'NE');
        x5y2 = getIdByDirection(x4y3, 'SE');
        x6y3 = getIdByDirection(x5y2, 'NE');
        x6y4 = getIdByDirection(x6y3, 'N');
        x6y5 = getIdByDirection(x6y4, 'N');
        x5y6 = getIdByDirection(x6y5, 'O');
        x7y6 = getIdByDirection(x6y5, 'NE');
        x8y7 = getIdByDirection(x7y6, 'NE');
        x7y8 = getIdByDirection(x8y7, 'NO');


        aliveArray = [x4y5, x3y5, x3y6, x3y7, x3y8, x2y7, x1y8, x1y7, x1y6, x2y6, x2y5, x2y4, x2y3, x3y1, x4y3, x5y2, x6y3, x6y4, x6y5, x5y6, x7y6, x8y7, x7y8]
        break;

      case 'tree':
        x5y5 = CENTER_CELL.id

        x4y5 = getIdByDirection(x5y5, 'O');
        x3y5 = getIdByDirection(x4y5, 'O');
        x2y4 = getIdByDirection(x3y5, 'SO');
        x1y5 = getIdByDirection(x2y4, 'NO');
        x1y6 = getIdByDirection(x1y5, 'N');
        x1y7 = getIdByDirection(x1y6, 'N');
        x2y8 = getIdByDirection(x1y7, 'NE');
        x3y9 = getIdByDirection(x2y8, 'NE');
        x4y9 = getIdByDirection(x3y9, 'E');
        x5y9 = getIdByDirection(x4y9, 'E');
        x6y9 = getIdByDirection(x5y9, 'E');
        x7y9 = getIdByDirection(x6y9, 'E');
        x8y8 = getIdByDirection(x7y9, 'SE');
        x8y7 = getIdByDirection(x8y8, 'SE');
        x8y6 = getIdByDirection(x8y7, 'S');
        x8y5 = getIdByDirection(x8y6, 'S');
        x8y4 = getIdByDirection(x8y5, 'SO');
        x7y5 = getIdByDirection(x8y4, 'NO');
        x6y5 = getIdByDirection(x7y5, 'O');
        x6y4 = getIdByDirection(x6y5, 'S');
        x6y3 = getIdByDirection(x6y4, 'S');
        x6y2 = getIdByDirection(x6y3, 'S');
        x7y1 = getIdByDirection(x6y2, 'SE');
        x5y1 = getIdByDirection(x6y2, 'SO');
        x4y2 = getIdByDirection(x5y1, 'NO');
        x3y1 = getIdByDirection(x4y2, 'SO');
        x4y3 = getIdByDirection(x4y2, 'N');
        x4y4 = getIdByDirection(x4y3, 'N');

        aliveArray = [x4y5, x3y5, x2y4, x1y5, x1y6, x1y7, x2y8, x3y9, x4y9, x5y9, x6y9, x7y9, x8y8, x8y7, x8y6, x8y5, x8y4, x7y5, x6y5, x6y4, x6y3, x6y2, x7y1, x5y1, x4y2, x3y1, x4y3, x4y4,]
        break;
    }

    aliveArray.forEach(coord => {
      this.gridService.getCell(coord).isAlive = true;
    })

    this.modal.close();
  }
}
