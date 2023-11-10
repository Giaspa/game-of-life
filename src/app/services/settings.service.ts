import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private rowsPerColumns: number = 144;
  private iterations: number = 100;
  private delay: number = 200;

  constructor() { }

  setRowsPerColumns(rows: number){
    this.rowsPerColumns = rows;
  }

  getRowsPerColumns(): number {
    return this.rowsPerColumns
  }

  setIterations(iterations: number){
    this.iterations = iterations;
  }

  getIterations(): number {
    return this.iterations
  }

  setDelay(delay: number){
    this.delay = delay;
  }

  getDelay(): number {
    return this.delay
  }

}
