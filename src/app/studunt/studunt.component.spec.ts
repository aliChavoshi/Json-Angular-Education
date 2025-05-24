import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuduntComponent } from './studunt.component';

describe('StuduntComponent', () => {
  let component: StuduntComponent;
  let fixture: ComponentFixture<StuduntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuduntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuduntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
