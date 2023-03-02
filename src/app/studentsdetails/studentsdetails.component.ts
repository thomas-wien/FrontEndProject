import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { IStudent } from '../IStudentsdetails';
import { student, students } from '../studentsdetails';
@Component({
  selector: 'app-studentsdetails',
  templateUrl: './studentsdetails.component.html',
  styleUrls: ['./studentsdetails.component.scss']
})
export class StudentsdetailsComponent implements OnInit {
  dish: IStudent = {} as IStudent
  id: number = 0;

  students: Array<IStudent> = students;
  student: IStudent = {} as IStudent;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['studentID'];
      this.student = students[this.id]
    });
  }


}