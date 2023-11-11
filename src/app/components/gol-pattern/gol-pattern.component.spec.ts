import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolPatternComponent } from './gol-pattern.component';

describe('GolPatternComponent', () => {
  let component: GolPatternComponent;
  let fixture: ComponentFixture<GolPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolPatternComponent]
    });
    fixture = TestBed.createComponent(GolPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
