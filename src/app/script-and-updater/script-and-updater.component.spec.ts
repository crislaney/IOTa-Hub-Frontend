import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptAndUpdaterComponent } from './script-and-updater.component';

describe('ScriptAndUpdaterComponent', () => {
  let component: ScriptAndUpdaterComponent;
  let fixture: ComponentFixture<ScriptAndUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptAndUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptAndUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
