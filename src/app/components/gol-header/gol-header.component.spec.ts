import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolHeaderComponent } from './gol-header.component';

describe('GolHeaderComponent', () => {
  let component: GolHeaderComponent;
  let fixture: ComponentFixture<GolHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolHeaderComponent]
    });
    fixture = TestBed.createComponent(GolHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
