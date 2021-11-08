import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../IStudent';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers : [StudentService]
})
export class StudentComponent implements OnInit {

  constructor(private _StudentService : StudentService) { }
   
   private students  = []; 
   get_products(){
   
}

  ngOnInit(): void {
    console.log("Calling Service");
    //this.students = this._StudentService.LoadStudents();
    this._StudentService.LoadStudents().subscribe((res : any[])=>{
      console.log(res);
      this.students  =  res;
      console.log(this.students.length);
      });
    }

}
