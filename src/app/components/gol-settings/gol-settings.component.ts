import { Component, ViewChild } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { GolModalComponent } from '../gol-modal/gol-modal.component';

@Component({
  selector: 'gol-settings',
  templateUrl: './gol-settings.component.html',
  styleUrls: ['./gol-settings.component.scss']
})
export class GolSettingsComponent {
  @ViewChild(GolModalComponent) modal!: GolModalComponent;
  newRows: number = 12;
  newIterations: number = 100;
  newDelay: number = 200;

  constructor(
    readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    this.newRows = this.settingsService.getRows();
    this.newIterations = this.settingsService.getIterations();
    this.newDelay = this.settingsService.getDelay();
  }

  protected saveSettingsChange() {
    this.settingsService.setRows(this.newRows);
    this.settingsService.setIterations(this.newIterations);
    this.settingsService.setDelay(this.newDelay);
    this.modal.close();
  }

  isBaseSetting(): boolean {
    return this.newRows === 12 && this.newIterations === 100 && this.newDelay === 200;
  }

  resetSettingsChange() {
    this.newRows = 12;
    this.newIterations = 100;
    this.newDelay = 200;
  }
}
