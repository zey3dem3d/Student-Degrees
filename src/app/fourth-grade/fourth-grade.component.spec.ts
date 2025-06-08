import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthGradeComponent } from './fourth-grade.component';

describe('FourthGradeComponent', () => {
  let component: FourthGradeComponent;
  let fixture: ComponentFixture<FourthGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
