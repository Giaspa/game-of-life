import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolCellComponent } from './gol-cell.component';

describe('GolCellComponent', () => {
  let component: GolCellComponent;
  let fixture: ComponentFixture<GolCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolCellComponent]
    });
    fixture = TestBed.createComponent(GolCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
