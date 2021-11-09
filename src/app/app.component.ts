import { Component , OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HelloService } from './hello-service.service';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  subscrition : Subscription;
  // Dependency Injection
  constructor (private _helloService : HelloService)
  {

  }
  ngOnInit(): void {
     // Syntax for Promise 
    const promise = new Promise(resolve=> 
      {
        console.log("Inside Promise");
        setTimeout(()=>
        {resolve("Promise1 resolved");
        resolve("Promise2 resolved");
        resolve("Promise3 resolved");
  
        }, 1000)
      })
      // Call Promise
        promise.then(res=> console.log(res) );
      // Syntax for Observable 
      const observable = new Observable(resolve=>
        {
           let x=1;
           setInterval(()=>
            {
              resolve.next(x);
              x=x+1;

            }, 1000);
        });
     this.subscrition =   observable.subscribe(data=> console.log(data));
      // const observable = new Observable(resolve =>
      //   { console.log("Inside Observable");
      //     setTimeout(()=>
      //           {
                  
      //             resolve.next("Observable1 working");
      //             resolve.next("Observable2 working");
      //             resolve.next("Observable3 working");
      //             resolve.next("Observable2 working");
      //       },1000)

      //   })
      //    // Applying Operator Observable
      // observable
      //   .pipe(filter (d=>d=="Observable2 working"),
      //       )
      //   .subscribe(data=> console.log(data));
      //     observable.subscribe(data=>console.log(data));
  }
  
  CancelSubscription()
  {
this.subscrition.unsubscribe();
console.log("You have been unsubscribed");
  }

 
 
     
  // name : string ="Deepak";
  // CallService()
  // {
  //  console.log(this._helloService.HelloMsg(this.name));
  // }
  // title = 'ServicesDemo';
}
