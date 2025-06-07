import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGradeComponent } from './first-grade/first-grade.component';
import { ThirdGradeComponent } from './third-grade/third-grade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'الرئيسية' },
  {
    path: 'firstGrade',
    component: FirstGradeComponent,
    title: 'نتيجة الصف الأول الابتدائي',
  },
  {
    path: 'thirdGrade',
    component: ThirdGradeComponent,
    title: 'نتيجة الصف الثالث الابتدائي',
  },
];
