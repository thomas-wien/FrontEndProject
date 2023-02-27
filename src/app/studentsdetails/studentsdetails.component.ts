import { Component } from '@angular/core';
import { IStudent } from '../IStudentsdetails';
import { student, students } from '../studentsdetails';

@Component({
  selector: 'app-studentsdetails',
  templateUrl: './studentsdetails.component.html',
  styleUrls: ['./studentsdetails.component.scss']
})
export class StudentsdetailsComponent {
  students: Array<IStudent> = students;
  student: IStudent = {} as IStudent;
}
