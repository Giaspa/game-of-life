import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell.model';
import { SettingsService } from 'src/app/services/settings.service';
import { Utilities } from 'src/app/utilities';

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
    @Inject(DOCUMENT) private document: Document
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

  setStyleCell(){
    const ROWS = this.settingsService.getRows();
    const darkBlue = getComputedStyle(this.document.documentElement).getPropertyValue('--dark-blue').trim();

    return {
      borderRadius: `${Utilities.setGap(ROWS)}px`,
      boxShadow: `inset 0 0 ${1+Utilities.setGap(ROWS)}px ${darkBlue}`,
    }
  }
}
