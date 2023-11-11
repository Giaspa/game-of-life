import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolModalComponent } from './gol-modal.component';

describe('GolModalComponent', () => {
  let component: GolModalComponent;
  let fixture: ComponentFixture<GolModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolModalComponent]
    });
    fixture = TestBed.createComponent(GolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
