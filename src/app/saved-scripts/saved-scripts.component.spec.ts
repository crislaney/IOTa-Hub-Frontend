import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedScriptsComponent } from './saved-scripts.component';

describe('SavedScriptsComponent', () => {
  let component: SavedScriptsComponent;
  let fixture: ComponentFixture<SavedScriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedScriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
