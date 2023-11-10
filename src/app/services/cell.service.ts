import { Injectable, inject } from '@angular/core';
import { Cell } from '../models/cell.model';
import { GridService } from './grid.service';
import { CellState } from '../components/gol-cell/gol-cell.component';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  gridService = inject(GridService)
  constructor() { }

  evaluateSiblingsState(cell: Cell): boolean[] {
    return cell.siblings.map(sibling => {
      return this.gridService.getCell(sibling).isAlive
    })
  }

  getCellSurvivalRules(cell: Cell): CellState {
    const SIBLINGS_ALIVE: number = this.evaluateSiblingsState(cell).filter(sib => sib).length;
    const CELL_ALIVE: boolean = cell.isAlive;

    if (CELL_ALIVE && [2, 3].includes(SIBLINGS_ALIVE)) {
      return 'alive'
    }

    if (!CELL_ALIVE && SIBLINGS_ALIVE === 3) {
      return 'alive'
    }

    return 'death'
  }
}
