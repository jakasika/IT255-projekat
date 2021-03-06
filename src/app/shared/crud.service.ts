import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddStudent(student: Student) {
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }  

  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }  

  // Delete Student Object
  DeleteStudent(id: string) { 
    this.studentRef = this.db.object('students-list/'+id);
    this.studentRef.remove();
  }
}
