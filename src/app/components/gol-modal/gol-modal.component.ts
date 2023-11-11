import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'gol-modal',
  templateUrl: './gol-modal.component.html',
  styleUrls: ['./gol-modal.component.scss']
})
export class GolModalComponent {
  // newRows: number = 12;
  // newIterations: number = 100;
  // newDelay: number = 200;
  protected isOpen: boolean = false

  constructor(
    // readonly settingsService: SettingsService,
  ) { }

  ngOnInit(): void {
    // this.newRows = this.settingsService.getRows();
    // this.newIterations = this.settingsService.getIterations();
    // this.newDelay = this.settingsService.getDelay();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  // protected saveSettingsChange() {
  //   this.settingsService.setRows(this.newRows);
  //   this.settingsService.setIterations(this.newIterations);
  //   this.settingsService.setDelay(this.newDelay);
  //   this.close();
  // }

  // isBaseSetting(): boolean {
  //   return this.newRows === 12 && this.newIterations === 100 && this.newDelay === 200;
  // }

  // resetSettingsChange() {
  //   this.newRows = 12;
  //   this.newIterations = 100;
  //   this.newDelay = 200;
  // }
}
