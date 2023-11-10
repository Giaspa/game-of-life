import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell.model';
import { CellService } from 'src/app/services/cell.service';
import { GridService } from 'src/app/services/grid.service';

export type CellState = 'alive' | 'death'

@Component({
  selector: 'gol-cell',
  templateUrl: './gol-cell.component.html',
  styleUrls: ['./gol-cell.component.scss']
})
export class GolCellComponent implements OnInit {
  @Input() state: CellState = 'death'
  @Input() cell!: Cell;

  constructor(private readonly cellService: CellService) { }

  ngOnInit(): void {
  }

  setCellState() {
    this.cell.isAlive = !this.cell.isAlive;

    console.log(this.cellService.getCellSurvivalRules(this.cell))
  }
}
