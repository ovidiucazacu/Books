import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StudentDto, StudentEditRequest } from '../model/student-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentService{

  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient){}

  public getStudentsList(): Observable<StudentDto[]>{
    return this.httpClient.get<StudentDto[]>(this.baseUrl + 'student');
  }

  public addStudent(request: StudentEditRequest): Observable<StudentEditRequest>{
    return this.httpClient.post<StudentEditRequest>(this.baseUrl + 'Add', request);
  }
}