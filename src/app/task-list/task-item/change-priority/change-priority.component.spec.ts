import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePriorityComponent } from './change-priority.component';

describe('ChangePriorityComponent', () => {
  let component: ChangePriorityComponent;
  let fixture: ComponentFixture<ChangePriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePriorityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
