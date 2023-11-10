import { Component, Input } from '@angular/core';

export type CellState = 'alive' | 'death'

@Component({
  selector: 'gol-cell',
  templateUrl: './gol-cell.component.html',
  styleUrls: ['./gol-cell.component.scss']
})
export class GolCellComponent {
  @Input() state: CellState = 'death'
}
