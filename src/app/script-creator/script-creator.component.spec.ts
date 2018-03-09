import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCreatorComponent } from './script-creator.component';

describe('ScriptCreatorComponent', () => {
  let component: ScriptCreatorComponent;
  let fixture: ComponentFixture<ScriptCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
