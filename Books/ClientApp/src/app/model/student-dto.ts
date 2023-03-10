export class StudentDto{
  studentUid: string;
  name: string;
  code: number;
  classmate: number;
  gender: string;
  dateOfBirth: Date;
  contact: string;
}

export class StudentEditRequest{
  name: string;
  code: number;
  classmate: number;
  gender: string;
  dateOfBirth: Date;
  contact: string;
}