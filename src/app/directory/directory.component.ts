import { Component } from '@angular/core';
import { IStudent } from '../IStudentsdetails';
import { student, students } from '../studentsdetails';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  students: Array<IStudent> = students;
  student: IStudent = {} as IStudent;
}
