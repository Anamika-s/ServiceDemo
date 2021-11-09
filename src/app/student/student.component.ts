import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'] 
  
})
export class StudentComponent implements OnInit {

  constructor(private _StudentService : StudentService) { }
   
     students  : IStudent[];
   
 GetStudents ()
 {
  console.log("Calling Service");
  this._StudentService.LoadStudents().subscribe(data=>
    { console.log(data);
      this.students = data;
      console.log(this.students.length);
    });
 }
  ngOnInit(): void {
   
     
    }

}
