import { Injectable } from '@angular/core';
import { IStudent } from './IStudent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 students : IStudent[];
 path : string ="http://localhost:3000/Students";
 LoadStudents ()
 {
   console.log("Inside service");
  //  return this._client.get(this.path);
  return  this._client .get(this.path);

 }
  constructor(private _client : HttpClient) { }
}
