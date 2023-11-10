import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'gol-grid',
  templateUrl: './gol-grid.component.html',
  styleUrls: ['./gol-grid.component.scss']
})
export class GolGridComponent implements OnInit{
  cells: any[] = [];
  private cellsSubscription!: Subscription;

  constructor(
    private readonly gridService: GridService
  ){}

  ngOnInit(): void {
    this.cells = this.gridService.getCells();
    this.cellsSubscription = this.gridService.cellsUpdated.subscribe(updatedCells => {
      this.cells = updatedCells;
    })
  }

}
