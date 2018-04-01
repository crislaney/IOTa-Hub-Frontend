import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientColorPickerComponent } from './gradient-color-picker.component';

describe('GradientColorPickerComponent', () => {
  let component: GradientColorPickerComponent;
  let fixture: ComponentFixture<GradientColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
