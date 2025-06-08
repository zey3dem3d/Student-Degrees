import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGradeComponent } from './second-grade.component';

describe('SecondGradeComponent', () => {
  let component: SecondGradeComponent;
  let fixture: ComponentFixture<SecondGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
