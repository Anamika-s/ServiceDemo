import { Component } from '@angular/core';
import { HelloService } from './hello-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Dependency Injection
  constructor (private _helloService : HelloService)
  {

  }
  name : string ="Deepak";
  CallService()
  {
   console.log(this._helloService.HelloMsg(this.name));
  }
  title = 'ServicesDemo';
}
