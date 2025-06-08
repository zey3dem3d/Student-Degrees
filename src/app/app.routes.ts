import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGradeComponent } from './first-grade/first-grade.component';
import { ThirdGradeComponent } from './third-grade/third-grade.component';
import { FourthGradeComponent } from './fourth-grade/fourth-grade.component';
import { FifthGradeComponent } from './fifth-grade/fifth-grade.component';
import { SixthGradeComponent } from './sixth-grade/sixth-grade.component';
import { SecondGradeComponent } from './second-grade/second-grade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'الرئيسية' },
  {
    path: 'firstGrade',
    component: FirstGradeComponent,
    title: 'نتيجة الصف الأول الابتدائي',
  },
  {
    path: 'secondGrade',
    component: SecondGradeComponent,
    title: 'نتيجة الصف الثاني الابتدائي',
  },
  {
    path: 'thirdGrade',
    component: ThirdGradeComponent,
    title: 'نتيجة الصف الثالث الابتدائي',
  },
  {
    path: 'fourthGrade',
    component: FourthGradeComponent,
    title: 'نتيجة الصف الرابع الابتدائي',
  },
  {
    path: 'fifthGrade',
    component: FifthGradeComponent,
    title: 'نتيجة الصف الخامس الابتدائي',
  },
  {
    path: 'sixthGrade',
    component: SixthGradeComponent,
    title: 'نتيجة الصف السادس الابتدائي',
  },
];
