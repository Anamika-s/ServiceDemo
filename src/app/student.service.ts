import { Injectable } from '@angular/core';
import { IStudent } from './IStudent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students : any[];
  path : string ="/assets/data/db.json";
  //pathForNewApi : string ="https://newsapi.org/v2/top-headlines?country=in&apikey=0819eaed65a043a481d5354c8782b578&page=1";
  pathforJSON : string ="http://localhost:3000/Students";

  constructor(private _httpClient : HttpClient) { }
  LoadStudents()  
 {
     return this._httpClient.get<IStudent[]>(this.pathforJSON);
 }
}
