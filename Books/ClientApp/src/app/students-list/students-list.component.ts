import { Component, OnInit } from '@angular/core';
import { StudentDto, StudentEditRequest } from '../model/student-dto';
import { StudentService } from '../services/student.service';
import * as $ from "jquery";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  public students: StudentDto[] = [];

  constructor(private studentService:StudentService) { 
    this.handleRowInserting = this.handleRowInserting.bind(this);
    this.handleRowUpdating = this.handleRowUpdating.bind(this);
    this.handleRowRemoving = this.handleRowRemoving.bind(this);
  }

  ngOnInit() {
    this.loadStudents();
  }

  public loadStudents(){
    this.studentService.getStudentsList().subscribe(response => {
      this.students = response;
    })
  }

  public handleRowInserting(event: any){
    let def = $.Deferred();

    const request = this.getEditStudentRequest(event.data);

    this.studentService.addStudent(request)
      .subscribe(result =>{
        if(result){
          def.resolve(false);
          this.loadStudents();
        }else{
          def.resolve(true);
        }
      }, errors => {
        def.resolve(true);
      });
    event.cancel = def;
  }

  public handleRowUpdating(event: any){

  }

  public handleRowRemoving(event: any){

  }

  private getEditStudentRequest(student: StudentDto): StudentEditRequest{
    let request = new StudentEditRequest();

    request.code = student.code;
    request.name = student.name;
    request.classmate = student.classmate;
    request.gender = student.gender;
    request.dateOfBirth = student.dateOfBirth;
    request.contact = student.contact;

    return request;
  }
}