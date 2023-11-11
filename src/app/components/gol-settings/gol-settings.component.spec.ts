import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolSettingsComponent } from './gol-settings.component';

describe('GolSettingsComponent', () => {
  let component: GolSettingsComponent;
  let fixture: ComponentFixture<GolSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolSettingsComponent]
    });
    fixture = TestBed.createComponent(GolSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
