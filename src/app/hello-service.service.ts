import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

   HelloMsg(name : string) : string{
     return "Hello " + name + " from Service";
   }
  constructor() { }
}
