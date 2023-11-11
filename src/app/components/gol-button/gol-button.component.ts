import { Component, Input } from '@angular/core';

@Component({
  selector: 'gol-button',
  templateUrl: './gol-button.component.html',
  styleUrls: ['./gol-button.component.scss']
})
export class GolButtonComponent {
  @Input() disabled: boolean = false;
}
