import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolButtonComponent } from './gol-button.component';

describe('GolButtonComponent', () => {
  let component: GolButtonComponent;
  let fixture: ComponentFixture<GolButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolButtonComponent]
    });
    fixture = TestBed.createComponent(GolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
