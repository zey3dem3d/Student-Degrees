import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGradeComponent } from './first-grade.component';

describe('FirstGradeComponent', () => {
  let component: FirstGradeComponent;
  let fixture: ComponentFixture<FirstGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
