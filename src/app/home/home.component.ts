import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FirstGradeComponent } from '../first-grade/first-grade.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FirstGradeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
