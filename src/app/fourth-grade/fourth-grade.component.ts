import { Component } from '@angular/core';

interface Student {
  name: string;
  seatnumber: number;
  arabic: string;
  math: string;
  studies: string;
  sciences: string;
  english: string;
  ict: string;
  multidisciplinary: string;
  professionalSkills: string;
  total: string;
  religion: string;
  art: string;
  physicalEducation: string;
  musicEducation: string;
  valuesAndRespectForOthers: string;
  tokkatsu: string;
  result: string;
}

@Component({
  selector: 'app-fourth-grade',
  imports: [],
  templateUrl: './fourth-grade.component.html',
  styleUrl: './fourth-grade.component.css',
})
export class FourthGradeComponent {
  sheet3Students: Student[] = [
    {
      name: '',
      seatnumber: 10,
      arabic: '',
      math: '',
      studies: '',
      sciences: '',
      english: '',
      ict: '',
      multidisciplinary: '',
      professionalSkills: '',
      total: '',
      religion: '',
      art: '',
      physicalEducation: '',
      musicEducation: '',
      valuesAndRespectForOthers: '',
      tokkatsu: '',
      result: '',
    },
  ];
}
