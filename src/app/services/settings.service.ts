import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private rows: number = 12;
  rowsUpdated = new EventEmitter<number>();
  private iterations: number = 100;
  private delay: number = 200;
  private isGameRunning: boolean = false;

  constructor() { }

  setRows(rows: number){
    this.rows = rows;
    this.rowsUpdated.emit(rows);
  }

  getRows(): number {
    return this.rows
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

  setIsGameRunning(isGameRunning: boolean){
    this.isGameRunning = isGameRunning;
  }

  getIsGameRunning(): boolean {
    return this.isGameRunning
  }

}
