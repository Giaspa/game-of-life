import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell.model';
import { SettingsService } from 'src/app/services/settings.service';

export type CellState = 'alive' | 'death'

@Component({
  selector: 'gol-cell',
  templateUrl: './gol-cell.component.html',
  styleUrls: ['./gol-cell.component.scss']
})
export class GolCellComponent implements OnInit {
  @Input() state: CellState = 'death'
  @Input() cell!: Cell;

  constructor(
    private readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
  }

  setCellState() {
    if (!this.isGameRunning()) {
      this.cell.isAlive = !this.cell.isAlive;
    }
  }

  isGameRunning(): boolean {
    return this.settingsService.getIsGameRunning();
  }
}
