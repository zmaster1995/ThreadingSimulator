import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionSettingsComponent } from './execution-settings.component';

describe('ExecutionSettingsComponent', () => {
  let component: ExecutionSettingsComponent;
  let fixture: ComponentFixture<ExecutionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
