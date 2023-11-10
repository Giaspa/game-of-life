import { EventEmitter, Injectable } from '@angular/core';
import { Cell } from '../models/cell.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private cells: Cell[] = [];
  cellsUpdated = new EventEmitter<Cell[]>();

  constructor() { }

  getCells(): Cell[] {
    return this.cells;
  }
  setCells(cells: Cell[]) {
    this.cells = cells;
    this.cellsUpdated.emit(cells)
  }

  getCell(idCell: number): Cell {
    return this.cells[idCell-1];
  }

  resetCells() {
    this.cells.forEach(cell => {
      cell.isAlive = false
    })
  }
}
