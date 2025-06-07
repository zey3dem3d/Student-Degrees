import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGradeComponent } from './third-grade.component';

describe('ThirdGradeComponent', () => {
  let component: ThirdGradeComponent;
  let fixture: ComponentFixture<ThirdGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
